import React from 'react';

const Contact = () => {
    const contactLinks = [
        { label: "Telegram", value: "@suuun_o", link: "https://t.me/suuun_o" }, // Замени на свой юзернейм
        { label: "GitHub", value: "sarvina107-ship-it", link: "https://github.com/sarvina107-ship-it" },
        { label: "Email", value: "sarvina107@gmail.com", link: "mailto:sarvina107@gmail.com" }
    ];

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center bg-[#F9F9F7] py-24 px-8 overflow-hidden">

            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.03]">
                <h2 className="text-[25vw] font-black text-[#2C3327] leading-none uppercase tracking-tighter">
                    Talk
                </h2>
            </div>

            <div className="container mx-auto max-w-6xl z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-6xl md:text-8xl font-serif text-[#2C3327] leading-tight">
                                Связаться <br />
                                <span className="italic text-[#D4A259] font-light">со мной</span>
                            </h2>
                            <div className="flex items-center gap-4 text-[#6B7F5C] font-bold uppercase tracking-widest text-xs">
                                <span className="w-12 h-[2px] bg-[#556B2F]"></span>
                                Open for opportunities
                            </div>
                        </div>

                        <p className="text-xl text-[#4A5043] leading-relaxed max-w-md font-medium">
                            Я всегда открыта для интересных проектов, коллабораций или просто профессионального общения. Если у вас есть идея — давайте её обсудим.
                        </p>

                        <div className="pt-8">
                            <div className="inline-flex items-center gap-4 p-4 pr-8 bg-white border border-gray-100 rounded-full shadow-sm">
                                <div className="w-12 h-12 bg-[#8FA382]/20 rounded-full flex items-center justify-center text-[#556B2F]">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#556B2F] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#556B2F]"></span>
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7F5C] font-bold uppercase tracking-tighter">Локация</p>
                                    <p className="text-[#2C3327] font-serif italic text-lg">Ташкент, Узбекистан</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 border-2 border-[#D4A259]/20 rounded-[3rem] -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

                        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl space-y-12">
                            {contactLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group/item"
                                >
                                    <div className="flex justify-between items-end border-b border-gray-100 pb-4 group-hover/item:border-[#D4A259] transition-colors">
                                        <div>
                                            <p className="text-xs text-[#6B7F5C] font-bold uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                            <p className="text-2xl md:text-3xl text-[#2C3327] font-serif group-hover/item:text-[#556B2F] transition-colors">
                                                {item.value}
                                            </p>
                                        </div>
                                        <div className="text-[#D4A259] opacity-0 transform translate-y-2 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="absolute top-1/2 left-0 w-20 h-[1px] bg-[#D4A259]/30"></div>
            <div className="absolute bottom-1/4 right-0 w-32 h-[1px] bg-[#556B2F]/30"></div>
        </section>
    );
};

export default Contact;