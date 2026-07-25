
import React from 'react';
import { Link } from 'react-router-dom';
import Terminal from '../components/Terminal';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-73px)] overflow-hidden px-4 py-8 md:py-20 lg:py-28">
      {/* Background photo (grayscale, low opacity) */}
      <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
        <img
          src="/IMG/DENNY IMG.jpg"
          alt="Background Denny"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 -z-10 h-[400px] w-[400px] bg-primary/10 blur-[100px] rounded-full opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 -z-10 h-[600px] w-[600px] bg-blue-900/10 blur-[120px] rounded-full opacity-20 pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            I S A I A S 4 1 : 1 0
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] uppercase">
              Marketing <br />
              <span className="text-primary italic">Manager</span>
            </h1>
            <p className="text-xl md:text-2xl font-mono text-gray-200 border-l-2 border-primary pl-6 py-2 uppercase tracking-tight">
              Impulsando estrategias de marketing digital <br className="hidden md:block" /> para resultados excepcionales.
            </p>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-body">
            Marketing Manager especializado en estrategias digitales, gestión de comunidades y creación de contenido.
            Convirtiendo ideas creativas en resultados de marketing efectivos.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="flex flex-col items-center p-4 rounded-lg border border-white/5 bg-white/5 hover:border-primary/30 hover:bg-white/10 transition-all group">
              <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">5+</div>
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-bold text-center">Cursos</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border border-white/5 bg-white/5 hover:border-primary/30 hover:bg-white/10 transition-all group">
              <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">3+</div>
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-bold text-center">Años Exp.</div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg border border-white/5 bg-white/5 hover:border-primary/30 hover:bg-white/10 transition-all group">
              <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-widest font-bold text-center">Dedicación</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/certs"
              className="group relative h-14 overflow-hidden rounded bg-primary px-10 flex items-center justify-center text-black text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(153,153,153,0.2)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <span className="mr-2 material-symbols-outlined">verified</span>
              Expedientes
            </Link>
            <Link
              to="/contact"
              className="h-14 flex items-center justify-center rounded border border-[#333] bg-white/5 px-10 text-white text-sm font-bold uppercase tracking-widest hover:border-primary/50 transition-all"
            >
              <span href=" https://mail.google.com/mail/u/0/#inbox" className="mr-2 material-symbols-outlined">mail</span>
              Enlace
            </Link>
          </div>

          {/* Tech Ticker */}
          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 overflow-hidden">
            <span className="text-[10px] text-gray-600 font-mono font-bold tracking-[0.3em] uppercase">Core Marketing Stack</span>
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {['CANVA', 'META ADS', 'GOOGLE ADS', 'INSTAGRAM', 'FACEBOOK', 'TIKTOK', 'ANALYTICS', 'CONTENT CREATION', 'BRANDING'].map(tech => (
                <span key={tech} className="text-sm font-mono text-gray-500 hover:text-primary transition-colors cursor-default tracking-widest">{tech}</span>
              ))}
              {/* Duplicate for seamless marquee */}
              {['CANVA', 'META ADS', 'GOOGLE ADS', 'INSTAGRAM', 'FACEBOOK', 'TIKTOK', 'ANALYTICS', 'CONTENT CREATION', 'BRANDING'].map(tech => (
                <span key={`${tech}-2`} className="text-sm font-mono text-gray-500 hover:text-primary transition-colors cursor-default tracking-widest">{tech}</span>
              ))}
            </div>

          </div>
        </div>

        {/* Right Visual */}
        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 blur-xl group-hover:bg-primary/10 transition-colors duration-500"></div>
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
