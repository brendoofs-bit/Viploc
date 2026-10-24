import { Routes, Route } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import Home from '@/pages/Home';
import CatalogIndex from '@/pages/CatalogIndex';
import Category from '@/pages/Category';
import Product from '@/pages/Product';
import LocalHub from '@/pages/LocalHub';
import LocalPage from '@/pages/LocalPage';
import BlogList from '@/pages/BlogList';
import BlogPost from '@/pages/BlogPost';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';
import FreezerLandingPage from '@/pages/FreezerLandingPage';

// O roteador (BrowserRouter no navegador, StaticRouter no pré-render) é fornecido por main.tsx / entry-server.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/lp/freezers" element={<FreezerLandingPage />} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="locacao" element={<CatalogIndex />} />
        <Route path="locacao/:categorySlug" element={<Category />} />
        <Route path="locacao/:categorySlug/:productSlug" element={<Product />} />
        <Route path="rio-de-janeiro" element={<LocalHub />} />
        <Route path="rio-de-janeiro/:locationSlug" element={<LocalPage />} />
        <Route path="sobre" element={<About />} />
        <Route path="contato" element={<Contact />} />
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:postSlug" element={<BlogPost />} />
        <Route path="politica-de-privacidade" element={<Privacy />} />
        <Route path="termos-de-uso" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
