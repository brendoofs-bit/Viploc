import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/data/categories';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            {/* DIMENSION: Logo header: 180x48 */}
            <img 
              src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773599218/viploc_logo_vermelha_ix4lku.png" 
              alt="Viploc - Locação de Equipamentos" 
              className="h-10 w-auto object-contain sm:h-12"
              width={180}
              height={48}
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="group relative">
            <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-[#E10600] py-8">
              Equipamentos
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 top-[90%] w-64 pt-2 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-black/5 flex flex-col gap-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/locacao/${cat.slug}`}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-red-50/50 hover:text-[#E10600] transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/rio-de-janeiro" className="font-medium text-gray-700 hover:text-[#E10600]">Área Atendida</Link>
          <Link to="/sobre" className="font-medium text-gray-700 hover:text-[#E10600]">Sobre Nós</Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Button variant="primary" isWhatsApp={true}>
            Fazer cotação
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Locação</p>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/locacao/${cat.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#E10600]"
              >
                {cat.name}
              </Link>
            ))}
            <div className="my-2 border-t border-gray-100"></div>
            <Link to="/rio-de-janeiro" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Área Atendida</Link>
            <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Sobre</Link>
            <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Contato</Link>
            
            <div className="mt-4 px-3">
               <Button variant="primary" isWhatsApp={true} className="w-full">
                Fazer cotação
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
