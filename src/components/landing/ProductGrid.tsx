import { motion } from 'motion/react';
import { MessageCircle, Snowflake, Thermometer, Zap, ShieldCheck } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function ProductGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-3">Modelos Disponíveis</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            O Modelo Ideal Para A Sua Necessidade
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Freezer Vertical (Destaque) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative lg:col-span-7 rounded-3xl"
          >
            {/* Animated Border Gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#E10600] via-red-500 to-orange-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none"></div>
            
            <div className="relative h-full bg-gray-50 rounded-3xl border border-gray-100 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500">
              <div className="flex flex-col-reverse sm:flex-row justify-between gap-8 z-10 relative h-full">
                <div className="flex-1 flex flex-col">
                  <div className="flex-none">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#E10600] font-semibold text-xs mb-4">
                      <Snowflake size={14} /> Mais Solicitado
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                      Freezer Vertical Expositor
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      A escolha perfeita para comércios, feiras e casamentos onde a estética e a visualização dos produtos são fundamentais.
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Zap className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">Voltagem:</span> 220v
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <ShieldCheck className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">Capacidade:</span> 400 a 570 Litros
                    </li>
                    <li className="flex items-center gap-3 text-sm text-gray-700">
                      <Thermometer className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">Temperatura:</span> Regulável (0ºC a -18ºC)
                    </li>
                  </ul>

                  <a
                    href={generateWhatsAppLink('Olá, quero orçamento do Freezer Vertical.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-900 px-6 py-3.5 rounded-xl font-bold hover:border-[#E10600] hover:bg-red-50 hover:text-[#E10600] transition-colors duration-300 w-full sm:w-auto mt-auto shadow-sm hover:shadow"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Orçamento Deste Modelo
                  </a>
                </div>
                
                {/* Imagem Placeholder */}
                <div className="w-full sm:w-5/12 min-h-[240px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group-hover:bg-gray-300 transition-colors duration-500">
                  <div className="text-center p-4">
                    <span className="text-gray-400 font-medium">Imagem Freezer<br/>Vertical</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Freezer Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group relative lg:col-span-5 rounded-3xl"
          >
             {/* Animated Border Gradient */}
             <div className="absolute -inset-0.5 bg-gradient-to-br from-[#E10600] via-red-500 to-orange-400 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none"></div>

            <div className="relative h-full bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between shadow-sm group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500">
              <div className="z-10 relative flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    Freezer Horizontal
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Foco total em grande volume de estocagem. Ideal para bebidas, gelo e congelados em grandes eventos e festas.
                  </p>
                </div>

                <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center shadow-inner mb-6 relative overflow-hidden group-hover:bg-gray-300 transition-colors duration-500">
                  <div className="text-center p-4">
                    <span className="text-gray-400 font-medium">Imagem Freezer<br/>Horizontal</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <ShieldCheck className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">Tampas:</span> Cegas ou de Vidro
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Thermometer className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">Recursos:</span> Dreno frontal de gelo
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <Zap className="w-5 h-5 text-gray-400" />
                    <span className="font-medium">Eficiência:</span> Baixo consumo energético
                  </li>
                </ul>

                <a
                  href={generateWhatsAppLink('Olá, quero orçamento do Freezer Horizontal.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-900 px-6 py-3.5 rounded-xl font-bold hover:border-[#E10600] hover:bg-red-50 hover:text-[#E10600] transition-colors duration-300 w-full mt-auto shadow-sm hover:shadow"
                >
                  <MessageCircle className="w-5 h-5" />
                  Orçamento Deste Modelo
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
