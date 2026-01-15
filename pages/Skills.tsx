
import React from 'react';

interface SkillCardProps {
  title: string;
  desc: string;
  icon: string;
  proficiency: number;
  mainIcon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, desc, icon, proficiency, mainIcon }) => (
  <div className="group relative flex flex-col p-8 rounded-xl border border-white/10 bg-[#161616] transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(153,153,153,0.15)]">
    <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[48px]">{mainIcon}</span>
    </div>

    <div className="mb-8">
      <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
        <span className="material-symbols-outlined text-[30px]">{icon}</span>
      </div>
      <h3 className="text-white text-xl font-bold font-display uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>

    <div className="mt-auto pt-6 border-t border-white/5">
      <div className="flex justify-between items-end mb-2">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Dominio</span>
        <span className="text-[10px] font-mono text-primary font-bold">{proficiency}%</span>
      </div>
      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
        <div className="bg-primary h-full rounded-full shadow-[0_0_8px_rgba(153,153,153,0.3)] transition-all duration-1000 ease-out" style={{ width: `${proficiency}%` }}></div>
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skills = [
    { title: 'Gestión de Redes Sociales', desc: 'Estrategias de contenido, engagement y crecimiento de comunidades.', icon: 'groups', proficiency: 95, m: 'groups' },
    { title: 'Publicidad Digital', desc: 'Campañas en Meta Ads, Google Ads y plataformas sociales.', icon: 'campaign', proficiency: 90, m: 'campaign' },
    { title: 'Creación de Contenido', desc: 'Diseño gráfico, edición de video y storytelling efectivo.', icon: 'palette', proficiency: 85, m: 'palette' },
    { title: 'Análisis de Datos', desc: 'Métricas de rendimiento, reportes y optimización de ROI.', icon: 'analytics', proficiency: 88, m: 'analytics' },
    { title: 'Branding y Estrategia', desc: 'Desarrollo de identidad de marca y posicionamiento.', icon: 'branding_watermark', proficiency: 92, m: 'branding_watermark' },
    { title: 'Marketing Digital', desc: 'SEO, SEM y estrategias integradas de marketing online.', icon: 'trending_up', proficiency: 80, m: 'trending_up' },
  ];

  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[1200px]">
      <div className="flex flex-col max-w-4xl mb-16">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-[2px] w-12 bg-primary"></div>
          Competencias de Marketing
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-8">
          Habilidades Marketing<span className="text-primary">_</span>
        </h1>
        <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl">
          Conjunto de habilidades especializadas en marketing digital, creación de contenido y estrategias de crecimiento de marca.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map(s => (
          <SkillCard
            key={s.title}
            title={s.title}
            desc={s.desc}
            icon={s.icon}
            proficiency={s.proficiency}
            mainIcon={s.m}
          />
        ))}

        {/* Big Lab Card */}
        <div className="group relative lg:col-span-2 flex flex-col md:flex-row gap-10 p-10 rounded-xl border border-white/10 bg-[#161616] hover:border-primary transition-all">
          <div className="absolute top-10 right-10 text-primary/10">
            <span className="material-symbols-outlined text-[120px]">palette</span>
          </div>
          <div className="shrink-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
              <span className="material-symbols-outlined text-[56px]">design_services</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">Canva Pro Tools</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
              Herramientas avanzadas de diseño gráfico para creación de contenido visual impactante y branding profesional.
            </p>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mt-auto">
              <div className="bg-primary h-full rounded-full" style={{ width: '95%' }}></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Dominio Creativo</span>
              <span className="text-[10px] font-mono text-primary font-bold">95%</span>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="flex flex-col items-center justify-center p-10 rounded-xl border border-primary/30 bg-primary/5 text-center transition-all hover:bg-primary/10">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">campaign</span>
          <h3 className="text-white text-xl font-bold uppercase mb-3 tracking-tight">¿Listo para Impulsar tu Marca?</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">Disponible para proyectos de marketing digital y gestión de redes sociales.</p>
          <button className="w-full rounded bg-primary py-3 px-6 text-black font-bold uppercase text-sm tracking-widest hover:bg-gray-400 transition-colors">
            Iniciar Colaboración
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
