import { motion } from 'motion/react';
import { Clock, ShieldCheck, CalendarRange, Truck, Star } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Plantão 24h Real",
    description: "Seu evento ou comércio não para. Temos equipe técnica pronta para substituição imediata se necessário."
  },
  {
    icon: ShieldCheck,
    title: "Equipamentos Revisados",
    description: "Todos os freezers passam por testes de temperatura e higienização rigorosa antes da entrega."
  },
  {
    icon: CalendarRange,
    title: "Flexibilidade de Contrato",
    description: "Alugue por um final de semana para eventos ou contratos mensais para o seu comércio."
  },
  {
    icon: Truck,
    title: "Pontualidade VIP",
    description: "Logística própria e inteligente para garantir que seu equipamento chegue antes da abertura dos trabalhos."
  }
];

const testimonials = [
  {
    name: "Carlos Eduardo",
    text: "Salvaram meu casamento! O freezer chegou gelando e o atendimento foi nota 10.",
    role: "Noivo / Evento"
  },
  {
    name: "Mariana Silva",
    text: "Alugo mensalmente para meu restaurante, suporte impecável. Recomendo de olhos fechados.",
    role: "Dona de Restaurante"
  },
  {
    name: "Rafael Costa",
    text: "Precisei para uma feira de 3 dias e a entrega foi exata no horário combinado. Equipamento novo.",
    role: "Expositor"
  },
  {
    name: "Juliana Mendes",
    text: "A equipe técnica é fantástica, tiraram todas as minhas dúvidas pelo WhatsApp na hora.",
    role: "Organizadora de Eventos"
  },
  {
    name: "Roberto Almeida",
    text: "Custo-benefício excelente. Freezers limpos e bem cuidados. Virou meu parceiro oficial.",
    role: "Comerciante"
  }
];

export default function BenefitsAndTrust() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-3">Diferenciais Viploc</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Sem Estresse. Apenas Resultados.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-[#E10600]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Marquee de Depoimentos */}
      <div className="relative w-full pb-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-extrabold text-gray-900">Quem confia, aprova</h3>
        </div>
        
        {/* Sombras laterais para o efeito fade no marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none mt-16"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none mt-16"></div>
        
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {/* Duplicar array para o efeito infinito (50% do width total com 10 itens) */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="w-[300px] md:w-[400px] shrink-0 mx-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-sm md:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
