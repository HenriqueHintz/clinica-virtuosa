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

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-500 bg-brand-200 flex items-center justify-center text-brand-700 text-xs font-bold overflow-hidden shadow-md">
                <Icons.User className="w-6 h-6 translate-y-1" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-brand-500 bg-white flex items-center justify-center text-brand-600 text-[10px] font-black shadow-md">
              +2K
            </div>
          </div>
          <p className="text-sm font-bold bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
            Junte-se a mais de 2.500 mulheres transformadas
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10">
          <a
            href="https://api.whatsapp.com/send?phone=554830911777&text=Olá,%20quero%20agendar%20minha%20avaliação%20gratuita%20e%20ganhar%20meu%20presente!"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-white text-[#ec4899] px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 active:scale-95 group"
          >
            <Icons.WhatsApp className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            AGENDAR AGORA
          </a>

          <a
            href="#locations"
            className="w-full sm:w-auto border-2 border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Icons.MapPin className="w-5 h-5 opacity-70" />
            Ver Unidades
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 md:gap-4 text-xs md:text-sm font-bold opacity-90 border-t border-white/20 pt-10 md:pt-10 max-w-3xl mx-auto">
           <div className="flex items-center justify-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
               <Icons.Shield className="w-5 h-5" />
             </div>
             <div className="text-left">
               <p className="text-[10px] opacity-60 uppercase tracking-tighter">Garantia</p>
               <p>Segurança Anvisa</p>
             </div>
           </div>
           
           <div className="flex items-center justify-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
               <Icons.Users className="w-5 h-5" />
             </div>
             <div className="text-left">
               <p className="text-[10px] opacity-60 uppercase tracking-tighter">Equipe</p>
               <p>Especialistas Certificados</p>
             </div>
           </div>

           <div className="flex items-center justify-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
               <Icons.Star className="w-5 h-5" />
             </div>
             <div className="text-left">
               <p className="text-[10px] opacity-60 uppercase tracking-tighter">Resultados</p>
               <p>Tecnologia Premium</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};
