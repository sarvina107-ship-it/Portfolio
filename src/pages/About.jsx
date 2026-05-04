import React from 'react';

const About = () => {
    return (
        // Уменьшил px-8 до px-4 на мобильных для экономии места
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-16 md:py-24 px-4 sm:px-8 overflow-hidden">

            <div className="container mx-auto max-w-6xl z-10">
                {/* Gap уменьшен на мобильных (gap-10), чтобы секции не казались оторванными */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Левая колонка: Заголовок */}
                    <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left">
                        <div className="relative inline-block">
                            {/* Адаптивный размер шрифта: 4xl -> 6xl -> 8xl */}
                            <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif text-[#2C3327] leading-tight relative z-10">
                                Моя <br />
                                <span className="italic text-[#D4A259] font-light">история</span>
                            </h2>
                            <div className="absolute -bottom-4 -left-4 w-full h-1/2 bg-[#8FA382]/10 -z-10 rounded-full blur-2xl"></div>
                        </div>

                        <div className="space-y-4">
                            {/* Центрирование декоративной линии на мобилках */}
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                <span className="w-8 h-[2px] bg-[#D4A259]"></span>
                                From Design to Code
                            </div>
                            <p className="text-[#4A5043] font-medium leading-relaxed max-w-sm mx-auto lg:mx-0 text-base md:text-lg">
                                Путь из графического дизайна в мир Fullstack разработки позволил мне совместить эстетическое видение с технической мощью.
                            </p>
                        </div>
                    </div>

                    {/* Правая колонка: Текст и Цитата */}
                    <div className="lg:col-span-7 space-y-8 md:space-y-12">
                        {/* Цитата: p-6 на мобильных, p-10 на десктопе */}
                        <div className="relative p-6 md:p-10 bg-white/40 backdrop-blur-sm border border-white/60 rounded-[2rem] md:rounded-[3rem] shadow-sm">
                            <span className="absolute -left-2 -top-4 md:-left-4 md:-top-6 text-5xl md:text-7xl text-[#D4A259]/20 font-serif font-black">“</span>
                            <p className="text-xl md:text-3xl text-[#556B2F] font-medium leading-snug italic">
                                Изначально я была увлечена дизайном, но в IT я нашла нечто большее — возможность не просто рисовать интерфейсы, а вдыхать в них жизнь с помощью кода.
                            </p>
                        </div>

                        {/* Текстовые блоки: на md (планшетах) становится в 2 колонки */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[#4A5043] text-base md:text-lg leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    Будучи ученицей 10 класса, я осознанно выбрала путь Fullstack-разработчика. Сейчас я активно закрепляю знания React и серверной логики на реальных задачах, превращая теорию из курсов в работающие инструменты.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Для меня важна мобильность и постоянный рост. Я ищу свой первый профессиональный опыт, где смогу применить свой перфекционизм и страсть к созданию качественных продуктов.
                                </p>
                                {/* Иконка волны — центрируем на мобилках */}
                                <div className="pt-4 flex justify-center md:justify-start">
                                    <svg width="100" height="30" md:width="120" md:height="40" className="text-[#D4A259]">
                                        <path d="M10,25 Q30,5 50,25 T90,25 T120,15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Фоновые круги: делаем чуть меньше на мобилках (w-64 против w-96) */}
            <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-64 h-64 md:w-96 md:h-96 border border-[#556B2F]/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-72 h-72 md:w-[400px] md:h-[400px] border border-[#D4A259]/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        </section>
    );
};

export default About;