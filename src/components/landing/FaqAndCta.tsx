import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle, Zap } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';

const faqs = [
  {
    question: "Como funciona o frete de entrega e retirada?",
    answer: "Trabalhamos com logística própria para garantir a pontualidade. O valor do frete é calculado de acordo com a distância e será informado de forma transparente no momento do orçamento pelo WhatsApp."
  },
  {
    question: "Quais são as formas de pagamento para locação?",
    answer: "Aceitamos PIX, transferências bancárias e os principais cartões de crédito. Condições especiais podem ser negociadas dependendo do tempo de contrato."
  },
  {
    question: "Vocês atendem de última hora?",
    answer: "Sim! Entendemos que imprevistos acontecem. Dependendo da disponibilidade da nossa frota no dia, conseguimos realizar entregas emergenciais para salvar o seu evento."
  },
  {
    question: "O que acontece se o equipamento apresentar alguma falha?",
    answer: "Temos um Plantão Técnico 24h. Caso ocorra qualquer problema de refrigeração que não possa ser resolvido rapidamente no local, providenciamos a substituição imediata do equipamento sem custos adicionais."
  }
];

export default function FaqAndCta() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const whatsappLink = generateWhatsAppLink('Olá! Gostaria de reservar meu freezer agora mesmo. Pode me passar os detalhes?');

  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-24">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-3">Tire Suas Dúvidas</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-gray-50 border-gray-200 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#E10600] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-gray-900 border border-[#E10600]/30 shadow-[0_0_50px_rgba(225,6,0,0.15)] overflow-hidden"
        >
          {/* Fundo Decorativo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-gray-900 to-black pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#E10600]/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#E10600]/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Borda Neon Glow (CSS) */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-[#E10600] opacity-30 animate-pulse pointer-events-none"></div>

          <div className="relative z-10 py-16 px-6 sm:px-12 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl leading-[1.2]">
              Não corra o risco de ficar sem o seu equipamento.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              A frota de freezers para datas comemorativas e fins de semana esgota rapidamente. Garanta a sua tranquilidade hoje.
            </p>

            <div className="relative inline-block group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E10600] to-red-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-[#E10600] to-red-700 px-8 py-5 md:px-10 md:py-6 rounded-2xl text-white font-black text-lg md:text-xl lg:text-2xl shadow-[0_0_40px_rgba(225,6,0,0.4)] hover:shadow-[0_0_80px_rgba(225,6,0,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="w-8 h-8" />
                <span className="text-center">Falar com Consultor no WhatsApp e Reservar Agora</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm font-medium w-full">
              <span className="text-yellow-400">⚡</span>
              <span>Resposta imediata em menos de 5 minutos.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
