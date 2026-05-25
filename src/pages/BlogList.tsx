import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Clock } from 'lucide-react';

export default function BlogList() {
  return (
    <>
      <Helmet>
        <title>Blog | Dicas de Locação e Eventos no RJ | Viploc</title>
        <meta name="description" content="Tudo o que você precisa saber sobre locação de equipamentos de refrigeração no RJ, organização de festas e economia garantida." />
        <link rel="canonical" href="https://viploc.com.br/blog" />
      </Helmet>

      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">Dicas da Equipe</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            Blog <span className="text-[#E10600]">Viploc</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Guias, dicas operacionais e conteúdo útil para quem vai organizar eventos ou necessita de estrutura temporária no Rio de Janeiro.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
               <Link 
                  key={post.slug} 
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all flex flex-col"
               >
                  {/* DIMENSION Hero blog thumb: 1600x900 */}
                  <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden flex items-center justify-center p-4">
                     <img 
                        src="https://images.unsplash.com/photo-1498837167922-c779afa0fc11?w=800&auto=format&fit=crop" 
                        alt={post.title} 
                        className="object-cover w-full h-full mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 rounded" 
                        loading="lazy" 
                        width={800} 
                        height={450} 
                     />
                     <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 backdrop-blur text-gray-800 border border-gray-200">{post.category}</Badge>
                     </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                     <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> 3 min leitura</span>
                     </div>
                     <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E10600] transition-colors">{post.title}</h2>
                     <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">{post.description}</p>
                     <span className="text-[#E10600] font-semibold text-sm">Ler artigo completo &rarr;</span>
                  </div>
               </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
