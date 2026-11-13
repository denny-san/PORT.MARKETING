import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Reveal, Script, SectionTitle, Tag, scrollToId } from '../components/ui';
import { CloudEdge, Cross, DoodleField, Dots, Ring, Sparkle, Squiggle, Star } from '../components/Doodles';
import { useLightbox } from '../components/Lightbox';
import { aguaBuena, campaigns, works, url, themeOf, Campaign } from '../data/projects';

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
    <DoodleField dense />
    <p className="absolute left-6 top-5 text-[13px] font-semibold text-cream/50">Portafolio</p>
    <p className="absolute right-6 top-5 text-[13px] font-semibold text-cream/50">2026</p>

    <Reveal className="relative mx-auto w-[220px] md:w-[260px]">
      {/* Escenario */}
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

/* ------------------------------------------------------------ Slide de proyecto */

const ProjectSlide: React.FC<{ p: Project; i: number; total: number; onOpen: (idx: number) => void }> = ({ p, i, total, onOpen }) => {
  const th = themeOf(p.slug);
  const fg = th.light ? 'text-night' : 'text-white';
  const sub = th.light ? 'text-night/70' : 'text-white/80';
  const [main, a, b] = p.media;
  const extra = Math.max(0, p.media.length - 3);
  const fit = p.alignTop ? 'object-top' : '';

  const Thumb: React.FC<{ m: typeof main; idx: number; className?: string; label?: string }> = ({ m, idx, className = '', label }) => (
    <figure className={className}>
      <button
        onClick={() => onOpen(idx)}
        className="group relative block w-full aspect-[4/5] overflow-hidden rounded-[14px] bg-black/20 ring-4 ring-white shadow-[0_24px_50px_-20px_rgba(0,0,0,.65)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 hover:rotate-0"
        aria-label={`Abrir ${m.alt ?? 'pieza'}`}
      >
        {m.type === 'video' ? (
          <>
            <video src={`${url(m.src)}#t=3`} muted playsInline preload="metadata" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined flex h-14 w-14 items-center justify-center rounded-full bg-white text-night !text-[30px] transition-transform group-hover:scale-110">
                play_arrow
              </span>
            </span>
          </>
        ) : (
          <img
            src={url(m.src)}
            alt={m.alt ?? ''}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 ${fit}`}
          />
        )}
      </button>
      {label && <figcaption className={`mt-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] ${sub}`}>{label}</figcaption>}
    </figure>
  );

  return (
    <article
      id={p.slug}
      className={`scroll-mt-20 relative overflow-hidden rounded-[32px] px-5 py-10 md:px-12 md:py-14 ${fg}`}
      style={{ background: th.bg }}
    >
      <div className={`absolute inset-0 ${th.light ? 'dots-dark' : 'dots'}`} aria-hidden />
      <div className="pointer-events-none absolute inset-0" style={{ color: th.accent }} aria-hidden>
        <Sparkle className="absolute right-[4%] top-[6%] h-7 w-7 animate-twinkle" />
        <Ring className="absolute left-[2%] bottom-[6%] h-10 w-10 opacity-70 animate-float-slow" />
        <Cross className="absolute right-[42%] bottom-[5%] h-6 w-6 opacity-60 animate-float" />
      </div>

      <div className="relative grid grid-cols-12 gap-y-10 md:gap-x-10 items-center">
        {/* Texto */}
        <Reveal className="col-span-12 lg:col-span-4">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-[0.1em]"
            style={{ background: th.accent, color: th.light ? '#fff' : '#1C1B20' }}
          >
            {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <h3 className="mt-5 font-display font-extrabold tracking-display leading-[0.95] text-[clamp(2.2rem,4.2vw,3.6rem)]">
            {p.title}
            <br />
            <Script className="text-[1.25em] leading-[0.8]" >
              <span style={{ color: th.accent }}>{p.titleAccent}</span>
            </Script>
          </h3>
          <p className={`mt-2 text-[14px] font-semibold ${sub}`}>{p.format}</p>
          <p className={`mt-5 text-[15px] md:text-[16px] leading-relaxed ${sub}`}>{p.summary}</p>

          <p className="mt-6 font-display text-[15px] font-bold" style={{ color: th.accent }}>
            Alcance
          </p>
          <ul className="mt-1.5 flex flex-wrap gap-2">
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
        </Reveal>

        {/* Mockups */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-center">
            <Reveal className="col-span-7">
              <Thumb m={main} idx={0} className="-rotate-2" label="Portada" />
            </Reveal>
            <div className="col-span-5 flex flex-col gap-4 md:gap-6">
              {a && (
                <Reveal delay={120}>
                  <Thumb m={a} idx={1} className="rotate-3" />
                </Reveal>
              )}
              {b && (
                <Reveal delay={220} className="relative">
                  <Thumb m={b} idx={2} className="-rotate-1" />
                  {extra > 0 && (
                    <button
                      onClick={() => onOpen(3)}
                      className="absolute -right-2 -bottom-3 rotate-6 rounded-full px-3 py-1.5 text-[13px] font-extrabold shadow-lg"
                      style={{ background: th.accent, color: th.light ? '#fff' : '#1C1B20' }}
                    >
                      +{extra} piezas
                    </button>
                  )}
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
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
      {/* Índice de contenido */}
      <div className="relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32">
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

        {/* Vista general Agua Buena como cierre visual */}
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
