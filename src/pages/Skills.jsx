import React from 'react';

const Skills = () => {
    const skillList = [
        { name: 'React', desc: 'Создание динамичных и быстрых интерфейсов.', color: 'bg-[#8FA382]/10' },
        { name: 'Tailwind CSS', desc: 'Современная верстка с акцентом на дизайн.', color: 'bg-[#D4A259]/10' },
        { name: 'JavaScript', desc: 'Логика и функциональность приложений.', color: 'bg-[#8FA382]/10' },
        { name: 'CSS', desc: 'Анимации и детальная стилизация элементов.', color: 'bg-[#D4A259]/10' },
    ];

    return (
        // Уменьшил вертикальные отступы для смартфонов (py-16)
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-16 md:py-24 px-4 sm:px-8 overflow-hidden">

            <div className="container mx-auto max-w-6xl z-10">
                {/* Основная сетка: на мобильных всё в один столбец */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">

                    {/* Левая часть: Заголовок и описание */}
                    <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
                        <div className="relative inline-block">
                            {/* Адаптивный шрифт заголовка */}
                            <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif text-[#2C3327] leading-tight relative z-10">
                                My <br />
                                <span className="italic text-[#D4A259] font-light">Stack</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                <span className="w-8 h-[2px] bg-[#D4A259]"></span>
                                Skills & Tools
                            </div>
                            <p className="text-[#4A5043] font-medium leading-relaxed max-w-xs mx-auto lg:mx-0 text-base md:text-lg">
                                Мой основной стек инструментов для создания масштабируемых и эстетичных Fullstack-решений.
                            </p>
                        </div>
                    </div>

                    {/* Правая часть: Сетка карточек навыков */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {skillList.map((skill, index) => (
                            <div
                                key={index}
                                // Карточки: p-6 на мобилках, p-8 на десктопе
                                className="group p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${skill.color} mb-4 md:mb-6 flex items-center justify-center`}>
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#556B2F]"></div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-[#2C3327] mb-2 md:mb-3">{skill.name}</h3>
                                <p className="text-sm md:text-base text-[#4A5043] leading-relaxed">
                                    {skill.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Декоративная пунктирная линия — скрываем на маленьких мобилках, чтобы не мешала */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 opacity-20 pointer-events-none">
                <svg width="120" height="40" md:width="200" md:height="60" viewBox="0 0 200 60" className="text-[#556B2F]">
                    <path
                        d="M0,30 Q50,0 100,30 T200,30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="8,8"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Skills;