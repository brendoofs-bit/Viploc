import { ReactNode } from 'react';

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-[#E10600] ${className}`}>
      {children}
    </span>
  );
}
