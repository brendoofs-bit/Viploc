# System Instructions para a Viploc

Para qualquer modificação nas páginas (Home, Category, Product, etc.), mantenha estritamente o seguinte padrão visual, extraído do layout da Homepage:

## 1. Cores e Tema
- **Vermelho Principal:** Use `#E10600` para destaques, botões primários e ícones. Para fundos com opacidade, use `bg-red-50/30` ou variações.
- **Tons de Cinza:** 
  - Fundo de seções alternadas: `bg-gray-50`.
  - Bordas de separação: `border-gray-100` ou `border-gray-200`.
  - Títulos principais: `text-gray-900`.
  - Subtítulos e parágrafos: `text-gray-600` ou `text-gray-500`.

## 2. Estrutura de Layout e Espaçamento
- Todas as seções devem usar a estrutura de contêiner centralizado:
  ```html
  <section className="py-20 bg-gray-50"> <!-- bg-white ou bg-gray-50, py-16 a py-24 -->
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Conteúdo */}
    </div>
  </section>
  ```
- O valor padrão de padding vertical de seções completas é `py-16`, `py-20` ou `py-24`.

## 3. Tipografia
- Títulos de seções (h2/h3): Devem utilizar `font-extrabold` (peso 800) e `tracking-tight` (opcional). Exemplo: `text-3xl md:text-4xl font-extrabold text-gray-900`.
- Labels de destaque antes de títulos (Ex: "Orgulho Carioca"): `text-sm font-bold text-[#E10600] uppercase tracking-widest block mb-2`.
- Textos descritivos: `text-lg text-gray-600 leading-relaxed`.

## 4. Estilo de Botões
- CTA padrão WhatsApp: Utilize o Button com as propriedades de WhatsApp, ícone do WhatsApp, e sombras exclusivas para chamar a atenção com estilo moderno: 
  Exemplo: `shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20b958] transition-all duration-200`.

## 5. Efeitos e Interações (Cards, Imagens e Hover)
- Modais e Cards de Produto: Devem ter fundo branco `bg-white`, canto arredondado `rounded-2xl` ou `rounded-3xl`, e sombras suaves com variação no hover (`shadow-sm hover:shadow-xl transition-shadow`).
- Imagens de Categoria/Produto: Empregue classes como `mix-blend-multiply` ou `mix-blend-darken` (quando aplicável) para as thumbnails sobre fundo cinza-claro (`bg-gray-100` ou `bg-gray-50`), adicionando o efeito `hover:scale-105 transition-transform duration-500` para melhor experiência.

Seguindo esses padrões, garantimos que toda e qualquer nova página ou alteração mantenha alinhamento rigoroso com a identidade da marca e o layout proposto para o site da Viploc.
