import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Snowflake,
  ChefHat,
  Tent,
  GlassWater,
  Briefcase,
  Music,
  MapPin,
  X,
  Check,
  ChevronDown,
  Star,
  AlertTriangle,
  Zap,
  Phone,
  Home,
  MessageSquare,
  Truck,
  PartyPopper
} from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M12.031 0C5.385 0 0 5.384 0 12.029c0 2.12.553 4.195 1.603 6.012L.26 23.003l5.089-1.334c1.748.971 3.738 1.482 5.766 1.482h.005c6.645 0 12.03-5.385 12.03-12.031S17.761 0 12.031 0zm0 21.144c-1.796 0-3.555-.483-5.097-1.397l-.365-.217-3.784.992.998-3.69-.237-.378a10.024 10.024 0 0 1-1.533-5.426c0-5.541 4.509-10.05 10.05-10.05s10.049 4.51 10.049 10.05-4.508 10.05-10.018 10.05zm5.512-7.534c-.302-.151-1.785-.882-2.062-.983-.277-.101-.479-.151-.68.151-.202.302-.781.983-.958 1.185-.176.202-.353.227-.655.076-1.543-.77-2.613-1.424-3.613-2.923-.207-.31-.023-.478.127-.629.135-.135.302-.353.453-.529.151-.177.202-.302.302-.504.101-.202.05-.378-.025-.529-.076-.151-.68-1.638-.932-2.243-.245-.589-.494-.509-.68-.518-.176-.008-.378-.01-.579-.01-.202 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.519 0 1.487 1.083 2.923 1.234 3.124.151.202 2.128 3.249 5.155 4.555 1.944.838 2.7.935 3.655.787.808-.125 2.569-1.049 2.922-2.066.353-1.016.353-1.889.247-2.066-.105-.177-.383-.277-.685-.428z" />
  </svg>
);

// ==========================================
// DADOS MOCKADOS
// ==========================================
const WHATSAPP_NUMBER = "5521991605699";

const generateWaLink = (text: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const PRODUCTS = [
  {
    id: 1,
    tag: "MAIS ALUGADO",
    tagColor: "bg-[#E10600] text-white",
    name: "Consul Horizontal 534L",
    capacity: "~ 800 LATAS DE 350ML",
    description: "Bares, grandes eventos, casamentos com +200 convidados",
    waMessage: "Olá! Quero saber a disponibilidade do Freezer Consul Horizontal 534L",
    image: "https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780358404/freezer-horizontal-branco-tampa-dupla-painel-controle_1_af3kul.webp"
  },
  {
    id: 2,
    tag: "",
    name: "Consul Horizontal 309L",
    capacity: "~ 460 LATAS",
    description: "Festas médias, restaurantes, hotéis",
    waMessage: "Olá! Quero saber a disponibilidade do Freezer Consul Horizontal 309L",
    image: "https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780358799/freezer-horizontal-branco-com-tampa-superior-e-painel-lateral_ol1iqd.webp"
  },
  {
    id: 3,
    tag: "COMPACTO",
    tagColor: "bg-[#E10600] text-white",
    name: "Consul Vertical 246L",
    capacity: "~ 350 LATAS",
    description: "Airbnb, espaço apertado, uso doméstico",
    waMessage: "Olá! Quero saber a disponibilidade do Freezer Consul Vertical 246L",
    image: "https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780359171/purificador-ar-climatizador-portatil-branco-consul_zicbai.webp"
  },
  {
    id: 4,
    tag: "PREMIUM",
    tagColor: "bg-[#E10600] text-white",
    name: "Metalfrio 292L Tampa de Vidro",
    capacity: "~ 430 LATAS",
    description: "Visual bonito pra bar, buffet, exposição",
    waMessage: "Olá! Quero saber a disponibilidade do Freezer Metalfrio 292L Tampa de Vidro",
    image: "https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780359664/seladora-a-vacuo-domestica-metrovac-branco-cinza-com-tampa-transparente_gjlksm.webp"
  }
];

const FAQS = [
  { q: "Qual o prazo mínimo de locação?", a: "Atendemos desde diárias para o final de semana até contratos mensais para o seu negócio." },
  { q: "Vocês entregam em toda a cidade?", a: "Sim, entregamos em toda a cidade do Rio de Janeiro e principais municípios da Baixada. Consulte a taxa pelo WhatsApp." },
  { q: "Como funciona o pagamento?", a: "O pagamento pode ser feito via PIX, cartão de crédito ou dinheiro no ato da entrega." },
  { q: "Precisa pagar caução?", a: "Trabalhamos sem burocracia e, na maioria dos casos, não exigimos caução. Consulte as condições para locações mais longas." },
  { q: "E se o freezer der problema durante o uso?", a: "Temos suporte técnico rápido. Caso não seja possível reparar no local, efetuamos a troca do equipamento imediatamente." },
  { q: "Preciso liberar o freezer antes de usar?", a: "Nossos freezers são entregues higienizados e testados. A recomendação padrão é aguardar algumas horas após o transporte antes de ligar." },
  { q: "Vocês emitem nota fiscal?", a: "Sim, emitimos nota fiscal de serviço para todas as nossas locações." }
];

export default function FreezerLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainWaLink = generateWaLink("Olá! Vim do site e quero fazer um orçamento para alugar um freezer.");

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E10600] selection:text-white">
      <Helmet>
        <title>Aluguel de Freezer no Rio de Janeiro | Viploc</title>
        <meta name="description" content="Aluguel de freezers no mesmo dia no Rio de Janeiro. Sem burocracia, equipamentos revisados e entrega rápida. Solicite seu orçamento via WhatsApp!" />
      </Helmet>

      {/* 1. Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm h-[72px] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780350671/viploc_logo_vermelha_pzzth2.png" alt="Viploc" className="h-8 md:h-10 w-auto object-contain" />
            <span className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase border-l pl-3 border-gray-200 hidden sm:block">Rio de Janeiro</span>
          </div>
          <Button
            variant="primary"
            href={mainWaLink}
            className="flex items-center gap-2 px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm"
          >
            <WhatsAppIcon className="w-4 h-4 hidden sm:block" />
            <span>Quero meu orçamento &rarr;</span>
          </Button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAFAFA] relative overflow-hidden">
        {/* Soft circle blur in background */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-red-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-red-50 text-[#E10600] text-xs font-bold uppercase tracking-wider rounded-full mb-6 border border-red-100">
                <span className="w-2 h-2 inline-block bg-[#E10600] rounded-full mr-2 animate-pulse"></span>
                Disponível para retirada hoje
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Freezer alugado <br className="hidden lg:block" />
                <span className="text-[#E10600]">no mesmo dia</span> no <br className="hidden lg:block" />
                Rio de Janeiro.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Sem burocracia. Sem contrato longo. Sem taxa escondida. A gente responde na hora pelo WhatsApp, entrega, instala e retira. Você só se preocupa com o seu evento.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <Button 
                  variant="whatsapp"
                  href={mainWaLink}
                  className="w-full sm:w-auto text-[15px] font-bold py-6 px-8 rounded-[12px] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20b958] transition-all duration-200"
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> Falar no WhatsApp agora
                </Button>
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Resposta em menos de 5 minutos</p>
                    <p className="text-xs text-gray-500">Horário comercial - seg a sáb</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-600 font-medium max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E10600]" /> Frete rápido em todo o RJ</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E10600]" /> Freezers revisados 100%</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E10600]" /> Diária, semana ou mês</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E10600]" /> PIX, cartão ou dinheiro</div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white mb-4 sm:mb-0">
                <img 
                  src="https://res.cloudinary.com/dt8fp7f6t/image/upload/v1784590460/festa-ar-livre-refeicoes-bebidas-refrigerador-de-gelo-aberto_n3lvxs.webp" 
                  alt="Freezer em evento" 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>
              
              {/* Floating price card */}
              <div className="relative sm:absolute sm:bottom-6 sm:left-6 sm:right-auto bg-white rounded-2xl p-4 shadow-xl flex items-center justify-between sm:justify-start gap-6 border border-gray-100 sm:border-0 z-10 -mt-8 mx-4 sm:-mt-0 sm:mx-0">
                <div>
                  <p className="text-[10px] font-bold text-[#E10600] uppercase tracking-wider mb-0.5">A PARTIR DE</p>
                    <p className="text-3xl font-black text-gray-900 leading-none">R$ 80<span className="text-sm font-medium text-gray-500">/diária</span></p>
                  </div>
                  <a href={mainWaLink} target="_blank" rel="noopener noreferrer" className="bg-[#E10600] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-colors">
                    Ver preços &rarr;
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Barra de estatísticas */}
      <div className="bg-white border-y border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-[#E10600] mb-1">+8 anos</p>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">NO MERCADO CARIOCA</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-[#E10600] mb-1">+2.500</p>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">EVENTOS ATENDIDOS</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-[#E10600] mb-1">24h</p>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">PARA ENTREGAR</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-[#E10600] mb-1">4,9<Star className="inline w-5 h-5 sm:w-6 sm:h-6 ml-1 -mt-1 fill-current" /></p>
              <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">AVALIAÇÃO MÉDIA</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Comparação */}
      <section className="py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest block mb-3">CHEGA DE DOR DE CABEÇA</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight max-w-2xl">
              Alugar freezer no Rio não precisa ser um perrengue.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Concorrência */}
            <div className="bg-gray-100 rounded-3xl p-8 sm:p-10 border border-gray-200">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-6 h-6 text-gray-400" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-500 uppercase tracking-wider">CONCORRÊNCIA</h3>
              </div>
              <ul className="space-y-5 text-gray-500 font-medium">
                <li className="flex items-start gap-3 opacity-60">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="line-through">Locadora que some no dia do evento</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="line-through">Freezer velho que não gela direito</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="line-through">Contrato cheio de letra miúda e caução alto</span>
                </li>
                <li className="flex items-start gap-3 opacity-60">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="line-through">Frete abusivo pra qualquer bairro do RJ</span>
                </li>
              </ul>
            </div>

            {/* Viploc */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#E10600] relative shadow-xl transform md:-translate-y-2">
              <div className="absolute top-0 right-8 -mt-3.5 bg-[#E10600] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                VIPLOC
              </div>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-6 h-6 text-[#E10600]" />
                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-wider">O JEITO CERTO</h3>
              </div>
              <ul className="space-y-5 text-gray-900 font-bold">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#E10600] shrink-0 mt-0.5" />
                  <span>Atendimento humano no WhatsApp, sempre</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#E10600] shrink-0 mt-0.5" />
                  <span>Equipamentos revisados antes de cada entrega</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#E10600] shrink-0 mt-0.5" />
                  <span>Orçamento direto, sem surpresa no boleto</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#E10600] shrink-0 mt-0.5" />
                  <span>Frete justo pra toda a cidade e Baixada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 Motivos */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest block mb-3">POR QUE A VIPLOC</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight max-w-2xl">
              4 motivos pra você fechar hoje.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", icon: Zap, title: "Melhor preço do RJ", desc: "A gente cobre orçamento, mostre o da concorrência." },
              { num: "02", icon: Truck, title: "Entrega em até 24h", desc: "Pedido hoje, freezer na sua porta amanhã cedo." },
              { num: "03", icon: Snowflake, title: "Gela de verdade", desc: "Freezers testados a cada devolução. Zero improviso." },
              { num: "04", icon: MessageCircle, title: "Suporte durante o uso", desc: "Deu problema? Trocamos o equipamento na hora." }
            ].map((item, idx) => (
              <div key={idx} className="bg-red-50/50 sm:bg-[#FAFAFA] rounded-3xl p-8 relative overflow-hidden group sm:hover:bg-red-50/50 transition-colors">
                <div className="absolute top-4 right-6 text-6xl font-black text-red-100 sm:text-gray-100 sm:group-hover:text-red-100 transition-colors pointer-events-none select-none tracking-tighter">
                  {item.num}
                </div>
                <div className="w-12 h-12 bg-[#E10600] rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 relative z-10 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Vitrine de Produtos */}
      <section className="py-20 lg:py-24 bg-[#FAFAFA]" id="produtos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest block mb-3">MODELOS DISPONÍVEIS</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight max-w-2xl">
                Escolha o freezer certo, a gente entrega.
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Estoque rotativo. Consulte disponibilidade antes de fechar sua data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(product => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="h-48 bg-gray-100 relative p-4 flex items-center justify-center">
                  {product.tag && (
                    <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full z-10 ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-extrabold text-gray-900 leading-tight mb-1">{product.name}</h3>
                  <p className="text-xs font-bold text-[#E10600] mb-4 tracking-wider">{product.capacity}</p>
                  <p className="text-sm text-gray-600 flex-grow mb-6">{product.description}</p>
                  
                  <Button 
                    variant="outline"
                    href={generateWaLink(product.waMessage)}
                    className="w-full text-sm py-3 px-4"
                  >
                    <WhatsAppIcon className="mr-2 h-4 w-4" />
                    Consultar disponibilidade
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pra quem serve */}
      <section className="py-20 lg:py-24 bg-[#FAF7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest block mb-3">PRA QUEM SERVE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight max-w-2xl mb-4">
              Do churrasco em casa ao casamento de 500 pessoas.
            </h2>
            <p className="text-lg text-gray-600">Se precisa gelar, a VIPLOC atende. Simples assim.</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            {[
              { icon: PartyPopper, label: "Eventos" },
              { icon: Music, label: "Festas" },
              { icon: Tent, label: "Casamentos" },
              { icon: Home, label: "Uso particular" },
              { icon: GlassWater, label: "Bares" },
              { icon: ChefHat, label: "Restaurantes" },
              { icon: Briefcase, label: "Hotéis" },
              { icon: MapPin, label: "Airbnb" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white px-6 py-4 rounded-full flex items-center gap-3 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all cursor-default">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#E10600]">
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="font-bold text-gray-900 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Passo a passo */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-left">
            <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest block mb-3">PASSO A PASSO</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Do orçamento à entrega em 4 passos.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", icon: MessageSquare, title: "Manda um oi no WhatsApp", desc: "Conta o tamanho do rolé, a data e o bairro. Leva 30 segundos." },
              { num: "02", icon: Zap, title: "Orçamento em minutos", desc: "Enviamos o modelo ideal e o preço fechado. Sem enrolação." },
              { num: "03", icon: Truck, title: "Entrega no dia combinado", desc: "Levamos, posicionamos e ligamos pra você. Depois é só usar." },
              { num: "04", icon: PartyPopper, title: "A gente busca depois", desc: "Retiramos no horário combinado. Você nem lembra do freezer." }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-black text-[#E10600]">{step.num}</span>
                  <step.icon className="w-6 h-6 text-[#E10600] opacity-50" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Depoimentos */}
      <section className="py-20 lg:py-24 bg-[#FAF7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest block mb-3">QUEM JÁ ALUGOU</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Gente que já contou com a gente.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Renata M.", ctx: "Tijuca - Festa em casa", text: "Aluguei pra festa de 15 anos da minha filha às 22h de uma sexta. No sábado às 9h o freezer estava em casa. Salvou o evento." },
              { name: "Diego S.", ctx: "Bar em Vila Isabel", text: "Uso a VIPLOC no meu bar há 2 anos. Nunca tive um freezer que não gelou. Preço honesto, gente séria." },
              { name: "Camila & Bruno", ctx: "Casamento - Região dos Lagos", text: "Casamento pra 300 pessoas em Búzios. Chegou no horário, deu conta de toda a bebida. Recomendo de olhos fechados." }
            ].map((test, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#E10600] mb-6">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-gray-800 font-medium mb-8 leading-relaxed">"{test.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{test.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{test.ctx}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Mid CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E10600] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* BG details */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[80px] opacity-50 -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-red-900/30 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <Clock className="w-3 h-3" /> DATAS DE FIM DE SEMANA ESGOTAM RÁPIDO
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Sua data está livre?<br /> Descubra em 2 minutos.
              </h2>
            </div>
            
            <Button 
              variant="whatsapp"
              href={mainWaLink}
              className="relative z-10 w-full md:w-auto text-[15px] font-bold py-6 px-8 rounded-[12px] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20b958] transition-all duration-200"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" /> Consultar minha data &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold text-[#E10600] uppercase tracking-widest block mb-3">PERGUNTAS FREQUENTES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Tira suas dúvidas antes de fechar.
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border-b border-gray-200 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-gray-900 group-hover:text-[#E10600] transition-colors pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#E10600] transform transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Ficou alguma dúvida? <a href={mainWaLink} className="text-[#E10600] font-bold hover:underline">Pergunta direto no WhatsApp.</a>
            </p>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        {/* Glow red */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E10600]/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8 border border-white/10">
            <span className="w-1.5 h-1.5 bg-[#E10600] rounded-full animate-pulse"></span>
            ÚLTIMAS DATAS DE {new Date().toLocaleString('pt-BR', { month: 'long' }).toUpperCase()}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Seu freezer <span className="text-[#E10600]">te espera</span>.<br/> Falta só mandar um oi.
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Não deixa pra depois e corre o risco do modelo que você quer ficar reservado. Fecha agora e libera a cabeça pro que importa.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button 
              variant="whatsapp"
              href={mainWaLink}
              className="w-full sm:w-auto text-[15px] font-bold py-6 px-8 rounded-[12px] shadow-[0_8px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.4)] hover:bg-[#20b958] transition-all duration-200"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" /> Quero alugar meu freezer agora
            </Button>
            
            <p className="text-gray-500 text-sm">
              ou ligue: <a href="tel:+5521991605699" className="text-white font-bold hover:text-[#E10600] transition-colors">(21) 99160-5699</a>
            </p>
          </div>
        </div>
      </section>

      {/* 13. Rodapé Simplificado */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
            <div>
              <img src="https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780350671/viploc_logo_vermelha_pzzth2.png" alt="Viploc" className="h-10 w-auto object-contain mx-auto md:mx-0 mb-4" />
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                Locação de freezers no Rio de Janeiro com atendimento humano, entrega rápida e preço honesto.
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">ÁREA DE ATUAÇÃO</p>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                Rio de Janeiro capital, Baixada Fluminense, Niterói, São Gonçalo e Região dos Lagos.
              </p>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">FALE COM A GENTE</p>
              <div className="space-y-3">
                <a href={mainWaLink} className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-600 hover:text-[#E10600] font-bold transition-colors">
                  <WhatsAppIcon className="w-4 h-4 text-[#E10600]" />
                  WhatsApp (21) 99160-5699
                </a>
                <a href="tel:+5521991605699" className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-600 hover:text-[#E10600] font-bold transition-colors">
                  <Phone className="w-4 h-4 text-gray-400" />
                  Ligação direta
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} VIPLOC - Locação de Freezers - Rio de Janeiro, RJ
            </p>
          </div>
        </div>
      </footer>

      {/* 14. Botão Flutuante WhatsApp */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 md:bottom-8 md:right-8">
        <div className="animate-bounce rounded-t-lg rounded-bl-lg bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-xl border border-gray-100">
          Precisa de ajuda?
        </div>
        <a 
          href={mainWaLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white animate-pulse-scale shadow-2xl"
          aria-label="Falar conosco no WhatsApp"
        >
          <WhatsAppIcon className="h-9 w-9 relative z-10" />
        </a>
      </div>
    </div>
  );
}
