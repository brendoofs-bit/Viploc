import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Truck, ShieldCheck, Thermometer } from 'lucide-react';
import { CoverageMap } from '@/components/CoverageMap';

// Advanced SEO & Local GEO Data mapping per product. 
// Fully editable list of curated texts that dynamically populates on need.
const PRODUCT_SEO_DATA: Record<string, {
  customH1?: string;
  idealForTitle?: string;
  idealForSubtitle?: string;
  idealForList?: string[];
  applicationsTitle?: string;
  applicationsIntro?: string;
  applicationsList?: string[];
  comparativeTitle?: string;
  comparativeSubtitle?: string;
  comparativeHeaders?: string[];
  comparativeRows?: { situation: string; mainProd: string; compProd: string }[];
  faqs?: { question: string; answer: string }[];
}> = {
  'geladeira-frost-free-brastemp-375l': {
    customH1: "Locação de Geladeira Frost Free Brastemp 375L no Rio de Janeiro",
    idealForTitle: "Ideal para",
    idealForSubtitle: "Esta geladeira é indicada para os seguintes locais e ocasiões:",
    idealForList: [
      "Festas particulares",
      "Eventos corporativos",
      "Casamentos",
      "Food trucks",
      "Restaurantes",
      "Bares",
      "Quiosques",
      "Produções de TV",
      "Feiras",
      "Stands promocionais"
    ],
    applicationsTitle: "Aplicações Reais",
    applicationsIntro: "Onde esta geladeira de 375 litros da Brastemp é frequentemente utilizada?",
    applicationsList: [
      "Eventos no Rio de Janeiro",
      "Casas de temporada",
      "Reformas residenciais na cozinha",
      "Substituição temporária de equipamentos quebrados",
      "Restaurantes, lanchonetes e bares",
      "Produções audiovisuais e cenografia"
    ],
    comparativeTitle: "Comparativo de Soluções",
    comparativeSubtitle: "Geladeira 375L ou um Frigobar?",
    comparativeHeaders: ["Situação", "Geladeira Brastemp 375L", "Frigobar Convencional"],
    comparativeRows: [
      { situation: "Espaço para Eventos", mainProd: "✅ Perfeito", compProd: "❌ Insuficiente" },
      { situation: "Uso em Casa Temporária", mainProd: "✅ Completo", compProd: "⚠️ Apenas quebra-galho" },
      { situation: "Armazenamento de Bebidas", mainProd: "✅ Alta Capacidade", compProd: "✅ Baixa Capacidade" }
    ],
    faqs: [
      { question: "Como funciona a locação de geladeira Brastemp 375L no Rio de Janeiro?", answer: "A locação é simples e totalmente sem complicação. Você escolhe o período necessário (diário, semanal ou mensal), entra em contato com nossa equipe via WhatsApp para fechar os detalhes, e nós cuidamos da entrega, instalação inicial e retirada direto no local informado no RJ." },
      { question: "Qual é a voltagem da Geladeira Brastemp 375L disponível para aluguel?", answer: "Todos os nossos equipamentos estão prontos para uso em 220V, garantindo alta eficiência de refrigeração e estabilidade mesmo em dias quentes de verão no Rio de Janeiro." },
      { question: "A entrega e retirada da geladeira estão inclusas no valor da locação?", answer: "A entrega e retirada são agendadas previamente conforme o contrato. O valor do transporte varia conforme o bairro ou região do RJ e é informado de forma transparente no momento do orçamento de aluguel." },
      { question: "Quais são os prazos de entrega para os bairros do Rio de Janeiro?", answer: "Temos uma logística ágil no RJ. Geralmente, as entregas são feitas em até 24 ou 48 horas úteis, ou na data específica agendada para o seu evento ou reforma." },
      { question: "A geladeira é devidamente limpa e higienizada antes da entrega?", answer: "Sim! Todos os equipamentos da Viploc passam por um rigoroso processo de higienização profissional e testes técnicos de funcionamento antes de serem enviados a qualquer cliente." },
      { question: "Como proceder se a geladeira apresentar alguma falha de funcionamento durante a locação?", answer: "Contamos com um serviço de suporte técnico ágil e humano via WhatsApp. Caso qualquer inconsistência ocorra, nossa equipe realiza o atendimento e, se necessário, efetuamos a substituição rápida do aparelho." },
      { question: "Vocês atendem festas e eventos particulares em residências ou salões?", answer: "Sim, atendemos de pequenos encontros familiares e casamentos até grandes festas corporativas, shows e produções de grande porte na capital e Grande Rio." },
      { question: "Posso alugar a geladeira Brastemp 375L para o período de reforma da minha cozinha?", answer: "Com certeza! Essa é uma das aplicações mais comuns. Oferecemos pacotes mensais flexíveis para garantir que a sua rotina doméstica não pare enquanto sua cozinha é reformada." },
      { question: "Quais as vantagens de alugar uma geladeira de 375 litros em comparação com um frigobar?", answer: "A geladeira de 375L oferece amplo espaço interno, congelador/freezer de verdade e prateleiras ajustáveis, ideal para armazenar alimentos de refeições completas, bolos, pratos congelados e grandes garrafas que não caberiam em um frigobar convencional." },
      { question: "A tecnologia Frost Free faz diferença no aluguel comercial ou residencial temporário?", answer: "Sim! Como é Frost Free, ela não acumula gelo nas paredes internas do congelador. Isso evita o incômodo de precisar desligar e descongelar o aparelho, garantindo operação constante e sem poças de água." },
      { question: "Qual é o período mínimo que posso contratar o aluguel?", answer: "Trabalhamos com flexibilidade de prazos. Alugamos para diárias de eventos, períodos de finais de semana ou pacotes mensais para obras ou uso residencial prolongado." },
      { question: "A geladeira Brastemp 375L passa facilmente em portas e elevadores padrão?", answer: "Sim, com tamanho equilibrado e design duplex compacto, ela passa bem na maioria das portas residenciais, elevadores de prédios no Rio de Janeiro e corredores de acesso." },
      { question: "É necessário deixar algum valor de caução para a locação do equipamento?", answer: "Não exigimos burocracia excessiva ou cauções complexas. A análise é rápida e transparente, focada na comodidade do cliente." },
      { question: "Quais são os cuidados básicos recomendados após ligar o equipamento?", answer: "Recomendamos aguardar cerca de 2 horas após o transporte antes de ligar a geladeira na tomada de 220V, permitindo que os fluidos internos se estabilizem corretamente antes de iniciar o resfriamento máximo." },
      { question: "Vocês emitem nota fiscal e contrato para empresas (Pessoa Jurídica)?", answer: "Sim! Atendemos demandas corporativas fornecendo toda a documentação fiscal e contratual necessária para o faturamento interno das empresas." },
      { question: "A geladeira pode ser transportada pela nossa equipe ou vocês fazem todo o frete?", answer: "Para garantir a perfeita integridade física e mecânica dos sistemas de refrigeração, o transporte é efetuado de forma exclusiva pela expedição própria da Viploc." },
      { question: "O que está incluso na garantia de suporte técnico da locação?", answer: "Qualquer manutenção preventiva, corretiva ou substituição por desgaste natural está totalmente coberta sem custos adicionais ao longo do tempo do seu contrato." },
      { question: "Como faço para solicitar a cotação rápida da geladeira Brastemp 375L?", answer: "Basta clicar em qualquer botão de orçamento por WhatsApp da página e você falará em minutos com um consultor comercial pronto para passar valores sob medida." }
    ]
  }
};

export default function Product() {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string, productSlug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const category = categories.find(c => c.slug === categorySlug);
  const product = products.find(p => p.slug === productSlug);
  
  let images = product?.gallery && product.gallery.length > 0 
    ? product.gallery.filter(img => img !== product.image) 
    : [];

  if (images.length === 0) {
    images = [product?.image || "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&auto=format&fit=crop"];
  }

  const defaultImage = images[0];
  const [mainImage, setMainImage] = useState(defaultImage);

  // Dynamic template fallback generation for non-configured products so everything automatically works
  const seo = (product ? (PRODUCT_SEO_DATA[product.id] || PRODUCT_SEO_DATA[product.slug]) : null) || {
    customH1: product ? `Locação de ${product.name} no Rio de Janeiro` : '',
    idealForTitle: "Ideal para",
    idealForSubtitle: "Este equipamento é excelente para os seguintes usos e ocasiões:",
    idealForList: product ? [
      ...product.recommendedUses,
      "Festas particulares",
      "Eventos corporativos",
      "Casamentos",
      "Food trucks",
      "Quiosques",
      "Feiras de negócios"
    ].slice(0, 8) : [],
    applicationsTitle: "Aplicações Reais",
    applicationsIntro: "Descubra os cenários comuns onde este produto faz total diferença:",
    applicationsList: [
      "Eventos na capital do Rio de Janeiro e Grande Rio",
      "Stands comerciais e congressos empresariais",
      "Substituição temporária de equipamentos parados",
      "Reformas residenciais prolongadas",
      "Festivais de música e produções cênicas",
      "Áreas de buffet e catering"
    ],
    comparativeTitle: "Tabela Comparativa",
    comparativeSubtitle: `${product?.name || 'Equipamento'} ou alternativas comuns?`,
    comparativeHeaders: ["Critério", product?.name || "Nosso Modelo", "Alternativa Padrão"],
    comparativeRows: [
      { situation: "Higienização Garantida", mainProd: "✅ Sim, Profissional", compProd: "⚠️ Parcial" },
      { situation: "Eficiência Térmica (220V)", mainProd: "✅ Sim, Premium", compProd: "⚠️ Média" },
      { situation: "Suporte Imediato RJ", mainProd: "✅ Incluso", compProd: "❌ Não" }
    ],
    faqs: product ? [
      { question: `Como funciona a locação de ${product.name} no Rio de Janeiro?`, answer: `A locação do ${product.name} é totalmente simplificada. Após definir as datas desejadas, entre em contato via WhatsApp e nós entregamos, testamos de forma segura e retiramos o produto em qualquer bairro atendido do Rio de Janeiro.` },
      { question: `O ${product.name} está disponível em qual voltagem?`, answer: `Todos os nossos aparelhos em catálogo, incluindo o ${product.name}, estão disponíveis em 220v para excelente estabilidade de desempenho térmico e eficiência.` },
      { question: `A higienização do ${product.name} é feita antes da entrega?`, answer: `Com certeza absoluta. Cada item passa por higienização profissional rigorosa e revisão funcional completa antes de chegar até você.` },
      { question: `Qual é o prazo mínimo de locação oferecido?`, answer: `Temos flexibilidade sob medida: atendemos locações diárias para eventos rápidos, semanais ou planos mensais recorrentes.` }
    ] : []
  };

  useEffect(() => {
    setMainImage(defaultImage);
  }, [productSlug, defaultImage]);

  if (!category || !product) {
    return <Navigate to="/" replace />;
  }

  const wppMessage = `Olá! Quero alugar ${product.name}. Pode me passar disponibilidade, valores e confirmar as áreas de entrega no RJ?`;

  return (
    <>
      <Helmet>
        <title>{seo.customH1 || `Aluguel de ${product.name} no RJ | Viploc`}</title>
        <meta name="title" content={seo.customH1 || `Aluguel de ${product.name} no RJ | Viploc`} />
        <meta name="description" content={`${product.shortDescription} Melhor custo-benefício para locação de ${category.name.toLowerCase()} no Rio de Janeiro. Faça sua cotação!`} />
        <link rel="canonical" href={`https://viploc.com.br/locacao/${category.slug}/${product.slug}`} />
        <meta property="og:title" content={seo.customH1 || `Aluguel de ${product.name} no RJ | Viploc`} />
        <meta property="og:description" content={`${product.shortDescription} Melhor custo-benefício para locação de ${category.name.toLowerCase()} no Rio de Janeiro. Faça sua cotação!`} />
        <meta property="og:image" content={product.image || "https://viploc.com.br/images/og-default.jpg"} />
        
        {/* Schema markup for Product */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": product.image || "https://viploc.com.br/images/og-default.jpg",
            "description": product.shortDescription,
            "brand": {
              "@type": "Brand",
              "name": product.specs['Marca'] || 'Viploc'
            },
            "offers": {
              "@type": "Offer",
              "url": `https://viploc.com.br/locacao/${category.slug}/${product.slug}`,
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Viploc Locações"
              }
            }
          }) }} />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 text-sm">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-500">
            <Link to="/" className="hover:text-[#E10600]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/locacao" className="hover:text-[#E10600]">Locação</Link>
            <span className="mx-2">/</span>
            <Link to={`/locacao/${category.slug}`} className="hover:text-[#E10600]">{category.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
         </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Imagem Principal */}
            <div className="flex flex-col gap-4 sticky top-28">
               <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex items-center justify-center h-[400px] md:h-[500px] relative overflow-hidden">
                  <img 
                     src={mainImage} 
                     alt={product.name} 
                     className="w-full h-full object-contain mix-blend-darken hover:scale-105 transition-transform duration-500"
                     width={1200}
                     height={900}
                  />
                  {/* Styled beautifully with premium red outline tags instead of raw red backgrounds */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                     <Badge>Disponível RJ</Badge>
                     <Badge>Alto Desempenho</Badge>
                  </div>
               </div>

               {/* Thumbnails */}
               {images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setMainImage(img)}
                        className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl border flex-shrink-0 bg-gray-50 overflow-hidden transition-all ${mainImage === img ? 'border-[#E10600] ring-2 ring-[#E10600]/20 scale-105' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain p-2 mix-blend-darken" />
                      </button>
                    ))}
                  </div>
               )}
            </div>

            {/* Informações do Produto */}
            <div className="flex flex-col">
               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">{seo.customH1}</h1>
               <p className="text-lg text-gray-600 mb-8">{product.shortDescription}</p>
               
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                     <Thermometer className="w-6 h-6 text-[#E10600] mb-2" />
                     <p className="text-sm text-gray-500 mb-1">Aplicação</p>
                     <p className="font-semibold text-gray-900">{product.recommendedUses[0]}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                     <ShieldCheck className="w-6 h-6 text-[#E10600] mb-2" />
                     <p className="text-sm text-gray-500 mb-1">Qualidade</p>
                     <p className="font-semibold text-gray-900 font-sans">100% Testado & Sanitizado</p>
                  </div>
               </div>

               <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-2">Gostou deste equipamento?</h3>
                  <p className="text-gray-300 text-sm mb-6">Fale agora no WhatsApp com um atendimento rápido humano e garanta seu orçamento express.</p>
                  <Button variant="whatsapp" isWhatsApp={true} whatsappMessage={wppMessage} className="w-full text-lg py-4 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20b958] transition-all duration-200">
                     Consultar Preços e Prazos
                  </Button>
                  <p className="text-xs text-center text-gray-400 mt-4">* Atendemos preferencialmente Rio de Janeiro e Grande Rio.</p>
               </div>

               {/* Benefícios */}
               <div className="mb-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Principais Benefícios</h3>
                  <ul className="space-y-3">
                     {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                           <span className="text-[#E10600] mr-3 mt-1 font-bold">✔</span>
                           <span className="text-gray-700">{benefit}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Specs */}
               <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Especificações Técnicas</h3>
                  <div className="border border-gray-200 rounded-xl overflow-hidden text-sm">
                     {Object.entries(product.specs).map(([key, value], idx) => (
                        <div key={key} className={`flex p-4 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 last:border-0`}>
                           <span className="font-semibold text-gray-900 w-1/3">{key}</span>
                           <span className="text-gray-600 w-2/3">{String(value)}</span>
                        </div>
                     ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">* Informações técnicas adicionais podem ser consultadas diretamente pelo nosso suporte.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Ideal Para */}
      {seo.idealForList && seo.idealForList.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">{seo.idealForTitle}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{seo.idealForSubtitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                {seo.idealForList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.01] duration-200">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#E10600] font-bold text-xs border border-red-100">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Seção 3: Aplicações Reais */}
      {seo.applicationsList && seo.applicationsList.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Casos e Aplicações</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{seo.applicationsTitle}</h2>
              <p className="text-lg text-gray-600 mb-8">{seo.applicationsIntro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {seo.applicationsList.map((item, idx) => (
                  <div key={idx} className="flex items-start bg-gray-50 p-5 rounded-2xl border border-gray-100 transition-transform hover:scale-[1.01] duration-200">
                    <span className="text-[#E10600] mr-4 text-2xl font-extrabold leading-none">•</span>
                    <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Seção 4: Comparativo */}
      {seo.comparativeRows && seo.comparativeRows.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50 border-t border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Análise Prática</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{seo.comparativeTitle}</h2>
              <p className="text-lg text-gray-600 mb-8">{seo.comparativeSubtitle}</p>
              
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100/80 border-b border-gray-200">
                      <th className="p-4 md:p-5 text-gray-900 font-bold text-sm md:text-base">{seo.comparativeHeaders?.[0] || 'Critério'}</th>
                      <th className="p-4 md:p-5 text-[#E10600] font-bold text-sm md:text-base text-center bg-red-50/20">{seo.comparativeHeaders?.[1] || 'Nosso Modelo'}</th>
                      <th className="p-4 md:p-5 text-gray-900 font-bold text-sm md:text-base text-center">{seo.comparativeHeaders?.[2] || 'Padrão'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {seo.comparativeRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-4 md:p-5 text-gray-800 font-medium text-sm md:text-base">{row.situation}</td>
                        <td className="p-4 md:p-5 text-center font-bold text-[#E10600] bg-red-50/10 text-base md:text-lg">{row.mainProd}</td>
                        <td className="p-4 md:p-5 text-center text-gray-600 text-sm md:text-base">{row.compProd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Seção 5: Perguntas Frequentes (FAQ) */}
      {seo.faqs && seo.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Central de Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Perguntas Frequentes</h2>
              <p className="text-gray-600 max-w-lg mx-auto text-base">Esclareça suas principais dúvidas sobre nosso processo de aluguel em toda a capital do Rio de Janeiro.</p>
            </div>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              {seo.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-200">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-[#E10600] transition-colors gap-4"
                    >
                      <span className="text-[15px] sm:text-base leading-snug">{faq.question}</span>
                      <span className={`text-[#E10600] text-xl font-medium transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[350px] border-t border-gray-50' : 'max-h-0'}`}>
                      <div className="p-5 text-gray-600 bg-gray-50/50 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Seção 6: O que está incluso na locação */}
      <section className="bg-red-50/30 py-16 md:py-20 border-t border-red-100">
         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Truck className="w-12 h-12 text-[#E10600] mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">O que está incluso na locação?</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">Nossa meta é assegurar a sua integridade operacional e entregar o <strong>melhor custo-benefício</strong>. Por isso, oferecemos um serviço completo e sem burocracias no Rio de Janeiro.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <div className="bg-white p-6 rounded-xl border border-gray-100/70 shadow-sm transition-transform hover:scale-[1.01] duration-200">
                  <h4 className="font-bold text-gray-900 mb-2">Transporte Exclusivo</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Logística própria para entrega e retirada com pontualidade e agendamento planejado direto na sua localidade.</p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-gray-100/70 shadow-sm transition-transform hover:scale-[1.01] duration-200">
                  <h4 className="font-bold text-gray-900 mb-2">Processos Certificados</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Equipamentos testados eletricamente, limpos e devidamente sanitizados contra vírus, bactérias e odores.</p>
               </div>
               <div className="bg-white p-6 rounded-xl border border-gray-100/70 shadow-sm transition-transform hover:scale-[1.01] duration-200">
                  <h4 className="font-bold text-gray-900 mb-2">Suporte Técnico 360°</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Solucione problemas com o time via suporte de WhatsApp humano, com rápida substituição se necessário.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Seção 7: Cobertura de Entrega */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Área Atendida RJ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Região de Cobertura</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">Entregamos com rapidez em toda a cidade do Rio de Janeiro. Consulte o mapa interativo e as principais localidades atendidas.</p>
          </div>
          <CoverageMap />
        </div>
      </section>
    </>
  );
}
