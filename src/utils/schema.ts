import { absoluteUrl, AREA_SERVED, DEFAULT_OG_IMAGE, GOOGLE_BUSINESS_URL, LOGO_URL, PHONE_E164, SAME_AS, SITE_NAME, SITE_URL } from '@/data/site';
import { categoryPath, getProductUrlPath } from '@/data/routes';
import type { Category } from '@/data/categories';
import type { Product } from '@/data/products';

// Builders de dados estruturados schema.org. A Viploc aluga equipamentos (não vende),
// por isso categorias e produtos são descritos como "Service" ligados ao LocalBusiness,
// evitando o tipo Product sem preço, que o Search Console marca como item inválido.

export const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const areaServed = AREA_SERVED.map(name => ({ '@type': 'Place', name }));

export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': BUSINESS_ID,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: LOGO_URL,
        image: DEFAULT_OG_IMAGE,
        telephone: PHONE_E164,
        description: 'Aluguel e locação de geladeiras, freezers, cervejeiras, expositores de bebidas, frigobares, micro-ondas e TVs no Rio de Janeiro, com entrega e retirada.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Rio de Janeiro',
          addressRegion: 'RJ',
          addressCountry: 'BR',
        },
        areaServed,
        hasMap: GOOGLE_BUSINESS_URL,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_E164,
          contactType: 'customer service',
          areaServed: 'BR',
          availableLanguage: 'Portuguese',
        },
        ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: 'pt-BR',
        publisher: { '@id': BUSINESS_ID },
      },
    ],
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

// Remove a marcação Markdown (links e negrito) usada nos textos visíveis.
const plainText = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: plainText(faq.answer) },
    })),
  };
}

export function categoryServiceSchema(category: Category, categoryProducts: Product[]) {
  const url = absoluteUrl(categoryPath(category.slug));
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Aluguel de ${category.singularName} no Rio de Janeiro`,
    serviceType: `Aluguel de ${category.keyword}`,
    alternateName: `Locação de ${category.keyword}`,
    description: category.description,
    url,
    image: category.image,
    provider: { '@id': BUSINESS_ID },
    areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: category.name,
      itemListElement: categoryProducts.map(product => {
        const productPath = getProductUrlPath(product);
        return {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Aluguel de ${product.name}`,
            ...(productPath && { url: absoluteUrl(productPath) }),
          },
        };
      }),
    },
  };
}

export function productServiceSchema(product: Product, category: Category, images: string[]) {
  const url = absoluteUrl(`${categoryPath(category.slug)}/${product.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `Aluguel de ${product.name}`,
    serviceType: `Aluguel de ${category.keyword}`,
    alternateName: `Locação de ${product.name}`,
    description: product.shortDescription,
    url,
    image: images,
    category: category.name,
    provider: { '@id': BUSINESS_ID },
    areaServed,
    isRelatedTo: { '@id': `${absoluteUrl(categoryPath(category.slug))}#service` },
  };
}
