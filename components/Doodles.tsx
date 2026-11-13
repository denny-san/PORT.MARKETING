import React from 'react';

/* Doodles dibujados a mano (trazos propios) para decorar las secciones. */

type P = { className?: string; style?: React.CSSProperties };
const S = (props: P & { children: React.ReactNode; viewBox?: string }) => (
  <svg
    viewBox={props.viewBox ?? '0 0 40 40'}
    className={props.className}
    style={props.style}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {props.children}
  </svg>
);

export const Sparkle = (p: P) => (
  <svg viewBox="0 0 40 40" className={p.className} style={p.style} aria-hidden>
    <path d="M20 2c1.6 9.4 8.6 16.4 18 18-9.4 1.6-16.4 8.6-18 18-1.6-9.4-8.6-16.4-18-18 9.4-1.6 16.4-8.6 18-18Z" fill="currentColor" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 40 40" className={p.className} style={p.style} aria-hidden>
    <path d="m20 3 5 11 12 1.5-9 8.2 2.6 11.8L20 29.6 9.4 35.5 12 23.7l-9-8.2L15 14Z" fill="currentColor" />
  </svg>
);

export const Cross = (p: P) => (
  <S {...p}>
    <path d="M10 10l20 20M30 10 10 30" />
  </S>
);

export const Ring = (p: P) => (
  <S {...p}>
    <circle cx="20" cy="20" r="13" />
  </S>
);

export const Triangle = (p: P) => (
  <S {...p}>
    <path d="M20 7 34 32H6Z" />
  </S>
);

export const Squiggle = (p: P) => (
  <S {...p} viewBox="0 0 120 30">
    <path d="M4 18c10-14 18 12 28 0s18-12 28 0 18 12 28 0 18-12 28 0" />
  </S>
);

export const Scribble = (p: P) => (
  <S {...p} viewBox="0 0 80 40">
    <path d="M6 30c8-22 22-24 18-6-3 13 14 10 20-6 4-10 12-12 12-2 0 8 8 10 18 2" />
  </S>
);

export const Burst = (p: P) => (
  <S {...p}>
    <path d="M20 4v8M20 28v8M4 20h8M28 20h8M8.7 8.7l5.6 5.6M25.7 25.7l5.6 5.6M8.7 31.3l5.6-5.6M25.7 14.3l5.6-5.6" />
  </S>
);

export const Drop = (p: P) => (
  <S {...p}>
    <path d="M20 5c6 9 11 14 11 20a11 11 0 0 1-22 0c0-6 5-11 11-20Z" />
    <path d="M15 26a5 5 0 0 0 5 5" />
  </S>
);

export const Dots = (p: P) => (
  <svg viewBox="0 0 40 16" className={p.className} style={p.style} aria-hidden>
    {[6, 20, 34].map((x) => (
      <circle key={x} cx={x} cy="8" r="4" fill="currentColor" />
    ))}
  </svg>
);

/** Borde inferior de nubes para separar bloques. */
export const CloudEdge: React.FC<P> = ({ className, style }) => (
  <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={className} style={style} aria-hidden>
    <path
      d="M0 90V52c40-30 92-34 132-8 30-34 96-40 132-6 36-30 104-28 132 8 34-40 112-44 150-2 40-34 112-32 140 8 36-36 108-36 140 2 38-34 104-30 136 6 34-30 98-34 132 0 32-26 82-30 116-6 40-18 72-4 90 8v38Z"
      fill="currentColor"
    />
  </svg>
);

/** Conjunto de doodles flotantes posicionados en las esquinas de un bloque. */
export const DoodleField: React.FC<{ tone?: string; dense?: boolean }> = ({ tone = 'text-grape-2', dense }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${tone}`} aria-hidden>
    <Sparkle className="absolute left-[6%] top-[12%] h-6 w-6 animate-twinkle" />
    <Cross className="absolute right-[8%] top-[10%] h-7 w-7 opacity-70 animate-float" />
    <Ring className="absolute left-[3%] bottom-[18%] h-8 w-8 opacity-60 animate-float-slow" />
    <Triangle className="absolute right-[4%] bottom-[14%] h-8 w-8 opacity-60 animate-wiggle" />
    {dense && (
      <>
        <Sparkle className="absolute right-[22%] top-[26%] h-4 w-4 animate-twinkle [animation-delay:.8s]" />
        <Squiggle className="absolute left-[18%] bottom-[6%] h-6 w-24 opacity-50" />
        <Burst className="absolute left-[40%] top-[6%] h-6 w-6 opacity-60 animate-twinkle [animation-delay:1.4s]" />
      </>
    )}
  </div>
);
