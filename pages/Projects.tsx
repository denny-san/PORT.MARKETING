import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Accent, Button, Container, Eyebrow, PageHeader, Reveal, Tag, scrollToId } from '../components/ui';
import { useLightbox } from '../components/Lightbox';
import { aguaBuena, campaigns, works, url, Campaign, MediaItem } from '../data/projects';

type Project = Campaign & { alignTop?: boolean };

/* ------------------------------------------------------------ Bloque de proyecto (igual para todos) */

const ProjectBlock: React.FC<{ p: Project; i: number; total: number; onOpen: (idx: number) => void }> = ({
  p,
  i,
  total,
  onOpen,
}) => {
  const visible = p.media.slice(0, 6);
  const extra = p.media.length - visible.length;

  return (
    <article id={p.slug} className="scroll-mt-24 grid grid-cols-12 gap-y-10 md:gap-x-10 py-16 md:py-24 border-t border-paper/10">
      <div className="col-span-12 lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
            {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} · {p.format}
          </p>
          <h3 className="mt-5 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2rem,4vw,3.5rem)]">
            {p.title} <Accent className="text-accent">{p.titleAccent}</Accent>
          </h3>
          <p className="mt-6 text-[16px] leading-relaxed text-paper/70 max-w-md text-pretty">{p.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Tag key={t} dark>
                {t}
              </Tag>
            ))}
          </div>
          <button onClick={() => onOpen(0)} className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-paper link-u">
            Ver las {p.media.length} piezas
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
                      <video src={`${url(m.src)}#t=3`} muted playsInline preload="metadata" className="h-full w-full object-cover" />
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
                      className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] ${
                        p.alignTop ? 'object-top' : ''
                      }`}
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

/* ------------------------------------------------------------ Encabezado de grupo (igual para todos) */

const GroupHeader: React.FC<{ index: string; label: string; title: React.ReactNode; intro: string; id: string }> = ({
  index,
  label,
  title,
  intro,
  id,
}) => (
  <div className="pt-20 md:pt-28 pb-12 md:pb-16">
    <Reveal>
      <Eyebrow index={index} className="!text-paper/50">
        {label}
      </Eyebrow>
    </Reveal>
    <div className="mt-8 grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
      <Reveal as="h2" className="col-span-12 lg:col-span-7 font-display font-semibold tracking-display leading-[0.9] text-[clamp(3rem,8vw,7.5rem)]">
        <span id={id}>{title}</span>
      </Reveal>
      <Reveal delay={100} className="col-span-12 lg:col-span-5">
        <p className="text-[17px] leading-relaxed text-paper/70 text-pretty">{intro}</p>
      </Reveal>
    </div>
  </div>
);

/* ------------------------------------------------------------ Página */

const social = works.filter((w) => w.category !== 'Web');
const web = works.filter((w) => w.category === 'Web');

const groups = [
  { key: 'agua-buena', label: 'Agua Buena', items: campaigns as Project[] },
  { key: 'marcas', label: 'Redes & branding', items: social as Project[] },
  { key: 'web', label: 'Diseño web', items: web as Project[] },
];

const totalPieces = (list: { media: MediaItem[] }[]) => list.reduce((n, c) => n + c.media.length, 0);

const Projects: React.FC = () => {
  const { open, node } = useLightbox();
  const [params] = useSearchParams();

  // Deep-link: /projects?c=familia o /projects?w=cindel
  React.useEffect(() => {
    const target = params.get('c') || params.get('w');
    if (!target) return;
    const t = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => window.clearTimeout(t);
  }, [params]);

  const renderBlocks = (items: Project[]) =>
    items.map((p, i) => (
      <ProjectBlock
        key={p.slug}
        p={p}
        i={i}
        total={items.length}
        onOpen={(idx) => open(p.media, idx, `${p.title} ${p.titleAccent}`)}
      />
    ));

  return (
    <>
      <PageHeader
        index="02"
        label="Proyectos seleccionados"
        title={
          <>
            Trabajo que <Accent>se ve</Accent> y se siente.
          </>
        }
        intro={`${campaigns.length + works.length} proyectos y ${totalPieces([...campaigns, ...works])} piezas: campañas para redes sociales, identidad visual y sitios web para marcas de República Dominicana.`}
      />

      <section className="on-dark bg-ink text-paper">
        {/* Índice de todos los proyectos */}
        <Container>
          <nav aria-label="Índice de proyectos" className="flex flex-col gap-3 py-8 border-b border-paper/10">
            {groups.map((g) => (
              <div key={g.key} className="flex items-center gap-3 min-w-0">
                <span className="shrink-0 w-32 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/40">{g.label}</span>
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                  {g.items.map((p) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => scrollToId(p.slug)}
                      className="shrink-0 rounded-full border border-paper/20 px-4 py-2 text-[13px] text-paper/80 hover:bg-paper hover:text-ink transition-colors"
                    >
                      {p.title} {p.titleAccent}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </Container>

        {/* ---------------- 01 Agua Buena */}
        <Container>
          <GroupHeader index="2.1" label="Caso destacado" id="g-agua-buena" title="Agua Buena" intro={aguaBuena.intro} />
          <Reveal>
            <dl className="grid grid-cols-2 md:grid-cols-4 border-t border-paper/15">
              {[
                ['Cliente', 'Agua Buena — agua mineralizada'],
                ['Rol', aguaBuena.role],
                ['Entregables', aguaBuena.deliverables],
                ['Alcance', `${campaigns.length} campañas · ${totalPieces(campaigns)} piezas`],
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
            onClick={() => open([{ src: aguaBuena.overview, alt: 'Agua Buena — vista general de las cinco campañas' }], 0, 'Agua Buena')}
            className="block w-full overflow-hidden"
            aria-label="Ampliar vista general de las campañas"
          >
            <img src={url(aguaBuena.overview)} alt="Portadas de las cinco campañas de Agua Buena" className="w-full h-auto" />
          </button>
        </Reveal>
        <Container className="pt-6">{renderBlocks(groups[0].items)}</Container>

        {/* ---------------- 02 Redes & branding */}
        <Container className="border-t border-paper/10">
          <GroupHeader
            index="2.2"
            label="Redes sociales & branding"
            id="g-marcas"
            title={
              <>
                Marcas <Accent className="text-accent">& branding</Accent>
              </>
            }
            intro={`Gestión de cuentas, parrillas de contenido e identidad visual para ${social.length} marcas: ${social
              .map((s) => `${s.title} ${s.titleAccent}`)
              .join(', ')}.`}
          />
          {renderBlocks(groups[1].items)}
        </Container>

        {/* ---------------- 03 Web */}
        <Container className="border-t border-paper/10 pb-12 md:pb-20">
          <GroupHeader
            index="2.3"
            label="Diseño web"
            id="g-web"
            title={
              <>
                Sitios <Accent className="text-accent">web</Accent>
              </>
            }
            intro="Diseño UX/UI de sitios y landing pages con foco en claridad, identidad y conversión."
          />
          {renderBlocks(groups[2].items)}
        </Container>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="rounded-[6px] bg-accent px-6 py-14 md:px-14 md:py-20 grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
            <h2 className="col-span-12 md:col-span-8 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2.25rem,5vw,4.5rem)]">
              ¿Tu marca es <Accent>la siguiente</Accent>?
            </h2>
            <div className="col-span-12 md:col-span-4 md:justify-self-end">
              <Button to="#contacto">Trabajemos juntos</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {node}
    </>
  );
};

export default Projects;
