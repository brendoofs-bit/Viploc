import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { locations } from '@/data/locations';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/Button';
import { MapPin, Truck, CheckCircle } from 'lucide-react';

export default function LocalPage() {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  
  const location = locations.find(l => l.slug === locationSlug);
  
  if (!location) {
    return <Navigate to="/rio-de-janeiro" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Aluguel de Freezers e Geladeiras na {location.name} | Viploc</title>
        <meta name="description" content={`Entrega rápida para toda a ${location.name}. Locação de geladeiras, cervejeiras e freezers com o melhor custo-benefício. Peça cotação no WhatsApp.`} />
        <link rel="canonical" href={`https://viploc.com.br/rio-de-janeiro/${location.slug}`} />
      </Helmet>

      {/* Hero Região */}
      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
             <MapPin className="text-[#E10600]" size={24} />
             <span className="font-bold text-gray-500 uppercase tracking-widest">Cobertura Local</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            Locação na <span className="text-[#E10600]">{location.name}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {location.description} Fornecemos a estrutura que você precisa com equipamentos limpos, testados e excelência no prazo de entrega.
          </p>
          <Button variant="primary" isWhatsApp={true} whatsappMessage={`Olá, quero fazer uma cotação. A entrega seria para a ${location.name}.`} className="px-8 py-4 text-lg">
             Fazer cotação para {location.name}
          </Button>
        </div>
      </section>

      {/* Por que escolher - SEO Content */}
      <section className="py-20 bg-white">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="prose prose-lg prose-red max-w-none">
                  <h2>Por que a Viploc é a melhor escolha na {location.name}?</h2>
                  <p>
                     Com o ritmo acelerado dos comércios e eventos cariocas, sabemos que você não pode perder tempo ou dinheiro. Nossa operação é otimizada para garantir que o seu equipamento chegue na data e hora certa.
                  </p>
                  <ul>
                     <li><strong>Custo-Benefício:</strong> Alugue apenas pelo período que precisar. Sem manutenções surpresas.</li>
                     <li><strong>Logística Conhecedora:</strong> Nossos motoristas conhecem a {location.name} e sabem as restrições logísticas de cada bairro.</li>
                     <li><strong>Garantia de Funcionamento:</strong> Checou na tomada e algo não está certo? Nosso suporte entra em ação.</li>
                  </ul>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {categories.slice(0, 4).map((cat) => (
                     <div key={cat.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <CheckCircle className="text-[#E10600] w-8 h-8 mb-4" />
                        <h4 className="font-bold text-gray-900 mb-2">Aluguel de {cat.name}</h4>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">Modelos revisados disponíveis para sua região.</p>
                        <Link to={`/locacao/${cat.slug}`} className="text-[#E10600] text-sm font-semibold hover:underline">
                           Ver catálogo &rarr;
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-16 bg-gray-900 text-center px-4">
         <Truck className="w-16 h-16 text-white/20 mx-auto mb-6" />
         <h2 className="text-3xl font-bold text-white mb-6">Trilhas prontas para chegar até você.</h2>
         <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Fale agora no WhatsApp, informe os dias do evento ou do aluguel mensal, e aprove a entrega com nosso especialista.</p>
         <Button variant="whatsapp" isWhatsApp={true} className="rounded-full shadow-2xl hover:scale-105">
            Reservar Data na {location.name}
         </Button>
      </section>
    </>
  );
}
