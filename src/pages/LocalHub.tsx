import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { locations } from '@/data/locations';
import { categories } from '@/data/categories';
import { MapPin } from 'lucide-react';

export default function LocalHub() {
  return (
    <>
      <Helmet>
        <title>Áreas de Cobertura no Rio de Janeiro | Viploc Locações</title>
        <meta name="description" content="Atendemos diversas regiões metropolitanas do Rio de Janeiro com entrega expressa de equipamentos de refrigeração. Fale conosco!" />
        <link rel="canonical" href="https://viploc.com.br/rio-de-janeiro" />
      </Helmet>

      <section className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MapPin className="w-12 h-12 text-[#E10600] mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Nossa Atuação no <span className="text-[#E10600]">Rio de Janeiro</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A Viploc nasceu no Rio para atender os cariocas. Temos frota própria e equipes focadas em entregar o melhor custo-benefício para eventos, comércios e residências em toda a cidade.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Selecione sua Região</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {locations.map((loc) => (
                    <Link 
                       key={loc.slug} 
                       to={`/rio-de-janeiro/${loc.slug}`}
                       className="p-6 rounded-xl border border-gray-200 hover:border-[#E10600] hover:shadow-md transition-all group"
                    >
                       <h3 className="font-bold text-gray-900 group-hover:text-[#E10600] flex items-center gap-2">
                          <MapPin size={18} className="text-gray-400 group-hover:text-[#E10600]" />
                          {loc.name}
                       </h3>
                       <p className="text-sm text-gray-500 mt-2 line-clamp-2">{loc.description}</p>
                    </Link>
                 ))}
              </div>
           </div>

           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-6">O que os cariocas mais alugam?</h3>
              <div className="flex flex-col gap-3">
                 {categories.slice(0, 5).map((cat) => (
                    <Link 
                       key={cat.id} 
                       to={`/locacao/${cat.slug}`}
                       className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md"
                    >
                       <span className="font-semibold text-gray-700">{cat.name}</span>
                       <span className="text-[#E10600] text-sm font-medium">Ver opções →</span>
                    </Link>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
