import React from 'react';
import { Accent, Button, Container, Reveal, scrollToId } from '../components/ui';
import { campaigns, works, url } from '../data/projects';

const disciplines = ['Diseño gráfico', 'Dirección de arte', 'Social media', 'Branding', 'Publicidad digital', 'Diseño web'];

const totalPieces = [...campaigns, ...works].reduce((n, c) => n + c.media.length, 0);

/** Portada de la página única: hero + franja de disciplinas. */
const Home: React.FC = () => {
  // Parallax sutil del retrato
  const imgRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        if (imgRef.current) imgRef.current.style.transform = `translateY(${y * 0.08}px) scale(1.12)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <section id="inicio" className="relative pt-10 md:pt-16 pb-16 md:pb-24">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span>Marketing Manager · Diseñador gráfico</span>
            <span className="hidden md:inline">Azua de Compostela, RD</span>
            <span className="inline-flex items-center gap-2 text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2BB673] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2BB673]" />
              </span>
              Disponible para proyectos
            </span>
          </Reveal>

          <h1 className="mt-12 md:mt-16 font-display font-semibold tracking-display leading-[0.9] text-[clamp(3.1rem,10.5vw,10.5rem)]">
            <Reveal as="span" delay={60} className="block">
              Diseño que <Accent>comunica</Accent>,
            </Reveal>
            <Reveal as="span" delay={180} className="block">
              marketing que <Accent>convierte</Accent>
              <span className="text-accent">.</span>
            </Reveal>
          </h1>

          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-y-10 md:gap-x-10 items-end">
            <Reveal delay={260} className="col-span-5 md:col-span-3">
              <div className="aspect-[4/5] overflow-hidden rounded-[4px] bg-paper-2">
                <img
                  ref={imgRef}
                  src={url('/IMG/IMG DENNY.jpeg')}
                  alt="Retrato de Denny Sánchez"
                  className="h-full w-full object-cover will-change-transform"
                  style={{ transform: 'scale(1.12)' }}
                />
              </div>
            </Reveal>

            <Reveal delay={320} className="col-span-12 md:col-span-5 md:col-start-5">
              <p className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.3] tracking-tightish text-pretty">
                Soy Denny Sánchez. Creo contenido visual y estrategias digitales para marcas que quieren{' '}
                <Accent className="text-[1.08em]">conectar de verdad</Accent> con su comunidad.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="#proyectos">Ver proyectos</Button>
                <Button to="#contacto" variant="outline">
                  Contacto
                </Button>
              </div>
            </Reveal>

            <Reveal delay={380} className="col-span-12 md:col-span-3 md:col-start-10">
              <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-0 md:divide-y md:divide-line">
                {[
                  ['3+', 'años de experiencia'],
                  [String(campaigns.length + works.length), 'proyectos'],
                  [String(totalPieces), 'piezas diseñadas'],
                ].map(([n, l]) => (
                  <div key={l} className="md:py-4 first:md:pt-0 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <dt className="order-2 md:order-1 text-[13px] text-muted leading-snug">{l}</dt>
                    <dd className="order-1 md:order-2 font-display text-[32px] md:text-[40px] font-semibold tracking-display leading-none">{n}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <button
            onClick={() => scrollToId('sobre-mi')}
            className="group mt-16 md:mt-24 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors"
          >
            <span className="relative block h-10 w-px overflow-hidden bg-line">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-ink animate-[scroll-cue_1.8s_ease-in-out_infinite]" />
            </span>
            Desliza para ver todo
          </button>
        </Container>
      </section>

      <section aria-label="Disciplinas" className="bg-ink text-paper overflow-hidden py-6 md:py-8">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {disciplines.map((d) => (
                <span key={d} className="flex items-center font-display text-[clamp(1.75rem,4vw,3.25rem)] font-medium tracking-display whitespace-nowrap">
                  <span className="px-6 md:px-10">{d}</span>
                  <span className="font-serif italic text-accent">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
