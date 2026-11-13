import React from 'react';
import { Button, Container, Reveal, Script } from '../components/ui';
import { Burst, CloudEdge, Cross, Dots, PaperPlanes, Ring, Sparkle, Triangle } from '../components/Doodles';
import { CV_PDF, CV_PDF_NAME, url } from '../data/projects';

const socials = [
  { icon: 'photo_camera', label: '@denny.sanchez_', href: 'https://www.instagram.com/denny.sanchez_/' },
  { icon: 'work', label: 'Denny Sánchez', href: 'https://www.linkedin.com/in/denny-sanchez-6910b537b/' },
  { icon: 'mail', label: 'dennyanalisis@gmail.com', href: 'mailto:dennyanalisis@gmail.com' },
];

/** Carta coleccionable con el retrato. */
const ProfileCard = () => (
  <div className="group relative mx-auto w-[260px] sm:w-[300px]">
    <div className="absolute inset-0 translate-x-[-26px] translate-y-[10px] -rotate-[14deg] rounded-[22px] bg-grape-3" aria-hidden />
    <div className="absolute inset-0 translate-x-[-12px] translate-y-[4px] -rotate-[8deg] rounded-[22px] bg-grape" aria-hidden />
    <div className="relative -rotate-[3deg] rounded-[22px] bg-cream p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,.7)] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:rotate-0 group-hover:-translate-y-2">
      <div className="flex items-center justify-between px-1 pb-2 text-night">
        <span className="font-display text-[34px] font-black leading-none">01</span>
        <span className="text-[11px] font-semibold tracking-wide">AZUA · RD</span>
        <Dots className="h-3 w-9 text-grape" />
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-night">
        <img src={url('/IMG/IMG DENNY.jpeg')} alt="Retrato de Denny Sánchez" className="h-full w-full object-cover" />
        <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-grape text-[12px] font-bold text-white rotate-12">
          3+
        </span>
      </div>
      <div className="flex items-center justify-between px-1 pt-2.5 text-night">
        <Script className="text-[24px] leading-none">Denny</Script>
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-night/60">Marketing · Diseño</span>
      </div>
    </div>
    <Sparkle className="absolute -right-5 -top-5 h-9 w-9 text-sun animate-twinkle" />
    <Burst className="absolute -left-10 bottom-6 h-8 w-8 text-grape-2 animate-twinkle [animation-delay:.9s]" />
  </div>
);

const About: React.FC = () => (
  <div className="relative bg-night-2 pt-20 md:pt-28 pb-28 md:pb-36 overflow-hidden">
    <PaperPlanes count={3} />
    <div className="pointer-events-none absolute inset-0 text-grape-2/70" aria-hidden>
      <Cross className="absolute left-[4%] top-[10%] h-7 w-7" />
      <Ring className="absolute right-[6%] top-[14%] h-9 w-9 animate-float-slow" />
      <Triangle className="absolute right-[10%] bottom-[18%] h-8 w-8 animate-wiggle" />
    </div>

    <Container className="relative grid grid-cols-12 gap-y-16 md:gap-x-12 items-center">
      <Reveal className="col-span-12 lg:col-span-5">
        <ProfileCard />
      </Reveal>

      <div className="col-span-12 lg:col-span-7">
        <Reveal>
          <Script className="block text-grape-2 text-[clamp(1.8rem,3.4vw,2.6rem)] leading-none -rotate-2">¡Hola! Te presento a</Script>
          <h2 className="mt-3 font-display font-extrabold tracking-display leading-[0.95] text-[clamp(2.8rem,6.5vw,5.4rem)] text-cream">
            Denny Sánchez
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-[17px] md:text-[19px] leading-relaxed text-cream/80">
            Marketing Manager y diseñador gráfico con formación en informática. Me enfoco en{' '}
            <strong className="font-semibold text-grape-2">diseño para redes sociales, branding y campañas digitales</strong>, y
            también en <strong className="font-semibold text-grape-2">diseño web</strong>. Uno creatividad y datos: desde la
            línea visual de una campaña hasta su publicación, pauta en Meta Ads y análisis de resultados.
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[15px] text-cream/80 hover:text-cream"
            >
              <span className="material-symbols-outlined flex h-9 w-9 items-center justify-center rounded-full bg-night-3 text-grape-2 transition-colors group-hover:bg-grape group-hover:text-white">
                {s.icon}
              </span>
              <span className="link-u">{s.label}</span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={220} className="mt-10 flex flex-wrap gap-3">
          <Button href={CV_PDF} download={CV_PDF_NAME}>
            Descargar CV
          </Button>
          <Button to="#proyectos" variant="light">
            Ver proyectos
          </Button>
        </Reveal>
      </div>
    </Container>

    <CloudEdge className="absolute inset-x-0 -bottom-px h-10 md:h-16 w-full text-night" />
  </div>
);

export default About;
