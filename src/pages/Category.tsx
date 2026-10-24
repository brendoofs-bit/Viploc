import { useParams, Link } from 'react-router-dom';
import { CalendarDays, MapPin, Receipt, Truck, MessageCircle } from 'lucide-react';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { categoryContent } from '@/data/categoryContent';
import { blogPosts } from '@/data/blogPosts';
import { locations } from '@/data/locations';
import { Button } from '@/components/ui/Button';
import { Seo } from '@/components/seo/Seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProductCard } from '@/components/catalog/ProductCard';
import { RichText } from '@/components/content/RichText';
import { categoryServiceSchema, faqSchema } from '@/utils/schema';
import NotFound from '@/pages/NotFound';

// Fatos do serviço, iguais para todas as categorias.
const SERVICE_FACTS = [
  { icon: CalendarDays, title: 'A partir de 1 diária', text: 'Também por semana ou por mês.' },
  { icon: Truck, title: 'Entrega no mesmo dia', text: 'Quando há equipamento disponível.' },
  { icon: Receipt, title: 'Valor final no orçamento', text: 'Entrega e retirada já incluídas.' },
  { icon: MapPin, title: 'Toda a cidade do Rio', text: 'Zona Sul, Norte, Oeste e Centro.' },
];

const AREA_EXAMPLES: Record<string, string> = {
  'zona-sul': 'Copacabana, Ipanema, Leblon, Botafogo, Flamengo...',
  'zona-oeste': 'Barra da Tijuca, Recreio, Jacarepaguá...',
  'zona-norte': 'Tijuca, Méier, Maracanã, Vila Isabel, Penha...',
  'centro': 'Centro, Lapa, Santa Teresa, Zona Portuária...',
};

export default function Category() {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = categories.find(c => c.slug === categorySlug);

  if (!category) {
    return <NotFound />;
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id);
  const categoryName = category.name.toLowerCase();
  const content = categoryContent[category.id];
  const relatedCategories = category.related.map(id => categories.find(c => c.id === id)!).filter(Boolean);
  const relatedPosts = (content?.relatedPostSlugs ?? []).map(slug => blogPosts.find(p => p.slug === slug)!).filter(Boolean);
  const wppMessage = `Olá! Quero um orçamento de aluguel de ${category.keyword}. Pode me passar disponibilidade e valores para o meu bairro no Rio?`;

  const faqs = content?.faqs ?? [
    { question: `Como funciona a entrega de ${categoryName}?`, answer: 'Entregamos e retiramos no endereço que você indicar, em toda a cidade do Rio de Janeiro. O orçamento já vem com o valor final, com entrega e retirada incluídas, e o valor varia conforme o bairro.' },
    { question: 'Qual o período mínimo de locação?', answer: 'A partir de 1 diária. Também alugamos por semana ou por mês.' },
    { question: `Os equipamentos de ${categoryName} são higienizados?`, answer: 'Sim! Todos os nossos equipamentos passam por um rigoroso processo de higienização e manutenção preventiva antes de cada locação.' },
    { question: 'E se apresentar algum defeito?', answer: 'Temos equipe técnica de prontidão. Em caso de problemas não resolvidos rapidamente no local, realizamos a substituição do equipamento sem custo extra.' },
  ];

  return (
    <>
      <Seo
        title={`Aluguel de ${category.singularName} no RJ | Locação com Entrega | Viploc`}
        description={`Aluguel de ${category.keyword} no Rio de Janeiro a partir de 1 diária, com entrega no mesmo dia quando há disponibilidade. Equipamentos higienizados. Orçamento no WhatsApp.`}
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} categorySlug={category.slug} />
              ))}
            </div>
          ) : (
             <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Atualizando catálogo...</h2>
                <p className="text-gray-500 mb-6">Estamos adicionando novas opções de {categoryName} ao nosso site. Consulte-nos no WhatsApp para opções disponíveis.</p>
                <Button variant="primary" isWhatsApp={true} whatsappMessage={`Olá, gostaria de saber opções de locação de ${category.name}.`}>
                   Chamar no WhatsApp
                </Button>
             </div>
          )}
        </div>
      </section>

      {/* Como funciona a locação */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {content && (
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Como funciona</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">{content.introTitle}</h2>
              <div className="space-y-4">
                {content.intro.map((paragraph, idx) => <RichText key={idx}>{paragraph}</RichText>)}
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_FACTS.map(fact => (
              <div key={fact.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <fact.icon className="w-7 h-7 text-[#E10600] mb-3" />
                <p className="font-bold text-gray-900">{fact.title}</p>
                <p className="text-sm text-gray-500">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guia de escolha */}
      {content && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Guia de escolha</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-10">{content.guideTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.guide.map(item => (
                <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">{item.title}</h3>
                  <RichText className="text-gray-600 leading-relaxed">{item.text}</RichText>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tabela de referência */}
      {content?.table && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">{content.table.title}</h2>
            {content.table.intro && <p className="text-lg text-gray-600 leading-relaxed mb-8">{content.table.intro}</p>}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto mt-6">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-gray-100/80 border-b border-gray-200">
                    {content.table.headers.map(header => (
                      <th key={header} scope="col" className="p-4 md:p-5 text-gray-900 font-bold text-sm md:text-base">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {content.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className={`p-4 md:p-5 text-sm md:text-base ${cellIdx === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                          <RichText inline>{cell}</RichText>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {content.table.note && <p className="text-sm text-gray-500 mt-4">{content.table.note}</p>}
          </div>
        </section>
      )}

      {/* Usos comuns */}
      {content && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Para que serve</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-10">{content.useCasesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.useCases.map(useCase => (
                <div key={useCase.title} className="border-l-4 border-[#E10600] pl-5">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button
                variant="whatsapp"
                isWhatsApp={true}
                whatsappMessage={wppMessage}
                className="shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20b958] transition-all duration-200"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Pedir orçamento no WhatsApp
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* FAQ & Areas Atendidas */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Dúvidas sobre aluguel de {category.keyword}</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <RichText className="text-gray-600">{faq.answer}</RichText>
                </div>
              ))}
            </div>
          </div>

          {/* Áreas Atendidas */}
          <div>
            <div className="bg-[#E10600]/5 rounded-3xl p-8 lg:p-12 border border-[#E10600]/10 h-full">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Áreas atendidas no Rio de Janeiro</h2>
              <p className="text-gray-700 mb-8 text-lg">Entregamos e retiramos em toda a cidade do Rio de Janeiro. Veja as regiões:</p>

              <div className="grid grid-cols-2 gap-4">
                {locations.map(location => (
                  <Link key={location.slug} to={`/rio-de-janeiro/${location.slug}`} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group">
                    <span className="font-bold text-gray-900 text-lg mb-1 group-hover:text-[#E10600] transition-colors">{location.shortName}</span>
                    <span className="text-sm text-gray-500 leading-relaxed">{AREA_EXAMPLES[location.slug]}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-gray-100 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-sm font-medium">Entrega no mesmo dia quando há equipamento disponível, ou agendada para a data do seu evento.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Veja também */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Veja também</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">Outros equipamentos para alugar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedCategories.map(related => (
              <Link key={related.id} to={`/locacao/${related.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img src={related.image} alt={`Aluguel de ${related.keyword} no Rio de Janeiro`} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={450} />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#E10600] transition-colors">Aluguel de {related.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{related.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-6">Dicas para a sua locação</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow p-6 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E10600] transition-colors">{post.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 flex-grow">{post.description}</p>
                    <span className="text-sm font-semibold text-[#E10600]">Ler o artigo &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
