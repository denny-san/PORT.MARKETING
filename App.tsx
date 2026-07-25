
import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';
import CursorSpark from './components/CursorSpark';
import WelcomeScreen from './components/WelcomeScreen';

const About = React.lazy(() => import('./pages/About'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const CV = React.lazy(() => import('./pages/CV'));
const Contact = React.lazy(() => import('./pages/Contact'));

const NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Sobre mí', path: '/about' },
  { name: 'Habilidades', path: '/skills' },
  { name: 'Experiencia', path: '/experience' },
  { name: 'Proyectos', path: '/projects' },
  { name: 'Certificaciones', path: '/certs' },
  { name: 'Curriculum', path: '/cv' },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F0F0F]/80 backdrop-blur-md px-6 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
            <span className="material-symbols-outlined text-[24px]">shield_lock</span>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight uppercase">Denny Sánchez</h2>
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Marketing Manager</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NavLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-gray-400'
                }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="h-10 flex items-center justify-center rounded bg-primary px-5 text-black text-sm font-bold uppercase transition-transform hover:scale-105 active:scale-95">
            Contacto
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F0F0F] border-b border-white/10 py-4 px-6 flex flex-col gap-4">
          {NavLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium ${location.pathname === item.path ? 'text-primary' : 'text-gray-400'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="h-10 flex items-center justify-center rounded bg-primary text-black text-sm font-bold uppercase">
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="border-t border-[#2A2A2A] bg-[#0F0F0F] text-gray-500 py-10">
    <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col gap-1 text-center md:text-left">
        <p className="text-xs font-mono uppercase tracking-widest">© 2024 MARKETING MANAGER PORTFOLIO. ALL CAMPAIGNS ACTIVE.</p>
        <p className="text-[10px] text-gray-700">VERIFICADA CON DERECHO DE AUTOR </p>
      </div>
      <div className="flex gap-8">
        <a href="https://www.linkedin.com/in/denny-sanchez-6910b537b/" className="text-xs uppercase tracking-wide hover:text-primary transition-colors">LinkedIn</a>
        <a href="https://wa.me/8299782579" className="text-xs uppercase tracking-wide hover:text-primary transition-colors">WhatsApp</a>
        <a href="https://www.instagram.com/denny.sanchez_/" className="text-xs uppercase tracking-wide hover:text-primary transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = React.useState(true);

  return (
    <HashRouter>
      {showWelcome && <WelcomeScreen onFinish={() => setShowWelcome(false)} />}
      <div className="relative flex min-h-screen w-full flex-col font-display bg-background-dark text-white">
        <CursorSpark />
        <Header />
        <main className="flex-1 overflow-x-hidden">
          <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center font-mono text-sm text-primary">CARGANDO SECCIÓN...</div>}>
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
