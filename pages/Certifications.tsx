import React from 'react';
import { Accent, Container, PageHeader, Reveal } from '../components/ui';
import { useLightbox } from '../components/Lightbox';
import { url } from '../data/projects';

const certs = [
  { title: 'Community Manager', issuer: 'Certificación profesional', year: '2023', desc: 'Gestión de comunidades digitales y estrategias de engagement.', image: '/IMG/COMUNITY MANAGER.png' },
  { title: 'Facebook Ads & Meta Strategy', issuer: 'Meta', year: '2023', desc: 'Creación y optimización de campañas publicitarias en el ecosistema de Meta.', image: '/IMG/FACEBOOK META.png' },
  { title: 'Google Ads Search', issuer: 'Google', year: '2023', desc: 'Red de búsqueda de Google para generación de leads y ventas online.', image: '/IMG/GOGLE ADS.png' },
  { title: 'Marketing Digital', issuer: 'Google / Meta', year: '2022', desc: 'Estrategias de marketing digital, publicidad online y análisis de resultados.', image: '/IMG/MARKETING_.png' },
  { title: 'Fotografía y Edición', issuer: 'Adobe', year: '2021', desc: 'Fotografía digital y edición de contenido visual para marketing.', image: '/IMG/FOTOGRAFÍA_.png' },
  { title: 'Diseño Gráfico Básico', issuer: 'Canva', year: '2020', desc: 'Fundamentos de diseño gráfico y creación de contenido visual profesional.', image: '/IMG/GRAFICO CANVA_.png' },
];

const Certifications: React.FC = () => {
  const { open, node } = useLightbox();
  const media = certs.map((c) => ({ src: c.image, alt: `Certificado: ${c.title}` }));

  return (
    <>
      <PageHeader
        index="05"
        label="Formación"
        title={
          <>
            Aprender <Accent>siempre</Accent>.
          </>
        }
        intro="Certificaciones y cursos que respaldan mi trabajo en marketing digital, publicidad y diseño."
      />

      <section className="pt-12 md:pt-16 pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {certs.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <button onClick={() => open(media, i, 'Certificaciones')} className="group block w-full text-left">
                  <div className="aspect-[4/3] overflow-hidden rounded-[4px] bg-paper-2 border border-line">
                    <img
                      src={url(c.image)}
                      alt={`Certificado de ${c.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    <span>{c.issuer}</span>
                    <span>{c.year}</span>
                  </div>
                  <h2 className="mt-2 font-display text-[22px] font-semibold tracking-tightish leading-tight">{c.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.desc}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      {node}
    </>
  );
};

export default Certifications;
