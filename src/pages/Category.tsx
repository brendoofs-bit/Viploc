import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function Category() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = categories.find(c => c.slug === categorySlug);
  
  if (!category) {
    return <Navigate to="/" replace />;
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id);

  return (
    <>
      <Helmet>
        <title>Aluguel de {category.name} no Rio de Janeiro | Viploc</title>
        <meta name="description" content={`A Viploc é especialista em locação de ${category.name.toLowerCase()} no RJ. Entrega expressa, equipamentos revisados e o melhor custo-benefício. Confira o catálogo.`} />
        <link rel="canonical" href={`https://viploc.com.br/locacao/${category.slug}`} />
      </Helmet>

      {/* Hero Categorias */}
      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">Catálogo Completo</Badge>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            Locação de <span className="text-[#E10600]">{category.name}</span> no Rio de Janeiro
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {category.description} Equipamentos higienizados, testados e com suporte ágil para o seu evento ou ponto de venda.
          </p>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="py-16 bg-white min-h-[50vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((prod) => (
                <Link key={prod.id} to={`/locacao/${category.slug}/${prod.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all flex flex-col">
                  {/* DIMENSION: Card produto (thumb): 800x600 */}
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center p-4">
                    <img 
                       src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop" 
                       alt={prod.name} 
                       className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 rounded" 
                       loading="lazy" 
                       width={800} 
                       height={600} 
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/90 backdrop-blur text-gray-800 border border-gray-200">Pronta Entrega</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E10600] transition-colors">{prod.name}</h2>
                    <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">{prod.shortDescription}</p>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full">
                        Ver Detalhes do Equipamento
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
             <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Atualizando catálogo...</h3>
                <p className="text-gray-500 mb-6">Estamos adicionando novas opções de {category.name.toLowerCase()} ao nosso site. Consulte-nos no WhatsApp para opções disponíveis.</p>
                <Button variant="primary" isWhatsApp={true} whatsappMessage={`Olá, gostaria de saber opções de locação de ${category.name}.`}>
                   Chamar no WhatsApp
                </Button>
             </div>
          )}
        </div>
      </section>

      {/* SEO Blocks */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que alugar {category.name.toLowerCase()} com a Viploc?</h3>
               <ul className="space-y-4">
                  <li className="flex items-start">
                     <span className="text-[#E10600] mr-2 mt-1">✔</span>
                     <p className="text-gray-700"><strong>Atendemos todo o Rio de Janeiro:</strong> Logística rápida para a região Metropolitana do RJ.</p>
                  </li>
                  <li className="flex items-start">
                     <span className="text-[#E10600] mr-2 mt-1">✔</span>
                     <p className="text-gray-700"><strong>Custo-benefício incomparável:</strong> Por que comprar se você pode alugar para a temporada do seu negócio ou evento?</p>
                  </li>
                  <li className="flex items-start">
                     <span className="text-[#E10600] mr-2 mt-1">✔</span>
                     <p className="text-gray-700"><strong>Entrega rápida:</strong> Atendimento desburocratizado e exclusivo via WhatsApp.</p>
                  </li>
               </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
               <h3 className="text-xl font-bold mb-4">Ficou com dúvida sobre capacidades?</h3>
               <p className="text-gray-600 mb-6">Nossos especialistas estão prontos para te ajudar a escolher o equipamento exato para o tamanho do seu projeto.</p>
               <Button variant="primary" isWhatsApp={true} whatsappMessage={`Olá, preciso de ajuda para dimensionar e agendar o aluguel de ${category.name.toLowerCase()}.`}>
                 Falar com Especialista
               </Button>
            </div>
         </div>
      </section>
    </>
  );
}
