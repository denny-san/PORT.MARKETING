import React from 'react';
import { Accent, Button, Container, Eyebrow, Reveal } from '../components/ui';

const EMAIL = 'dennyanalisis@gmail.com';

const channels = [
  { label: 'Correo', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Teléfono / WhatsApp', value: '+1 829 978 2579', href: 'https://wa.me/18299782579' },
  { label: 'Instagram', value: '@denny.sanchez_', href: 'https://www.instagram.com/denny.sanchez_/' },
  { label: 'LinkedIn', value: 'Denny Sánchez', href: 'https://www.linkedin.com/in/denny-sanchez-6910b537b/' },
  { label: 'Enlaces', value: 'bento.me/dennybluesec', href: 'https://bento.me/dennybluesec' },
  { label: 'Ubicación', value: 'Azua de Compostela, República Dominicana' },
];

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
    <section className="pt-16 md:pt-28 pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Eyebrow index="H">Contacto</Eyebrow>
        </Reveal>
        <Reveal as="h1" delay={80} className="mt-8 font-display font-semibold tracking-display leading-[0.9] text-[clamp(2.9rem,9vw,8.5rem)] text-balance">
          Hablemos de tu <Accent>próximo</Accent> proyecto.
        </Reveal>

        <Reveal delay={140} className="mt-12 flex flex-wrap items-center gap-3">
          <Button href={`mailto:${EMAIL}`}>Escríbeme</Button>
          <Button onClick={copy} variant="outline">
            {copied ? 'Correo copiado' : 'Copiar correo'}
          </Button>
          <span className="sr-only" aria-live="polite">
            {copied ? 'Correo copiado al portapapeles' : ''}
          </span>
        </Reveal>

        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-y-10 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="text-[17px] leading-relaxed text-muted max-w-sm">
              Disponible para colaboraciones en diseño gráfico para redes, gestión de comunidades, campañas publicitarias y
              branding.
            </p>
          </Reveal>

          <dl className="col-span-12 md:col-span-8 border-t border-ink">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 40} className="grid grid-cols-12 gap-x-4 border-b border-line py-5 md:py-6 items-baseline">
                <dt className="col-span-12 sm:col-span-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted mb-1 sm:mb-0">{c.label}</dt>
                <dd className="col-span-12 sm:col-span-8 font-display text-[clamp(1.15rem,2vw,1.6rem)] font-medium tracking-tightish break-words">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="link-u"
                      {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
