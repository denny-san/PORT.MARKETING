import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';
import WelcomeScreen from './components/WelcomeScreen';
import { Container } from './components/ui';

const About = React.lazy(() => import('./pages/About'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const CV = React.lazy(() => import('./pages/CV'));
const Contact = React.lazy(() => import('./pages/Contact'));

const NavLinks = [
  { name: 'Proyectos', path: '/projects' },
  { name: 'Sobre mí', path: '/about' },
  { name: 'Servicios', path: '/skills' },
  { name: 'Experiencia', path: '/experience' },
  { name: 'Formación', path: '/certs' },
  { name: 'CV', path: '/cv' },
];

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

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => setOpen(false), [location.pathname]);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color] duration-300 print:hidden ${
        scrolled || open ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 md:h-[72px] items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-2" aria-label="Inicio — Denny Sánchez">
          <span className="font-display text-[19px] font-semibold tracking-tightish">Denny Sánchez</span>
          <span className="hidden sm:inline font-serif italic text-[17px] text-muted">— marketing & diseño</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {NavLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `link-u text-[14px] pb-0.5 transition-colors ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`}
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-ink px-5 text-[14px] font-medium text-paper hover:bg-ink-2 transition-colors"
          >
            Hablemos
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          </Link>
        </nav>

        <button
          className="lg:hidden h-10 px-4 -mr-2 rounded-full text-[14px] font-medium"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-paper overflow-y-auto">
          <Container className="py-8 flex flex-col">
            {[...NavLinks, { name: 'Contacto', path: '/contact' }].map((item, i) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-baseline justify-between border-b border-line py-4 font-display text-[34px] font-semibold tracking-display ${
                    isActive ? 'text-ink' : 'text-ink/70'
                  }`
                }
              >
                {item.name}
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted">{String(i + 1).padStart(2, '0')}</span>
              </NavLink>
            ))}
            <div className="mt-10 flex gap-6 text-[14px] text-muted">
              {SOCIAL.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="link-u">
                  {s.name}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="on-dark bg-ink text-paper print:hidden">
    <Container className="pt-20 md:pt-28 pb-10">
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
        <div className="col-span-12 lg:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">¿Tienes un proyecto en mente?</p>
          <Link
            to="/contact"
            className="group mt-6 inline-flex items-end gap-4 font-display font-semibold tracking-display leading-[0.9] text-[clamp(3rem,9vw,8rem)]"
          >
            <span>
              Hablemos<span className="text-accent">.</span>
            </span>
            <svg viewBox="0 0 16 16" className="mb-[0.15em] h-[0.5em] w-[0.5em] transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" aria-hidden>
              <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50 mb-5">Navegación</p>
          <ul className="space-y-2.5 text-[15px]">
            {NavLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="link-u text-paper/80 hover:text-paper">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50 mb-5">Redes</p>
          <ul className="space-y-2.5 text-[15px]">
            {SOCIAL.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-u text-paper/80 hover:text-paper">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-paper/10 flex flex-col sm:flex-row gap-3 justify-between text-[13px] text-paper/45">
        <p>© {new Date().getFullYear()} Denny Sánchez. Todos los derechos reservados.</p>
        <p>Azua de Compostela, República Dominicana</p>
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
      <button
        type="button"
        onClick={() => document.getElementById('main')?.focus()}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded-full"
      >
        Saltar al contenido
      </button>
      <div className="relative flex min-h-screen w-full flex-col bg-paper text-ink">
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 overflow-x-clip outline-none">
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certs" element={<Certifications />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/contact" element={<Contact />} />
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
