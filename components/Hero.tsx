import React from 'react';
import { Icons } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[100svh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero/hero-bg.webp" 
          alt="Clínica Estética Virtuosa" 
          className="w-full h-full object-cover object-center md:object-top blur-[2px] scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 md:px-4 z-10 relative mt-20 md:mt-0">
        <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-12">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 backdrop-blur-sm border border-brand-400/30 px-3 py-1 rounded-full text-brand-200 text-[10px] md:text-xs font-semibold mb-4 md:mb-6 uppercase tracking-wider">
              <Icons.Star className="w-3 h-3 text-brand-400" />
              Líder em Estética na Grande Florianópolis
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Sua melhor versão começa <span className="text-brand-400">agora</span>.
            </h1>
            
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 font-light leading-relaxed">
              Protocolos exclusivos de emagrecimento, depilação a laser e harmonização facial. 
              Tecnologia de ponta e resultados reais em 5 unidades perto de você.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 md:mb-10">
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="#locations"
                  className="bg-brand-500 hover:bg-brand-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-bold text-base md:text-lg text-center transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 active:scale-95"
                >
                  Agendar Avaliação
                  <Icons.ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#services"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-semibold text-base md:text-lg text-center transition-all active:scale-95"
                >
                  Tratamentos
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 opacity-70">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Icons.Shield className="w-4 h-4 text-brand-400" />
                Certificada Anvisa
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Icons.Clock className="w-4 h-4 text-brand-400" />
                Desde 2016
              </div>
            </div>
          </div>

          {/* Desktop Only Side Image */}
          <div className="hidden md:flex items-center justify-center relative h-full py-12">
             <img 
               src="/assets/hero/hero-side.webp" 
               alt="Estética de Resultados" 
               className="relative z-10 w-full h-auto max-h-[75vh] object-contain drop-shadow-2xl rounded-2xl transform hover:scale-[1.02] transition-all duration-500"
             />
          </div>
        </div>
      </div>
    </section>
  );
};