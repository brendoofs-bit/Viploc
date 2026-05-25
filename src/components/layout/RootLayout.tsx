import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { StickyCTA } from './StickyCTA';
import Lenis from 'lenis';

export default function RootLayout() {
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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
