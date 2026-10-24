import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';

export { getSiteRoutes } from './data/routes';
export { SITE_URL } from './data/site';

// Usado por scripts/prerender.mjs para gerar o HTML estático de cada rota.
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
}
