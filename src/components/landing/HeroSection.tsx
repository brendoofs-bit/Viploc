import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function HeroSection() {
  const whatsappLink = generateWhatsAppLink('Olá! Gostaria de garantir meu freezer com a Viploc. Podem me ajudar?');

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gray-900 pt-28 pb-20 lg:pt-32 lg:pb-24">
      {/* Fundo com Gradiente Radial Escuro Sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black z-0 pointer-events-none"></div>
      
      {/* Brilho Vermelho Decorativo e Sutil */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#E10600]/10 rounded-full blur-[128px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E10600]/5 rounded-full blur-[140px] z-0 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Coluna da Esquerda: Textos e CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#E10600] font-semibold text-sm mb-6 backdrop-blur-sm shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse"></span>
              Especialistas em Refrigeração
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              Freezers de Alta Performance para Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E10600] to-red-400">Evento ou Negócio</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-8">
              Entrega Rápida e Suporte 24h
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Esqueça o estresse com bebidas quentes ou produtos descongelados. Alugue freezers verticais e horizontais modernos com quem é especialista em refrigeração. Sem burocracia, direto pelo WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#E10600]" />
                <span className="font-medium text-sm md:text-base">Frota Nova e Higienizada</span>
              </div>
              <div className="hidden sm:block text-gray-700">•</div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#E10600]" />
                <span className="font-medium text-sm md:text-base">Plantão Técnico 24h</span>
              </div>
              <div className="hidden sm:block text-gray-700">•</div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#E10600]" />
                <span className="font-medium text-sm md:text-base">Entrega e Retirada no Local</span>
              </div>
            </div>

            <div className="relative inline-block group">
              {/* Efeito Pulsante no Botão CTA */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E10600] to-red-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#E10600] to-red-700 px-8 py-5 rounded-2xl text-white font-bold text-lg md:text-xl shadow-[0_0_40px_rgba(225,6,0,0.3)] hover:shadow-[0_0_60px_rgba(225,6,0,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                Garantir Meu Freezer Agora
              </a>
            </div>
          </motion.div>

          {/* Coluna da Direita: Imagem e Glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative mx-auto"
          >
            {/* Glassmorphism Container Principal */}
            <div className="relative rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center overflow-hidden group">
              {/* Gradiente interno sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              
              {/* Efeito Hover do Container */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              {/* Container de Flutuação da Imagem (CSS Animation) */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-full h-full flex flex-col items-center justify-center"
              >
                {/* Imagem Placeholder - Freezer Vertical */}
                {/* Substitua a div abaixo pela tag <img> quando tiver a foto oficial: 
                    <img src="/sua-foto-freezer.png" alt="Freezer" className="object-contain h-full" />
                */}
                <div className="w-64 h-96 bg-gray-800/80 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-gray-500 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {/* Elementos decorativos do placeholder */}
                  <div className="absolute top-4 left-4 right-4 h-4 bg-gray-700/50 rounded-full"></div>
                  <div className="absolute top-12 bottom-4 left-4 right-4 bg-gray-700/30 rounded-xl border border-gray-600/30 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-semibold text-gray-400 text-center px-4">Imagem do Freezer<br/>Vertical HD</span>
                  </div>
                </div>
                
                {/* Elemento flutuante secundário - Freezer Horizontal */}
                <motion.div 
                   animate={{ y: [10, -10, 10] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute -bottom-10 -right-4 w-48 h-32 bg-gray-800/95 rounded-2xl border border-gray-700 flex items-center justify-center text-gray-500 shadow-2xl backdrop-blur-md z-30 overflow-hidden"
                >
                   {/* Elementos decorativos internos do freezer horizontal placeholder */}
                   <div className="absolute top-3 left-3 right-3 h-3 bg-gray-700/50 rounded-full"></div>
                   <div className="absolute top-10 bottom-3 left-3 right-3 bg-gray-700/30 rounded-lg flex items-center justify-center text-xs font-semibold text-gray-400 text-center">
                     Freezer<br/>Horizontal
                   </div>
                </motion.div>
              </motion.div>

              {/* Elementos Decorativos de Reflexo dentro do glass container */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/5 rounded-full blur-[40px] pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E10600]/10 rounded-full blur-[40px] pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
