import React from 'react';

const About = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-24 px-8 overflow-hidden">

            <div className="container mx-auto max-w-6xl z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative inline-block">
                            <h2 className="text-6xl md:text-8xl font-serif text-[#2C3327] leading-tight relative z-10">
                                Моя <br />
                                <span className="italic text-[#D4A259] font-light">история</span>
                            </h2>
                            <div className="absolute -bottom-4 -left-4 w-full h-1/2 bg-[#8FA382]/10 -z-10 rounded-full blur-2xl"></div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
                                <span className="w-8 h-[2px] bg-[#D4A259]"></span>
                                From Design to Code
                            </div>
                            <p className="text-[#4A5043] font-medium leading-relaxed max-w-sm">
                                Путь из графического дизайна в мир Fullstack разработки позволил мне совместить эстетическое видение с технической мощью.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-12">
                        <div className="relative p-10 bg-white/40 backdrop-blur-sm border border-white/60 rounded-[3rem] shadow-sm">
                            <span className="absolute -left-4 -top-6 text-7xl text-[#D4A259]/20 font-serif font-black">“</span>
                            <p className="text-2xl md:text-3xl text-[#556B2F] font-medium leading-snug italic">
                                Изначально я была увлечена дизайном, но в IT я нашла нечто большее — возможность не просто рисовать интерфейсы, а вдыхать в них жизнь с помощью кода.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#4A5043] text-lg leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    Будучи ученицей 10 класса, я осознанно выбрала путь Fullstack-разработчика. Сейчас я активно закрепляю знания React и серверной логики на реальных задачах, превращая теорию из курсов в работающие инструменты.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Для меня важна мобильность и постоянный рост. Я ищу свой первый профессиональный опыт, где смогу применить свой перфекционизм и страсть к созданию качественных продуктов.
                                </p>
                                <div className="pt-4">
                                    <svg width="120" height="40" className="text-[#D4A259]">
                                        <path d="M10,30 Q30,10 50,30 T90,30 T120,20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute -top-20 -right-20 w-96 h-96 border border-[#556B2F]/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border border-[#D4A259]/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </section>
    );
};

export default About;