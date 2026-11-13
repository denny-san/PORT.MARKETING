import React from 'react';
import { Accent, Container, PageHeader, Reveal, Tag } from '../components/ui';

const experiences = [
  {
    role: 'Social Media Manager',
    company: 'Agencia / Freelance',
    period: '2021 — Presente',
    tasks: ['Desarrollo de campañas digitales y branding.', 'Gestión de publicidad en Meta Ads.', 'Creación de contenido visual y análisis de resultados.'],
    tags: ['Meta Ads', 'Branding', 'Contenido'],
  },
  {
    role: 'Community Manager',
    company: 'Freelance / Proyectos personales',
    period: '2020 — Presente',
    tasks: [
      'Gestión de comunidades digitales en Instagram, Facebook y TikTok.',
      'Creación de calendarios de contenido y piezas gráficas.',
      'Análisis de engagement y optimización de estrategias de contenido.',
    ],
    tags: ['Instagram', 'Facebook', 'TikTok'],
  },
  {
    role: 'Asistente de Marketing',
    company: 'Empresa local / Tienda comercial',
    period: '2019 — Presente',
    tasks: [
      'Gestión de redes sociales (Facebook e Instagram).',
      'Apoyo en la creación de campañas publicitarias.',
      'Análisis de métricas y reportes de rendimiento.',
    ],
    tags: ['Facebook', 'Instagram', 'Analytics'],
  },
];

const Experience: React.FC = () => (
  <>
    <PageHeader
      index="E"
      label="Experiencia"
      title={
        <>
          Trayectoria <Accent>profesional</Accent>.
        </>
      }
      intro="Marketing digital, gestión de comunidades y estrategias de contenido para marcas locales y proyectos independientes."
    />

    <section className="py-20 md:py-28">
      <Container>
        <ol className="border-t border-ink">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.role} delay={i * 60} className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-5 border-b border-line py-10 md:py-14">
              <p className="col-span-12 md:col-span-3 font-mono text-[12px] uppercase tracking-[0.14em] text-muted pt-2">{exp.period}</p>
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-display leading-[1.02]">{exp.role}</h2>
                <p className="mt-2 font-serif italic text-[20px] text-muted">{exp.company}</p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <ul className="space-y-3">
                  {exp.tasks.map((t) => (
                    <li key={t} className="flex gap-3 text-[16px] leading-relaxed">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/40" aria-hidden />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  </>
);

export default Experience;
