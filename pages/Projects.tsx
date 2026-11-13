import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Reveal, Script, SectionTitle, Tag, scrollToId } from '../components/ui';
import { CloudEdge, Cross, DoodleField, Dots, PaperPlanes, Ring, Sparkle, Squiggle, Star } from '../components/Doodles';
import { useLightbox } from '../components/Lightbox';
import { aguaBuena, campaigns, works, url, themeOf, Campaign, MediaItem, Theme } from '../data/projects';

type Project = Campaign & { alignTop?: boolean };

const social = works.filter((w) => w.category !== 'Web') as Project[];
const web = works.filter((w) => w.category === 'Web') as Project[];

const chapters = [
  {
    id: 'cap-agua-buena',
    n: 1,
    title: 'Agua',
    script: 'Buena',
    blurb: 'Campañas para redes',
    items: campaigns as Project[],
    intro: aguaBuena.intro,
    meta: [
      ['Cliente', 'Agua Buena — agua mineralizada'],
      ['Rol', aguaBuena.role],
      ['Entregables', aguaBuena.deliverables],
    ],
  },
  {
    id: 'cap-marcas',
    n: 2,
    title: 'Redes &',
    script: 'Branding',
    blurb: 'Marcas y cuentas',
    items: social,
    intro: 'Gestión de cuentas, parrillas de contenido mensuales, promociones e identidad visual para marcas de distintos sectores.',
  },
  {
    id: 'cap-web',
    n: 3,
    title: 'Diseño',
    script: 'Web',
    blurb: 'Sitios y landings',
    items: web,
    intro: 'Diseño UX/UI de sitios web y landing pages con foco en claridad, identidad y conversión.',
  },
];

/* Cada proyecto tiene su propia estructura de presentación */
type Layout = 'bento' | 'phone-reel' | 'diptych' | 'marquee' | 'scatter' | 'deck' | 'feed' | 'marquee2' | 'split' | 'browser';
const LAYOUT: Record<string, Layout> = {
  prevencion: 'bento',
  constitucion: 'phone-reel',
  reforestacion: 'diptych',
  revital: 'marquee',
  familia: 'scatter',
  cindel: 'deck',
  novaweb: 'feed',
  musica: 'marquee2',
  comida: 'split',
  restaurante: 'browser',
  salon: 'browser',
  portafolio: 'browser',
};

/* ------------------------------------------------------------ Índice: cartas en abanico */

const ContentCards = () => {
  const fan = [
    { t: 'translate(-8%, 18px) rotate(-14deg)', h: 'translate(-8%, 0) rotate(-10deg)' },
    { t: 'translate(0, -10px) rotate(0deg)', h: 'translate(0, -26px) rotate(0deg)' },
    { t: 'translate(8%, 18px) rotate(14deg)', h: 'translate(8%, 0) rotate(10deg)' },
  ];
  return (
    <Reveal className="fan mt-14 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
      {chapters.map((c, i) => (
        <button
          key={c.id}
          onClick={() => scrollToId(c.id)}
          style={{ ['--fan' as any]: fan[i].t, ['--fan-hover' as any]: fan[i].h }}
          className={`relative w-[250px] md:w-[270px] shrink-0 rounded-[24px] p-3 text-left shadow-[0_30px_60px_-24px_rgba(0,0,0,.8)] md:-mx-3 ${
            i === 1 ? 'z-10 bg-grape text-white' : 'bg-cream text-night'
          }`}
        >
          <div className={`rounded-[16px] p-5 h-[300px] flex flex-col ${i === 1 ? 'bg-grape-3/60' : 'bg-night text-cream'}`}>
            <div className="flex items-start justify-between">
              <span className="font-display text-[56px] font-black leading-none">{c.n}</span>
              <Dots className={`h-3 w-9 ${i === 1 ? 'text-white/70' : 'text-grape-2'}`} />
            </div>
            <p className="mt-3 font-display text-[30px] font-extrabold leading-[0.95] tracking-tight">
              {c.title}
              <br />
              <Script className={`text-[38px] ${i === 1 ? 'text-sun' : 'text-grape-2'}`}>{c.script}</Script>
            </p>
            <ul className="mt-auto space-y-0.5 text-[13px] opacity-80">
              {c.items.slice(0, 5).map((p) => (
                <li key={p.slug} className="truncate">
                  · {p.title} {p.titleAccent}
                </li>
              ))}
            </ul>
          </div>
          <p className="px-2 pt-2.5 pb-1 text-[12px] font-semibold uppercase tracking-[0.12em] opacity-70">
            {c.blurb} · {c.items.length}
          </p>
        </button>
      ))}
    </Reveal>
  );
};

/* ------------------------------------------------------------ Portadilla de capítulo */

const ChapterDivider: React.FC<{ c: (typeof chapters)[number] }> = ({ c }) => (
  <div id={c.id} className="scroll-mt-16 relative overflow-hidden rounded-[32px] bg-night-2 px-6 py-16 md:py-24 text-center">
    <PaperPlanes count={3} />
    <DoodleField dense />
    <p className="absolute left-6 top-5 text-[13px] font-semibold text-cream/50">Portafolio</p>
    <p className="absolute right-6 top-5 text-[13px] font-semibold text-cream/50">2026</p>

    <Reveal className="relative mx-auto w-[220px] md:w-[260px]">
      <div className="absolute left-1/2 -bottom-10 h-20 w-[150%] -translate-x-1/2 rounded-[50%] bg-grape-3/70" aria-hidden />
      <div className="absolute left-1/2 -bottom-8 h-12 w-[110%] -translate-x-1/2 rounded-[50%] bg-grape/80 blur-[1px]" aria-hidden />
      <div className="relative rotate-[-4deg] rounded-[22px] bg-cream p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)] transition-transform duration-700 hover:rotate-0">
        <div className="rounded-[14px] bg-night px-5 pt-5 pb-8 text-left">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream font-display text-[30px] font-black text-night">
            {c.n}
          </span>
          <p className="mt-6 font-display text-[clamp(2rem,4vw,2.6rem)] font-black leading-[0.9] tracking-tight text-grape-2">{c.title}</p>
          <Script className="block text-[clamp(2.4rem,5vw,3.2rem)] leading-[0.9] text-cream">{c.script}</Script>
        </div>
      </div>
      <svg viewBox="0 0 300 80" className="absolute left-1/2 top-[58%] w-[150%] -translate-x-1/2 text-cream/80 pointer-events-none" aria-hidden>
        <path d="M20 40c0-22 260-34 260 0s-200 30-250 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <Sparkle className="absolute -right-8 -top-6 h-8 w-8 text-sun animate-twinkle" />
    </Reveal>

    <Reveal delay={150} className="relative mx-auto mt-20 max-w-2xl">
      <p className="text-[16px] md:text-[18px] leading-relaxed text-cream/75">{c.intro}</p>
      {'meta' in c && c.meta && (
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {c.meta.map(([k, v]) => (
            <div key={k} className="rounded-2xl bg-night-3 p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-grape-2">{k}</dt>
              <dd className="mt-1 text-[14px] leading-snug text-cream/90">{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </Reveal>
  </div>
);

/* ------------------------------------------------------------ Piezas compartidas */

type Ctx = { p: Project; th: Theme; i: number; total: number; onOpen: (idx: number) => void };

const onAccent = (th: Theme) => (th.light ? '#fff' : '#0E1525');

/** Miniatura clicable (imagen o video). */
const Piece: React.FC<{
  m: MediaItem;
  onClick: () => void;
  className?: string;
  ratio?: string;
  fit?: string;
  frame?: boolean;
  autoPlay?: boolean;
}> = ({ m, onClick, className = '', ratio = 'aspect-[4/5]', fit = '', frame = true, autoPlay }) => (
  <button
    onClick={onClick}
    aria-label={`Abrir ${m.alt ?? 'pieza'}`}
    className={`group relative block w-full ${ratio} overflow-hidden rounded-[14px] bg-black/20 ${
      frame ? 'ring-4 ring-white shadow-[0_24px_50px_-20px_rgba(0,0,0,.65)]' : ''
    } transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 ${className}`}
  >
    {m.type === 'video' ? (
      <>
        <video
          src={autoPlay ? url(m.src) : `${url(m.src)}#t=3`}
          muted
          playsInline
          loop={autoPlay}
          autoPlay={autoPlay}
          preload="metadata"
          className="h-full w-full object-cover"
        />
        {!autoPlay && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined flex h-14 w-14 items-center justify-center rounded-full bg-white text-night !text-[30px] transition-transform group-hover:scale-110">
              play_arrow
            </span>
          </span>
        )}
      </>
    ) : (
      <img src={url(m.src)} alt={m.alt ?? ''} loading="lazy" className={`h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${fit}`} />
    )}
  </button>
);

/** Bloque de texto: número, título, formato, descripción, alcance y botón. */
const SlideText: React.FC<Ctx & { center?: boolean; compact?: boolean; big?: boolean }> = ({ p, th, i, total, onOpen, center, compact, big }) => {
  const sub = th.light ? 'text-night/70' : 'text-white/80';
  return (
    <div className={center ? 'text-center flex flex-col items-center' : ''}>
      <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em]"
        style={{ background: th.accent, color: onAccent(th) }}
      >
        {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <h3
        className={`mt-5 font-display font-extrabold tracking-display leading-[0.92] ${
          big ? 'text-[clamp(2.8rem,8vw,7rem)]' : 'text-[clamp(2.2rem,4.2vw,3.6rem)]'
        }`}
      >
        {p.title}
        {big ? ' ' : <br />}
        <Script className="text-[1.25em] leading-[0.8]">
          <span style={{ color: th.accent }}>{p.titleAccent}</span>
        </Script>
      </h3>
      <p className={`mt-2 text-[14px] font-semibold ${sub}`}>{p.format}</p>
      {!compact && <p className={`mt-5 max-w-xl text-[15px] md:text-[16px] leading-relaxed ${sub}`}>{p.summary}</p>}
      <ul className={`mt-6 flex flex-wrap gap-2 ${center ? 'justify-center' : ''}`}>
        {p.tags.map((t) => (
          <li key={t}>
            <Tag dark={!th.light}>{t}</Tag>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onOpen(0)}
        className={`group mt-8 inline-flex h-11 items-center gap-2 rounded-full px-5 text-[14px] font-semibold transition-transform hover:scale-[1.03] ${
          th.light ? 'bg-night text-cream' : 'bg-white text-night'
        }`}
      >
        Ver las {p.media.length} piezas
        <span className="material-symbols-outlined !text-[18px] transition-transform group-hover:translate-x-0.5">arrow_forward</span>
      </button>
    </div>
  );
};

/** Contenedor del slide con fondo de marca, trama y doodles. */
const Shell: React.FC<{ p: Project; th: Theme; children: React.ReactNode; className?: string }> = ({ p, th, children, className = '' }) => (
  <article
    id={p.slug}
    className={`scroll-mt-20 relative overflow-hidden rounded-[32px] px-5 py-10 md:px-12 md:py-14 ${th.light ? 'text-night' : 'text-white'} ${className}`}
    style={{ background: th.bg }}
  >
    <div className={`absolute inset-0 ${th.light ? 'dots-dark' : 'dots'}`} aria-hidden />
    <div className="pointer-events-none absolute inset-0" style={{ color: th.accent }} aria-hidden>
      <Sparkle className="absolute right-[4%] top-[6%] h-7 w-7 animate-twinkle" />
      <Ring className="absolute left-[2%] bottom-[6%] h-10 w-10 opacity-70 animate-float-slow" />
      <Cross className="absolute right-[42%] bottom-[5%] h-6 w-6 opacity-60 animate-float" />
    </div>
    <div className="relative">{children}</div>
  </article>
);

/* ------------------------------------------------------------ Estructuras */

/** 1 · Bento: título arriba, mosaico con entrada escalonada. */
const Bento: React.FC<Ctx> = (c) => (
  <Shell {...c}>
    <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
      <Reveal className="col-span-12 lg:col-span-7 slide-l">
        <SlideText {...c} compact big />
      </Reveal>
      <Reveal delay={120} className="col-span-12 lg:col-span-5">
        <p className="text-[16px] leading-relaxed text-white/85">{c.p.summary}</p>
      </Reveal>
    </div>
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {c.p.media.slice(0, 9).map((m, idx) => (
        <Reveal key={m.src} delay={idx * 90} className={`pop ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}>
          <Piece m={m} onClick={() => c.onOpen(idx)} frame={false} className="rounded-[18px]" />
        </Reveal>
      ))}
    </div>
  </Shell>
);

/** Marco de teléfono. */
const Phone: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative mx-auto w-[230px] md:w-[260px] rounded-[42px] border-[10px] border-night bg-night p-0 shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)] ${className}`}>
    <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-night" aria-hidden />
    <div className="relative aspect-[9/19] overflow-hidden rounded-[32px] bg-black">{children}</div>
  </div>
);

/** 2 · Teléfono con el reel reproduciéndose + post inclinado. */
const PhoneReel: React.FC<Ctx> = (c) => {
  const video = c.p.media.find((m) => m.type === 'video');
  const vIdx = c.p.media.findIndex((m) => m.type === 'video');
  const post = c.p.media.find((m) => m.type !== 'video') ?? c.p.media[0];
  return (
    <Shell {...c}>
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-10 items-center">
        <Reveal className="col-span-12 lg:col-span-5 lg:order-2 slide-r">
          <SlideText {...c} />
        </Reveal>
        <div className="col-span-12 lg:col-span-7 lg:order-1 relative flex items-center justify-center gap-6">
          <Reveal className="hidden sm:block w-[44%] -rotate-6 translate-y-6">
            <Piece m={post} onClick={() => c.onOpen(0)} />
          </Reveal>
          {video && (
            <Reveal delay={150} className="pop">
              <button onClick={() => c.onOpen(vIdx)} aria-label="Ver reel" className="block">
                <Phone className="rotate-3">
                  <video src={url(video.src)} muted autoPlay loop playsInline className="h-full w-full object-cover" />
                  <span className="absolute left-3 top-8 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">● REEL</span>
                </Phone>
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </Shell>
  );
};

/** Hook de parallax según la posición en pantalla. */
function useParallax(factor: number) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${center * factor}px)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [factor]);
  return ref;
}

/** 3 · Díptico con parallax: dos piezas grandes que se desplazan a distinta velocidad. */
const Diptych: React.FC<Ctx> = (c) => {
  const a = useParallax(-0.08);
  const b = useParallax(0.1);
  return (
    <Shell {...c}>
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-center">
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6 py-6">
          <div ref={a} className="will-change-transform">
            <Reveal className="slide-l">
              <Piece m={c.p.media[0]} onClick={() => c.onOpen(0)} />
            </Reveal>
          </div>
          {c.p.media[1] && (
            <div ref={b} className="mt-16 will-change-transform">
              <Reveal delay={150} className="slide-r">
                <Piece m={c.p.media[1]} onClick={() => c.onOpen(1)} />
              </Reveal>
            </div>
          )}
        </div>
        <Reveal delay={100} className="col-span-12 lg:col-span-5">
          <SlideText {...c} />
        </Reveal>
      </div>
    </Shell>
  );
};

/** 4 · Cinta en movimiento: título grande y piezas desfilando (1 o 2 filas). */
const MarqueeRows: React.FC<Ctx & { rows: 1 | 2 }> = ({ rows, ...c }) => {
  const list = c.p.media;
  const half = Math.ceil(list.length / 2);
  const rowsData = rows === 2 ? [list.slice(0, half), list.slice(half)] : [list];
  const offset = (r: number) => (r === 0 ? 0 : half);
  return (
    <Shell {...c} className="!px-0">
      <div className="px-5 md:px-12 grid grid-cols-12 gap-y-6 md:gap-x-10 items-end">
        <Reveal className="col-span-12 lg:col-span-7">
          <SlideText {...c} compact big />
        </Reveal>
        <Reveal delay={100} className="col-span-12 lg:col-span-5">
          <p className={`text-[16px] leading-relaxed ${c.th.light ? 'text-night/75' : 'text-white/85'}`}>{c.p.summary}</p>
        </Reveal>
      </div>
      <div className="mt-10 flex flex-col gap-4 md:gap-5 -rotate-2 scale-[1.04]">
        {rowsData.map((row, r) => (
          <div key={r} className="overflow-hidden">
            <div className={`marquee-x flex w-max gap-4 md:gap-5 ${r === 1 ? 'rev' : ''}`}>
              {[0, 1].map((dup) => (
                <div key={dup} className="flex gap-4 md:gap-5" aria-hidden={dup === 1}>
                  {row.map((m, k) => (
                    <div key={m.src + dup} className={`shrink-0 ${rows === 2 ? 'w-[150px] md:w-[210px]' : 'w-[190px] md:w-[270px]'}`}>
                      <Piece m={m} onClick={() => c.onOpen(offset(r) + k)} ratio={rows === 2 ? 'aspect-square' : 'aspect-[4/5]'} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className={`mt-6 px-5 md:px-12 text-[12px] font-semibold uppercase tracking-[0.14em] ${c.th.light ? 'text-night/50' : 'text-white/55'}`}>
        Pasa el cursor para pausar · toca una pieza para ampliarla
      </p>
    </Shell>
  );
};

/** 5 · Fotos dispersas que caen sobre la mesa. */
const SCATTER = [
  { l: '0%', t: '6%', r: -8, w: '38%' },
  { l: '30%', t: '0%', r: 5, w: '36%' },
  { l: '62%', t: '8%', r: -4, w: '36%' },
  { l: '8%', t: '46%', r: 6, w: '34%' },
  { l: '38%', t: '44%', r: -6, w: '34%' },
  { l: '66%', t: '50%', r: 9, w: '32%' },
];
const Scatter: React.FC<Ctx> = (c) => (
  <Shell {...c}>
    <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-center">
      <Reveal className="col-span-12 lg:col-span-4">
        <SlideText {...c} />
      </Reveal>
      <div className="col-span-12 lg:col-span-8">
        {/* Escritorio: fotos dispersas */}
        <div className="relative hidden md:block h-[620px]">
          {c.p.media.slice(0, 6).map((m, idx) => (
            <Reveal
              key={m.src}
              delay={idx * 140}
              className="drop absolute hover:z-20"
              style={{ left: SCATTER[idx].l, top: SCATTER[idx].t, width: SCATTER[idx].w, ['--rot' as any]: `${SCATTER[idx].r}deg` }}
            >
              <div className="rounded-[10px] bg-white p-2 pb-8 shadow-[0_24px_50px_-18px_rgba(0,0,0,.7)] transition-transform duration-500 hover:scale-[1.06]">
                <Piece m={m} onClick={() => c.onOpen(idx)} frame={false} className="!rounded-[4px] hover:!translate-y-0" />
              </div>
            </Reveal>
          ))}
        </div>
        {/* Móvil: cuadrícula */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {c.p.media.slice(0, 4).map((m, idx) => (
            <Reveal key={m.src} delay={idx * 80} className="pop">
              <Piece m={m} onClick={() => c.onOpen(idx)} className={idx % 2 ? 'rotate-2' : '-rotate-2'} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </Shell>
);

/** 6 · Mazo de cartas que se abre en abanico (texto a la derecha). */
const Deck: React.FC<Ctx> = (c) => {
  const items = c.p.media.slice(0, 5);
  const n = items.length;
  return (
    <Shell {...c}>
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-10 items-center">
        <div className="col-span-12 lg:col-span-7 lg:order-1 order-2">
          <Reveal className="fan relative h-[300px] md:h-[440px] flex items-end justify-center mb-16 md:mb-20">
            {items.map((m, idx) => {
              const mid = (n - 1) / 2;
              const rot = (idx - mid) * 11;
              const x = (idx - mid) * 22;
              const y = Math.abs(idx - mid) * 18;
              return (
                <div
                  key={m.src}
                  className="absolute bottom-0 w-[140px] sm:w-[180px] md:w-[250px] origin-bottom hover:z-20"
                  style={{
                    ['--fan' as any]: `translate(${x}%, ${y}px) rotate(${rot}deg)`,
                    ['--fan-hover' as any]: `translate(${x}%, ${y - 30}px) rotate(${rot}deg) scale(1.06)`,
                    zIndex: idx === Math.round(mid) ? 10 : idx,
                  }}
                >
                  <Piece m={m} onClick={() => c.onOpen(idx)} ratio="aspect-square" />
                </div>
              );
            })}
          </Reveal>
        </div>
        <Reveal className="col-span-12 lg:col-span-5 lg:order-2 order-1 slide-r">
          <SlideText {...c} />
        </Reveal>
      </div>
    </Shell>
  );
};

/** 7 · Feed: teléfono con el perfil desplazándose solo + piezas sueltas. */
const Feed: React.FC<Ctx> = (c) => {
  // Número par para que el bucle de 2 columnas no salte
  const list = c.p.media.length % 2 ? c.p.media.slice(0, -1) : c.p.media;
  return (
    <Shell {...c}>
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-10 items-center">
        <Reveal className="col-span-12 lg:col-span-5 slide-l">
          <SlideText {...c} />
        </Reveal>
        <div className="col-span-12 lg:col-span-7 flex items-center justify-center gap-6">
          <Reveal className="pop">
            <Phone>
              <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 bg-black/80 px-3 pt-7 pb-2 backdrop-blur">
                <span className="h-7 w-7 rounded-full bg-white/90" />
                <span className="text-[11px] font-bold text-white">{c.p.title.toLowerCase()}</span>
              </div>
              <div className="feed grid grid-cols-2 gap-[3px] pt-16">
                {[...list, ...list].map((m, k) => (
                  <button key={m.src + k} onClick={() => c.onOpen(k % list.length)} className="block aspect-[4/5] overflow-hidden" aria-hidden={k >= list.length}>
                    <img src={url(m.src)} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </Phone>
          </Reveal>
          <div className="hidden md:flex flex-col gap-5 w-[34%]">
            {list.slice(1, 3).map((m, k) => (
              <Reveal key={m.src} delay={150 + k * 120} className="slide-r">
                <Piece m={m} onClick={() => c.onOpen(k + 1)} className={k ? '-rotate-3' : 'rotate-3'} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
};

/** 8 · Split clásico con piezas inclinadas. */
const Split: React.FC<Ctx> = (c) => {
  const [main, a, b] = c.p.media;
  const extra = Math.max(0, c.p.media.length - 3);
  return (
    <Shell {...c}>
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-center">
        <Reveal className="col-span-12 lg:col-span-4">
          <SlideText {...c} />
        </Reveal>
        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 md:gap-6 items-center">
          <Reveal className="col-span-7 pop">
            <Piece m={main} onClick={() => c.onOpen(0)} className="-rotate-2" />
          </Reveal>
          <div className="col-span-5 flex flex-col gap-4 md:gap-6">
            {a && (
              <Reveal delay={120} className="slide-r">
                <Piece m={a} onClick={() => c.onOpen(1)} className="rotate-3" />
              </Reveal>
            )}
            {b && (
              <Reveal delay={220} className="slide-r relative">
                <Piece m={b} onClick={() => c.onOpen(2)} className="-rotate-1" />
                {extra > 0 && (
                  <span className="absolute -right-2 -bottom-3 rotate-6 rounded-full px-3 py-1.5 text-[13px] font-extrabold shadow-lg" style={{ background: c.th.accent, color: onAccent(c.th) }}>
                    +{extra} piezas
                  </span>
                )}
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
};

/** 9 · Navegador: la web se recorre sola + miniaturas de las demás pantallas. */
const Browser: React.FC<Ctx & { flip?: boolean }> = ({ flip, ...c }) => {
  const [active, setActive] = React.useState(0);
  const list = c.p.media;
  return (
    <Shell {...c}>
      <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-center">
        <Reveal className={`col-span-12 lg:col-span-4 ${flip ? 'lg:order-2 slide-r' : 'slide-l'}`}>
          <SlideText {...c} />
        </Reveal>
        <div className={`col-span-12 lg:col-span-8 ${flip ? 'lg:order-1' : ''}`}>
          <Reveal className="pop">
            <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,.75)] ring-1 ring-black/10">
              <div className="flex items-center gap-2 bg-[#ECECEC] px-4 h-9">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-black/50">
                  www.{c.p.slug}.com
                </span>
              </div>
              <button onClick={() => c.onOpen(active)} className="block w-full aspect-[16/10] bg-white" aria-label="Ampliar pantalla">
                <img key={list[active].src} src={url(list[active].src)} alt={list[active].alt ?? ''} className="pan h-full w-full object-cover" />
              </button>
            </div>
          </Reveal>
          <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar">
            {list.map((m, k) => (
              <button
                key={m.src}
                onClick={() => setActive(k)}
                aria-label={`Ver pantalla ${k + 1}`}
                aria-pressed={k === active}
                className={`shrink-0 h-16 w-24 overflow-hidden rounded-lg bg-white transition-all ${
                  k === active ? 'ring-[3px] scale-105' : 'opacity-60 hover:opacity-100'
                }`}
                style={k === active ? { ['--tw-ring-color' as any]: c.th.accent } : undefined}
              >
                <img src={url(m.src)} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
};

const ProjectSlide: React.FC<{ p: Project; i: number; total: number; onOpen: (idx: number) => void }> = (props) => {
  const c: Ctx = { ...props, th: themeOf(props.p.slug) };
  switch (LAYOUT[props.p.slug]) {
    case 'bento':
      return <Bento {...c} />;
    case 'phone-reel':
      return <PhoneReel {...c} />;
    case 'diptych':
      return <Diptych {...c} />;
    case 'marquee':
      return <MarqueeRows {...c} rows={1} />;
    case 'marquee2':
      return <MarqueeRows {...c} rows={2} />;
    case 'scatter':
      return <Scatter {...c} />;
    case 'deck':
      return <Deck {...c} />;
    case 'feed':
      return <Feed {...c} />;
    case 'browser':
      return <Browser {...c} flip={props.i % 2 === 1} />;
    default:
      return <Split {...c} />;
  }
};

/* ------------------------------------------------------------ Página */

const Projects: React.FC = () => {
  const { open, node } = useLightbox();
  const [params] = useSearchParams();

  React.useEffect(() => {
    const target = params.get('c') || params.get('w');
    if (!target) return;
    const t = window.setTimeout(() => scrollToId(target), 150);
    return () => window.clearTimeout(t);
  }, [params]);

  return (
    <div className="relative bg-night">
      <div className="relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32">
        <PaperPlanes count={4} />
        <div className="pointer-events-none absolute inset-0 text-grape-2/60" aria-hidden>
          <Star className="absolute left-[10%] top-[18%] h-7 w-7 text-sun animate-twinkle" />
          <Squiggle className="absolute right-[8%] top-[22%] h-6 w-28" />
        </div>
        <Container className="relative">
          <SectionTitle kicker="elige una carta" center>
            Contenido
          </SectionTitle>
          <ContentCards />
        </Container>
      </div>

      <Container className="flex flex-col gap-6 md:gap-8 pb-24 md:pb-32">
        {chapters.map((c) => (
          <React.Fragment key={c.id}>
            <ChapterDivider c={c} />
            {c.items.map((p, i) => (
              <ProjectSlide key={p.slug} p={p} i={i} total={c.items.length} onOpen={(idx) => open(p.media, idx, `${p.title} ${p.titleAccent}`)} />
            ))}
          </React.Fragment>
        ))}

        <Reveal className="relative overflow-hidden rounded-[32px] bg-night-2 p-6 md:p-10">
          <Script className="block text-center text-[28px] text-grape-2 -rotate-1">todas las portadas de Agua Buena</Script>
          <button
            onClick={() => open([{ src: aguaBuena.overview, alt: 'Agua Buena — vista general de las cinco campañas' }], 0, 'Agua Buena')}
            className="mt-4 block w-full overflow-hidden rounded-[18px]"
            aria-label="Ampliar vista general"
          >
            <img src={url(aguaBuena.overview)} alt="Portadas de las cinco campañas de Agua Buena" loading="lazy" className="w-full h-auto" />
          </button>
        </Reveal>
      </Container>

      <CloudEdge className="absolute inset-x-0 -bottom-px h-10 md:h-16 w-full text-night-2" />
      {node}
    </div>
  );
};

export default Projects;
