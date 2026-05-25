import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://viploc.com.br';

const categories = ['geladeiras', 'freezers', 'cervejeiras', 'expositores-de-bebidas', 'frigobar', 'micro-ondas', 'tv'];
const products = [
  'tv/tv-4k-android',
  'geladeiras/geladeira-375l-brastemp',
  'cervejeiras/cervejeira-gelopar-410l',
  'freezers/freezer-horizontal-consul-534l',
  'micro-ondas/micro-ondas-electrolux-34l'
];
const locations = ['zona-sul', 'zona-norte', 'zona-oeste', 'centro'];
const blogPosts = [
  'como-escolher-freezer-horizontal-eventos-rj',
  'geladeira-festa-quanto-tempo-antes-reservar',
  'cervejeira-bar-eventos-vantagens',
  'locacao-geladeira-emergencia',
  'expositor-de-bebidas-ideal',
  'checklist-refrigeracao-eventos-rio',
  'como-economizar-com-locacao-custo-beneficio',
  'diferenca-freezer-vertical-horizontal',
  'dicas-instalacao-eletrica-segura',
  'faq-completo-prazos-entrega-rj'
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/sobre</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contato</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/rio-de-janeiro</loc>
    <priority>0.9</priority>
  </url>
`;

categories.forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/locacao/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
});

products.forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/locacao/${slug}</loc>
    <priority>0.8</priority>
  </url>\n`;
});

locations.forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/rio-de-janeiro/${slug}</loc>
    <priority>0.8</priority>
  </url>\n`;
});

blogPosts.forEach(slug => {
  xml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <priority>0.7</priority>
  </url>\n`;
});

xml += `</urlset>`;

const distPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}
fs.writeFileSync(path.join(distPath, 'sitemap.xml'), xml);
console.log('sitemap.xml generated in dist folder');
