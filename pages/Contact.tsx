
import React from 'react';

const ContactCard = ({ icon, label, val, type, link }: any) => (
  <div className="group flex flex-col gap-6 p-8 rounded-2xl border border-white/10 bg-[#161616] hover:border-primary transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="text-primary material-symbols-outlined text-[36px]">{icon}</div>
      <span className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.3em] font-bold group-hover:text-primary transition-colors">{type}</span>
    </div>
    <div className="flex flex-col gap-1">
      <h2 className="text-white text-xl font-bold tracking-tight">{label}</h2>
      {link ? (
        <a href={link} className="text-gray-400 text-base font-mono break-all hover:text-primary transition-colors">{val}</a>
      ) : (
        <p className="text-gray-400 text-base font-mono break-all">{val}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="px-6 py-12 md:py-24 mx-auto max-w-[960px]">
      {/* Page Header */}
      <div className="flex flex-col gap-4 mb-16 border-b border-primary/20 pb-8">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary text-xs font-mono tracking-[0.4em] uppercase font-bold">Contact: Professional Network</span>
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none">Contact<span className="text-primary">//</span></h1>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-primary/40 pl-6 mt-4">
          Canales de comunicación profesionales habilitados. Disponible para colaboraciones en marketing digital,
          gestión de redes sociales y estrategias de branding.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <ContactCard 
          icon="mail" 
          label="Correo Electronico" 
          val="dennyanalisis@gmail.com" 
          type="Encrypted" 
          link="mailto:dennyanalisis@gmail.com" 
        />
        <ContactCard 
          icon="call" 
          label="Telefono" 
          val="829-978-2579" 
          type="Secure Line" 
        />
        <ContactCard 
          icon="captive_portal" 
          label="Redes Sociales" 
          val="bento.me/dennybluesec" 
          type="Ext. Link" 
          link="https://bento.me/dennybluesec" 
        />
        <ContactCard 
          icon="location_on" 
          label="Ubicacion" 
          val="Azua de compostela, Rep. Dom." 
          type="Base" 
        />
      </div>

      {/* Map Section */}
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] font-bold">Geolocation Tracking</h3>
          <span className="text-xs text-primary font-mono animate-pulse">NETWORK_ACTIVE</span>
        </div>
        
        <div className="relative w-full h-[400px] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-all shadow-2xl">
          <div 
            className="absolute inset-0 opacity-40 bg-center bg-cover mix-blend-luminosity"
            style={{ backgroundImage: `url('/IMG/IMG DENNY.jpeg')` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F0F0F_100%)]"></div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 grid-bg opacity-20"></div>

          {/* Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <div className="relative flex h-10 w-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-primary/80 border-4 border-black shadow-[0_0_20px_rgba(153,153,153,0.5)]"></span>
            </div>
          <div className="bg-black/90 px-4 py-2 rounded-lg border border-primary/30 backdrop-blur-md shadow-2xl">
            <span className="text-primary text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap">Base: Azua de compostela</span>
          </div>
          </div>
        </div>
      </div>

      {/* Final Action */}
      <div className="flex justify-center">
        <button className="group relative flex min-w-[280px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-16 px-10 bg-primary hover:bg-gray-400 text-black gap-4 text-base font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(153,153,153,0.2)]">
          <span className="material-symbols-outlined text-[28px]">terminal</span>
          <span className="uppercase tracking-[0.1em]">Initiate Handshake</span>
          
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-[shine_1s_ease-in-out_infinite]"></div>
        </button>
      </div>
    </div>
  );
};

export default Contact;
