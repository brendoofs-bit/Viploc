import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Zap,
  ThumbsUp,
  Snowflake,
  Users,
  ChefHat,
  Tent,
  GlassWater,
  Briefcase,
  Music,
  MapPin,
  X,
  Check,
  ChevronDown,
  Star
} from 'lucide-react';

// ==========================================
// DADOS MOCKADOS (Fáceis de editar)
// ==========================================
const WHATSAPP_NUMBER = "5521991605699";

const generateWaLink = (text: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const PRODUCTS = [
  {
    id: 1,
    name: "Freezer Consul Horizontal 534L",
    capacity: "534 Litros",
    description: "Alta capacidade e armazenamento, ideal para grandes eventos e buffets.",
    bullets: ["Dupla ação (freezer ou refrigerador)", "Dreno frontal facilitado", "Interior com super capacidade"],
    features: ["220V", "Testado e Higienizado"],
    waMessage: "Olá! Quero saber o preço da locação do Freezer Consul Horizontal 534L"
  },
  {
    id: 2,
    name: "Freezer Consul Horizontal 309L",
    capacity: "309 Litros",
    description: "Compacto e eficiente, perfeito para pontos de venda e uso comercial pontual.",
    bullets: ["Controle de temperatura no painel", "Gabinete interno resistente", "Fácil movimentação"],
    features: ["220V", "Testado e Higienizado"],
    waMessage: "Olá! Quero saber o preço da locação do Freezer Consul Horizontal 309L"
  },
  {
    id: 3,
    name: "Freezer Consul Vertical 246L",
    capacity: "246 Litros",
    description: "Formato vertical com gavetas, ideal para cozinhas com pouco espaço e acesso rápido.",
    bullets: ["Gavetas organizadoras", "Não precisa descongelar (Frost Free)", "Ocupa menos espaço no chão"],
    features: ["220V", "Testado e Higienizado"],
    waMessage: "Olá! Quero saber o preço da locação do Freezer Consul Vertical 246L"
  },
  {
    id: 4,
    name: "Freezer Metalfrio 292L",
    capacity: "292 Litros",
    description: "Tampa de vidro expositora, ideal para venda de sorvetes e produtos congelados.",
    bullets: ["Tampas de vidro deslizantes", "Excelente visibilidade", "Baixo consumo de energia"],
    features: ["220V", "Testado e Higienizado"],
    waMessage: "Olá! Quero saber o preço da locação do Freezer Metalfrio 292L Tampa de Vidro"
  }
];

const AUDIENCE = [
  { icon: Users, label: "Grandes Eventos" },
  { icon: ChefHat, label: "Cozinhas Industriais" },
  { icon: Truck, label: "Food Trucks" },
  { icon: Music, label: "Festas Particulares" },
  { icon: Briefcase, label: "Eventos Corporativos" },
  { icon: Tent, label: "Casamentos" },
  { icon: GlassWater, label: "Quiosques" },
  { icon: MapPin, label: "Buffets e Catering" },
];

const REASONS = [
  { icon: Zap, title: "Economia Inteligente", desc: "Pague apenas pelo tempo que usar, sem imobilizar capital comprando equipamentos." },
  { icon: ShieldCheck, title: "Zero Manutenção", desc: "Se quebrar, nós trocamos. Você não gasta um centavo com consertos." },
  { icon: Clock, title: "Flexibilidade Total", desc: "Alugue por diárias para um evento ou mensal para o seu comércio." },
  { icon: Truck, title: "Entrega e Retirada", desc: "Logística própria para garantir que o freezer chegue antes da sua operação começar." },
  { icon: Snowflake, title: "Higienização Garantida", desc: "Equipamentos limpos com produtos profissionais, prontos para uso alimentício." },
  { icon: ThumbsUp, title: "Equipamentos Premium", desc: "Trabalhamos com marcas líderes do mercado como Consul e Metalfrio." },
];

const TESTIMONIALS = [
  { name: "Mariana S.", context: "Casamento no RJ", text: "Alugamos 2 freezers horizontais para as bebidas do nosso casamento. Chegaram brilhando de limpos e gelaram muito rápido. Recomendo de olhos fechados!" },
  { name: "Carlos T.", context: "Dono de Food Truck", text: "Estava com o meu freezer quebrado em pleno final de semana. A Viploc me salvou com uma entrega super expressa. Atendimento humano de verdade." },
  { name: "Juliana P.", context: "Buffet Infantil", text: "Sempre alugo o expositor de vidro para as festas. É ótimo não precisar me preocupar com manutenção e ter sempre um freezer funcionando perfeitamente." },
];

const FAQS = [
  { q: "Como funciona a entrega e instalação do freezer?", a: "Nossa equipe própria realiza a entrega no endereço combinado, posiciona o equipamento onde você desejar e faz os testes iniciais na tomada para garantir que está gelando perfeitamente." },
  { q: "Qual o prazo mínimo de locação?", a: "Somos flexíveis. Atendemos desde locações para o final de semana (diárias) até contratos mensais prolongados para o seu negócio." },
  { q: "Os freezers são higienizados antes da entrega?", a: "Com certeza. Todos os equipamentos passam por uma higienização profunda e desinfecção com produtos adequados para armazenamento de alimentos." },
  { q: "O que acontece se o freezer apresentar defeito?", a: "Temos suporte técnico rápido. Caso o freezer pare de funcionar e não possa ser reparado no local rapidamente, nós providenciamos a troca do equipamento sem custo adicional." },
  { q: "Atende toda a região do Rio de Janeiro?", a: "Sim, entregamos em toda a cidade do Rio de Janeiro e principais municípios da Baixada e Grande Rio. Consulte a taxa de logística no WhatsApp informando seu CEP." }
];

// ==========================================
// COMPONENTES PRINCIPAIS
// ==========================================

export default function FreezerLandingPageNovo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainWaLink = generateWaLink("Olá! Vim da página de freezers e quero fazer uma cotação.");

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-gray-800 font-sans selection:bg-[#E8352E] selection:text-white">
      <Helmet>
        <title>Locação de Freezers no RJ | Viploc</title>
        <meta name="description" content="Aluguel de freezers horizontais e verticais no Rio de Janeiro. Entrega rápida, equipamentos higienizados. Ideal para eventos e comércios." />
      </Helmet>

      {/* 1. Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm h-20 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img src="https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780350671/viploc_logo_vermelha_pzzth2.png" alt="Viploc" className="h-10 w-auto object-contain" />
          <a
            href={mainWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#E8352E] hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Chamar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Freezer para Alugar no Rio de Janeiro <span className="text-[#E8352E] italic">hoje mesmo</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Entrega rápida, equipamento testado e higienizado, sem burocracia. A solução perfeita para gelar rápido no seu evento ou comércio.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 text-gray-700 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E8352E]" /> Higienizado e testado</div>
                <div className="hidden sm:block text-gray-300">•</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E8352E]" /> Entrega expressa no RJ</div>
                <div className="hidden sm:block text-gray-300">•</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E8352E]" /> Suporte técnico incluso</div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <a
                  href={mainWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#E8352E] hover:bg-red-700 text-white px-8 py-5 rounded-full font-bold text-lg sm:text-xl shadow-[0_8px_20px_rgba(232,53,46,0.3)] hover:shadow-[0_12px_25px_rgba(232,53,46,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  <MessageCircle className="w-6 h-6" />
                  Fazer Cotação Agora no WhatsApp
                </a>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex gap-0.5 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <span>Avaliado por clientes reais no RJ</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              {/* TODO: substituir por foto real do freezer */}
              <div className="w-full aspect-[4/3] bg-gradient-to-tr from-gray-100 to-gray-50 rounded-3xl border border-gray-200 shadow-xl flex items-center justify-center p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#E8352E]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-center z-10">
                  <Snowflake className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 font-medium text-lg">Mockup de Freezer HD</p>
                  <p className="text-sm text-gray-400">(Substituir por imagem real)</p>
                </div>
                
                {/* Elemento flutuante de prova */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium">Equipamento</p>
                    <p className="text-sm font-bold text-gray-900">Testado & 220V</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Barra de confiança */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:justify-between items-center text-sm sm:text-base font-semibold text-gray-300">
            <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-[#E8352E]" /> Entrega Expressa RJ</div>
            <div className="flex items-center gap-2"><Snowflake className="w-5 h-5 text-[#E8352E]" /> Equipamento Higienizado</div>
            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-[#E8352E]" /> Suporte Técnico 360°</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#E8352E]" /> Sem Fiador, Sem Burocracia</div>
          </div>
        </div>
      </div>

      {/* 4. Vitrine de Produtos */}
      <section className="py-20 bg-[#F7F8FA]" id="produtos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Escolha o Freezer Ideal</h2>
            <p className="mt-4 text-lg text-gray-600">Modelos revisados, de alta performance e prontos para uso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full mb-3">Pronta Entrega</span>
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-[#E8352E] font-bold mt-1 text-lg">{product.capacity}</p>
                  </div>
                  {/* TODO: Placeholder miniatura do produto */}
                  <div className="w-20 h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 shrink-0 ml-4">
                    <Snowflake className="w-8 h-8 text-gray-300" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>

                <div className="bg-gray-50 rounded-xl p-5 mb-6">
                  <ul className="space-y-2 mb-4">
                    {product.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#E8352E] mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-2">
                    {product.features.map((feat, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-white px-2.5 py-1.5 rounded-md border border-gray-200">
                        <Zap className="w-3 h-3 text-[#E8352E]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={generateWaLink(product.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border-2 border-[#E8352E] text-[#E8352E] hover:bg-[#E8352E] hover:text-white px-6 py-4 rounded-xl font-bold transition-colors text-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar Preço no WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Para quem é ideal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Para quem é ideal?</h2>
            <p className="mt-4 text-gray-600">Atendemos de ponta a ponta as necessidades do seu negócio ou evento.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {AUDIENCE.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-red-50 transition-colors border border-gray-100 group">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-[#E8352E] transition-colors" />
                <span className="font-semibold text-gray-700 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Como funciona (Timeline Vertical) */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Como funciona a locação</h2>
            <p className="mt-4 text-gray-600">Simples, rápido e 100% pelo WhatsApp.</p>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 space-y-12">
            {/* Linha vertical pontilhada */}
            <div className="absolute top-0 bottom-0 left-[2.25rem] sm:left-[8.5rem] w-0 border-l-2 border-dashed border-[#E8352E]/30"></div>

            {[
              { title: "Escolha e Orçamento", desc: "Fale no WhatsApp, diga o que precisa e receba o orçamento na hora." },
              { title: "Confirmação", desc: "Aprovou? Só confirmar o endereço de entrega e a data." },
              { title: "Entrega e Teste", desc: "Nossa equipe leva, posiciona e testa o freezer limpo no seu local." },
              { title: "Retirada", desc: "Acabou o evento ou contrato? Nós passamos para recolher sem dor de cabeça." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-10 sm:-left-32 top-1 w-8 h-8 rounded-full bg-[#E8352E] text-white flex items-center justify-center font-bold text-sm shadow-md z-10 ring-4 ring-[#F7F8FA]">
                  {idx + 1}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href={mainWaLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#E8352E] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-colors">
              Iniciar Passo 1 Agora
            </a>
          </div>
        </div>
      </section>

      {/* 7. Comparação */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Viploc vs Alternativa Comum</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 sm:p-6 border-b border-gray-200 font-bold text-gray-500 w-1/3">O que você precisa</th>
                  <th className="p-4 sm:p-6 border-b border-gray-200 bg-red-50 text-center font-extrabold text-[#E8352E] w-1/3">Locação Viploc</th>
                  <th className="p-4 sm:p-6 border-b border-gray-200 text-center font-bold text-gray-500 w-1/3">Comprar ou Amadores</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  "Higienização Garantida",
                  "Suporte Técnico Incluso",
                  "Sem Compra de Equipamento",
                  "Flexibilidade de Prazo",
                  "Entrega Agendada"
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 sm:p-6 text-sm sm:text-base font-medium text-gray-700">{item}</td>
                    <td className="p-4 sm:p-6 bg-red-50/30 text-center">
                      <CheckCircle2 className="w-6 h-6 text-[#E8352E] mx-auto" />
                    </td>
                    <td className="p-4 sm:p-6 text-center">
                      <X className="w-6 h-6 text-gray-300 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Por que alugar com a Viploc */}
      <section className="py-20 bg-gradient-to-br from-[#E8352E] to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Por que alugar com a Viploc?</h2>
            <p className="mt-4 text-red-100 text-lg">Dezenas de empresas e produtores de eventos no RJ confiam na gente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((reason, idx) => (
              <div key={idx} className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-black/20 transition-colors">
                <reason.icon className="w-8 h-8 text-white mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-red-100 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">O que dizem nossos clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-700 italic mb-6">"{test.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{test.name}</p>
                  <p className="text-sm text-gray-500">{test.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ (Accordion) */}
      <section className="py-20 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Escassez Sutil */}
      <div className="bg-yellow-50 border-y border-yellow-200 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-yellow-800 font-medium text-sm sm:text-base">
            ⚠️ <strong>Estoque limitado de freezers para esta semana</strong> — garanta o seu antes que a frota esgote.
          </p>
        </div>
      </div>

      {/* 12. CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Pronto para resolver o seu problema de refrigeração?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Fale com a nossa equipe agora mesmo e garanta seu freezer.
          </p>
          <div className="flex flex-col items-center justify-center">
            <a
              href={mainWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#E8352E] hover:bg-red-700 text-white px-10 py-6 rounded-full font-bold text-xl sm:text-2xl shadow-[0_10px_30px_rgba(232,53,46,0.3)] hover:shadow-[0_15px_40px_rgba(232,53,46,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-8 h-8" />
              Fazer Cotação Agora no WhatsApp
            </a>
            <p className="mt-4 text-gray-500 font-medium flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-500" /> Resposta em minutos, sem compromisso
            </p>
            <p className="mt-2 text-sm text-gray-400 flex items-center gap-1">
               <span className="font-bold">🔒 Atendimento humano, sem robô</span>
            </p>
          </div>
        </div>
      </section>

      {/* 13. Rodapé */}
      <footer className="bg-[#0B1B2B] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <img src="https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780350671/viploc_logo_vermelha_pzzth2.png" alt="Viploc" className="h-10 w-auto object-contain opacity-80" />
          <div>
            <p className="text-sm">Locação de Equipamentos para Eventos e Comércio no RJ</p>
            <p className="text-sm mt-1">WhatsApp: (21) 99160-5699</p>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Viploc. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* 14. Botão Flutuante WhatsApp (CSS animado no inline class) */}
      <a
        href={mainWaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 group"
        aria-label="Contato via WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <MessageCircle className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
