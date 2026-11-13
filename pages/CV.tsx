import React from 'react';
import { Button, Container } from '../components/ui';
import { CV_PDF, CV_PDF_NAME, url } from '../data/projects';

/* ------------------------------------------------------------------ */
/*  Datos del CV                                                       */
/* ------------------------------------------------------------------ */

const contact = [
  ['Correo', 'dennyroomdesing@gmail.com'],
  ['Teléfono', '+1 829 978 2579'],
  ['Ubicación', 'Azua de Compostela, RD'],
  ['Instagram', '@denny.sanchez_'],
  ['Enlaces', 'bento.me/dennybluesec'],
];

const jobs = [
  {
    role: 'Social Media Manager',
    org: 'Agencia / Freelance',
    period: '2021 — Presente',
    items: [
      'Desarrollo de campañas digitales 360 y branding corporativo.',
      'Gestión y optimización de publicidad en Meta Ads.',
      'Creación de contenido visual y análisis de resultados.',
    ],
  },
  {
    role: 'Community Manager',
    org: 'Freelance / Proyectos personales',
    period: '2020 — Presente',
    items: [
      'Gestión de comunidades en Instagram, Facebook y TikTok.',
      'Calendarios de contenido estratégico y piezas gráficas.',
      'Análisis de engagement y optimización de contenido.',
    ],
  },
  {
    role: 'Asistente de Marketing',
    org: 'Empresa local / Tienda comercial',
    period: '2019 — Presente',
    items: ['Gestión de redes sociales (Facebook e Instagram).', 'Apoyo en campañas publicitarias y reportes de métricas.'],
  },
];

const projects = [
  {
    name: 'Agua Buena',
    detail:
      'Dirección de arte y diseño de contenido para redes: 5 campañas y 25 piezas — Juntos por la prevención, Día de la Constitución, Sembramos vida, Revital Wellness 2026 y Somos una familia.',
  },
  { name: 'CINDEL · NOVAWEB · Comida Express', detail: 'Gestión de Instagram, parrillas de contenido mensuales y promociones.' },
  { name: 'Música App', detail: 'Identidad visual y branding para el sector musical y de entretenimiento.' },
  { name: 'Sitios web', detail: 'Diseño UX/UI de sitios para restaurante, salón de belleza y portafolio personal.' },
];

const skills = [
  ['Gestión de redes sociales', 95],
  ['Branding y estrategia', 92],
  ['Publicidad digital', 90],
  ['Análisis de datos', 88],
  ['Creación de contenido', 85],
] as const;

const certs = [
  ['Community Manager', '2023'],
  ['Facebook Ads & Meta Strategy', '2023'],
  ['Google Ads Search — Google', '2023'],
  ['Marketing Digital — Google / Meta', '2022'],
  ['Fotografía y Edición — Adobe', '2021'],
  ['Diseño Gráfico — Canva', '2020'],
];

/* ------------------------------------------------------------------ */

const H: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted mb-3">
    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
    {children}
  </h3>
);

const Dash = () => <span className="mt-[0.62em] h-px w-2.5 shrink-0 bg-ink/40" aria-hidden />;

const CV: React.FC = () => (
  <section className="bg-paper-2 text-ink py-10 md:py-16 print:p-0 print:bg-white">
    <Container className="print:max-w-none print:px-0">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Currículum — A4</p>
          <h1 className="mt-2 font-display text-[32px] font-semibold tracking-display">Curriculum vitae</h1>
        </div>
        <Button href={CV_PDF} download={CV_PDF_NAME}>
          Descargar PDF
        </Button>
      </div>

      {/* Hoja A4 */}
      <article
        id="cv-sheet"
        className="mx-auto w-full max-w-[210mm] bg-white text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] print:shadow-none print:w-[210mm] print:h-[297mm] print:overflow-hidden print-color-exact md:aspect-[210/297] flex flex-col"
      >
        {/* Encabezado */}
        <header className="bg-ink text-paper px-8 md:px-[14mm] pt-[12mm] pb-[9mm] flex items-end justify-between gap-6 print-color-exact">
          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-paper/50">Curriculum vitae</p>
            <h2 className="mt-3 font-display text-[44px] font-semibold tracking-display leading-[0.9]">
              Denny Sánchez<span className="text-accent">.</span>
            </h2>
            <p className="mt-2.5 font-serif italic text-[19px] text-paper/80">Marketing Manager & Diseñador Gráfico</p>
          </div>
          <div className="h-[30mm] w-[24mm] shrink-0 overflow-hidden rounded-[2px] bg-ink-2 ring-1 ring-paper/15">
            <img src={url('/IMG/DENNY IMG.jpg')} alt="Denny Sánchez" className="h-full w-full object-cover" />
          </div>
        </header>

        <div className="grid grid-cols-12 flex-1">
          {/* Columna lateral */}
          <aside className="col-span-12 md:col-span-4 bg-paper/70 px-8 md:px-[9mm] py-[8mm] space-y-6 text-[10.5px] leading-[1.55] print-color-exact">
            <div>
              <H>Contacto</H>
              <dl className="space-y-1.5">
                {contact.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[8.5px] uppercase tracking-[0.14em] text-muted">{k}</dt>
                    <dd className="font-medium break-words">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <H>Habilidades</H>
              <ul className="space-y-2">
                {skills.map(([s, n]) => (
                  <li key={s}>
                    <div className="flex justify-between">
                      <span>{s}</span>
                      <span className="font-mono text-[9px] text-muted">{n}%</span>
                    </div>
                    <div className="mt-1 h-[2px] bg-ink/10">
                      <div className="h-full bg-ink" style={{ width: `${n}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <H>Herramientas</H>
              <p>Canva Pro · Figma · Adobe · Meta Ads · Google Ads · Analytics</p>
            </div>

            <div>
              <H>Fortalezas</H>
              <p>Creatividad · Liderazgo · Comunicación efectiva · Trabajo en equipo · Resolución de problemas</p>
            </div>

            <div>
              <H>Idiomas</H>
              <dl className="space-y-1">
                <div className="flex justify-between">
                  <dt>Español</dt>
                  <dd className="text-muted">Nativo</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Inglés</dt>
                  <dd className="text-muted">Intermedio</dd>
                </div>
              </dl>
            </div>
          </aside>

          {/* Columna principal */}
          <div className="col-span-12 md:col-span-8 px-8 md:px-[10mm] py-[8mm] space-y-6 text-[10.5px] leading-[1.55]">
            <div>
              <H>Perfil</H>
              <p className="font-display text-[13.5px] leading-[1.45] tracking-[-0.01em]">
                Profesional del marketing digital con formación en informática. Uno diseño gráfico, contenido y datos para
                construir marcas reconocibles y comunidades activas: desde la línea visual de una campaña hasta su
                publicación, pauta y análisis de resultados.
              </p>
            </div>

            <div>
              <H>Experiencia</H>
              <ol className="space-y-3.5">
                {jobs.map((j) => (
                  <li key={j.role}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-display text-[14px] font-semibold tracking-[-0.015em]">{j.role}</h4>
                      <span className="shrink-0 font-mono text-[9px] text-muted">{j.period}</span>
                    </div>
                    <p className="font-serif italic text-[12px] text-muted">{j.org}</p>
                    <ul className="mt-1 space-y-0.5">
                      {j.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <Dash />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <H>Proyectos destacados</H>
              <ul className="space-y-2">
                {projects.map((p) => (
                  <li key={p.name}>
                    <span className="font-display text-[12px] font-semibold tracking-[-0.01em]">{p.name}</span>
                    <span className="text-muted"> — {p.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <H>Educación</H>
                <ul className="space-y-2">
                  <li>
                    <p className="font-display text-[12px] font-semibold">Licenciatura en Sistemas</p>
                    <p className="text-muted">Universidad UTESUR, Azua · En curso</p>
                  </li>
                  <li>
                    <p className="font-display text-[12px] font-semibold">Técnico en Informática</p>
                    <p className="text-muted">Politécnico de Azua (IPA) · 2021–2024</p>
                  </li>
                </ul>
              </div>
              <div>
                <H>Certificaciones</H>
                <ul className="space-y-0.5">
                  {certs.map(([c, y]) => (
                    <li key={c} className="flex justify-between gap-2">
                      <span>{c}</span>
                      <span className="font-mono text-[9px] text-muted">{y}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Container>
  </section>
);

export default CV;
