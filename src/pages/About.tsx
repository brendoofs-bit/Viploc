import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Viploc Locação de Equipamentos no RJ</title>
        <meta name="description" content="Conheça a história da Viploc. Dedicados a oferecer o melhor custo-benefício em locação de equipamentos de refrigeração no Rio de Janeiro." />
        <link rel="canonical" href="https://viploc.com.br/sobre" />
      </Helmet>

      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Nossa Missão: <span className="text-[#E10600]">Facilitar Seu Negócio</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A Viploc nasceu de uma dor comum: a dificuldade de alugar equipamentos pesados e de refrigeração com garantias reais e agilidade no Rio de Janeiro.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div>
                  {/* DIMENSION Imagem Institucional: 800x800 */}
                  <img 
                     src="https://images.unsplash.com/photo-1555529771-835f59bfc50c?w=800&auto=format&fit=crop" 
                     alt="Nossa Operação Viploc" 
                     className="rounded-2xl shadow-xl w-full h-[500px] object-cover mix-blend-darken"
                     width={800}
                     height={800}
                  />
               </div>
               <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Porque "Melhor Custo-Benefício"?</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                     Acreditamos que todo restaurante temporário, feira, grande evento ou até mesmo uma emergência doméstica precisa de solução rápida. Comprar não compensa. Alugar com burocracia também não.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg">
                     Nossa operação é otimizada. Eliminamos formulários chatos e processos engessados. Tudo acontece pelo WhatsApp, validamos a rota no Rio de Janeiro e entregamos a máquina testada. Essa agilidade diminui nossos custos e permite oferecer o melhor preço da capital.
                  </p>

                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E10600]">
                           <Zap size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-gray-900">Agilidade Carioca</h4>
                           <p className="text-gray-600 mt-1">Conhecemos o trânsito e o ritmo da cidade como ninguém.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E10600]">
                           <ShieldCheck size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-gray-900">Higienização e Testes</h4>
                           <p className="text-gray-600 mt-1">Nenhum equipamento sai do pátio sem o selo de revisão Viploc.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E10600]">
                           <Target size={24} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-gray-900">Foco Total em Resultado</h4>
                           <p className="text-gray-600 mt-1">Vocês focam no evento, nós focamos na refrigeração e na TV.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="bg-[#E10600] py-20 text-center">
         <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto para começarmos?</h2>
            <p className="text-red-100 text-lg mb-8">Nossos consultores operacionais estão a postos para receber sua demanda.</p>
            <Button variant="whatsapp" isWhatsApp={true} className="bg-white text-gray-900 border-0 hover:bg-gray-100 px-8 py-4">
               Iniciar Conversa no WhatsApp
            </Button>
         </div>
      </section>
    </>
  );
}
