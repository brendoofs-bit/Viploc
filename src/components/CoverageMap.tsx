import { lazy, Suspense, useEffect, useState } from 'react';
import { neighborhoods } from '@/data/neighborhoods';

const CoverageMapLeaflet = lazy(() => import('@/components/CoverageMapLeaflet'));

export function CoverageMap() {
  // O mapa só é montado após a hidratação; no HTML pré-renderizado fica o espaço reservado e a lista de bairros.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <div className="w-full">
      <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 z-0 relative">
        {isClient && (
          <Suspense fallback={null}>
            <CoverageMapLeaflet />
          </Suspense>
        )}
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {neighborhoods.map((n, idx) => (
          <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200">
            {n.name}
          </span>
        ))}
      </div>
    </div>
  );
}
