import { Helmet } from 'react-helmet-async';
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from '@/data/site';

type SeoProps = {
  title: string;
  description?: string;
  // Caminho canônico (ex.: "/locacao/geladeiras"). Omitido em páginas sem canonical, como a 404.
  path?: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
};

// Única fonte de <title>, description, canonical, robots e Open Graph de cada página.
// Use apenas um <Seo> por página: no React 19 o Helmet não deduplica tags.
export function Seo({ title, description, path, image = DEFAULT_OG_IMAGE, noindex = false, type = 'website' }: SeoProps) {
  const url = path ? absoluteUrl(path) : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
