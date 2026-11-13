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
}

export interface Work {
  slug: string;
  title: string;
  category: 'Redes sociales' | 'Branding' | 'Web';
  summary: string;
  cover: string;
  media: MediaItem[];
  tags: string[];
  /** Relación de aspecto de la miniatura */
  ratio: 'portrait' | 'square' | 'landscape';
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
    category: 'Redes sociales',
    summary: 'Gestión estratégica de Instagram y creación de contenido visual de alto impacto.',
    cover: '/CINDEL/FOTO1.png',
    media: imgs('CINDEL', ['FOTO1.png', 'FOTO2.png', 'FOTO3.png', 'FOTO4.png', 'FOTO5.png', 'FOTO6.png', 'FOTO7.png'], 'CINDEL'),
    tags: ['Instagram', 'Diseño gráfico', 'Canva'],
    ratio: 'square',
  },
  {
    slug: 'novaweb',
    title: 'NOVAWEB',
    category: 'Redes sociales',
    summary: 'Perfil corporativo y diseño de la parrilla de contenidos mensual.',
    cover: '/NOVAWEB/FOTO1.png',
    media: imgs(
      'NOVAWEB',
      ['FOTO1.png', 'FOTO2.png', 'FOTO 3.png', 'FOTO4.png', 'FOTO5.png', 'FOTO6.png', 'FOTO7.png', 'FOTO8.png', 'FOTO9.png', 'FOTO10.png', 'FOTO11.png'],
      'NOVAWEB',
    ),
    tags: ['Estrategia digital', 'Copywriting', 'Figma'],
    ratio: 'square',
  },
  {
    slug: 'musica',
    title: 'Música App',
    category: 'Branding',
    summary: 'Identidad visual y branding para marcas del sector musical y entretenimiento.',
    cover: '/MUSICA/FOTO1.png',
    media: imgs('MUSICA', Array.from({ length: 17 }, (_, i) => `FOTO${i + 1}.png`), 'Música App'),
    tags: ['Branding', 'Figma', 'Canva'],
    ratio: 'square',
  },
  {
    slug: 'comida',
    title: 'Comida Express',
    category: 'Redes sociales',
    summary: 'Marketing gastronómico: comunidad y promociones para delivery.',
    cover: '/COMIDA/FOTO1.png',
    media: imgs('COMIDA', ['FOTO1.png', 'FOTO2.png', 'FOTO3.png'], 'Comida Express'),
    tags: ['Ads', 'Contenido', 'Canva'],
    ratio: 'square',
  },
  {
    slug: 'restaurante',
    title: 'Restaurante Gourmet',
    category: 'Web',
    summary: 'Sitio web para restaurante con foco en menú, reservas y conversión.',
    cover: '/framer-screenshots/screen.png',
    media: imgs('framer-screenshots', ['screen.png', 'screen(1).png', 'screen(2).png', 'screen(3).png', 'screen(4).png'], 'Restaurante Gourmet'),
    tags: ['UX/UI', 'Diseño web'],
    ratio: 'landscape',
  },
  {
    slug: 'salon',
    title: 'Salón de Belleza & Spa',
    category: 'Web',
    summary: 'Landing de servicios y reservas para un salón de belleza.',
    cover: '/framer-screenshots/unnamed (1).png',
    media: imgs(
      'framer-screenshots',
      ['unnamed (1).png', 'unnamed (2).png', 'unnamed (3).png', 'unnamed (4).png', 'unnamed (5).png'],
      'Salón de Belleza & Spa',
    ),
    tags: ['UX/UI', 'Landing page'],
    ratio: 'landscape',
  },
  {
    slug: 'portafolio',
    title: 'Portafolio Personal',
    category: 'Web',
    summary: 'Diseño y desarrollo de un portafolio personal multipágina.',
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
    ratio: 'landscape',
  },
];

/** Codifica rutas con espacios/acentos para usarlas en src. */
export const url = (p: string) => encodeURI(p);
