import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, type BreadcrumbItem } from '@/utils/schema';

// Breadcrumb visual + BreadcrumbList (schema.org) gerados da mesma lista de itens.
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3 text-sm">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-500 flex flex-wrap items-center">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Fragment key={item.path}>
              <li>
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">{item.name}</span>
                ) : (
                  <Link to={item.path} className="hover:text-[#E10600]">{item.name}</Link>
                )}
              </li>
              {!isLast && <li aria-hidden="true" className="mx-2">/</li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
