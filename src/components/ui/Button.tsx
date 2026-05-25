import { ReactNode } from 'react';
import { generateWhatsAppLink, defaultWhatsAppMessage } from '@/utils/whatsapp';

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  isWhatsApp = false,
  whatsappMessage = defaultWhatsAppMessage
}: { 
  children: ReactNode; 
  href?: string; 
  variant?: 'primary' | 'outline' | 'whatsapp';
  className?: string;
  isWhatsApp?: boolean;
  whatsappMessage?: string;
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-out px-8 py-3.5 text-sm md:text-base";
  
  let variantStyles = "";
  if (variant === 'primary') {
    variantStyles = "bg-gradient-to-r from-[#E10600] to-[#b30000] text-white shadow-[0_8px_20px_rgba(225,6,0,0.25)] hover:shadow-[0_8px_25px_rgba(225,6,0,0.4)] hover:-translate-y-0.5";
  } else if (variant === 'outline') {
    variantStyles = "border-2 border-red-100 bg-white/80 backdrop-blur-sm text-[#E10600] hover:border-[#E10600] hover:bg-[#E10600] hover:text-white shadow-[0_4px_10px_rgba(225,6,0,0.1)] hover:shadow-[0_8px_20px_rgba(225,6,0,0.25)] hover:-translate-y-0.5";
  } else if (variant === 'whatsapp') {
    variantStyles = "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_8px_20px_rgba(34,197,94,0.25)] hover:shadow-[0_8px_25px_rgba(34,197,94,0.4)] hover:-translate-y-0.5";
  }

  const finalHref = isWhatsApp ? generateWhatsAppLink(whatsappMessage) : href;

  if (finalHref) {
    return (
      <a 
        href={finalHref} 
        target={isWhatsApp || finalHref.startsWith('http') ? "_blank" : "_self"} 
        rel={isWhatsApp || finalHref.startsWith('http') ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
}
