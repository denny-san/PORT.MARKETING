import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import OnePage from './pages/OnePage';
import WhatsAppButton from './components/WhatsAppButton';
import WelcomeScreen from './components/WelcomeScreen';
import { Container } from './components/ui';
import { CV_PDF, CV_PDF_NAME } from './data/projects';

const CV = React.lazy(() => import('./pages/CV'));

const SOCIAL = [
  { name: 'Instagram', href: 'https://www.instagram.com/denny.sanchez_/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/denny-sanchez-6910b537b/' },
  { name: 'WhatsApp', href: 'https://wa.me/18299782579' },
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

/** Barra superior sin menú: nombre, sección actual, descarga de CV y progreso de lectura. */
const TopBar = () => {
  const { pathname } = useLocation();
  const [progress, setProgress] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  const [section, setSection] = React.useState('');

  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  // Sección visible → etiqueta en la barra
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSection(e.target.getAttribute('data-section') || '');
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => window.scrollY < 200 && setSection('');
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color] duration-300 print:hidden ${
        scrolled ? 'bg-night/85 backdrop-blur-md border-b border-cream/10' : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-baseline gap-2 min-w-0"
          aria-label="Volver al inicio"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-full bg-cream font-script text-[18px] font-bold text-night -rotate-6">
            DS
          </span>
          <span className="font-display text-[17px] font-bold tracking-tightish whitespace-nowrap text-cream">Denny Sánchez</span>
        </Link>

        <p
          aria-live="polite"
          className={`hidden md:block rounded-full bg-night-3 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-grape-2 transition-opacity duration-300 ${
            section ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {section}
        </p>

        <a
          href={CV_PDF}
          download={CV_PDF_NAME}
          className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-grape px-5 text-[14px] font-semibold text-white hover:bg-grape-2 transition-colors"
        >
          Descargar CV
          <span className="material-symbols-outlined !text-[18px] transition-transform group-hover:translate-y-0.5">download</span>
        </a>
      </Container>
      <div className="absolute left-0 bottom-[-1px] h-[3px] bg-grape origin-left" style={{ width: '100%', transform: `scaleX(${progress})` }} aria-hidden />
    </header>
  );
};

const Footer = () => (
  <footer className="bg-night text-cream border-t border-cream/10 print:hidden">
    <Container className="py-10 flex flex-col md:flex-row gap-6 md:items-center justify-between text-[13px] text-paper/50">
      <p>© {new Date().getFullYear()} Denny Sánchez — Marketing & Diseño Gráfico. Azua de Compostela, RD.</p>
      <div className="flex gap-6">
        {SOCIAL.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="link-u text-paper/80 hover:text-paper">
            {s.name}
          </a>
        ))}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="link-u text-paper/80 hover:text-paper">
          Volver arriba ↑
        </button>
      </div>
    </Container>
  </footer>
);

const Fallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Cargando…</span>
  </div>
);

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = React.useState(() => {
    try {
      return !sessionStorage.getItem('intro-seen');
    } catch {
      return true;
    }
  });

  const finishIntro = React.useCallback(() => {
    try {
      sessionStorage.setItem('intro-seen', '1');
    } catch {
      /* sin almacenamiento disponible */
    }
    setShowWelcome(false);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      {showWelcome && <WelcomeScreen onFinish={finishIntro} />}
      <div className="relative flex min-h-screen w-full flex-col bg-night text-cream">
        <TopBar />
        <main id="main" tabIndex={-1} className="flex-1 overflow-x-clip outline-none">
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/cv" element={<CV />} />
              <Route path="*" element={<OnePage />} />
            </Routes>
          </Suspense>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
