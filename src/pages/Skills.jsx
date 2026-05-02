import React from 'react';

const Skills = () => {
    const skillList = [
        { name: 'React', desc: 'Создание динамичных и быстрых интерфейсов.', color: 'bg-[#8FA382]/10' },
        { name: 'Tailwind CSS', desc: 'Современная верстка с акцентом на дизайн.', color: 'bg-[#D4A259]/10' },
        { name: 'JavaScript', desc: 'Логика и функциональность приложений.', color: 'bg-[#8FA382]/10' },
        { name: 'CSS', desc: 'Анимации и детальная стилизация элементов.', color: 'bg-[#D4A259]/10' },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-24 px-8 overflow-hidden">

            <div className="container mx-auto max-w-6xl z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4 space-y-6">
                        <div className="relative inline-block">
                            <h2 className="text-6xl md:text-8xl font-serif text-[#2C3327] leading-tight relative z-10">
                                My <br />
                                <span className="italic text-[#D4A259] font-light">Stack</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
                                <span className="w-8 h-[2px] bg-[#D4A259]"></span>
                                Skills & Tools
                            </div>
                            <p className="text-[#4A5043] font-medium leading-relaxed max-w-xs">
                                Мой основной стек инструментов для создания масштабируемых и эстетичных Fullstack-решений.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillList.map((skill, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${skill.color} mb-6 flex items-center justify-center`}>
                                    <div className="w-2 h-2 rounded-full bg-[#556B2F]"></div>
                                </div>
                                <h3 className="text-2xl font-serif text-[#2C3327] mb-3">{skill.name}</h3>
                                <p className="text-[#4A5043] leading-relaxed">
                                    {skill.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="absolute bottom-10 right-10 opacity-20">
                <svg width="200" height="60" viewBox="0 0 200 60" className="text-[#556B2F]">
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