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
