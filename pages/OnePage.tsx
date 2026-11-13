import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';

/** Orden de la página única. `label` se muestra en la barra superior al hacer scroll. */
export const SECTIONS = [
  { id: 'sobre-mi', label: 'Sobre mí', C: About },
  { id: 'proyectos', label: 'Proyectos', C: Projects },
  { id: 'servicios', label: 'Servicios', C: Skills },
  { id: 'experiencia', label: 'Experiencia', C: Experience },
  { id: 'formacion', label: 'Formación', C: Certifications },
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
