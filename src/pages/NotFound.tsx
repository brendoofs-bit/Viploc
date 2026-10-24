import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Seo } from '@/components/seo/Seo';
import { Button } from '@/components/ui/Button';
import { categories } from '@/data/categories';

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada | Viploc" noindex />

      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Erro 404</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Página não encontrada</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            O endereço que você acessou não existe ou mudou. Veja abaixo nossos equipamentos para locação ou fale direto com a equipe no WhatsApp.
          </p>
          <Button
            variant="whatsapp"
            isWhatsApp={true}
            whatsappMessage="Olá! Não encontrei a página que procurava no site. Podem me ajudar com um orçamento?"
            className="shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20b958] transition-all duration-200"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Equipamentos para locação</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/locacao/${cat.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl transition-shadow font-bold text-gray-900 hover:text-[#E10600]"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
