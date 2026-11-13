import React from 'react';
import { Accent, Button, Container, Eyebrow, PageHeader, Reveal } from '../components/ui';

const skills = [
  { title: 'Gestión de redes sociales', desc: 'Estrategias de contenido, engagement y crecimiento de comunidades.', level: 95 },
  { title: 'Branding y estrategia', desc: 'Desarrollo de identidad de marca, línea gráfica y posicionamiento.', level: 92 },
  { title: 'Publicidad digital', desc: 'Campañas en Meta Ads, Google Ads y plataformas sociales.', level: 90 },
  { title: 'Análisis de datos', desc: 'Métricas de rendimiento, reportes y optimización del retorno.', level: 88 },
  { title: 'Creación de contenido', desc: 'Diseño gráfico, edición de video y storytelling.', level: 85 },
  { title: 'Marketing digital', desc: 'SEO, SEM y estrategias integradas de marketing online.', level: 80 },
];

const tools = ['Canva Pro', 'Figma', 'Adobe', 'Meta Ads', 'Google Ads', 'Instagram', 'Facebook', 'TikTok', 'Analytics'];

const Skills: React.FC = () => (
  <>
    <PageHeader
      index="C"
      label="Servicios y capacidades"
      title={
        <>
          Lo que <Accent>hago</Accent> mejor.
        </>
      }
      intro="Un conjunto de habilidades que une diseño gráfico, contenido y marketing de resultados."
    />

    <section className="py-20 md:py-28">
      <Container>
        <ol className="border-t border-ink">
          {skills.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 50} className="group grid grid-cols-12 gap-x-4 gap-y-3 border-b border-line py-8 md:py-10 items-center">
              <span className="col-span-2 md:col-span-1 font-mono text-[12px] text-muted">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="col-span-10 md:col-span-4 font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold tracking-tightish leading-tight transition-transform duration-500 group-hover:translate-x-1">
                {s.title}
              </h2>
              <p className="col-span-10 col-start-3 md:col-span-4 md:col-start-auto text-[15px] leading-relaxed text-muted">{s.desc}</p>
              <div className="col-span-10 col-start-3 md:col-span-3 md:col-start-auto flex items-center gap-4">
                <div className="h-px flex-1 bg-line relative" role="meter" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={`Dominio de ${s.title}`}>
                  <div className="absolute inset-y-[-1px] left-0 bg-ink" style={{ width: `${s.level}%` }} />
                </div>
                <span className="font-mono text-[12px] tabular-nums w-10 text-right">{s.level}%</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>

    <section className="pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-4">
            <Eyebrow index="01">Herramientas</Eyebrow>
            <h2 className="mt-6 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2rem,4vw,3.5rem)]">
              Mi <Accent>caja</Accent> de trabajo
            </h2>
          </Reveal>
          <Reveal delay={80} className="col-span-12 md:col-span-8">
            <ul className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <li key={t} className="rounded-full border border-ink/20 px-5 py-3 font-display text-[18px] font-medium tracking-tightish hover:bg-ink hover:text-paper transition-colors">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-20 md:mt-28 rounded-[6px] bg-ink text-paper on-dark px-6 py-14 md:px-14 md:py-20 grid grid-cols-12 gap-y-8 md:gap-x-10 items-end">
          <h2 className="col-span-12 md:col-span-8 font-display font-semibold tracking-display leading-[0.95] text-[clamp(2.25rem,5vw,4.5rem)]">
            ¿Listo para impulsar <Accent className="text-accent">tu marca</Accent>?
          </h2>
          <div className="col-span-12 md:col-span-4 md:justify-self-end">
            <Button to="/contact" variant="accent">
              Iniciar colaboración
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  </>
);

export default Skills;
