import { useParams, Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Seo } from '@/components/seo/Seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { categoryServiceSchema, faqSchema } from '@/utils/schema';
import NotFound from '@/pages/NotFound';

export default function Category() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = categories.find(c => c.slug === categorySlug);
  
  if (!category) {
    return <NotFound />;
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id);
  const categoryName = category.name.toLowerCase();

  const faqs = [
    { question: `Como funciona a entrega de ${categoryName}?`, answer: 'Nós entregamos e retiramos no local que você precisar. A montagem/instalação básica também está inclusa no serviço e deixamos tudo funcionando.' },
    { question: 'Qual o período mínimo de locação?', answer: 'Oferecemos flexibilidade total: você pode alugar por diárias para eventos rápidos, quinzenal ou contratos mensais.' },
    { question: `Os equipamentos de ${categoryName} são higienizados?`, answer: 'Sim! Todos os nossos equipamentos passam por um rigoroso processo de higienização e manutenção preventiva antes de cada locação.' },
    { question: 'E se apresentar algum defeito?', answer: 'Temos equipe técnica de prontidão. Em caso de problemas não resolvidos rapidamente no local, realizamos a substituição do equipamento sem custo extra.' },
  ];

  return (
    <>
      <Seo
        title={`Aluguel de ${category.singularName} no RJ | Locação com Entrega | Viploc`}
        description={`Aluguel de ${category.keyword} no Rio de Janeiro com entrega e retirada. Locação por diária, semana ou mês, com equipamentos higienizados. Orçamento no WhatsApp.`}
        path={`/locacao/${category.slug}`}
        image={category.image}
      />
      <JsonLd data={categoryServiceSchema(category, categoryProducts)} />
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[
        { name: 'Home', path: '/' },
        { name: 'Locação', path: '/locacao' },
        { name: category.name, path: `/locacao/${category.slug}` },
      ]} />

      {/* Hero Categorias */}
      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Locação de {categoryName}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Aluguel de <span className="text-[#E10600]">{category.singularName}</span> no Rio de Janeiro
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
                  {/* DIMENSION: Card produto (thumb): 800x600 (Recomendado para preencher todo o bloco) */}
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center">
                    <img 
                       src={prod.image || "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop"} 
                       alt={`Aluguel de ${prod.name}`} 
                       className={`object-contain w-full h-full mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500 ${!prod.image && "grayscale"}`} 
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

      {/* FAQ & Areas Atendidas */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Dúvidas sobre {category.name}</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Áreas Atendidas */}
          <div>
            <div className="bg-[#E10600]/5 rounded-3xl p-8 lg:p-12 border border-[#E10600]/10 h-full">
              <h2 className="text-3xl font-extrabold text-[#E10600] mb-4">Áreas Atendidas no Rio de Janeiro</h2>
              <p className="text-gray-700 mb-8 text-lg">Entregamos com rapidez e agilidade em diversas regiões. Confira as principais áreas que cobrimos:</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Zona Sul', desc: 'Copacabana, Ipanema, Leblon, Botafogo, Flamengo...' },
                  { name: 'Zona Oeste', desc: 'Barra da Tijuca, Recreio, Jacarepaguá...' },
                  { name: 'Zona Norte', desc: 'Tijuca, Méier, Maracanã, Vila Isabel, Penha...' },
                  { name: 'Centro', desc: 'Centro, Lapa, Santa Teresa, Zona Portuária...' }
                ].map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                    <span className="font-bold text-gray-900 text-lg mb-1">{area.name}</span>
                    <span className="text-sm text-gray-500 leading-relaxed">{area.desc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-gray-100 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm font-medium">Logística otimizada para garantir que seu equipamento chegue na hora certa, independente da região.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
