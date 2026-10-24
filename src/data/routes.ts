import { categories } from './categories';
import { products } from './products';
import { locations } from './locations';
import { blogPosts } from './blogPosts';

export type SiteRoute = {
  path: string;
  // Rotas noindex são pré-renderizadas, mas ficam fora do sitemap.
  indexable: boolean;
  priority: number;
  changefreq?: 'daily' | 'weekly' | 'monthly';
  lastmod?: string;
};

export const categoryPath = (categorySlug: string) => `/locacao/${categorySlug}`;
export const productPath = (categorySlug: string, productSlug: string) => `/locacao/${categorySlug}/${productSlug}`;

export function getProductUrlPath(product: { slug: string; categoryId: string }) {
  const category = categories.find(c => c.id === product.categoryId);
  return category ? productPath(category.slug, product.slug) : null;
}

// Fonte única das URLs do site: usada pelo pré-render e pelo sitemap.xml.
export function getSiteRoutes(): SiteRoute[] {
  const routes: SiteRoute[] = [
    { path: '/', indexable: true, priority: 1.0, changefreq: 'weekly' },
    { path: '/locacao', indexable: true, priority: 0.9, changefreq: 'weekly' },
    { path: '/rio-de-janeiro', indexable: true, priority: 0.8 },
    { path: '/sobre', indexable: true, priority: 0.5 },
    { path: '/contato', indexable: true, priority: 0.5 },
    { path: '/blog', indexable: true, priority: 0.6, changefreq: 'weekly' },
    { path: '/politica-de-privacidade', indexable: false, priority: 0.1 },
    { path: '/termos-de-uso', indexable: false, priority: 0.1 },
    { path: '/lp/freezers', indexable: false, priority: 0.1 },
  ];

  categories.forEach(category => {
    routes.push({ path: categoryPath(category.slug), indexable: true, priority: 0.9, changefreq: 'weekly' });
  });

  products.forEach(product => {
    const path = getProductUrlPath(product);
    if (path) routes.push({ path, indexable: true, priority: 0.8 });
  });

  locations.forEach(location => {
    routes.push({ path: `/rio-de-janeiro/${location.slug}`, indexable: true, priority: 0.7 });
  });

  blogPosts.forEach(post => {
    routes.push({ path: `/blog/${post.slug}`, indexable: true, priority: 0.6, lastmod: post.date });
  });

  return routes;
}
