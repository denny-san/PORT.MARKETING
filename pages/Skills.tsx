import React from 'react';
import { Container, Reveal, Script, SectionTitle } from '../components/ui';
import { Cross, PaperPlanes, Sparkle, Squiggle, Star, Triangle } from '../components/Doodles';
import { useLightbox } from '../components/Lightbox';
import { url } from '../data/projects';

const education = [
  { y: 'En curso', t: 'Licenciatura en Sistemas', p: 'Universidad UTESUR, Azua' },
  { y: '2021 — 2024', t: 'Técnico en Informática', p: 'Politécnico de Azua (IPA)' },
];

const experience = [
  { y: '2021 — Presente', t: 'Social Media Manager', p: 'Agencia / Freelance', d: 'Campañas digitales, branding y Meta Ads.' },
  { y: '2020 — Presente', t: 'Community Manager', p: 'Freelance / Proyectos personales', d: 'Comunidades en Instagram, Facebook y TikTok.' },
  { y: '2019 — Presente', t: 'Asistente de Marketing', p: 'Empresa local / Tienda comercial', d: 'Redes sociales, campañas y reportes.' },
];

const tickets = [
  { t: 'Diseño gráfico', icon: 'palette' },
  { t: 'Branding', icon: 'verified' },
  { t: 'Social media', icon: 'favorite', hot: true },
  { t: 'Publicidad digital', icon: 'campaign' },
  { t: 'Diseño web', icon: 'web' },
];

const soft = 'CREATIVIDAD · LIDERAZGO · COMUNICACIÓN · TRABAJO EN EQUIPO · RESOLUCIÓN · ';

const tools = [
  { a: 'Cv', n: 'Canva Pro' },
  { a: 'Fg', n: 'Figma' },
  { a: 'Ad', n: 'Adobe' },
  { a: 'Ma', n: 'Meta Ads' },
  { a: 'Ga', n: 'Google Ads' },
  { a: 'An', n: 'Analytics' },
];

const certs = [
  { title: 'Community Manager', issuer: 'Certificación profesional', year: '2023', image: '/IMG/COMUNITY MANAGER.png' },
  { title: 'Facebook Ads & Meta Strategy', issuer: 'Meta', year: '2023', image: '/IMG/FACEBOOK META.png' },
  { title: 'Google Ads Search', issuer: 'Google', year: '2023', image: '/IMG/GOGLE ADS.png' },
  { title: 'Marketing Digital', issuer: 'Google / Meta', year: '2022', image: '/IMG/MARKETING_.png' },
  { title: 'Fotografía y Edición', issuer: 'Adobe', year: '2021', image: '/IMG/FOTOGRAFÍA_.png' },
  { title: 'Diseño Gráfico Básico', issuer: 'Canva', year: '2020', image: '/IMG/GRAFICO CANVA_.png' },
];

const Bullet = () => <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-grape ring-4 ring-grape/20" aria-hidden />;

/** Sello circular con texto girando. */
const SoftBadge = () => (
  <div className="relative mx-auto h-56 w-56 md:h-64 md:w-64">
    <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow text-cream" aria-hidden>
      <defs>
        <path id="soft-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <text className="fill-current" style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 13.2, letterSpacing: 2 }}>
        <textPath href="#soft-circle">{soft}</textPath>
      </text>
    </svg>
    <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full bg-grape text-white shadow-[0_8px_0_#1D4ED8]">
      <Script className="text-[30px] leading-none">soft</Script>
      <span className="font-display text-[15px] font-extrabold tracking-wide">SKILLS</span>
    </div>
    <span className="sr-only">Habilidades blandas: creatividad, liderazgo, comunicación efectiva, trabajo en equipo y resolución de problemas.</span>
  </div>
);

const Skills: React.FC = () => {
  const { open, node } = useLightbox();
  const certMedia = certs.map((c) => ({ src: c.image, alt: `Certificado: ${c.title}` }));

  return (
    <div className="relative bg-night pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden">
      <PaperPlanes count={4} />
      <div className="pointer-events-none absolute inset-0 text-grape-2/60" aria-hidden>
        <Sparkle className="absolute left-[5%] top-[6%] h-7 w-7 text-cream animate-twinkle" />
        <Cross className="absolute right-[6%] top-[5%] h-7 w-7 animate-float" />
        <Triangle className="absolute left-[46%] bottom-[4%] h-8 w-8 animate-wiggle" />
      </div>

      <Container className="relative">
        <SectionTitle kicker="lo que sé hacer" center>
          Habilidades & trayectoria
        </SectionTitle>

        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-y-14 lg:gap-x-10 items-start">
          {/* Ficha: educación, experiencia */}
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="relative rounded-[26px] border-2 border-cream/10 bg-night-3 p-7 md:p-8 -rotate-1 shadow-[0_24px_60px_-24px_rgba(0,0,0,.8)]">
              <span className="material-symbols-outlined absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-night !text-[24px] rotate-[-10deg]">
                school
              </span>
              <h3 className="font-display text-[26px] font-extrabold tracking-tightish">Educación</h3>
              <ul className="mt-4 space-y-4">
                {education.map((e) => (
                  <li key={e.t} className="flex gap-3">
                    <Bullet />
                    <div>
                      <p className="text-[12px] font-semibold text-grape-2">{e.y}</p>
                      <p className="font-semibold leading-snug">{e.t}</p>
                      <p className="text-[13px] text-cream/60">{e.p}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-display text-[26px] font-extrabold tracking-tightish">Experiencia</h3>
              <ul className="mt-4 space-y-4">
                {experience.map((e) => (
                  <li key={e.t} className="flex gap-3">
                    <Bullet />
                    <div>
                      <p className="text-[12px] font-semibold text-grape-2">{e.y}</p>
                      <p className="font-semibold leading-snug">{e.t}</p>
                      <p className="text-[13px] text-cream/60">{e.p}</p>
                      <p className="mt-0.5 text-[13px] text-cream/75">{e.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Tickets de habilidades técnicas */}
          <div className="col-span-12 md:col-span-7 lg:col-span-4">
            <Reveal>
              <h3 className="text-center font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold tracking-tightish -rotate-2">
                Habilidades técnicas
              </h3>
              <Squiggle className="mx-auto mt-1 h-4 w-32 text-grape-2" />
            </Reveal>
            <div className="relative mt-8 flex flex-col gap-4">
              <svg className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 h-[calc(100%-2rem)] w-px overflow-visible" aria-hidden>
                <line x1="0" y1="0" x2="0" y2="100%" stroke="#F3EEE2" strokeOpacity=".25" strokeWidth="2" strokeDasharray="6 7" />
              </svg>
              {tickets.map((t, i) => (
                <Reveal
                  key={t.t}
                  delay={i * 90}
                  className={`relative ${i % 2 ? 'self-end' : 'self-start'} w-[78%]`}
                  style={{ ['--r' as any]: `${i % 2 ? 4 : -4}deg` }}
                >
                  <div
                    className={`ticket flex items-center justify-between gap-3 px-7 py-4 shadow-lg transition-transform duration-500 hover:scale-[1.04] ${
                      t.hot ? 'bg-grape text-white' : 'bg-cream text-night'
                    }`}
                    style={{ transform: `rotate(${i % 2 ? 4 : -4}deg)` }}
                  >
                    <span className="font-display text-[clamp(1.1rem,1.8vw,1.4rem)] font-extrabold uppercase leading-tight tracking-tight">{t.t}</span>
                    <span className={`material-symbols-outlined !text-[24px] ${t.hot ? 'text-white' : 'text-grape'}`}>{t.icon}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Soft skills + herramientas */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <Reveal>
              <SoftBadge />
            </Reveal>
            <Reveal delay={120} className="mt-10 text-center">
              <Script className="block text-[28px] leading-none text-grape-2 -rotate-3">uso a diario</Script>
              <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold tracking-tightish">Herramientas</h3>
            </Reveal>
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-[300px] mx-auto">
              {tools.map((t, i) => (
                <Reveal key={t.n} delay={i * 60} className="text-center">
                  <div className="mx-auto flex aspect-square w-full max-w-[84px] items-center justify-center rounded-2xl bg-cream text-night shadow-[0_5px_0_#3B82F6] transition-transform duration-300 hover:-translate-y-1 hover:rotate-3">
                    <span className="font-display text-[26px] font-extrabold tracking-tight">{t.a}</span>
                  </div>
                  <p className="mt-2 text-[11px] font-medium text-cream/70">{t.n}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="mt-24 md:mt-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Script className="block text-[28px] leading-none text-grape-2 -rotate-2">aprendizaje continuo</Script>
              <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-display">Certificaciones</h3>
            </div>
            <Star className="h-9 w-9 text-sun animate-twinkle" />
          </Reveal>
          <div className="mt-10 -mx-4 px-4 md:mx-0 md:px-0 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-4 pb-4">
            {certs.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 90} className="pop w-[86vw] sm:w-[60vw] md:w-auto shrink-0 snap-start">
                <button
                  onClick={() => open(certMedia, i, 'Certificaciones')}
                  className={`group block w-full rounded-[24px] bg-cream p-3 text-left text-night shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] transition-transform duration-500 hover:-translate-y-2 ${
                    i % 2 ? 'hover:rotate-1' : 'hover:-rotate-1'
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-night-3">
                    <img
                      src={url(c.image)}
                      alt={`Certificado de ${c.title}`}
                      loading="lazy"
                      className="h-full w-full object-contain bg-white transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="material-symbols-outlined absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-grape text-white !text-[20px] opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                      zoom_in
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-4 px-2 pb-2 pt-4">
                    <div>
                      <p className="text-[13px] font-semibold text-grape">{c.issuer}</p>
                      <p className="mt-0.5 font-display text-[20px] md:text-[22px] font-extrabold leading-tight tracking-tight">{c.title}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-night px-3 py-1 text-[13px] font-bold text-cream">{c.year}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
      {node}
    </div>
  );
};

export default Skills;
