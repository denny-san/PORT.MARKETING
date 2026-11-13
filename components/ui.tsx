import React from 'react';
import { Link } from 'react-router-dom';

export const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-shell px-5 md:px-10 ${className}`}>{children}</div>
);

/** Etiqueta pequeña tipo índice editorial: "(01) — Texto" */
export const Eyebrow: React.FC<{ index?: string; children: React.ReactNode; className?: string }> = ({
  index,
  children,
  className = '',
}) => (
  <p className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted ${className}`}>
    {index && <span className="text-current">({index})</span>}
    <span className="h-px w-8 bg-current opacity-40" aria-hidden />
    <span>{children}</span>
  </p>
);

/** Revela el contenido al entrar en el viewport. */
export const Reveal: React.FC<{
  as?: React.ElementType;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}> = ({ as = 'div', delay = 0, className = '', children }) => {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
};

/** Encabezado de página consistente para todas las secciones internas. */
export const PageHeader: React.FC<{
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}> = ({ index, label, title, intro }) => (
  <header className="pt-16 md:pt-28 pb-14 md:pb-20 border-b border-line">
    <Container>
      <Reveal>
        <Eyebrow index={index}>{label}</Eyebrow>
      </Reveal>
      <div className="mt-8 grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
        <Reveal as="h1" delay={80} className="col-span-12 lg:col-span-8 font-display font-semibold tracking-display leading-[0.92] text-[clamp(2.75rem,8vw,7rem)] text-balance">
          {title}
        </Reveal>
        {intro && (
          <Reveal delay={160} className="col-span-12 lg:col-span-4 text-[17px] leading-relaxed text-muted text-pretty">
            {intro}
          </Reveal>
        )}
      </div>
    </Container>
  </header>
);

/** Acento tipográfico en serif itálica. */
export const Accent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`font-serif italic font-normal tracking-normal ${className}`}>{children}</span>
);

const arrow = (
  <svg viewBox="0 0 16 16" className="h-[0.8em] w-[0.8em] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>
    <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

type BtnVariant = 'solid' | 'outline' | 'accent' | 'light';
const btnBase =
  'group inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-medium tracking-tightish transition-colors duration-300';
const btnVariants: Record<BtnVariant, string> = {
  solid: 'bg-ink text-paper hover:bg-ink-2',
  outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  accent: 'bg-accent text-ink hover:bg-[#FFDD33]',
  light: 'border border-paper/25 text-paper hover:bg-paper hover:text-ink',
};

export const Button: React.FC<{
  to?: string;
  href?: string;
  variant?: BtnVariant;
  external?: boolean;
  download?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}> = ({ to, href, variant = 'solid', external, download, onClick, className = '', children }) => {
  const cls = `${btnBase} ${btnVariants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow}
    </>
  );
  if (to) return <Link to={to} className={cls}>{content}</Link>;
  if (href)
    return (
      <a
        href={href}
        className={cls}
        download={download}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls}>
      {content}
    </button>
  );
};

export const Tag: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark }) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] leading-none ${
      dark ? 'border-paper/20 text-paper/70' : 'border-line text-muted'
    }`}
  >
    {children}
  </span>
);
