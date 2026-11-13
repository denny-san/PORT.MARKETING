import React from 'react';
import { Link } from 'react-router-dom';

/** Desplazamiento suave a una sección de la página única. */
export const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export const Container: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`mx-auto w-full max-w-shell px-4 md:px-8 ${className}`}>{children}</div>
);

/** Revela el contenido al entrar en el viewport (añade la clase `is-in`). */
export const Reveal: React.FC<{
  as?: React.ElementType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ as = 'div', delay = 0, className = '', style, children }) => {
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
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ ...(delay ? { transitionDelay: `${delay}ms` } : {}), ...style }}>
      {children}
    </Tag>
  );
};

/** Texto manuscrito de acento. */
export const Script: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`font-script font-bold tracking-normal ${className}`}>{children}</span>
);

/** Alias para compatibilidad con secciones anteriores. */
export const Accent = Script;

/** Encabezado de sección: manuscrita + título bold. */
export const SectionTitle: React.FC<{ kicker: string; children: React.ReactNode; className?: string; center?: boolean }> = ({
  kicker,
  children,
  className = '',
  center,
}) => (
  <Reveal className={`${center ? 'text-center' : ''} ${className}`}>
    <Script className="block text-grape-2 text-[clamp(1.6rem,3vw,2.4rem)] leading-none -rotate-2">{kicker}</Script>
    <h2 className="mt-2 font-display font-extrabold tracking-display leading-[0.95] text-[clamp(2.4rem,6vw,5rem)] text-cream">{children}</h2>
  </Reveal>
);

const arrow = (
  <svg viewBox="0 0 16 16" className="h-[0.85em] w-[0.85em] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>
    <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

type BtnVariant = 'solid' | 'outline' | 'accent' | 'light' | 'grape' | 'cream';
const btnBase =
  'group inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-semibold transition-all duration-300 active:scale-[.97]';
const btnVariants: Record<BtnVariant, string> = {
  grape: 'bg-grape text-white hover:bg-grape-2 shadow-[0_8px_30px_-8px_rgba(59,130,246,.7)]',
  cream: 'bg-cream text-night hover:bg-white',
  light: 'border-2 border-cream/25 text-cream hover:border-cream hover:bg-cream hover:text-night',
  /* Variantes del documento CV (fondo claro) */
  solid: 'bg-ink text-paper hover:bg-ink-2',
  outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  accent: 'bg-accent text-ink hover:bg-[#FFDD33]',
};

export const Button: React.FC<{
  to?: string;
  href?: string;
  variant?: BtnVariant;
  external?: boolean;
  download?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  noArrow?: boolean;
  children: React.ReactNode;
}> = ({ to, href, variant = 'grape', external, download, onClick, className = '', style, noArrow, children }) => {
  const cls = `${btnBase} ${btnVariants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {!noArrow && arrow}
    </>
  );
  if (to?.startsWith('#'))
    return (
      <button type="button" onClick={() => scrollToId(to.slice(1))} className={cls} style={style}>
        {content}
      </button>
    );
  if (to) return <Link to={to} className={cls} style={style}>{content}</Link>;
  if (href)
    return (
      <a
        href={href}
        className={cls}
        style={style}
        download={download}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls} style={style}>
      {content}
    </button>
  );
};

export const Tag: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark = true }) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium leading-none ${
      dark ? 'border-white/25 text-white/85' : 'border-black/15 text-black/70'
    }`}
  >
    {children}
  </span>
);
