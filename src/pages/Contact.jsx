import React from 'react';

const Contact = () => {
    const contactLinks = [
        { label: "Telegram", value: "@suuun_o", link: "https://t.me/suuun_o" },
        { label: "GitHub", value: "sarvina107-ship-it", link: "https://github.com/sarvina107-ship-it" },
        { label: "Email", value: "sarvina107@gmail.com", link: "mailto:sarvina107@gmail.com" }
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] py-16 md:py-24 px-4 sm:px-8 overflow-hidden">

            {/* Фоновый текст: уменьшаем размер для мобильных устройств */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]">
                <h2 className="text-[30vw] lg:text-[25vw] font-black text-[#2C3327] leading-none uppercase tracking-tighter">
                    Talk
                </h2>
            </div>

            <div className="container mx-auto max-w-6xl z-10">
                {/* Сетка: на мобильных текст сверху, контакты снизу */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Текстовый блок */}
                    <div className="space-y-6 md:space-y-10 text-center lg:text-left">
                        <div className="space-y-4 md:space-y-6">
                            <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif text-[#2C3327] leading-tight">
                                Связаться <br />
                                <span className="italic text-[#D4A259] font-light">со мной</span>
                            </h2>
                            <div className="flex items-center justify-center lg:justify-start gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                <span className="w-8 md:w-12 h-[2px] bg-[#556B2F]"></span>
                                Open for opportunities
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-[#4A5043] leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                            Я всегда открыта для интересных проектов, коллабораций или просто профессионального общения. Если у вас есть идея — давайте её обсудим.
                        </p>

                        {/* Плашка локации */}
                        <div className="pt-4 md:pt-8 flex justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-3 md:gap-4 p-3 md:p-4 pr-6 md:pr-8 bg-white border border-gray-100 rounded-full shadow-sm">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8FA382]/20 rounded-full flex items-center justify-center text-[#556B2F]">
                                    <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#556B2F] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[#556B2F]"></span>
                                    </span>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-[#6B7F5C] font-bold uppercase tracking-tighter">Локация</p>
                                    <p className="text-[#2C3327] font-serif italic text-base md:text-lg leading-none">Ташкент, Узбекистан</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Карточка с ссылками */}
                    <div className="relative group w-full max-w-xl mx-auto lg:mx-0">
                        {/* Декоративная рамка за карточкой (скрыта на самых маленьких экранах для чистоты) */}
                        <div className="absolute -inset-2 md:-inset-4 border-2 border-[#D4A259]/20 rounded-[2.5rem] md:rounded-[3rem] -z-10 transform rotate-2 md:rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

                        <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-xl space-y-8 md:space-y-12">
                            {contactLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group/item"
                                >
                                    <div className="flex justify-between items-end border-b border-gray-100 pb-3 md:pb-4 group-hover/item:border-[#D4A259] transition-colors">
                                        <div className="overflow-hidden">
                                            <p className="text-[10px] md:text-xs text-[#6B7F5C] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] mb-1">{item.label}</p>
                                            <p className="text-xl sm:text-2xl md:text-3xl text-[#2C3327] font-serif group-hover/item:text-[#556B2F] transition-colors truncate">
                                                {item.value}
                                            </p>
                                        </div>
                                        <div className="text-[#D4A259] opacity-0 md:opacity-0 transform translate-y-2 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all ml-2">
                                            <svg width="24" height="24" md:width="32" md:height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Боковые линии: скрываем на мобильных, чтобы не "резали" контент */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-20 h-[1px] bg-[#D4A259]/30"></div>
            <div className="hidden lg:block absolute bottom-1/4 right-0 w-32 h-[1px] bg-[#556B2F]/30"></div>
        </section>
    );
};

export default Contact;