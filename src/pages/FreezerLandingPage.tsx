import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import HeroSection from '@/components/landing/HeroSection';
import ProductGrid from '@/components/landing/ProductGrid';
import BenefitsAndTrust from '@/components/landing/BenefitsAndTrust';
import FaqAndCta from '@/components/landing/FaqAndCta';

export default function FreezerLandingPage() {
  const whatsappLink = generateWhatsAppLink('Olá! Gostaria de um orçamento para locação de freezers.');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-[#E10600] selection:text-white">
      <Helmet>
        <title>Locação de Freezers Comerciais e Industriais | Viploc</title>
        <meta name="description" content="Aluguel de freezers horizontais e verticais para eventos, feiras e comércios no Rio de Janeiro. Equipamentos revisados e entrega rápida." />
      </Helmet>

      {/* Navbar Flutuante Minimalista */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 md:h-20 items-center justify-between rounded-2xl bg-white/80 px-6 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <Link to="/" className="flex items-center gap-1 group">
            <div className="flex items-center tracking-tighter">
              <span className="text-2xl md:text-3xl font-black text-[#E10600] uppercase">VIP</span>
              <span className="text-2xl md:text-3xl font-black text-gray-900 uppercase group-hover:text-gray-700 transition-colors">LOC</span>
            </div>
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#E10600] px-4 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-red-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Falar com Consultor</span>
            <span className="sm:hidden">Consultor</span>
          </a>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProductGrid />
        <BenefitsAndTrust />
        <FaqAndCta />
      </main>

      {/* Footer Técnico Minimalista */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center tracking-tighter">
              <span className="text-2xl font-black text-[#E10600] uppercase">VIP</span>
              <span className="text-2xl font-black text-white uppercase">LOC</span>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Viploc Locações. Todos os direitos reservados.<br/>
              CNPJ: 12.345.678/0001-90
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
