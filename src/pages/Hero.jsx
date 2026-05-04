import React from 'react';
import Myself from '../assets/image.png'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#F9F9F7] overflow-hidden px-4 sm:px-8 py-12 md:py-20">

            {/* Фоновый текст - адаптируем размер под разные экраны */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <h2 className="text-[15vw] md:text-[20vw] font-black text-gray-200/40 leading-none uppercase tracking-tighter">
                    Fullstack
                </h2>
            </div>

            {/* Декоративные круги - скрываем или уменьшаем на мобилках */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-[500px] md:h-[500px] bg-[#8FA382]/20 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-[400px] md:h-[400px] bg-[#D4A259]/10 rounded-full blur-[70px] md:blur-[100px]"></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 z-10">

                {/* Текстовый блок */}
                <div className="flex-[1.2] space-y-6 md:space-y-10 text-center md:text-left">
                    <div className="space-y-4">
                        <p className="text-[#6B7F5C] font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-xs md:text-sm flex items-center justify-center md:justify-start gap-3">
                            <span className="hidden sm:block w-12 h-[1px] bg-[#6B7F5C]"></span>
                            Aspiring Fullstack Developer
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-[#2C3327] leading-[1.1]">
                            Привет, я <br className="hidden md:block" />
                            <span className="italic font-light border-b-2 md:border-b-4 border-[#D4A259]/30">Эргашева Сарвина</span>
                        </h1>
                    </div>

                    <p className="max-w-xl mx-auto md:mx-0 text-base md:text-xl text-[#4A5043] leading-relaxed font-medium">
                        Создаю современные веб-интерфейсы и люблю работать над тем, чтобы сайты были не только функциональными, но и приятными в использовании. Изучаю frontend-разработку и совершенствую свои навыки в React и JavaScript.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 pt-4">
                        <a href="https://github.com/sarvina107-ship-it" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-4 bg-[#556B2F] text-white rounded-full hover:bg-[#3E4E22] transition-all shadow-xl shadow-[#556B2F]/20 active:scale-95 font-bold">
                                Посмотреть проекты
                            </button>
                        </a>
                    </div>
                </div>

                {/* Блок с фото */}
                <div className="flex-1 relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[450px]">
                    <div className="relative z-10 w-full aspect-[3/4] overflow-hidden rounded-t-[150px] md:rounded-t-[200px] rounded-b-3xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                        <img
                            src={Myself}
                            alt="Fullstack Developer profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Декоративная рамка за фото */}
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-[#D4A259]/40 rounded-t-[150px] md:rounded-t-[200px] rounded-b-3xl -z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;