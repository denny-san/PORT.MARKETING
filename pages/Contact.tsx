import React from 'react';
import { Button, Container, Reveal, Script } from '../components/ui';
import { Burst, Cross, PaperPlanes, Sparkle, Star } from '../components/Doodles';
import { CV_PDF, CV_PDF_NAME } from '../data/projects';

const EMAIL = 'dennyanalisis@gmail.com';

const channels = [
  { icon: 'mail', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'call', value: '+1 829 978 2579', href: 'https://wa.me/18299782579' },
  { icon: 'photo_camera', value: '@denny.sanchez_', href: 'https://www.instagram.com/denny.sanchez_/' },
  { icon: 'work', value: 'Denny Sánchez — LinkedIn', href: 'https://www.linkedin.com/in/denny-sanchez-6910b537b/' },
  { icon: 'link', value: 'bento.me/dennybluesec', href: 'https://bento.me/dennybluesec' },
];

/** Ilustración: avión de papel en un haz de luz. */
const PlaneSpot = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[460px]">
    <div
      className="absolute inset-0 bg-gradient-to-b from-grape/70 via-grape/30 to-transparent"
      style={{ clipPath: 'polygon(38% 0, 62% 0, 100% 100%, 0 100%)' }}
      aria-hidden
    />
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-float" aria-hidden>
      {/* estelas */}
      <g stroke="#F3EEE2" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 16" opacity=".8">
        <path d="M70 300c40-10 70-40 100-80" fill="none" />
        <path d="M40 260c40-6 70-30 92-60" fill="none" />
      </g>
      {/* avión */}
      <g strokeLinejoin="round" strokeWidth="6" stroke="#0E1525">
        <path d="M120 230 330 110 230 300 200 240Z" fill="#F3EEE2" />
        <path d="M200 240 330 110 175 262Z" fill="#60A5FA" />
        <path d="M120 230 200 240 175 262Z" fill="#3B82F6" />
      </g>
      {/* líneas de velocidad */}
      <g stroke="#F3EEE2" strokeWidth="5" strokeLinecap="round">
        <path d="M300 220h40M290 245h24M318 195h22" />
      </g>
    </svg>
    <Sparkle className="absolute right-[12%] top-[14%] h-8 w-8 text-sun animate-twinkle" />
    <Burst className="absolute left-[14%] top-[18%] h-8 w-8 text-cream/70 animate-twinkle [animation-delay:1s]" />
  </div>
);

const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="relative overflow-hidden bg-night-2 pt-20 md:pt-28 pb-24 md:pb-32">
      <PaperPlanes count={4} />
      <div className="pointer-events-none absolute inset-0 text-grape-2/60" aria-hidden>
        <Cross className="absolute left-[5%] top-[10%] h-7 w-7 animate-float" />
        <Star className="absolute right-[6%] bottom-[12%] h-7 w-7 text-sun animate-twinkle" />
      </div>

      <Container className="relative grid grid-cols-12 gap-y-14 md:gap-x-12 items-center">
        <Reveal className="col-span-12 lg:col-span-6 relative">
          <Script className="absolute left-[8%] top-[6%] z-10 text-[clamp(2rem,4vw,3rem)] text-cream -rotate-6">y eso es todo</Script>
          <PlaneSpot />
        </Reveal>

        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <h2 className="font-display font-black tracking-display leading-[0.88] text-[clamp(3.6rem,9vw,7.5rem)] text-cream">
              ¡Gracias!
            </h2>
            <Script className="mt-2 block text-[clamp(2rem,4vw,3rem)] leading-none text-grape-2 -rotate-2">¡Trabajemos juntos!</Script>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-10 space-y-3">
              {channels.map((c) => (
                <li key={c.value}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[16px] md:text-[18px] text-cream/85 hover:text-cream"
                  >
                    <span className="material-symbols-outlined flex h-10 w-10 items-center justify-center rounded-xl bg-cream text-night !text-[20px] transition-transform group-hover:-rotate-6 group-hover:bg-grape group-hover:text-white">
                      {c.icon}
                    </span>
                    <span className="link-u">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
            <Button href={`mailto:${EMAIL}`}>Escríbeme</Button>
            <Button onClick={copy} variant="light" noArrow>
              {copied ? '¡Correo copiado!' : 'Copiar correo'}
            </Button>
            <Button href={CV_PDF} download={CV_PDF_NAME} variant="cream">
              Descargar CV
            </Button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Correo copiado al portapapeles' : ''}
            </span>
          </Reveal>
          <p className="mt-6 text-[14px] text-cream/50">Azua de Compostela, República Dominicana</p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
