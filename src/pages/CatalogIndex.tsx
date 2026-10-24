import { Link } from 'react-router-dom';
import { Seo } from '@/components/seo/Seo';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function CatalogIndex() {
  return (
    <>
      <Seo
        title="Locação de Equipamentos no RJ | Geladeira, Freezer e mais | Viploc"
        description="Catálogo completo para aluguel no Rio de Janeiro: geladeiras, freezers, cervejeiras, expositores de bebidas, frigobares, micro-ondas e TVs. Entrega e retirada inclusas."
        path="/locacao"
      />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Locação', path: '/locacao' }]} />

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Catálogo completo</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Locação de Equipamentos no Rio de Janeiro
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Escolha a categoria ideal para o seu evento, obra, comércio ou residência. Todos os equipamentos são entregues higienizados, testados e com suporte durante a locação.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => {
              const count = products.filter(p => p.categoryId === cat.id).length;
              return (
                <Link
                  key={cat.id}
                  to={`/locacao/${cat.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
                >
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`Aluguel de ${cat.keyword} no Rio de Janeiro`}
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E10600] transition-colors">
                      Aluguel de {cat.name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{cat.description}</p>
                    <span className="text-sm font-semibold text-[#E10600]">
                      {count > 0 ? `${count} ${count === 1 ? 'modelo disponível' : 'modelos disponíveis'}` : 'Consulte disponibilidade'} &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
