import { categories, type Category } from '@/data/categories';
import { products, type Product } from '@/data/products';
import { ProductCard } from '@/components/catalog/ProductCard';

const MAX_ITEMS = 4;

// Outros modelos da mesma categoria primeiro; o restante vem das categorias complementares (category.related).
function pickRelated(product: Product, category: Category) {
  const sameCategory = products.filter(p => p.categoryId === category.id && p.id !== product.id);
  const complementary = category.related.flatMap(relatedId => products.filter(p => p.categoryId === relatedId).slice(0, 1));
  return [...sameCategory, ...complementary].slice(0, MAX_ITEMS);
}

export function RelatedProducts({ product, category }: { product: Product; category: Category }) {
  const related = pickRelated(product, category);
  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2">Veja também</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Outros equipamentos para a sua locação</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map(item => {
            const itemCategory = categories.find(c => c.id === item.categoryId)!;
            return (
              <ProductCard
                key={item.id}
                product={item}
                categorySlug={itemCategory.slug}
                headingLevel="h3"
                badge={itemCategory.name}
                ctaLabel="Ver detalhes"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
