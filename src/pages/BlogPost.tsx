import { useParams, Link } from 'react-router-dom';
import { Seo } from '@/components/seo/Seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, BUSINESS_ID } from '@/utils/schema';
import { LOGO_URL, SITE_NAME, SITE_URL } from '@/data/site';
import NotFound from '@/pages/NotFound';
import { blogPosts, readingMinutes } from '@/data/blogPosts';
import Markdown from 'react-markdown';
import { articleComponents } from '@/components/content/RichText';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Calendar, ChevronRight } from 'lucide-react';

export default function BlogPost() {
  const { postSlug } = useParams<{ postSlug: string }>();
  
  const post = blogPosts.find(p => p.slug === postSlug);
  
  if (!post) {
    return <NotFound />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.description,
    "image": post.image.src,
    "author": {
      "@type": "Organization",
      "name": "Equipe Viploc"
    },  
    "publisher": {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL
      }
    },
    "datePublished": post.date,
    "dateModified": post.updated ?? post.date,
    "inLanguage": "pt-BR",
  };

  return (
    <>
      <Seo
        title={`${post.title} | Blog Viploc`}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.image.src}
        type="article"
      />
      <JsonLd data={structuredData} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
      ])} />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4 text-sm sticky top-20 z-30">
         <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-gray-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#E10600]">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-[#E10600]">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
         </div>
      </div>

      <article className="py-12 bg-white">
        <header className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center mb-12">
           <Badge className="mb-6">{post.category}</Badge>
           <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              {post.title}
           </h1>
           <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-500 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> Publicado em {new Date(post.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</span>
              {post.updated && <span>Atualizado em {new Date(post.updated).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</span>}
              <span>{readingMinutes(post.content)} min de leitura</span>
              <span>Por Equipe Viploc</span>
           </div>
        </header>

        {/* Hero Imagem */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
           {/* DIMENSION Hero blog post: 1600x900 */}
           <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
              <img 
                 src={post.image.src}
                 alt={post.image.alt}
                 fetchPriority="high"
                 className="w-full h-full object-cover"
                 width={1600}
                 height={685}
              />
           </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
           <div>
              <Markdown components={articleComponents}>{post.content}</Markdown>
           </div>

           {/* Tags */}
           <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                 <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">
                    #{tag}
                 </span>
              ))}
           </div>

           {/* Call to action contextual */}
           <div className="mt-16 bg-red-50 rounded-2xl p-8 text-center border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E10600] opacity-5 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Gostou das dicas e precisa de um equipamento?</h3>
              <p className="text-gray-700 mb-8 max-w-lg mx-auto relative z-10">Nossa equipe está pronta para te atender com o melhor custo-benefício do RJ. Tire suas dúvidas direto pelo WhatsApp.</p>
              <Button variant="primary" isWhatsApp={true} className="relative z-10 mx-auto px-10">
                 Falar via WhatsApp
              </Button>
           </div>
        </div>
      </article>
    </>
  );
}
