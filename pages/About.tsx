
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="relative px-6 py-12 md:py-20 lg:py-24 mx-auto max-w-[1200px]">
      <div className="mb-12 border-l-4 border-primary pl-6 flex flex-col gap-2">
        <h3 className="text-primary text-sm font-mono tracking-[0.2em] uppercase">// SYSTEM PROFILE :: DETECTED</h3>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">About Me</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Portrait */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="relative group">
            {/* Tech Decoration */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary z-20"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary z-20"></div>
            
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-surface-dark border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                src="/IMG/IMG DENNY.jpeg" 
                alt="Denny Sanchez Portrait" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-mono text-green-400 tracking-widest uppercase font-bold">Status: Online / Monitoring</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/5 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-white mb-1">3+</div>
              <div className="text-[10px] text-primary uppercase font-mono tracking-widest font-bold">Años Exp.</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl font-bold text-white mb-1">5+</div>
              <div className="text-[10px] text-primary uppercase font-mono tracking-widest font-bold">Cursos</div>
            </div>
          </div>
        </div>

        {/* Right: Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl">
            <div className="flex items-start justify-between mb-8 border-b border-white/10 pb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Denny Sánchez</h2>
                <p className="text-primary font-mono text-sm uppercase tracking-widest font-bold">// Marketing Manager</p>
              </div>
              <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-gray-400 border border-white/10">
                <span className="material-symbols-outlined text-[32px]">fingerprint</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-10">
              Profesional del marketing digital con formación en informática y experiencia como Community Manager y Marketing Manager.
              Especializado en gestión de redes sociales, publicidad digital, creación de contenido y análisis de resultados.
            </p>

            <div className="mb-10">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-6">Core Competencies</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { n: 'Creatividad', i: 'palette' },
                  { n: 'Liderazgo', i: 'groups' },
                  { n: 'Comunicación efectiva', i: 'chat' },
                  { n: 'Trabajo en equipo', i: 'handshake' },
                  { n: 'Resolución de problemas', i: 'lightbulb' }
                ].map(skill => (
                  <span key={skill.n} className="inline-flex items-center gap-2 rounded bg-white/5 px-4 py-2 text-sm font-medium text-white border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all cursor-default">
                    <span className="material-symbols-outlined text-[18px] text-primary">{skill.i}</span>
                    {skill.n}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
              <a
                href="https://drive.google.com/drive/folders/1rG4kTjN6r2ibhOiB6AOv1-YULiR4MvWQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded bg-primary h-14 px-8 text-black font-bold text-base transition-all hover:bg-gray-400 hover:shadow-[0_0_20px_rgba(153,153,153,0.3)]"
              >
                <span className="material-symbols-outlined">download</span>
                Descargar CV
              </a>
              <Link to="/certs" className="flex-1 flex items-center justify-center gap-2 rounded border border-white/20 h-14 px-8 text-white font-bold text-base transition-all hover:bg-white/5 hover:border-white/40">
                <span className="material-symbols-outlined">verified</span>
                Ver Certificaciones
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-dashed border-gray-800 bg-black/40 p-5 font-mono text-xs text-gray-500">
            <p>&gt; init_sequence.sh</p>
            <p className="text-green-500">&gt; System check complete. All defensive modules active.</p>
            <p>&gt; User profile: Denny_Sanchez loaded [AUTHORIZATION: LEVEL 4]</p>
            <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle mt-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
