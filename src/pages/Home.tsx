import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { CheckCircle, Truck, Wrench, MessageCircle, Star, MousePointerClick, MessageSquareText, Sparkles, Box, Quote } from 'lucide-react';
import { CoverageMap } from '@/components/CoverageMap';

export default function Home() {
  const stepsContainerRef = useRef<HTMLElement>(null);
  const vantagensRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress: stepsScrollY } = useScroll({
    target: stepsContainerRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(stepsScrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const { scrollYProgress: vantagensScrollY } = useScroll({
    target: vantagensRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(vantagensScrollY, [0, 1], ["-20%", "20%"]);

  return (
    <>
      <Helmet>
        <title>Viploc - Locação de Equipamentos e Refrigeração no RJ</title>
        <meta name="description" content="O melhor custo-benefício em locação de Geladeiras, Freezers, Cervejeiras, Micro-ondas e TVs no Rio de Janeiro. Entrega rápida." />
        <link rel="canonical" href="https://viploc.com.br/" />
        {/* DIMENSION OG Image: 1200x630 */}
        <meta property="og:image" content="/images/og-default.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 flex items-center min-h-[90vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[url('https://res.cloudinary.com/doqw5aqcf/image/upload/v1779561932/festa-ao-ar-livre-tropical-convidados-ilha-de-bebidas-ao-por-do-sol_w0yqda.webp')] bg-cover bg-center"></div>
        {/* Gradient Overlay for 2-column effect */}
        <div className="absolute inset-0 z-0 bg-white/70 md:bg-transparent md:bg-gradient-to-r md:from-white md:via-white/90 md:to-white/10"></div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-start justify-center text-left max-w-2xl">
              <div className="mb-6 flex flex-col items-start gap-3">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-sm border border-gray-100">
                  <div className="flex gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm font-bold text-gray-800">5.0</span>
                  <span className="text-sm text-gray-500 font-medium">(90+ avaliações no Google)</span>
                </div>
                <Badge className="scale-110 origin-left">O Melhor Custo-Benefício do RJ</Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-sm leading-tight">
                Locação Rápida de <span className="text-[#E10600]">Equipamentos</span> para Qualquer Situação
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-10 font-medium leading-relaxed">
                Geladeiras, freezers, frigobares, cervejeiras, expositores de bebidas, microondas e TVs entregues higienizados em qualquer bairro do Rio de Janeiro. Você escolhe, a gente instala. Você usa, a gente recolhe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="primary" isWhatsApp={true} className="text-lg py-4 px-8 w-full sm:w-auto">
                  Fazer cotação
                </Button>
                <Button href="#categorias" variant="outline" className="text-lg py-4 px-8 bg-white/80 backdrop-blur w-full sm:w-auto">
                  Ver Equipamentos
                </Button>
              </div>
            </div>
            
            {/* Right column is left empty to let the background image shine through clearly */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-gradient-to-r from-[#E10600] via-[#cc0000] to-[#E10600] text-white py-3 overflow-hidden border-y border-[#b30000]/50 relative flex items-center">
        <div className="flex w-fit animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4 items-center">
              {[
                "FESTAS PARTICULARES",
                "BARES",
                "EVENTOS CORPORATIVOS",
                "ATIVAÇÕES DE MARCA",
                "PRODUÇÕES AUDIOVISUAIS",
                "CASAMENTOS",
                "RESTAURANTES",
                "HOTÉIS & POUSADAS"
              ].map((phrase, j) => (
                <div key={`${i}-${j}`} className="flex items-center gap-8">
                  <span className="font-bold text-[10px] sm:text-xs tracking-widest uppercase opacity-90 whitespace-nowrap drop-shadow-sm">
                    {phrase}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Prova de Valor / Benefícios */}
      <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-50/50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#E10600]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(225,6,0,0.12)] hover:border-[#E10600]/60 transition-all duration-500 overflow-hidden hover:-translate-y-1">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -left-4 top-2 text-9xl font-black text-gray-200 -z-10 group-hover:text-red-100 transition-colors duration-700 pointer-events-none select-none tracking-tighter">01</div>
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#E10600] to-[#E10600]/20 mb-8 group-hover:w-24 transition-all duration-500"></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#E10600] transition-colors duration-300">Entrega Expressa RJ</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Logística inteligente e dedicada. Atendemos com frota própria e agilidade ímpar, garantindo que o cronograma do seu evento seja cumprido à risca.</p>
            </div>
            
            {/* Card 2 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#E10600]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(225,6,0,0.12)] hover:border-[#E10600]/60 transition-all duration-500 overflow-hidden hover:-translate-y-1 md:translate-y-4">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -left-4 top-2 text-9xl font-black text-gray-200 -z-10 group-hover:text-red-100 transition-colors duration-700 pointer-events-none select-none tracking-tighter">02</div>
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#E10600] to-[#E10600]/20 mb-8 group-hover:w-24 transition-all duration-500"></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#E10600] transition-colors duration-300">Melhor Custo-Benefício</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Planos super flexíveis que cabem no orçamento do seu projeto. Alugue pelo tempo exato que sua operação necessita, preservando seu capital.</p>
            </div>
            
            {/* Card 3 */}
            <div className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#E10600]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(225,6,0,0.12)] hover:border-[#E10600]/60 transition-all duration-500 overflow-hidden hover:-translate-y-1 md:translate-y-8">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -left-4 top-2 text-9xl font-black text-gray-200 -z-10 group-hover:text-red-100 transition-colors duration-700 pointer-events-none select-none tracking-tighter">03</div>
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#E10600] to-[#E10600]/20 mb-8 group-hover:w-24 transition-all duration-500"></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#E10600] transition-colors duration-300">Equipamentos revisados</h3>
              <p className="text-gray-600 leading-relaxed font-medium">Nossa equipe técnica realiza lavagem rigorosa, checklists e testes de estabilidade em cada unidade antes de despachar para o seu endereço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section id="categorias" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Nosso catálogo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Equipamentos para Locação</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Escolha a categoria ideal para sua necessidade. Todos os equipamentos são entregues higienizados.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {categories.map((cat) => {
              const bgImages: Record<string, string> = {
                'geladeiras': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779884337/categoria-geladeiras-viploc_ujcdos.png',
                'freezers': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779884909/categoria-freezer-viploc_cb3sbg.png',
                'frigobar': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779885562/categoria-frigobar-viploc_wpzm78.png',
                'expositores-de-bebidas': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779885743/categoria-expositor-bebidas-viploc_dnjalk.png',
                'cervejeiras': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779885941/categoria-cervejeira-viploc_m3m87q.png',
                'purificador-de-agua': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779886598/categoria-purificador-agua-viploc_iabg6o.png',
                'micro-ondas': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779886739/categoria-microondas-viploc_upb9pe.png',
                'tv': 'https://res.cloudinary.com/doqw5aqcf/image/upload/v1779887006/categoria-tv-viploc_dl5yqo.png',
              };
              const bgImage = bgImages[cat.slug] || 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=600';
              
              return (
              <Link 
                key={cat.id} 
                to={`/locacao/${cat.slug}`}
                className="group relative flex flex-col justify-end p-5 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 w-full max-w-[345px] h-[150px]"
              >
                <div className="absolute inset-0 bg-gray-200">
                  <img src={bgImage} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-[#E10600]/90 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-start">
                  <div className="flex items-center justify-between w-full mb-1">
                    <h3 className="text-[17px] font-bold text-white line-clamp-1">{cat.name}</h3>
                  </div>
                  <p className="text-[11px] text-gray-200 mb-2 line-clamp-1 pr-6">{cat.description}</p>
                  <span className="inline-block text-[10px] uppercase font-bold text-white bg-[#E10600] px-3 py-1.5 rounded-full group-hover:bg-white group-hover:text-[#E10600] transition-colors">
                    Ver Equipamentos
                  </span>
                </div>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-32 bg-white relative overflow-hidden" ref={stepsContainerRef}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-normal" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', filter: 'grayscale(100%)' }}></div>
        <div className="absolute inset-0 bg-red-50/30 mix-blend-multiply opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-20 md:mb-32">
             <span className="text-xs font-bold text-[#E10600]/80 uppercase tracking-[0.3em] block mb-6 drop-shadow-sm">Como Funciona</span>
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#E10600] tracking-tight leading-tight">
                Quatro passos. Zero <br className="hidden md:block"/><span className="font-serif italic font-light tracking-normal text-[#E10600]/90">complicação.</span>
             </h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto pb-12">
            
            {/* SVG Scroll Line */}
            <div className="absolute left-[39px] md:left-1/2 top-[40px] bottom-[40px] md:-translate-x-1/2 w-[4px] z-0">
              <svg width="100%" height="100%" preserveAspectRatio="none" className="block w-full h-full overflow-visible">
                 <line x1="2" y1="0" x2="2" y2="100%" stroke="rgba(225,6,0,0.15)" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
                 <motion.line 
                   x1="2" y1="0" x2="2" y2="100%" 
                   stroke="#E10600" 
                   strokeWidth="4" 
                   strokeLinecap="round"
                   style={{ pathLength }} 
                   className="drop-shadow-[0_0_10px_rgba(225,6,0,0.4)]"
                 />
              </svg>
            </div>

            <div className="space-y-24 md:space-y-32 relative">
              {[
                { icon: MousePointerClick, title: "Escolha", desc: "Navegue pelo catálogo e identifique o equipamento certo para sua ocasião." },
                { icon: MessageSquareText, title: "Cotação", desc: "Fale conosco no WhatsApp informando data, horário e endereço da entrega." },
                { icon: Sparkles, title: "Entrega higienizada", desc: "Levamos o equipamento limpo, regulado e pronto para uso no seu endereço." },
                { icon: Box, title: "Retirada", desc: "Na data combinada, recolhemos sem dor de cabeça. Você só usa." }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Center Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="absolute left-4 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#E10600] border-4 border-white text-white rounded-full z-10 shadow-[0_0_30px_rgba(225,6,0,0.3)] transition-transform duration-500"
                  >
                     <IconComponent className="w-5 h-5 md:w-8 md:h-8" strokeWidth={2} />
                  </motion.div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${index % 2 !== 0 ? 'md:pr-24' : 'md:pl-24'}`}>
                    <motion.div 
                      className="bg-red-50/50 backdrop-blur-md border border-red-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(225,6,0,0.05)] relative overflow-hidden"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Abstract Background Elements inside card */}
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-100/50 rounded-full blur-[30px] pointer-events-none"></div>
                      <div className="absolute -bottom-6 -left-6 text-9xl font-serif italic font-black text-[#E10600]/10 pointer-events-none select-none drop-shadow-sm">{`0${index+1}`}</div>
                      
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4 text-[#E10600] drop-shadow-sm">
                          {item.title}
                        </h3>
                        <p className="text-[#cc0000] leading-relaxed font-medium text-lg opacity-90">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                </div>
              )})}
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-32 relative text-white overflow-hidden" ref={vantagensRef}>
        <motion.div 
           className="absolute inset-0 bg-[url('https://res.cloudinary.com/doqw5aqcf/image/upload/v1779674929/funcionarios-uniforme-van-transporte-comportimento-aberto-equipamento-montanha-rio-de-janeiro_l0wxlk.webp')] bg-cover bg-center"
           style={{ y: parallaxY, scale: 1.2 }}
        ></motion.div>
        <div className="absolute inset-0 bg-[#E10600]/80"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-white/70 uppercase tracking-[0.3em] block mb-4">Vantagens</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md">Por que alugar com a Viploc?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Economia Inteligente",
                desc: "Pague apenas pelo período que precisar. Sem investimento de compra nem custo de manutenção."
              },
              {
                title: "Zero Manutenção",
                desc: "Equipamentos revisados e prontos para uso. Qualquer problema, a troca é por nossa conta."
              },
              {
                title: "Flexibilidade Total",
                desc: "Locação por dias, semanas ou meses. Ideal para eventos pontuais ou demandas sazonais."
              },
              {
                title: "Entrega e Retirada",
                desc: "Logística completa na cidade do Rio de Janeiro com data e horário agendados."
              },
              {
                title: "Higienização Garantida",
                desc: "Todos os equipamentos são entregues completamente limpos e higienizados."
              },
              {
                title: "Equipamentos Premium",
                desc: "Trabalhamos com as melhores marcas e modelos do mercado para sua satisfação."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-5xl font-black text-white/10 mb-4 font-serif italic group-hover:text-white/20 transition-colors drop-shadow-sm">0{index + 1}</div>
                <h3 className="text-2xl font-bold mb-3 drop-shadow-sm">{item.title}</h3>
                <p className="text-white/80 leading-relaxed font-medium text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-24 bg-red-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#E10600]/80 uppercase tracking-[0.3em] block mb-4">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">O que dizem nossos clientes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Aluguei uma geladeira para o evento da empresa e chegou no horário combinado, super limpa. Recomendo demais!",
                author: "Mariana S."
              },
              {
                quote: "Precisei de freezers para a festa de casamento e a Viploc resolveu tudo pelo WhatsApp. Atendimento excelente!",
                author: "Ricardo L."
              },
              {
                quote: "Uso a Viploc no meu restaurante em Copacabana sempre que preciso de equipamento extra. Nunca me decepcionaram.",
                author: "Ana Paula M."
              },
              {
                quote: "Frigobar impecável para o meu Airbnb na Barra. Entrega pontual e equipe muito profissional.",
                author: "Carlos E."
              },
              {
                quote: "Expositor de bebidas para o evento da firma ficou perfeito. Processo simples e sem dor de cabeça.",
                author: "Juliana F."
              },
              {
                quote: "Alugamos TV e microondas para um evento corporativo. Tudo chegou funcionando perfeitamente e higienizado.",
                author: "Pedro H."
              }
            ].map((testimony, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Quote className="text-[#E10600]/20 w-10 h-10 mb-4 fill-current" />
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimony.quote}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-gray-900">{testimony.author}</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-[#E10600]/80 uppercase tracking-[0.3em] block mb-4">Cobertura</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">Onde Atendemos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Entregamos em toda a cidade do Rio de Janeiro. Confira os principais bairros atendidos.</p>
          </div>
          
          <CoverageMap />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white text-center px-4">
         <div className="relative z-10 mx-auto max-w-3xl">
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Pronto para alugar?</h2>
           <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto leading-relaxed">Fale diretamente com nossa equipe pelo WhatsApp. Resposta rápida, sem burocracia.</p>
           <Button variant="whatsapp" isWhatsApp={true} className="text-[15px] font-bold py-6 px-8 rounded-[12px] shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20b958] transition-all duration-200">
             <MessageCircle className="mr-2 h-5 w-5" /> Chamar no WhatsApp
           </Button>
         </div>
      </section>

    </>
  );
}
