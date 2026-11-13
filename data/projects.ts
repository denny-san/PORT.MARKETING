export type MediaItem = { src: string; type?: 'image' | 'video'; alt?: string };

export interface Campaign {
  slug: string;
  title: string;
  titleAccent: string;
  format: string;
  summary: string;
  cover: string;
  media: MediaItem[];
  tags: string[];
  /** Colores del slide, tomados de la marca de cada proyecto */
  theme?: Theme;
}

export interface Theme {
  bg: string;
  accent: string;
  /** Texto oscuro sobre fondos claros */
  light?: boolean;
}

const THEMES: Record<string, Theme> = {
  prevencion: { bg: 'linear-gradient(135deg,#F472B6 0%,#DB2777 55%,#9D174D 100%)', accent: '#FFE4F1' },
  constitucion: { bg: 'linear-gradient(135deg,#0B3C8C 0%,#082A66 60%,#06204F 100%)', accent: '#FF5A6E' },
  reforestacion: { bg: 'linear-gradient(135deg,#2F9E57 0%,#1E7A3F 55%,#145A2D 100%)', accent: '#C6F36B' },
  revital: { bg: 'linear-gradient(135deg,#60B8F0 0%,#2F8FD8 55%,#1D6DB5 100%)', accent: '#FFF2A8' },
  familia: { bg: 'linear-gradient(135deg,#1D4ED8 0%,#1E3A8A 60%,#172554 100%)', accent: '#7DD3FC' },
  cindel: { bg: 'linear-gradient(135deg,#1747B8 0%,#0F2F86 60%,#0A1F5C 100%)', accent: '#FF4D4D' },
  novaweb: { bg: 'linear-gradient(135deg,#13254F 0%,#0B1838 60%,#070F26 100%)', accent: '#4D8DFF' },
  musica: { bg: 'linear-gradient(135deg,#4338CA 0%,#3123A6 55%,#1E1470 100%)', accent: '#FF7AC6' },
  comida: { bg: 'linear-gradient(135deg,#F26B21 0%,#D9480F 55%,#A8350B 100%)', accent: '#FFD400' },
  restaurante: { bg: 'linear-gradient(135deg,#2A2420 0%,#181412 100%)', accent: '#E0A458' },
  salon: { bg: 'linear-gradient(135deg,#FBEDE8 0%,#F3D9D1 100%)', accent: '#B5536B', light: true },
  portafolio: { bg: 'linear-gradient(135deg,#1F2937 0%,#111827 100%)', accent: '#FFD700' },
};

export const themeOf = (slug: string): Theme => THEMES[slug] ?? { bg: '#1F2B48', accent: '#60A5FA' };

export interface Work extends Campaign {
  category: 'Redes sociales' | 'Branding' | 'Web';
  /** Anclar el recorte de miniaturas arriba (capturas de páginas web) */
  alignTop?: boolean;
}

const ab = (folder: string, files: string[], alt: string): MediaItem[] =>
  files.map((f, i) => ({
    src: `/agua-buena/${folder}/${f}`,
    type: f.endsWith('.mp4') ? 'video' : 'image',
    alt: `${alt} — pieza ${i + 1}`,
  }));

/* ------------------------------------------------------------------ */
/*  Caso destacado: Agua Buena                                         */
/* ------------------------------------------------------------------ */

export const aguaBuena = {
  client: 'Agua Buena',
  tagline: 'Por nuestra y por buena',
  intro:
    'Sistema visual y contenido para redes sociales de Agua Buena, marca de agua mineralizada de Azua de Compostela. Cada campaña conecta el producto con causas reales —salud, comunidad, medio ambiente y orgullo local— bajo una misma identidad: azul corporativo, tipografía geométrica de alto contraste y fotografía con personas reales.',
  role: 'Dirección de arte · Diseño gráfico · Copy · Edición fotográfica',
  deliverables: 'Carruseles, posts, reels y coberturas de eventos',
  overview: '/agua-buena/vista-general.jpg',
};

export const campaigns: Campaign[] = [
  {
    slug: 'prevencion',
    title: 'Juntos por la',
    titleAccent: 'prevención',
    format: 'Carrusel · 9 piezas',
    summary:
      'Jornada de concientización sobre el cáncer de mama junto a AFP Siembra. Portada, cobertura de la charla con especialistas, registro del público y la botella edición especial rosa como cierre de marca.',
    cover: '/agua-buena/prevencion/01-portada.jpg',
    media: ab(
      'prevencion',
      [
        '01-portada.jpg',
        '02-doctora-microfono.jpg',
        '03-doctora-botella.jpg',
        '04-charla-camiseta.jpg',
        '05-charla-camisa.jpg',
        '06-charla-polo.jpg',
        '07-publico.jpg',
        '08-botella.jpg',
        '09-gracias.jpg',
      ],
      'Juntos por la prevención',
    ),
    tags: ['Campaña social', 'Cobertura de evento', 'Co-branding'],
  },
  {
    slug: 'constitucion',
    title: 'Día de la',
    titleAccent: 'Constitución',
    format: 'Post + Reel',
    summary:
      'Pieza conmemorativa del 6 de noviembre y reel «Dominicanos de corazón». Composición limpia con la bandera como héroe visual y la marca en segundo plano para un mensaje patrio sin ruido comercial.',
    cover: '/agua-buena/constitucion/01-portada.jpg',
    media: ab('constitucion', ['01-portada.jpg', '02-reel-dominicanos-de-corazon.mp4'], 'Día de la Constitución'),
    tags: ['Efeméride', 'Motion', 'Reel'],
  },
  {
    slug: 'reforestacion',
    title: 'Sembramos',
    titleAccent: 'vida',
    format: 'Díptico · 2 piezas',
    summary:
      'Comunicación de la jornada de reforestación: «Porque cuidar los árboles es cuidar el agua». Jerarquía tipográfica fuerte sobre fotografía de campo para unir propósito ambiental y producto.',
    cover: '/agua-buena/reforestacion/01-sembramos-vida.jpg',
    media: ab(
      'reforestacion',
      ['01-sembramos-vida.jpg', '02-sembrar-es-cuidar-el-agua.jpg'],
      'Sembramos vida',
    ),
    tags: ['Responsabilidad social', 'Medio ambiente'],
  },
  {
    slug: 'revital',
    title: 'Revital Wellness',
    titleAccent: '2026',
    format: 'Carrusel · 6 piezas',
    summary:
      'Cobertura de la feria de bienestar Revital Wellness en Azua de Compostela. Una narrativa en seis pasos —salud, equilibrio, hidratación— que posiciona a Agua Buena como aliado natural del estilo de vida saludable.',
    cover: '/agua-buena/revital/01-portada.jpg',
    media: ab(
      'revital',
      [
        '01-portada.jpg',
        '02-un-dia-de-salud.jpg',
        '03-cuerpo-en-equilibrio.jpg',
        '04-hidratando-cada-momento.jpg',
        '05-hidratarte-es-cuidarte.jpg',
        '06-cierre.jpg',
      ],
      'Revital Wellness 2026',
    ),
    tags: ['Patrocinio', 'Cobertura de evento', 'Bienestar'],
  },
  {
    slug: 'familia',
    title: 'Somos una',
    titleAccent: 'familia',
    format: 'Carrusel · 6 piezas',
    summary:
      'Campaña de marca empleadora que pone rostro a quienes hacen posible Agua Buena: producción, logística y entrega. Retratos reales, copy cálido y un corazón gráfico como hilo conductor.',
    cover: '/agua-buena/familia/01-portada.jpg',
    media: ab(
      'familia',
      [
        '01-portada.jpg',
        '02-llevamos-lo-bueno.jpg',
        '03-con-esfuerzo-y-orgullo.jpg',
        '04-como-en-casa.jpg',
        '05-la-calidad-en-tus-manos.jpg',
        '06-hasta-tu-puerta.jpg',
      ],
      'Somos una familia',
    ),
    tags: ['Employer branding', 'Retrato', 'Storytelling'],
  },
];

/* ------------------------------------------------------------------ */
/*  Otros proyectos                                                    */
/* ------------------------------------------------------------------ */

const imgs = (folder: string, files: string[], alt: string): MediaItem[] =>
  files.map((f, i) => ({ src: `/${folder}/${f}`, alt: `${alt} — pieza ${i + 1}` }));

export const works: Work[] = [
  {
    slug: 'cindel',
    title: 'CINDEL',
    titleAccent: 'social media',
    format: 'Instagram · 7 piezas',
    category: 'Redes sociales',
    summary:
      'Gestión estratégica de la cuenta de Instagram y creación de contenido visual de alto impacto: piezas promocionales, comunicados y publicaciones de marca con una línea gráfica constante.',
    cover: '/CINDEL/FOTO1.png',
    media: imgs('CINDEL', ['FOTO1.png', 'FOTO2.png', 'FOTO3.png', 'FOTO4.png', 'FOTO5.png', 'FOTO6.png', 'FOTO7.png'], 'CINDEL'),
    tags: ['Instagram', 'Diseño gráfico', 'Canva'],
  },
  {
    slug: 'novaweb',
    title: 'NOVAWEB',
    titleAccent: 'studio',
    format: 'Parrilla mensual · 11 piezas',
    category: 'Redes sociales',
    summary:
      'Administración del perfil corporativo y diseño de la parrilla de contenidos mensual: presentación de servicios, mensajes de marca y llamados a la acción en formato vertical para el feed.',
    cover: '/NOVAWEB/FOTO1.png',
    media: imgs(
      'NOVAWEB',
      ['FOTO1.png', 'FOTO2.png', 'FOTO 3.png', 'FOTO4.png', 'FOTO5.png', 'FOTO6.png', 'FOTO7.png', 'FOTO8.png', 'FOTO9.png', 'FOTO10.png', 'FOTO11.png'],
      'NOVAWEB',
    ),
    tags: ['Estrategia digital', 'Copywriting', 'Figma'],
  },
  {
    slug: 'musica',
    title: 'Música',
    titleAccent: 'app',
    format: 'Branding · 17 piezas',
    category: 'Branding',
    summary:
      'Identidad visual y piezas de branding para marcas del sector musical y del entretenimiento: personajes, composiciones con color intenso y tipografía de impacto para captar atención en el feed.',
    cover: '/MUSICA/FOTO1.png',
    media: imgs('MUSICA', Array.from({ length: 17 }, (_, i) => `FOTO${i + 1}.png`), 'Música App'),
    tags: ['Branding', 'Figma', 'Canva'],
  },
  {
    slug: 'comida',
    title: 'Comida',
    titleAccent: 'express',
    format: 'Promociones · 3 piezas',
    category: 'Redes sociales',
    summary:
      'Marketing gastronómico para delivery: gestión de comunidad y diseño de promociones con el producto como protagonista, precios visibles y mensajes directos que invitan a pedir.',
    cover: '/COMIDA/FOTO1.png',
    media: imgs('COMIDA', ['FOTO1.png', 'FOTO2.png', 'FOTO3.png'], 'Comida Express'),
    tags: ['Ads', 'Contenido', 'Canva'],
  },
  {
    slug: 'restaurante',
    title: 'Restaurante',
    titleAccent: 'gourmet',
    format: 'Sitio web · 5 pantallas',
    category: 'Web',
    summary:
      'Diseño de sitio web para restaurante con foco en la experiencia: fotografía apetitosa, menú claro, reservas visibles y una estructura pensada para convertir visitas en comensales.',
    cover: '/framer-screenshots/screen.png',
    media: imgs('framer-screenshots', ['screen.png', 'screen(1).png', 'screen(2).png', 'screen(3).png', 'screen(4).png'], 'Restaurante Gourmet'),
    tags: ['UX/UI', 'Diseño web'],
    alignTop: true,
  },
  {
    slug: 'salon',
    title: 'Salón de belleza',
    titleAccent: '& spa',
    format: 'Landing page · 5 pantallas',
    category: 'Web',
    summary:
      'Landing de servicios para un salón de belleza y spa: presentación de tratamientos, profesionales y llamados a reservar, con una estética cálida y elegante acorde al sector.',
    cover: '/framer-screenshots/unnamed (1).png',
    media: imgs(
      'framer-screenshots',
      ['unnamed (1).png', 'unnamed (2).png', 'unnamed (3).png', 'unnamed (4).png', 'unnamed (5).png'],
      'Salón de Belleza & Spa',
    ),
    tags: ['UX/UI', 'Landing page'],
    alignTop: true,
  },
  {
    slug: 'portafolio',
    title: 'Portafolio',
    titleAccent: 'personal',
    format: 'Sitio web · 6 pantallas',
    category: 'Web',
    summary:
      'Diseño y desarrollo de un portafolio personal multipágina: perfil, habilidades, experiencia, certificaciones y contacto, organizados para que un reclutador encuentre lo importante en segundos.',
    cover: '/framer-screenshots/01-home-desktop.png',
    media: imgs(
      'framer-screenshots',
      [
        '01-home-desktop.png',
        '02-about-desktop.png',
        '03-skills-desktop.png',
        '04-experience-desktop.png',
        '05-certifications-desktop.png',
        '06-contact-desktop.png',
      ],
      'Portafolio Personal',
    ),
    tags: ['React', 'Diseño web'],
    alignTop: true,
  },
];

/** PDF del CV generado con `npm run cv:pdf` */
export const CV_PDF = '/cv/Denny-Sanchez-CV.pdf';
export const CV_PDF_NAME = 'Denny-Sanchez-CV.pdf';

/** Codifica rutas con espacios/acentos para usarlas en src. */
export const url = (p: string) => encodeURI(p);
