import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { StickyCTA } from './StickyCTA';
import Lenis from 'lenis';

export default function RootLayout() {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical', 
      gestureOrientation: 'vertical', 
      smoothWheel: true, 
      wheelMultiplier: 1, 
      touchMultiplier: 2, 
      infinite: false, 
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 font-sans selection:bg-red-100 selection:text-[#E10600]">
      <Header />
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
