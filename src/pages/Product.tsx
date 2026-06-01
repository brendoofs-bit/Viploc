import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Truck, ShieldCheck, Thermometer } from 'lucide-react';

export default function Product() {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string, productSlug: string }>();
  
  const category = categories.find(c => c.slug === categorySlug);
  const product = products.find(p => p.slug === productSlug);
  
  const defaultImage = product?.image || "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&auto=format&fit=crop";
  const [mainImage, setMainImage] = useState(defaultImage);

  useEffect(() => {
    setMainImage(defaultImage);
  }, [productSlug, defaultImage]);

  if (!category || !product) {
    return <Navigate to="/" replace />;
  }

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [defaultImage];

  const wppMessage = `Olá! Quero alugar ${product.name}. Pode me passar disponibilidade, valores e confirmar as áreas de entrega no RJ?`;

  return (
    <>
      <Helmet>
        <title>Aluguel de {product.name} no RJ | Viploc</title>
        <meta name="description" content={`${product.shortDescription} Melhor custo-benefício para locação de ${category.name.toLowerCase()} no Rio de Janeiro. Faça sua cotação!`} />
        <link rel="canonical" href={`https://viploc.com.br/locacao/${category.slug}/${product.slug}`} />
        
        {/* Schema markup for Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": "https://viploc.com.br/images/og-default.jpg",
            "description": product.shortDescription,
            "brand": {
              "@type": "Brand",
              "name": product.specs['Marca'] || 'Viploc'
            },
            "offers": {
              "@type": "Offer",
              "url": `https://viploc.com.br/locacao/${category.slug}/${product.slug}`,
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Viploc Locações"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 text-sm">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-500">
            <Link to="/" className="hover:text-[#E10600]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/locacao" className="hover:text-[#E10600]">Locação</Link>
            <span className="mx-2">/</span>
            <Link to={`/locacao/${category.slug}`} className="hover:text-[#E10600]">{category.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
         </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Imagem Principal */}
            <div className="flex flex-col gap-4 sticky top-28">
               <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex items-center justify-center h-[400px] md:h-[500px] relative overflow-hidden">
                 {/* DIMENSION Galeria produto: 1200x900 */}
                 <img 
                    src={mainImage} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-darken hover:scale-105 transition-transform duration-500"
                    width={1200}
                    height={900}
                 />
                 <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge>Disponível RJ</Badge>
                    <Badge className="bg-gray-800 text-white border-0">Alto Desempenho</Badge>
                 </div>
               </div>

               {/* Thumbnails */}
               {images.length > 1 && (
                 <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                   {images.map((img, idx) => (
                     <button
                       key={idx}
                       onClick={() => setMainImage(img)}
                       className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl border flex-shrink-0 bg-gray-50 overflow-hidden transition-all ${mainImage === img ? 'border-[#E10600] ring-2 ring-[#E10600]/20 scale-105' : 'border-gray-200 hover:border-gray-300'}`}
                     >
                       <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain p-2 mix-blend-darken" />
                     </button>
                   ))}
                 </div>
               )}
            </div>

            {/* Informações do Produto */}
            <div className="flex flex-col">
               <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{product.name}</h1>
               <p className="text-lg text-gray-600 mb-8">{product.shortDescription}</p>
               
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                     <Thermometer className="w-6 h-6 text-[#E10600] mb-2" />
                     <p className="text-sm text-gray-500 mb-1">Aplicação</p>
                     <p className="font-semibold text-gray-900">{product.recommendedUses[0]}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                     <ShieldCheck className="w-6 h-6 text-[#E10600] mb-2" />
                     <p className="text-sm text-gray-500 mb-1">Qualidade</p>
                     <p className="font-semibold text-gray-900">Testado & Revisado</p>
                  </div>
               </div>

               <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-2">Gostou deste equipamento?</h3>
                  <p className="text-gray-300 text-sm mb-6">Feche negócio de forma rápida direto com um especialista local.</p>
                  <Button variant="whatsapp" isWhatsApp={true} whatsappMessage={wppMessage} className="w-full text-lg py-4">
                     Consultar Preços e Prazos
                  </Button>
                  <p className="text-xs text-center text-gray-400 mt-4">* Atendemos preferencialmente Rio de Janeiro e Grande Rio.</p>
               </div>

               {/* Benefícios */}
               <div className="mb-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Principais Benefícios</h3>
                  <ul className="space-y-3">
                     {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                           <span className="text-[#E10600] mr-3 mt-1 font-bold">✔</span>
                           <span className="text-gray-700">{benefit}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Specs */}
               <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Especificações Básicas</h3>
                  <div className="border border-gray-200 rounded-xl overflow-hidden text-sm">
                     {Object.entries(product.specs).map(([key, value], idx) => (
                        <div key={key} className={`flex p-4 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 last:border-0`}>
                           <span className="font-semibold text-gray-900 w-1/3">{key}</span>
                           <span className="text-gray-600 w-2/3">{String(value)}</span>
                        </div>
                     ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">* Capacidade exata detalhada no nome do equipamento ou sob consulta com nosso time.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-50 py-16 border-t border-red-100">
         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Truck className="w-12 h-12 text-[#E10600] mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">O que está incluso na locação?</h2>
            <p className="text-gray-700 text-lg mb-8">Nossa meta é te dar paz e o <strong>melhor custo-benefício</strong>. Por isso, oferecemos um serviço completo e sem entrelinhas para as locações no Rio de Janeiro.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Transporte Local</h4>
                  <p className="text-sm text-gray-600">Entregamos e retiramos os equipamentos no endereço do evento com agendamento prévio.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Testes de Segurança</h4>
                  <p className="text-sm text-gray-600">Máquinas revisadas, higienizadas e testadas para não falharem na sua festa.</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Suporte WhatsApp</h4>
                  <p className="text-sm text-gray-600">Tiramos dúvidas sobre instalação e uso direto via mensagem com atendimento humano.</p>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
