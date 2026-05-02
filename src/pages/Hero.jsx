import React from 'react';
import Myself from '../assets/image.png'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] overflow-hidden px-8 py-20">

            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <h2 className="text-[20vw] font-black text-gray-200/40 leading-none uppercase tracking-tighter">
                    Fullstack
                </h2>
            </div>

            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#8FA382]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4A259]/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">

                <div className="flex-[1.2] space-y-10">
                    <div className="space-y-4">
                        <p className="text-[#6B7F5C] font-bold tracking-[0.2em] uppercase text-sm flex items-center gap-3">
                            <span className="w-12 h-[1px] bg-[#6B7F5C]"></span>
                            Aspiring Fullstack Developer
                        </p>
                        <h1 className="text-6xl md:text-8xl font-serif text-[#2C3327] leading-[1.1]">
                            Привет, я <br />
                            <span className="italic font-light border-b-4 border-[#D4A259]/30">Эргашева Сарвина</span>
                        </h1>
                    </div>

                    <p className="max-w-xl text-lg md:text-xl text-[#4A5043] leading-relaxed font-medium">
                        Создаю современные веб-интерфейсы и люблю работать над тем, чтобы сайты были не только функциональными, но и приятными в использовании. Изучаю frontend-разработку и совершенствую свои навыки в React и JavaScript.
                    </p>

                    <div className="flex items-center gap-8 pt-4">
                        <a href="https://github.com/sarvina107-ship-it">
                            <button className="px-10 py-4 bg-[#556B2F] text-white rounded-full hover:bg-[#3E4E22] transition-all shadow-xl shadow-[#556B2F]/20 active:scale-95 font-bold">
                                Посмотреть проекты
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className="relative z-10 w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-t-[200px] rounded-b-3xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                        <img
                            src={Myself}
                            alt="Fullstack Developer profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4A259]/40 rounded-t-[200px] rounded-b-3xl -z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;