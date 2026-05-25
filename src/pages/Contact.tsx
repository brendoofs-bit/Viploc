import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contato | Fale com a Viploc | Locação no RJ</title>
        <meta name="description" content="Precisa alugar equipamentos rápido? Chame no WhatsApp. Atendemos todo Rio de Janeiro sem burocracia e sem formulários." />
        <link rel="canonical" href="https://viploc.com.br/contato" />
      </Helmet>

      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4">100% Digital e Humano</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Fale com a <span className="text-[#E10600]">Viploc</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Sem longos formulários de e-mail. Nós resolvemos 100% das demandas diretamente pelo WhatsApp para garantir a velocidade que você precisa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
         <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Contato Direto */}
               <div className="bg-gray-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500 opacity-20 blur-3xl rounded-full"></div>
                  
                  <h2 className="text-3xl font-bold mb-8">Canal Oficial de Atendimento</h2>
                  
                  <div className="space-y-8 relative z-10 w-full flex flex-col mb-12">
                     <div className="flex items-start gap-4">
                        <MessageCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                        <div>
                           <p className="text-gray-400 text-sm mb-1">WhatsApp de Vendas e Suporte</p>
                           <p className="text-2xl font-bold">(21) 99160-5699</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Clock className="w-8 h-8 text-gray-400 flex-shrink-0" />
                        <div>
                           <p className="text-gray-400 text-sm mb-1">Horário de Atendimento Comercial</p>
                           <p className="font-semibold">Seg. a Sex: 08h às 18h</p>
                           <p className="font-semibold mt-1">Sábados: 08h às 12h</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="w-8 h-8 text-gray-400 flex-shrink-0" />
                        <div>
                           <p className="text-gray-400 text-sm mb-1">Área de Atuação</p>
                           <p className="font-semibold">Rio de Janeiro e Região Metropolitana</p>
                        </div>
                     </div>
                  </div>

                  <Button variant="whatsapp" isWhatsApp={true} className="w-full py-5 text-xl relative z-10 shadow-lg border border-green-400">
                     Iniciar Conversa Agora
                  </Button>
               </div>

               {/* FAQ Rapido */}
               <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Dúvidas Frequentes Rápidas</h3>
                  
                  <div className="space-y-6">
                     <div className="border-b border-gray-100 pb-6">
                        <h4 className="font-bold text-gray-900 mb-2">1. Como funciona a reserva?</h4>
                        <p className="text-gray-600 text-sm">Você chama no WhatsApp, nós enviamos as opções e após aprovar o orçamento, agendamos a logística de entrega diretamente.</p>
                     </div>
                     <div className="border-b border-gray-100 pb-6">
                        <h4 className="font-bold text-gray-900 mb-2">2. Tem pedido mínimo de dias?</h4>
                        <p className="text-gray-600 text-sm">Trabalhamos com flexibilidade. Desde a diária para um evento até locações mensais para o seu comércio.</p>
                     </div>
                     <div className="border-b border-gray-100 pb-6">
                        <h4 className="font-bold text-gray-900 mb-2">3. E se equipamento der problema?</h4>
                        <p className="text-gray-600 text-sm">Nosso suporte entra em ação. Se não puder ser resolvido rapidamente, nós realizamos a troca do equipamento sem custos adicionais para o defeito constatado.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
