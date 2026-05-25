import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Viploc</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Política de Privacidade</h1>
        <div className="prose prose-red text-gray-700">
           <p>Esta Política de Privacidade descreve como a Viploc coleta, usa e protege as informações no site.</p>
           <h3>1. Informações Coletadas</h3>
           <p>Nosso site utiliza apenas cookies essenciais e tags analíticas para entender o tráfego de nossa página e medir performance de anúncios de forma agregada.</p>
           <h3>2. Dados Pessoais</h3>
           <p>Não possuímos formulários de contato no site. Todas as conversas são realizadas através do WhatsApp, garantindo segurança seguindo os termos da Meta, detentora do aplicativo.</p>
           <h3>3. Compartilhamento</h3>
           <p>Seus dados orçamentários, coletados via WhatsApp, não são vendidos a terceiros. Eles servem exclusivamente para emissão de contrato e logística do equipamento solicitado.</p>
        </div>
      </div>
    </>
  );
}
