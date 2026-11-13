import React from 'react';
import { Container, Reveal, Script, scrollToId } from '../components/ui';
import { CloudEdge, Cross, Drop, Ring, Scribble, Sparkle, Squiggle, Star, Triangle } from '../components/Doodles';

const disciplines = ['Diseño gráfico', 'Branding', 'Social media', 'Diseño web'];

/** Portada de la página única. */
const Home: React.FC = () => {
  // Parallax suave de los doodles con el scroll
  const layer = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (layer.current) layer.current.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.25}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden bg-night">
      {/* Siluetas de fondo */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-night-3/70 to-transparent" aria-hidden />
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[38%] w-full text-night-2" aria-hidden>
        <path
          d="M0 320V190l90-90 70 70 110-130 120 140 80-60 140 120 100-110 120 100 90-70 130 120 120-140 100 90 90-60 70 70v150Z"
          fill="currentColor"
        />
      </svg>

      <div ref={layer} className="pointer-events-none absolute inset-0 text-grape-2" aria-hidden>
        <Sparkle className="absolute left-[8%] top-[16%] h-8 w-8 text-cream animate-twinkle" />
        <Star className="absolute right-[12%] top-[14%] h-7 w-7 text-sun animate-twinkle [animation-delay:1s]" />
        <Cross className="absolute left-[14%] top-[58%] h-9 w-9 animate-float" />
        <Ring className="absolute right-[7%] top-[46%] h-12 w-12 animate-float-slow" />
        <Triangle className="absolute left-[5%] top-[36%] h-8 w-8 opacity-70 animate-wiggle" />
        <Drop className="absolute right-[20%] bottom-[28%] h-10 w-10 text-cream/70 animate-float" />
        <Scribble className="absolute left-[24%] top-[9%] h-8 w-16 opacity-70" />
        <Sparkle className="absolute right-[30%] top-[8%] h-4 w-4 text-cream animate-twinkle [animation-delay:.6s]" />
      </div>

      <Container className="relative pt-16 md:pt-24 pb-28 md:pb-40 flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-cream/15 bg-night-2/80 px-4 py-1.5 text-[13px] font-medium text-cream/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ADE80]" />
            </span>
            Disponible para proyectos
          </span>
        </Reveal>

        {/* Logotipo PORTAFOLIO */}
        <Reveal delay={120} className="relative mt-10 md:mt-14 select-none">
          <h1 className="relative leading-none" aria-label="Portafolio de Denny Sánchez">
            <span className="block font-display font-black tracking-[-0.05em] text-[clamp(4.2rem,16vw,13rem)] text-cream [text-shadow:0_8px_0_#302D38]">
              PORT<span className="text-grape">A</span>
            </span>
            <span className="block -mt-[0.32em] ml-[0.6em] font-script font-bold text-[clamp(4.6rem,17vw,14rem)] text-cream -rotate-3 [text-shadow:0_8px_0_#302D38]">
              folio
            </span>
          </h1>
          <span className="absolute -right-2 md:-right-10 top-[4%] rotate-[14deg] rounded-xl bg-grape px-3 py-1 font-display text-[clamp(.95rem,1.8vw,1.4rem)] font-extrabold text-white shadow-[0_6px_0_#5B3FA8]">
            2026
          </span>
          <Sparkle className="absolute -left-6 md:-left-12 bottom-[22%] h-8 w-8 md:h-12 md:w-12 text-sun animate-twinkle" />
          <Squiggle className="absolute left-[12%] -bottom-4 h-5 w-40 md:w-64 text-grape-2" />
        </Reveal>

        <Reveal delay={260} className="mt-8 md:mt-10">
          <Script className="text-[clamp(2rem,4.5vw,3.4rem)] text-grape-2 inline-block -rotate-2">Denny Sánchez</Script>
          <p className="mt-3 text-[15px] md:text-[17px] text-cream/70">Marketing Manager & Diseñador Gráfico · Azua, República Dominicana</p>
        </Reveal>

        <Reveal delay={360} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[15px] md:text-[17px] font-medium text-cream/85">
          {disciplines.slice(0, 2).map((d) => (
            <button key={d} onClick={() => scrollToId('proyectos')} className="link-u">
              {d}
            </button>
          ))}
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-night font-script text-[26px] font-bold -rotate-6 shadow-[0_5px_0_#8B5CF6]">
            DS
          </span>
          {disciplines.slice(2).map((d) => (
            <button key={d} onClick={() => scrollToId('proyectos')} className="link-u">
              {d}
            </button>
          ))}
        </Reveal>

        <button
          onClick={() => scrollToId('sobre-mi')}
          className="mt-16 md:mt-20 flex flex-col items-center gap-3 text-[13px] font-medium text-cream/60 hover:text-cream transition-colors"
        >
          <Script className="text-[22px] text-grape-2">desliza para ver todo</Script>
          <span className="relative block h-12 w-[2px] overflow-hidden rounded bg-cream/15">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-grape-2 animate-[scroll-cue_1.8s_ease-in-out_infinite]" />
          </span>
        </button>
      </Container>

      <CloudEdge className="absolute inset-x-0 -bottom-px h-10 md:h-16 w-full text-night-2" />
    </section>
  );
};

export default Home;
