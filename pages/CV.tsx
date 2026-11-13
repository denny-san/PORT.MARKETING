import React from 'react';
import { Button, Container } from '../components/ui';
import { url } from '../data/projects';

const H = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted border-b border-line pb-2 mb-4">{children}</h3>
);

const jobs = [
  {
    role: 'Social Media Manager',
    meta: 'Agencia / Freelance · 2021 — Presente',
    items: ['Desarrollo de campañas digitales 360 y branding corporativo.', 'Gestión y optimización de publicidad en Meta Ads.'],
  },
  {
    role: 'Community Manager',
    meta: 'Freelance / Proyectos personales · 2020 — Presente',
    items: ['Gestión de comunidades en Instagram, Facebook y TikTok.', 'Calendarios de contenido estratégico y piezas gráficas.'],
  },
  {
    role: 'Asistente de Marketing',
    meta: 'Empresa local / Tienda comercial · 2019 — Presente',
    items: ['Gestión de redes sociales (Facebook e Instagram).', 'Apoyo en la creación de campañas publicitarias.'],
  },
];

const CV: React.FC = () => (
  <section className="bg-paper-2/60 py-10 md:py-16 print:p-0 print:bg-white">
    <Container className="print:max-w-none print:px-0">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Currículum — formato A4</p>
        <Button onClick={() => window.print()}>Descargar PDF</Button>
      </div>

      <article className="mx-auto max-w-[900px] bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] print:shadow-none print-color-exact">
        {/* Encabezado */}
        <header className="grid grid-cols-12 gap-6 p-8 md:p-12 border-b border-line">
          <div className="col-span-12 sm:col-span-8">
            <h1 className="font-display text-[48px] md:text-[60px] font-semibold tracking-display leading-[0.9]">
              Denny
              <br />
              Sánchez<span className="text-accent">.</span>
            </h1>
            <p className="mt-4 font-serif italic text-[22px] text-muted">Marketing Manager & Diseñador Gráfico</p>
          </div>
          <div className="col-span-12 sm:col-span-4 sm:justify-self-end">
            <div className="h-32 w-28 overflow-hidden rounded-[3px] bg-paper-2">
              <img src={url('/IMG/DENNY IMG.jpg')} alt="Denny Sánchez" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12">
          {/* Lateral */}
          <aside className="col-span-12 md:col-span-4 p-8 md:p-10 md:border-r border-line space-y-10 text-[13px] leading-relaxed">
            <div>
              <H>Contacto</H>
              <ul className="space-y-1.5">
                <li>dennyroomdesing@gmail.com</li>
                <li>829-978-2579</li>
                <li>Azua, Rep. Dom.</li>
                <li>@denny.sanchez_</li>
                <li>bento.me/dennybluesec</li>
              </ul>
            </div>
            <div>
              <H>Fortalezas</H>
              <ul className="space-y-1.5">
                {['Creatividad', 'Liderazgo', 'Comunicación efectiva', 'Trabajo en equipo', 'Resolución de problemas'].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <H>Idiomas</H>
              <dl className="space-y-1.5">
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
            <div>
              <H>Herramientas</H>
              <p>Canva Pro, Figma, Meta Ads, Google Ads, Analytics</p>
            </div>
          </aside>

          {/* Principal */}
          <div className="col-span-12 md:col-span-8 p-8 md:p-10 space-y-10">
            <div>
              <H>Perfil</H>
              <p className="text-[15px] leading-relaxed">
                Con formación en informática y experiencia en marketing digital, me desempeño como Community Manager y Marketing
                Manager. Habilidades en gestión de redes sociales, diseño de contenido, publicidad digital y análisis de
                resultados para impulsar el crecimiento de marcas.
              </p>
            </div>

            <div>
              <H>Experiencia</H>
              <ol className="space-y-6">
                {jobs.map((j) => (
                  <li key={j.role}>
                    <h4 className="font-display text-[18px] font-semibold tracking-tightish">{j.role}</h4>
                    <p className="text-[12px] text-muted mt-0.5">{j.meta}</p>
                    <ul className="mt-2 space-y-1 text-[13px] leading-relaxed">
                      {j.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="mt-[0.65em] h-px w-2.5 shrink-0 bg-ink/40" aria-hidden />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div className="print:break-inside-avoid">
              <H>Educación</H>
              <ul className="space-y-3 text-[13px]">
                <li>
                  <span className="font-display text-[16px] font-semibold tracking-tightish">Licenciatura en Sistemas</span>
                  <span className="text-muted"> — Universidad UTESUR, Azua (en curso)</span>
                </li>
                <li>
                  <span className="font-display text-[16px] font-semibold tracking-tightish">Técnico en Informática</span>
                  <span className="text-muted"> — Politécnico de Azua (IPA), 2021–2024</span>
                </li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <H>Certificaciones</H>
              <p className="text-[13px] leading-relaxed">
                Community Manager · Marketing Digital (Google / Meta) · Facebook Ads & Meta Strategy · Google Ads Search · Diseño
                Gráfico (Canva) · Fotografía y Edición (Adobe)
              </p>
            </div>
          </div>
        </div>
      </article>
    </Container>
  </section>
);

export default CV;
