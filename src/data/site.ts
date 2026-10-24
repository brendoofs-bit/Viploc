// Dados institucionais usados em metatags, schema.org e CTAs.
export const SITE_URL = 'https://viploc.com.br';
export const SITE_NAME = 'Viploc Locações';
export const WHATSAPP_NUMBER = '5521991605699';
export const PHONE_DISPLAY = '(21) 99160-5699';
export const PHONE_E164 = '+55-21-99160-5699';
export const LOGO_URL = 'https://res.cloudinary.com/dt8fp7f6t/image/upload/v1780350671/viploc_logo_vermelha_pzzth2.png';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

// Perfis oficiais: usados no rodapé e no "sameAs" do schema LocalBusiness.
export const GOOGLE_BUSINESS_URL = 'https://share.google/bNPCkReztG5JPaa48';
export const INSTAGRAM_URL = 'https://www.instagram.com/viploc_/';
export const SAME_AS: string[] = [GOOGLE_BUSINESS_URL, INSTAGRAM_URL];

export const AREA_SERVED = [
  'Rio de Janeiro',
  'Zona Sul do Rio de Janeiro',
  'Zona Norte do Rio de Janeiro',
  'Zona Oeste do Rio de Janeiro',
  'Centro do Rio de Janeiro',
];

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
