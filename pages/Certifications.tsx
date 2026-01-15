
import React from 'react';
import { href } from 'react-router-dom';

interface CertCardProps {
  title: string;
  issuer: string;
  year: string;
  desc: string;
  id: string;
  icon: string;
  image: string;
}

const CertCard: React.FC<CertCardProps> = ({ title, issuer, year, desc, id, icon, image }) => (
  <article className="group relative flex flex-col bg-[#161616] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(153,153,153,0.1)] hover:-translate-y-2">
    <div className="h-48 w-full overflow-hidden relative bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent z-10"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
      />
      <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
        <span className="text-xs font-mono text-primary font-bold">{year}</span>
      </div>
    </div>

    <div className="flex flex-col flex-1 p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary text-[24px]">{icon}</span>
        <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">{issuer}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors tracking-tight">{title}</h3>
      <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light">{desc}</p>

      <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] text-gray-500 font-mono font-bold tracking-widest">ID: {id}</span>
        <a href="#" className="inline-flex items-center text-xs font-bold text-white hover:text-primary transition-colors uppercase tracking-widest group/link">
          Verify
          <span className="material-symbols-outlined text-[16px] ml-1 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </div>
  </article>
);

const Certifications: React.FC = () => {
  const certs = [
    {
      title: 'Community Manager',
      issuer: 'Certificación Profesional',
      year: '2023',
      id: 'CM-001',
      desc: 'Formación especializada en gestión de comunidades digitales y estrategias de engagement.',
      icon: 'groups',
      image: '/IMG/COMUNITY MANAGER.png'
    },
    {
      title: 'Marketing Digital',
      issuer: 'Google / Meta',
      year: '2022',
      id: 'MD-002',
      desc: 'Certificación en estrategias de marketing digital, publicidad online y análisis de resultados.',
      icon: 'campaign',
      image: '/IMG/MARKETING_.png'
    },
    {
      title: 'Diseño Gráfico Básico',
      issuer: 'Canva',
      year: '2020',
      id: 'DG-004',
      desc: 'Fundamentos de diseño gráfico y creación de contenido visual profesional.',
      icon: 'palette',
      image: '/IMG/GRAFICO CANVA_.png'
    },
    {
      title: 'Fotografía y Edición',
      issuer: 'Adobe',
      year: '2021',
      id: 'FE-005',
      desc: 'Técnicas de fotografía digital y edición de contenido visual para marketing.',
      icon: 'camera',
      image: '/IMG/FOTOGRAFÍA_.png'
    },
    {
      title: 'Facebook Ads & Meta Strategy',
      issuer: 'Meta',
      year: '2023',
      id: 'FB-META-001',
      desc: 'Especialización en creación y optimización de campañas publicitarias en el ecosistema de Meta.',
      icon: 'ads_click',
      image: '/IMG/FACEBOOK META.png'
    },
    {
      title: 'Google Ads Search Certification',
      issuer: 'Google',
      year: '2023',
      id: 'GOOG-ADS-002',
      desc: 'Dominio de la red de búsqueda de Google para generación de leads y ventas online.',
      icon: 'ads_click',
      image: '/IMG/GOGLE ADS.png'
    }
  ];

  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[1200px]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-white/10 pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-[0.3em]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Certificaciones
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Certificaciones & <br />Formación</h2>
        </div>
        <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
          El aprendizaje continuo es esencial. Aquí están las certificaciones y cursos que respaldan mi experiencia en marketing digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map(c => (
          <CertCard
            key={c.id}
            title={c.title}
            issuer={c.issuer}
            year={c.year}
            desc={c.desc}
            id={c.id}
            icon={c.icon}
            image={c.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
