// Gera o HTML estático de todas as rotas (SSG) e o sitemap.xml a partir do bundle SSR.
// Executado no `npm run build`, depois de `vite build` (cliente) e `vite build --ssr` (servidor).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const serverDir = path.join(rootDir, 'dist-server');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render, getSiteRoutes, SITE_URL } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);

// O React 19 emite as tags "hoistable" (<title>, <meta>, <link>) no início do HTML renderizado.
// Elas são movidas para o <head>; o restante é o markup do app, hidratado no navegador.
const LEADING_HEAD_TAGS = /^(?:<title>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>)+/;

function renderPage(url) {
  const rendered = render(url);
  const head = rendered.match(LEADING_HEAD_TAGS)?.[0] ?? '';
  const body = rendered.slice(head.length);

  if (!/<title>[^<]+<\/title>/.test(head)) {
    throw new Error(`Rota ${url} renderizou sem <title>.`);
  }

  return template
    .replace('<!--app-head-->', head.replace(/></g, '>\n    <'))
    .replace('<!--app-html-->', body);
}

// "/" -> index.html, "/locacao/geladeiras" -> locacao/geladeiras.html
// (Netlify e Cloudflare Pages servem foo.html em /foo, sem barra final, igual ao canonical).
function outputFile(routePath) {
  return routePath === '/' ? path.join(distDir, 'index.html') : path.join(distDir, `${routePath.slice(1)}.html`);
}

const routes = getSiteRoutes();
const seen = new Set();

for (const route of routes) {
  if (seen.has(route.path)) throw new Error(`Rota duplicada: ${route.path}`);
  seen.add(route.path);

  const file = outputFile(route.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, renderPage(route.path));
}

// Qualquer URL inexistente cai na rota "*" (NotFound, com noindex) e é servida com status 404.
fs.writeFileSync(path.join(distDir, '404.html'), renderPage('/404'));

const sitemapEntries = routes
  .filter(route => route.indexable)
  .map(route => {
    const loc = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      route.lastmod && `    <lastmod>${route.lastmod}</lastmod>`,
      route.changefreq && `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority.toFixed(1)}</priority>`,
      '  </url>',
    ].filter(Boolean).join('\n');
  });

fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`
);

fs.rmSync(serverDir, { recursive: true, force: true });

console.log(`Pré-render concluído: ${routes.length} páginas + 404.html, ${sitemapEntries.length} URLs no sitemap.xml`);
