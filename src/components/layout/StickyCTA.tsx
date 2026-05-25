import { generateWhatsAppLink } from '@/utils/whatsapp';
import { MessageCircle } from 'lucide-react';

export function StickyCTA() {
  const message = "Olá, estou visitando o site de vocês e gostaria de solicitar um orçamento rápido. Qual o melhor custo-benefício?";
  const wppLink = generateWhatsAppLink(message);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 md:bottom-8 md:right-8">
      <div className="animate-bounce rounded-t-lg rounded-bl-lg bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-xl border border-gray-100">
        Precisa de ajuda?
      </div>
      <a 
        href={wppLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Falar conosco no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
