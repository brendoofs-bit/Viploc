import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import { locations } from '@/data/locations';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 whitespace-pre-wrap">
          <div className="space-y-4">
             {/* DIMENSION: Logo footer: 180x48 */}
            <img 
              src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773599218/viploc_logo_branca_z1yvfd.svg" 
              alt="Viploc" 
              className="h-10 w-auto"
              width={180}
              height={48}
              loading="lazy"
            />
            <p className="text-sm text-gray-400">
              O melhor custo-benefício em locação de equipamentos de refrigeração e utilidades no Rio de Janeiro. Agilidade e compromisso em primeiro lugar.
            </p>
            <div className="pt-4 flex flex-col gap-2">
               {/* DIMENSION: Visit Rio logo: 120x40 (aprox) */}
               <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Mantenedores do</span>
               <img src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773600812/logo_visit_rio_wi8b1y.svg" alt="Visit RIO" className="h-8 w-auto" loading="lazy" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Categorias</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/locacao/${cat.slug}`} className="hover:text-white transition-colors">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Áreas Atendidas no RJ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to={`/rio-de-janeiro`} className="hover:text-white transition-colors">Todo o Rio de Janeiro</Link>
              </li>
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/rio-de-janeiro/${loc.slug}`} className="hover:text-white transition-colors">{loc.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Nome: Viploc Locações</li>
              <li>Atendimento Exclusivo via WhatsApp</li>
              <li>WhatsApp: (21) 99160-5699</li>
              <li>Área de atuação: Rio de Janeiro - RJ</li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <Link to="/sobre" className="hover:text-white transition-colors text-sm">Sobre</Link>
              <Link to="/contato" className="hover:text-white transition-colors text-sm">Contato</Link>
              <Link to="/blog" className="hover:text-white transition-colors text-sm">Blog</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Viploc Locação de Equipamentos. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-gray-300">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-gray-300">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
