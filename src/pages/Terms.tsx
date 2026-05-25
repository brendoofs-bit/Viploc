import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Viploc</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Termos de Uso</h1>
        <div className="prose prose-red text-gray-700">
           <p>Ao utilizar o site da Viploc Locações, você concorda com os seguintes termos:</p>
           <h3>1. Catálogo e Disponibilidade</h3>
           <p>As fotos neste site são imagens de referência ou reais de nossos equipamentos. Contudo, as unidades estão sujeitas a disponibilidade no momento do contato via WhatsApp. O dimensionamento final de marca/modelo se dá no ato do orçamento fechado.</p>
           <h3>2. Atendimento ao Cliente</h3>
           <p>As condições de entrega, horários e valores são definidos estritamente durante o fluxo de atendimento em nosso WhatsApp corporativo e devidamente oficializados nas OS ou ordens de serviço/contratos de locação firmados.</p>
        </div>
      </div>
    </>
  );
}
