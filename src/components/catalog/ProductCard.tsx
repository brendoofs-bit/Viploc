import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/data/products';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&auto=format&fit=crop';

// Card de produto usado na listagem da categoria e nos produtos relacionados.
export function ProductCard({ product, categorySlug, headingLevel = 'h2', badge = 'Pronta Entrega', ctaLabel = 'Ver Detalhes do Equipamento' }: {
  product: Product;
  categorySlug: string;
  headingLevel?: 'h2' | 'h3';
  badge?: string;
  ctaLabel?: string;
}) {
  const Heading = headingLevel;

  return (
    <Link to={`/locacao/${categorySlug}/${product.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all flex flex-col">
      {/* DIMENSION: Card produto (thumb): 800x600 (Recomendado para preencher todo o bloco) */}
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center">
        <img
          src={product.image || FALLBACK_IMAGE}
          alt={`Aluguel de ${product.name}`}
          className={`object-contain w-full h-full mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500 ${!product.image && "grayscale"}`}
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-white/90 backdrop-blur text-gray-800 border border-gray-200">{badge}</Badge>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <Heading className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E10600] transition-colors">{product.name}</Heading>
        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">{product.shortDescription}</p>
        <div className="mt-auto">
          <Button as="span" variant="outline" className="w-full">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </Link>
  );
}
