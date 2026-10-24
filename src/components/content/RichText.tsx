import Markdown, { type Components } from 'react-markdown';
import { Link } from 'react-router-dom';

// Links internos ("/locacao/...") viram <Link> do router; externos abrem em nova aba.
export const markdownLinkComponents: Components = {
  a: ({ href = '', children }) =>
    href.startsWith('/') ? (
      <Link to={href} className="font-semibold text-[#E10600] hover:underline">{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#E10600] hover:underline">{children}</a>
    ),
};

// Texto curto em Markdown (negrito e links) usado nos conteúdos de categoria.
export function RichText({ children, inline = false, className = 'text-lg text-gray-600 leading-relaxed' }: {
  children: string;
  inline?: boolean;
  className?: string;
}) {
  return (
    <Markdown
      components={{
        ...markdownLinkComponents,
        p: ({ children: content }) => (inline ? <>{content}</> : <p className={className}>{content}</p>),
        strong: ({ children: content }) => <strong className="font-semibold text-gray-900">{content}</strong>,
      }}
    >
      {children}
    </Markdown>
  );
}

// Estilo dos artigos do blog (títulos, parágrafos e listas), no padrão visual do AGENTS.md.
export const articleComponents: Components = {
  ...markdownLinkComponents,
  h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mt-12 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-extrabold text-gray-900 mt-8 mb-3">{children}</h3>,
  p: ({ children }) => <p className="text-lg text-gray-600 leading-relaxed mb-5">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-gray-600 leading-relaxed marker:text-[#E10600]">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-lg text-gray-600 leading-relaxed marker:font-bold marker:text-[#E10600]">{children}</ol>,
  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
};
