
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Community Manager',
      company: 'Freelance / Proyectos personales',
      period: '2020 – Presente',
      icon: 'groups',
      tasks: [
        'Gestión de comunidades digitales en Instagram, Facebook y TikTok.',
        'Creación de calendarios de contenido y piezas gráficas.',
        'Análisis de engagement y optimización de estrategias de contenido.'
      ],
      tags: ['Instagram', 'Facebook', 'TikTok']
    },
    {
      role: 'Social Media Manager',
      company: 'Agencia / Freelance',
      period: '2021 – Presente',
      icon: 'campaign',
      tasks: [
        'Desarrollo de campañas digitales y branding.',
        'Gestión de publicidad en Meta Ads.',
        'Creación de contenido visual y análisis de resultados.'
      ],
      tags: ['Meta Ads', 'Branding', 'Content Creation']
    },
    {
      role: 'Asistente de Marketing',
      company: 'Empresa Local / Tienda Comercial',
      period: '2019 – Presente',
      icon: 'store',
      tasks: [
        'Gestión básica de redes sociales (Facebook e Instagram).',
        'Apoyo en la creación de campañas publicitarias.',
        'Análisis de métricas y reportes de rendimiento.'
      ],
      tags: ['Facebook', 'Instagram', 'Analytics']
    }
  ];

  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[1200px]">
      <div className="mb-16 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Experiencia <span className="text-primary">Profesional</span>
        </h1>
        <div className="h-1.5 w-32 bg-primary rounded-full mb-8"></div>
        <p className="text-gray-400 text-xl font-light max-w-2xl">
          Cronología de mi trayectoria en marketing digital, gestión de comunidades y estrategias de contenido.
        </p>
      </div>

      <div className="relative pl-4 md:pl-10 space-y-12">
        {/* Timeline Vertical Line */}
        <div className="absolute left-[20px] md:left-[35px] top-0 bottom-0 w-px bg-white/10"></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative grid grid-cols-[40px_1fr] md:grid-cols-[70px_1fr] gap-6 group">
            {/* Timeline Icon Node */}
            <div className="flex flex-col items-center relative z-10 pt-2">
              <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#161616] border-2 border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(153,153,153,0.3)] transition-all duration-300">
                <span className="material-symbols-outlined text-primary md:!text-[32px]">{exp.icon}</span>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-[#161616] border border-white/10 rounded-2xl p-6 md:p-10 hover:border-primary/50 transition-all shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm uppercase tracking-widest font-bold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded border border-white/10 text-xs text-gray-300 font-mono tracking-widest">
                  <span className="material-symbols-outlined !text-sm">calendar_month</span>
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 md:text-lg font-light leading-relaxed">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-1">terminal</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] border border-white/10 rounded-full bg-white/5 text-gray-400 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
