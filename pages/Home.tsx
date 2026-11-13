import React from 'react';
import { Link } from 'react-router-dom';
import { Accent, Button, Container, Eyebrow, Reveal } from '../components/ui';
import { aguaBuena, campaigns, works, url } from '../data/projects';

const disciplines = ['Diseño gráfico', 'Dirección de arte', 'Social media', 'Branding', 'Publicidad digital', 'Contenido'];

const services = [
  {
    t: 'Diseño para redes sociales',
    d: 'Carruseles, posts, historias y reels con un sistema visual coherente que hace reconocible a la marca en cada publicación.',
  },
  {
    t: 'Dirección de arte de campañas',
    d: 'Concepto, copy y línea gráfica para campañas, efemérides, patrocinios y coberturas de eventos.',
  },
  {
    t: 'Gestión de comunidades',
    d: 'Calendarios de contenido, publicación y análisis de engagement en Instagram, Facebook y TikTok.',
  },
  {
    t: 'Publicidad digital',
    d: 'Campañas en Meta Ads y Google Ads optimizadas con datos para alcance, leads y ventas.',
  },
];

const totalPieces = campaigns.reduce((n, c) => n + c.media.length, 0);

const Home: React.FC = () => {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="relative pt-10 md:pt-16 pb-16 md:pb-24">
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

          <Reveal as="h1" delay={80} className="mt-12 md:mt-16 font-display font-semibold tracking-display leading-[0.9] text-[clamp(3.1rem,10.5vw,10.5rem)]">
            Diseño que <Accent>comunica</Accent>,
            <br className="hidden sm:block" /> marketing que <Accent>convierte</Accent>
            <span className="text-accent">.</span>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-y-10 md:gap-x-10 items-end">
            <Reveal delay={140} className="col-span-5 md:col-span-3">
              <div className="aspect-[4/5] overflow-hidden rounded-[4px] bg-paper-2">
                <img src={url('/IMG/IMG DENNY.jpeg')} alt="Retrato de Denny Sánchez" className="h-full w-full object-cover" />
              </div>
            </Reveal>

            <Reveal delay={200} className="col-span-12 md:col-span-5 md:col-start-5">
              <p className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.3] tracking-tightish text-pretty">
                Soy Denny Sánchez. Creo contenido visual y estrategias digitales para marcas que quieren{' '}
                <Accent className="text-[1.08em]">conectar de verdad</Accent> con su comunidad.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/projects">Ver proyectos</Button>
                <Button to="/contact" variant="outline">
                  Contacto
                </Button>
              </div>
            </Reveal>

            <Reveal delay={260} className="col-span-12 md:col-span-3 md:col-start-10">
              <dl className="grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-0 md:divide-y md:divide-line">
                {[
                  ['3+', 'años de experiencia'],
                  [String(totalPieces), 'piezas para Agua Buena'],
                  ['6', 'certificaciones'],
                ].map(([n, l]) => (
                  <div key={l} className="md:py-4 first:md:pt-0 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <dt className="order-2 md:order-1 text-[13px] text-muted leading-snug">{l}</dt>
                    <dd className="order-1 md:order-2 font-display text-[32px] md:text-[40px] font-semibold tracking-display leading-none">{n}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ MARQUEE */}
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

      {/* ------------------------------------------------ CASO DESTACADO */}
      <section className="py-24 md:py-36">
        <Container>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 items-end mb-12 md:mb-16">
            <Reveal className="col-span-12 md:col-span-7">
              <Eyebrow index="01">Caso destacado</Eyebrow>
              <h2 className="mt-6 font-display font-semibold tracking-display leading-[0.92] text-[clamp(2.5rem,6vw,5.5rem)]">
                {aguaBuena.client}
                <Accent className="text-muted"> — {aguaBuena.tagline.toLowerCase()}</Accent>
              </h2>
            </Reveal>
            <Reveal delay={100} className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="text-[16px] leading-relaxed text-muted">
                Cinco campañas para redes sociales: salud, patria, medio ambiente, bienestar y la gente detrás de la marca.
              </p>
              <Link to="/projects" className="link-u mt-5 inline-block text-[15px] font-medium">
                Ver caso completo →
              </Link>
            </Reveal>
          </div>

          <div className="-mx-5 md:mx-0 px-5 md:px-0 flex md:grid md:grid-cols-5 gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-5 md:scroll-px-0">
            {campaigns.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70} className="w-[68vw] sm:w-[42vw] md:w-auto shrink-0 snap-start">
                <Link to={`/projects?c=${c.slug}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden rounded-[4px] bg-paper-2">
                    <img
                      src={url(c.cover)}
                      alt={`${c.title} ${c.titleAccent}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[17px] font-semibold tracking-tightish leading-tight">
                      {c.title} <Accent>{c.titleAccent}</Accent>
                    </h3>
                    <span className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-1 text-[13px] text-muted">{c.format}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ SERVICIOS */}
      <section className="pb-24 md:pb-36">
        <Container>
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
            <Reveal className="col-span-12 md:col-span-4">
              <Eyebrow index="02">Qué hago</Eyebrow>
              <h2 className="mt-6 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2.25rem,4.5vw,4rem)]">
                Servicios <Accent>a medida</Accent>
              </h2>
              <div className="mt-8">
                <Button to="/skills" variant="outline">
                  Ver capacidades
                </Button>
              </div>
            </Reveal>

            <ol className="col-span-12 md:col-span-8 border-t border-ink">
              {services.map((s, i) => (
                <Reveal as="li" key={s.t} delay={i * 60} className="group grid grid-cols-12 gap-x-4 border-b border-line py-7 md:py-9">
                  <span className="col-span-2 md:col-span-1 font-mono text-[12px] text-muted pt-2">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="col-span-10 md:col-span-5 font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-tightish leading-tight transition-transform duration-500 group-hover:translate-x-1">
                    {s.t}
                  </h3>
                  <p className="col-span-10 col-start-3 md:col-span-6 md:col-start-auto mt-3 md:mt-1 text-[15px] leading-relaxed text-muted">{s.d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ MÁS TRABAJO */}
      <section className="bg-paper-2/60 border-y border-line py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <Eyebrow index="03">Más trabajo</Eyebrow>
              <h2 className="mt-6 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2.25rem,4.5vw,4rem)]">
                Marcas & <Accent>proyectos</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Button to="/projects" variant="outline">
                Todos los proyectos
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {works
              .filter((w) => w.category !== 'Web')
              .map((w, i) => (
                <Reveal key={w.slug} delay={i * 70}>
                  <Link to={`/projects?w=${w.slug}`} className="group block">
                    <div className="aspect-square overflow-hidden rounded-[4px] bg-paper-2">
                      <img
                        src={url(w.cover)}
                        alt={w.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-2">
                      <h3 className="font-display text-[16px] font-semibold tracking-tightish">{w.title}</h3>
                      <span className="text-[12px] text-muted">{w.category}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
