import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

/** Orden de la página única. `label` se muestra en la barra superior al hacer scroll. */
export const SECTIONS = [
  { id: 'sobre-mi', label: 'Sobre mí', C: About },
  { id: 'habilidades', label: 'Habilidades', C: Skills },
  { id: 'proyectos', label: 'Proyectos', C: Projects },
  { id: 'contacto', label: 'Contacto', C: Contact },
];

const OnePage: React.FC = () => (
  <>
    <Home />
    {SECTIONS.map(({ id, label, C }, i) => (
      <section key={id} id={id} data-section={`${String(i + 1).padStart(2, '0')} — ${label}`} className="scroll-mt-16">
        <C />
      </section>
    ))}
  </>
);

export default OnePage;
