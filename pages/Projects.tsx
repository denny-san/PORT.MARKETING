import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Accent, Button, Container, Eyebrow, PageHeader, Reveal, Tag } from '../components/ui';
import { useLightbox } from '../components/Lightbox';
import { aguaBuena, campaigns, works, url, Campaign, Work } from '../data/projects';

/* ------------------------------------------------------------ Campaña */

const CampaignBlock: React.FC<{ c: Campaign; i: number; onOpen: (idx: number) => void }> = ({ c, i, onOpen }) => {
  const visible = c.media.slice(0, 6);
  const extra = c.media.length - visible.length;

  return (
    <article id={c.slug} className="scroll-mt-24 grid grid-cols-12 gap-y-10 md:gap-x-10 py-16 md:py-24 border-t border-paper/10 first:border-t-0">
      <div className="col-span-12 lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
            {String(i + 1).padStart(2, '0')} / {String(campaigns.length).padStart(2, '0')} · {c.format}
          </p>
          <h3 className="mt-5 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2rem,4vw,3.5rem)]">
            {c.title} <Accent className="text-accent">{c.titleAccent}</Accent>
          </h3>
          <p className="mt-6 text-[16px] leading-relaxed text-paper/70 max-w-md text-pretty">{c.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <Tag key={t} dark>
                {t}
              </Tag>
            ))}
          </div>
          <button
            onClick={() => onOpen(0)}
            className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-paper link-u"
          >
            Ver las {c.media.length} piezas
          </button>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <div className={`grid gap-3 md:gap-4 ${visible.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
          {visible.map((m, idx) => {
            const isLast = idx === visible.length - 1 && extra > 0;
            return (
              <Reveal key={m.src} delay={(idx % 3) * 60}>
                <button
                  onClick={() => onOpen(idx)}
                  className="group relative block w-full aspect-[4/5] overflow-hidden rounded-[3px] bg-ink-2"
                  aria-label={`Abrir ${m.alt ?? 'pieza'}`}
                >
                  {m.type === 'video' ? (
                    <>
                      <video
                        src={`${url(m.src)}#t=3`}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:scale-110">
                          <span className="material-symbols-outlined !text-[30px]">play_arrow</span>
                        </span>
                      </span>
                      <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper backdrop-blur">
                        Reel
                      </span>
                    </>
                  ) : (
                    <img
                      src={url(m.src)}
                      alt={m.alt ?? ''}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                    />
                  )}
                  {isLast && (
                    <span className="absolute inset-0 flex items-center justify-center bg-ink/60 font-display text-[28px] font-semibold tracking-display text-paper">
                      +{extra}
                    </span>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </article>
  );
};

/* ------------------------------------------------------------ Tarjeta de proyecto */

const ratioCls: Record<Work['ratio'], string> = {
  portrait: 'aspect-[4/3]',
  square: 'aspect-[4/3]',
  landscape: 'aspect-[4/3]',
};

const WorkCard: React.FC<{ w: Work; onOpen: () => void; index: number }> = ({ w, onOpen, index }) => (
  <Reveal delay={(index % 3) * 70}>
    <button id={w.slug} onClick={onOpen} className="group block w-full text-left scroll-mt-24">
      <div className={`relative ${ratioCls[w.ratio]} overflow-hidden rounded-[4px] bg-paper-2 ${w.ratio === 'landscape' ? 'border border-line' : ''}`}>
        {w.ratio === 'landscape' && (
          <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center gap-1.5 bg-paper px-3 border-b border-line" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
          </div>
        )}
        <img
          src={url(w.cover)}
          alt={w.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] ${
            w.ratio === 'landscape' ? 'object-top pt-6' : ''
          }`}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-paper/90 px-3 py-1.5 text-[12px] font-medium opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur">
          {w.media.length} piezas ↗
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-[20px] font-semibold tracking-tightish">{w.title}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{w.category}</span>
      </div>
      <p className="mt-1.5 text-[14px] leading-relaxed text-muted text-pretty">{w.summary}</p>
    </button>
  </Reveal>
);

/* ------------------------------------------------------------ Página */

const FILTERS = ['Todos', 'Redes sociales', 'Branding', 'Web'] as const;
type Filter = (typeof FILTERS)[number];

const Projects: React.FC = () => {
  const { open, node } = useLightbox();
  const [params] = useSearchParams();
  const [filter, setFilter] = React.useState<Filter>('Todos');

  // Deep-link: /projects?c=familia o /projects?w=cindel
  React.useEffect(() => {
    const target = params.get('c') || params.get('w');
    if (!target) return;
    const t = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => window.clearTimeout(t);
  }, [params]);

  const list = filter === 'Todos' ? works : works.filter((w) => w.category === filter);

  return (
    <>
      <PageHeader
        index="P"
        label="Proyectos seleccionados"
        title={
          <>
            Trabajo que <Accent>se ve</Accent> y se siente.
          </>
        }
        intro="Campañas para redes sociales, identidad visual y sitios web. Una selección de proyectos reales con marcas de República Dominicana."
      />

      {/* ------------------------------------------------ CASO AGUA BUENA */}
      <section aria-labelledby="ab-title" className="on-dark bg-ink text-paper">
        <Container className="pt-20 md:pt-28">
          <Reveal>
            <Eyebrow index="01" className="!text-paper/50">
              Caso destacado
            </Eyebrow>
          </Reveal>
          <div className="mt-8 grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
            <Reveal as="h2" className="col-span-12 lg:col-span-7 font-display font-semibold tracking-display leading-[0.9] text-[clamp(3rem,8vw,7.5rem)]">
              <span id="ab-title">Agua Buena</span>
            </Reveal>
            <Reveal delay={100} className="col-span-12 lg:col-span-5">
              <p className="text-[17px] leading-relaxed text-paper/70 text-pretty">{aguaBuena.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-paper/15">
              {[
                ['Cliente', 'Agua Buena — agua mineralizada'],
                ['Rol', aguaBuena.role],
                ['Entregables', aguaBuena.deliverables],
                ['Alcance', `${campaigns.length} campañas · ${campaigns.reduce((n, c) => n + c.media.length, 0)} piezas`],
              ].map(([k, v]) => (
                <div key={k} className="py-6 pr-6 border-b border-paper/15 md:border-b-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/45">{k}</dt>
                  <dd className="mt-2 text-[15px] leading-snug text-paper/90">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>

        <Reveal className="mt-10 md:mt-14">
          <button
            onClick={() =>
              open([{ src: aguaBuena.overview, alt: 'Agua Buena — vista general de las cinco campañas' }], 0, 'Agua Buena')
            }
            className="block w-full overflow-hidden"
            aria-label="Ampliar vista general de las campañas"
          >
            <img src={url(aguaBuena.overview)} alt="Portadas de las cinco campañas de Agua Buena" className="w-full h-auto" />
          </button>
        </Reveal>

        <Container className="pb-12 md:pb-20">
          <nav aria-label="Campañas" className="flex gap-2 overflow-x-auto no-scrollbar py-8 border-b border-paper/10">
            {campaigns.map((c, i) => (
              <a
                key={c.slug}
                href={`#/projects?c=${c.slug}`}
                className="shrink-0 rounded-full border border-paper/20 px-4 py-2 text-[13px] text-paper/80 hover:bg-paper hover:text-ink transition-colors"
              >
                <span className="font-mono text-paper/40 mr-2">{String(i + 1).padStart(2, '0')}</span>
                {c.title} {c.titleAccent}
              </a>
            ))}
          </nav>

          {campaigns.map((c, i) => (
            <CampaignBlock key={c.slug} c={c} i={i} onOpen={(idx) => open(c.media, idx, `${c.title} ${c.titleAccent}`)} />
          ))}
        </Container>
      </section>

      {/* ------------------------------------------------ OTROS PROYECTOS */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8 mb-12 md:mb-16">
            <Reveal>
              <Eyebrow index="02">Más proyectos</Eyebrow>
              <h2 className="mt-6 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2.25rem,5vw,4.5rem)]">
                Marcas, branding <Accent>& web</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div role="tablist" aria-label="Filtrar proyectos" className="flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={filter === f}
                    onClick={() => setFilter(f)}
                    className={`h-10 rounded-full px-4 text-[14px] transition-colors ${
                      filter === f ? 'bg-ink text-paper' : 'border border-line text-muted hover:text-ink hover:border-ink/40'
                    }`}
                  >
                    {f}
                    <span className="ml-1.5 font-mono text-[11px] opacity-50">
                      {f === 'Todos' ? works.length : works.filter((w) => w.category === f).length}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {list.map((w, i) => (
              <WorkCard key={w.slug} w={w} index={i} onOpen={() => open(w.media, 0, w.title)} />
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal className="rounded-[6px] bg-accent px-6 py-14 md:px-14 md:py-20 grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
            <h2 className="col-span-12 md:col-span-8 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2.25rem,5vw,4.5rem)]">
              ¿Tu marca es <Accent>la siguiente</Accent>?
            </h2>
            <div className="col-span-12 md:col-span-4 md:justify-self-end">
              <Button to="/contact">Trabajemos juntos</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {node}
    </>
  );
};

export default Projects;
