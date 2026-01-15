import React from 'react';

const CV: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#e5e5e5] py-8 px-4 flex justify-center items-start print:p-0 print:bg-white print:h-auto">
            {/* CV Container - A4 Aspect Ratio roughly */}
            <div className="w-full max-w-[1000px] bg-white shadow-2xl flex flex-col md:flex-row print:shadow-none print:w-full print:max-w-none">

                {/* Left Sidebar (Black) */}
                <aside className="w-full md:w-[35%] bg-[#1a1a1a] text-white p-8 flex flex-col gap-8 print:w-[35%] print:bg-[#1a1a1a] print-color-exact">

                    {/* Profile Image */}
                    <div className="relative w-48 h-48 mx-auto border-4 border-[#FFD700] rounded-full overflow-hidden shadow-lg">
                        <img
                            src="/IMG/DENNY IMG.jpg"
                            alt="Denny Sanchez"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-widest border-b border-[#FFD700]/30 pb-2">
                            <span className="material-symbols-outlined">person</span> Contacto
                        </h3>
                        <div className="text-sm space-y-3 font-light text-gray-300">
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#FFD700] text-lg">mail</span>
                                dennyroomdesing@gmail.com
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#FFD700] text-lg">call</span>
                                829-978-2579
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#FFD700] text-lg">location_on</span>
                                Azua, Rep. Dom.
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#FFD700] text-lg">link</span>
                                @denny.sanchez_
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#FFD700] text-lg">language</span>
                                Bento.me/dennybluesec
                            </p>
                        </div>
                    </div>

                    {/* Strengths */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-widest border-b border-[#FFD700]/30 pb-2">
                            <span className="material-symbols-outlined">bolt</span> Fortalezas
                        </h3>
                        <ul className="text-sm space-y-2 font-light text-gray-300 list-disc list-inside marker:text-[#FFD700]">
                            <li>Creatividad</li>
                            <li>Liderazgo</li>
                            <li>Comunicación efectiva</li>
                            <li>Trabajo en equipo</li>
                            <li>Resolución de problemas</li>
                        </ul>
                    </div>

                    {/* Languages */}
                    <div className="space-y-4">
                        <h3 className="flex items-center gap-2 text-[#FFD700] font-bold uppercase tracking-widest border-b border-[#FFD700]/30 pb-2">
                            <span className="material-symbols-outlined">language</span> Idiomas
                        </h3>
                        <div className="text-sm space-y-2 font-light text-gray-300">
                            <div className="flex justify-between">
                                <span>Español</span>
                                <span className="text-[#FFD700]">Nativo</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Inglés</span>
                                <span className="text-[#FFD700]">Intermedio</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content (White/Light) */}
                <main className="flex-1 bg-white text-black p-8 md:p-12 print:bg-white print:p-8">

                    {/* Header */}
                    <header className="mb-12 border-l-4 border-[#FFD700] pl-6">
                        <h1 className="text-5xl font-bold uppercase tracking-tight mb-2">Denny <br /><span className="text-[#4a4a4a]">Sánchez</span></h1>
                        <h2 className="text-xl font-bold uppercase tracking-[0.3em] text-[#FFD700] mb-6">Marketing Manager</h2>
                        <p className="text-gray-600 leading-relaxed text-sm text-justify">
                            Con formación en informática y experiencia en marketing digital, me desempeño como Community Manager y Marketing Manager. Tengo habilidades en gestión de redes sociales, publicidad digital y análisis de resultados para impulsar el crecimiento de marcas.
                        </p>
                    </header>

                    {/* Experience */}
                    <section className="mb-10">
                        <h3 className="flex items-center gap-3 text-2xl font-bold uppercase tracking-widest text-[#FFD700] mb-6">
                            <span className="material-symbols-outlined text-3xl">work</span> Experiencia
                        </h3>

                        <div className="border-l-2 border-gray-200 ml-3 space-y-8">

                            {/* Job 1 */}
                            <div className="relative pl-8">
                                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FFD700] border-2 border-white shadow-sm"></span>
                                <h4 className="font-bold text-lg uppercase">Community Manager</h4>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">Freelance / Proyectos Personales | 2020 - Presente</p>
                                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 marker:text-[#FFD700]">
                                    <li>Gestión de comunidades digitales en Instagram, Facebook y TikTok.</li>
                                    <li>Creación de calendarios de contenido estratégico y piezas gráficas virales.</li>
                                </ul>
                            </div>

                            {/* Job 2 */}
                            <div className="relative pl-8">
                                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FFD700] border-2 border-white shadow-sm"></span>
                                <h4 className="font-bold text-lg uppercase">Social Media Manager</h4>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">Agencia / Freelance | 2021 - Presente</p>
                                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 marker:text-[#FFD700]">
                                    <li>Desarrollo de campañas digitales 360 y branding corporativo.</li>
                                    <li>Gestión y optimización de publicidad en Meta Ads.</li>
                                </ul>
                            </div>

                            {/* Job 3 */}
                            <div className="relative pl-8">
                                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FFD700] border-2 border-white shadow-sm"></span>
                                <h4 className="font-bold text-lg uppercase">Asistente de Marketing</h4>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">Empresa Local / Tienda Comercial | 2019 - Presente</p>
                                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 marker:text-[#FFD700]">
                                    <li>Gestión básica de redes sociales (Facebook e Instagram).</li>
                                    <li>Apoyo logístico en la creación de campañas publicitarias.</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                    {/* Education & Certs */}
                    <section className="grid grid-cols-1 gap-8 print:break-inside-avoid">

                        {/* Education */}
                        <div>
                            <h3 className="flex items-center gap-3 text-2xl font-bold uppercase tracking-widest text-[#FFD700] mb-6">
                                <span className="material-symbols-outlined text-3xl">school</span> Educación
                            </h3>
                            <div className="space-y-4 pl-4">
                                <div>
                                    <h4 className="font-bold uppercase text-sm">Licenciatura en Sistemas (En curso)</h4>
                                    <p className="text-xs text-gray-500">Universidad Utesur, Azua</p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase text-sm">Técnico en Informática</h4>
                                    <p className="text-xs text-gray-500">Politécnico de Azua (IPA), 2021-2024</p>
                                </div>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h3 className="flex items-center gap-3 text-2xl font-bold uppercase tracking-widest text-[#FFD700] mb-6">
                                <span className="material-symbols-outlined text-3xl">verified</span> Cursos
                            </h3>
                            <div className="bg-gray-50 p-4 rounded border-l-4 border-[#FFD700]">
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    <span className="font-bold text-black">Certificaciones Clave:</span> Community Manager, Marketing Digital (Google / Meta), Estrategias en Redes Sociales, Diseño Gráfico Básico (Canva), Fotografía y Edición de Contenido Visual.
                                </p>
                            </div>
                        </div>

                    </section>

                </main>
            </div>

            {/* Floating Download Button (Hidden on Print) */}
            <button
                onClick={handlePrint}
                className="fixed bottom-8 right-8 bg-[#FFD700] text-black font-bold py-4 px-6 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all z-50 flex items-center gap-2 print:hidden uppercase tracking-widest border-2 border-black"
                title="Descargar PDF"
            >
                <span className="material-symbols-outlined">download</span>
                Descargar PDF
            </button>

            {/* Back Button (Hidden on Print) */}
            <a
                href="/"
                className="fixed top-8 left-8 bg-black/80 backdrop-blur text-white p-3 rounded-full hover:bg-black transition-colors z-50 print:hidden"
                title="Volver"
            >
                <span className="material-symbols-outlined">arrow_back</span>
            </a>

        </div>
    );
};

export default CV;
