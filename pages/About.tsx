import React from 'react';
import { Accent, Button, Container, Eyebrow, PageHeader, Reveal } from '../components/ui';
import { CV_PDF, CV_PDF_NAME, url } from '../data/projects';

const strengths = ['Creatividad', 'Liderazgo', 'Comunicación efectiva', 'Trabajo en equipo', 'Resolución de problemas'];

const education = [
  { t: 'Licenciatura en Sistemas', p: 'Universidad UTESUR, Azua', y: 'En curso' },
  { t: 'Técnico en Informática', p: 'Politécnico de Azua (IPA)', y: '2021 — 2024' },
];

const principles = [
  { t: 'Estrategia primero', d: 'Cada pieza responde a un objetivo: alcance, comunidad o conversión.' },
  { t: 'Sistemas, no piezas sueltas', d: 'Diseño líneas gráficas coherentes que hacen reconocible a la marca.' },
  { t: 'Personas reales', d: 'Historias y rostros auténticos que generan confianza y cercanía.' },
];

const About: React.FC = () => {
  return (
    <>
      <PageHeader
        index="S"
        label="Sobre mí"
        title={
          <>
            Hola, soy <Accent>Denny</Accent>.
          </>
        }
        intro="Marketing Manager y diseñador gráfico con base en Azua de Compostela, República Dominicana."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
            <Reveal className="col-span-12 md:col-span-5 lg:col-span-4">
              <figure>
                <div className="aspect-[4/5] overflow-hidden rounded-[4px] bg-paper-2">
                  <img src={url('/IMG/IMG DENNY.jpeg')} alt="Retrato de Denny Sánchez" className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  <span>Denny Sánchez</span>
                  <span>Azua, RD</span>
                </figcaption>
              </figure>
            </Reveal>

            <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] tracking-tightish text-pretty">
                  Profesional del marketing digital con formación en informática. Trabajo como{' '}
                  <Accent>Community Manager</Accent> y <Accent>Marketing Manager</Accent>, uniendo diseño, contenido y datos para
                  que las marcas crezcan con intención.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-8 text-[17px] leading-relaxed text-muted max-w-2xl">
                  Me especializo en gestión de redes sociales, publicidad digital, creación de contenido y análisis de
                  resultados. Mi trabajo más reciente incluye la línea visual de campañas para Agua Buena: coberturas de eventos,
                  efemérides, responsabilidad social y marca empleadora.
                </p>
              </Reveal>

              <Reveal delay={120} className="mt-10 flex flex-wrap gap-3">
                <Button href={CV_PDF} download={CV_PDF_NAME}>
                  Descargar CV
                </Button>
                <Button to="/cv" variant="outline">
                  Ver CV
                </Button>
                <Button to="/projects" variant="outline">
                  Ver proyectos
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <Reveal>
            <Eyebrow index="01">Cómo trabajo</Eyebrow>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border-y border-line">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="bg-paper py-10 md:px-8 first:md:pl-0">
                <span className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 font-display text-[26px] font-semibold tracking-tightish leading-tight">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-12 gap-y-14 md:gap-x-10">
            <Reveal className="col-span-12 md:col-span-6">
              <Eyebrow index="02">Fortalezas</Eyebrow>
              <ul className="mt-8 border-t border-ink">
                {strengths.map((s) => (
                  <li key={s} className="border-b border-line py-4 font-display text-[22px] font-medium tracking-tightish">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80} className="col-span-12 md:col-span-5 md:col-start-8">
              <Eyebrow index="03">Educación</Eyebrow>
              <ul className="mt-8 border-t border-ink">
                {education.map((e) => (
                  <li key={e.t} className="border-b border-line py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-[20px] font-semibold tracking-tightish">{e.t}</h3>
                      <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{e.y}</span>
                    </div>
                    <p className="mt-1 text-[15px] text-muted">{e.p}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Eyebrow index="04">Idiomas</Eyebrow>
                <dl className="mt-6 grid grid-cols-2 gap-6">
                  <div>
                    <dt className="font-display text-[20px] font-semibold tracking-tightish">Español</dt>
                    <dd className="text-[14px] text-muted">Nativo</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[20px] font-semibold tracking-tightish">Inglés</dt>
                    <dd className="text-[14px] text-muted">Intermedio</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
