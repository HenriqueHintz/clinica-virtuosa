import React from 'react';
import { Icons } from './Icons';

export const BottomCTA: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-[#ec4899] text-white text-center">
      <div className="container mx-auto px-5 md:px-4 max-w-4xl">
        
        {/* Gift Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-6 md:mb-8 backdrop-blur-sm">
          <Icons.Gift className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 leading-tight">
          Pronta para transformar sua <br className="hidden md:block"/>
          autoestima?
        </h2>

        <p className="text-base md:text-xl font-medium mb-2 max-w-2xl mx-auto">
          Agende sua avaliação <span className="font-extrabold bg-white text-[#ec4899] px-2 py-0.5 rounded">GRATUITA</span> agora mesmo e ganhe um presente surpresa na sua primeira visita!
        </p>
        
        <p className="text-xs md:text-sm font-medium opacity-80 mb-8 md:mb-10 uppercase tracking-widest">
          Vagas limitadas para este mês
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8">
          <a
            href="https://api.whatsapp.com/send?phone=554830911777&text=Olá,%20quero%20agendar%20minha%20avaliação%20gratuita%20e%20ganhar%20meu%20presente!"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-white text-[#ec4899] px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 active:scale-95"
          >
            <Icons.WhatsApp className="w-5 h-5" />
            Agendar pelo WhatsApp
          </a>

          <a
            href="#locations"
            className="w-full sm:w-auto border-2 border-white/30 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Icons.MapPin className="w-5 h-5" />
            Ver Unidades
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm font-medium opacity-90 border-t border-white/20 pt-6 md:pt-8 mt-4 max-w-xl mx-auto">
           <div className="flex items-center gap-2">
             <Icons.Phone className="w-4 h-4" />
             <span>(48) 3222-0000</span>
           </div>
           <div className="hidden md:block w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
           <div className="flex items-center gap-2">
             <Icons.Mail className="w-4 h-4" />
             <span className="text-xs md:text-sm">contato@clinicaesteticavirtuosa.com.br</span>
           </div>
        </div>

      </div>
    </section>
  );
};
