import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Feane Burger",
            category: "Frontend",
            desc: "Платформа быстрой доставки еды",
            link: "https://sarvina107-ship-it.github.io/burger/"
        },
        {
            title: "Benkov Art School",
            category: "Web Design / Frontend",
            desc: "Сайт художественной школы с историческим таймлайном и галереей работ.",
            link: "https://benkov.vercel.app/"
        },
        {
            title: "girls4girls App",
            category: "Mobile / Expo",
            desc: "Мобильное приложение, разработанное и собранное через EAS для платформы Android.",
            link: "https://expo.dev/accounts/sara_18o/projects/girls4girls/builds/e7587bf1-3b3c-4388-89b4-c69f6a816efa"
        }
    ];

    return (
        // Уменьшил вертикальные отступы на мобильных (py-16)
        <section className="relative min-h-screen bg-[#F9F9F7] py-16 md:py-24 px-4 sm:px-8 overflow-hidden">

            <div className="container mx-auto max-w-6xl z-10">
                {/* Заголовок: уменьшаем размер для мобилок и центрируем */}
                <div className="mb-12 md:mb-20 space-y-4 md:space-y-6 text-center md:text-left">
                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif text-[#2C3327] leading-tight">
                        Мои <span className="italic text-[#D4A259] font-light">работы</span>
                    </h2>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                        <span className="w-8 md:w-12 h-[2px] bg-[#556B2F]"></span>
                        Selected Projects
                    </div>
                </div>

                {/* Сетка: 1 колонка на мобилках, 2 на планшетах, 3 на десктопе */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full transition-transform duration-500 active:scale-95"
                            >
                                {/* Эффект свечения — скрыт на мобилках для производительности, виден от sm экрана */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#8FA382]/20 to-[#D4A259]/20 rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>

                                <div className="relative bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full">
                                    <span className="text-[10px] md:text-xs font-bold text-[#D4A259] uppercase tracking-widest mb-3 md:mb-4">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-serif text-[#2C3327] mb-3 md:mb-4 group-hover:text-[#556B2F] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-[#4A5043] flex-grow leading-relaxed mb-6 md:mb-8">
                                        {project.desc}
                                    </p>

                                    <div className="flex items-center gap-2 text-[#2C3327] font-bold text-sm md:text-base">
                                        <span className="border-b-2 border-transparent group-hover:border-[#556B2F] transition-all">
                                            Смотреть проект
                                        </span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Волна внизу: фиксированная высота на мобилках, чтобы не перекрывала контент */}
            <div className="absolute -bottom-6 left-0 w-full opacity-10 pointer-events-none">
                <svg width="100%" height="60" md:height="100" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path d="M0,50 C150,20 350,80 600,50 C850,20 1050,80 1200,50 L1200,100 L0,100 Z" fill="#556B2F" />
                </svg>
            </div>
        </section>
    );
};

export default Projects;