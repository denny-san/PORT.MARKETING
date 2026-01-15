import React, { useRef } from 'react';

interface Project {
    title: string;
    description: string;
    category: string;
    folder: string;
    profilePhoto: string;
    galleryImages: string[];
    tags: string[];
    link?: string;
}

const projects: Project[] = [
    {
        title: "CINDEL",
        description: "Gestión estratégica de cuenta de Instagram y creación de contenido visual de alto impacto.",
        category: "Social Media Management",
        folder: "CINDEL",
        profilePhoto: "FOTO PERFIL.png",
        galleryImages: ["FOTO1.png", "FOTO2.png", "FOTO3.png", "FOTO4.png", "FOTO5.png", "FOTO6.png", "FOTO7.png"],
        tags: ["Instagram", "Diseño Gráfico", "Canva"],
        link: "#"
    },
    {
        title: "NOVAWEB",
        description: "Administración de perfil corporativo y diseño de parrilla de contenidos mensuales.",
        category: "Cuentas Administradas",
        folder: "NOVAWEB",
        profilePhoto: "FOTO PERFIL.jpeg",
        galleryImages: ["FOTO1.png", "FOTO2.png", "FOTO 3.png", "FOTO4.png", "FOTO5.png", "FOTO6.png", "FOTO7.png", "FOTO8.png", "FOTO9.png", "FOTO10.png", "FOTO11.png"],
        tags: ["Estrategia Digital", "Copywriting", "Figma"],
        link: "#"
    },
    {
        title: "MUSICA App",
        description: "Identidad visual y diseño de branding para marcas del sector musical y entretenimiento.",
        category: "Diseño Gráfico",
        folder: "MUSICA",
        profilePhoto: "FOTO PERFIL.png",
        galleryImages: Array.from({ length: 17 }, (_, i) => `FOTO${i + 1}.png`),
        tags: ["Branding", "Figma", "Canva"],
        link: "#"
    },
    {
        title: "COMIDA Express",
        description: "Marketing gastronómico: Gestión de comunidad y diseño de promociones para delivery.",
        category: "Social Media",
        folder: "COMIDA",
        profilePhoto: "FOTO PERFIL_.png",
        galleryImages: ["FOTO1.png", "FOTO2.png", "FOTO3.png"],
        tags: ["Ads", "Content Creator", "Canva"],
        link: "#"
    }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#151515] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-center">

                {/* Profile Circle */}
                <div className="relative shrink-0">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 p-1 group-hover:border-primary transition-colors duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900">
                            <img
                                src={`/${project.folder}/${project.profilePhoto}`}
                                alt={`${project.title} Profile`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200?text=Profile';
                                }}
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        {project.category}
                    </div>
                </div>

                {/* Info & Carousel */}
                <div className="flex-1 w-full overflow-hidden">
                    <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-gray-400 text-sm md:text-base line-clamp-2 max-w-xl">
                            {project.description}
                        </p>
                    </div>

                    <div className="relative group/carousel">
                        {/* Navigation Buttons */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>

                        {/* Square Gallery Carousel */}
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                        >
                            {project.galleryImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="shrink-0 w-32 h-32 md:w-40 md:h-40 bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 snap-start hover:border-primary/50 transition-all"
                                >
                                    <img
                                        src={`/${project.folder}/${img}`}
                                        alt={`${project.title} design ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=Design';
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-lg bg-primary/5 text-primary/70 border border-primary/10 uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-6 bg-background-dark">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-16">
                    <span className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-4 block">Portafolio</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        GALERÍA DE <span className="text-primary italic">TRABAJOS</span>
                    </h1>
                    <div className="h-1 w-20 bg-primary mb-8 ml-1"></div>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        Explora una selección de cuentas administradas y diseños creados con Canva y Figma.
                        Estrategia de contenido y branding visual para potenciar marcas en Instagram.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* Web Pages Section */}
                <div className="mt-32">
                    <div className="mb-12">
                        <span className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-4 block">Desarrollo</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
                            PÁGINAS <span className="text-primary italic">WEB</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary mb-8 ml-1"></div>
                        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                            Diseño y desarrollo de sitios web profesionales con enfoque en UX/UI y conversión.
                            Proyectos individuales optimizados para escritorio.
                        </p>
                    </div>

                    <div className="flex flex-col gap-24">
                        {/* Restaurant Project */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-white/10"></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase italic">01. Restaurante Gourmet</h3>
                                <div className="h-px flex-1 bg-white/10"></div>
                            </div>
                            <div className="bg-[#151515] border border-white/5 rounded-[40px] p-6 md:p-10">
                                <div className="relative group/web-carousel">
                                    <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                                        {['screen.png', 'screen(1).png', 'screen(2).png', 'screen(3).png', 'screen(4).png'].map((img, idx) => (
                                            <div key={idx} className="shrink-0 w-72 h-72 md:w-96 md:h-96 bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 snap-start hover:border-primary/50 transition-all group relative">
                                                <img src={`/framer-screenshots/${img}`} alt={`Restaurante ${idx + 1}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Beauty Salon Project */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-white/10"></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase italic">02. Salón de Belleza & Spa</h3>
                                <div className="h-px flex-1 bg-white/10"></div>
                            </div>
                            <div className="bg-[#151515] border border-white/5 rounded-[40px] p-6 md:p-10">
                                <div className="relative group/web-carousel">
                                    <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                                        {['unnamed (1).png', 'unnamed (2).png', 'unnamed (3).png', 'unnamed (4).png', 'unnamed (5).png'].map((img, idx) => (
                                            <div key={idx} className="shrink-0 w-72 h-72 md:w-96 md:h-96 bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 snap-start hover:border-primary/50 transition-all group relative">
                                                <img src={`/framer-screenshots/${img}`} alt={`Beauty Salon ${idx + 1}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Project */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-white/10"></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase italic">03. Portafolio Personal</h3>
                                <div className="h-px flex-1 bg-white/10"></div>
                            </div>
                            <div className="bg-[#151515] border border-white/5 rounded-[40px] p-6 md:p-10">
                                <div className="relative group/web-carousel">
                                    <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
                                        {['01-home-desktop.png', '02-about-desktop.png', '03-skills-desktop.png', '04-experience-desktop.png', '05-certifications-desktop.png', '06-contact-desktop.png'].map((img, idx) => (
                                            <div key={idx} className="shrink-0 w-72 h-72 md:w-96 md:h-96 bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 snap-start hover:border-primary/50 transition-all group relative">
                                                <img src={`/framer-screenshots/${img}`} alt={`Portfolio ${idx + 1}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-32 p-10 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/10 to-transparent border border-white/5 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 transition-transform group-hover:scale-105">¿Tú también quieres destacar?</h2>
                    <p className="text-gray-400 mb-12 max-w-xl mx-auto relative z-10 text-lg">
                        Estoy listo para transformar tus ideas en realidades visuales impactantes.
                    </p>
                    <a
                        href="/#/contact"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-black text-sm font-black uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] active:scale-95 relative z-10"
                    >
                        TRABAJEMOS JUNTOS
                    </a>
                </div>
            </div>

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default Projects;
