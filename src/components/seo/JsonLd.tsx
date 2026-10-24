// Renderiza dados estruturados schema.org. O "<" é escapado para que nenhum texto feche a tag <script>.
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
