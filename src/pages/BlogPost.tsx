import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Calendar, ChevronRight } from 'lucide-react';

export default function BlogPost() {
  const { postSlug } = useParams<{ postSlug: string }>();
  
  const post = blogPosts.find(p => p.slug === postSlug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://viploc.com.br/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.description,
    "image": "https://viploc.com.br/images/og-default.jpg",  
    "author": {
      "@type": "Organization",
      "name": "Equipe Viploc"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Viploc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dt8fp7f6t/image/upload/v1782222274/logo_vip_heunt5-Photoroom_iksrzq.png"
      }
    },
    "datePublished": post.date,
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog Viploc</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://viploc.com.br/blog/${post.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Helmet>

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
           <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> Publicado em {new Date(post.date).toLocaleDateString('pt-BR')}</span>
              <span>Por Equipe Viploc</span>
           </div>
        </header>

        {/* Hero Imagem */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
           {/* DIMENSION Hero blog post: 1600x900 */}
           <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
              <img 
                 src="https://images.unsplash.com/photo-1498837167922-c779afa0fc11?w=1600&auto=format&fit=crop" 
                 alt={post.title}
                 className="w-full h-full object-cover"
                 width={1600}
                 height={685}
              />
           </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
           <div className="prose prose-lg prose-red max-w-none text-gray-700">
              <Markdown>{post.content}</Markdown>
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
