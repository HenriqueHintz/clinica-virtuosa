import React from 'react';
import { SERVICES } from '../constants';
import { Icons } from './Icons';

export const Services: React.FC = () => {
  return (
    <section id="services" className="pt-10 md:pt-12 pb-6 md:pb-8 bg-ice scroll-mt-20">
      <div className="container mx-auto px-5 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">Nossos Tratamentos</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Tecnologia avançada para realçar sua beleza</h3>
          <p className="text-gray-600 text-sm md:text-base">
            Combinamos protocolos exclusivos e equipamentos de última geração para entregar resultados surpreendentes e duradouros.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll View / Desktop: Grid View */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Sparkles;
            
            // Unique color pairings for each service type to improve visual hierarchy
            const colorSchemes = [
              { bg: 'from-brand-100 to-brand-200', icon: 'text-brand-500' },
              { bg: 'from-blue-100 to-blue-200', icon: 'text-blue-500' },
              { bg: 'from-purple-100 to-purple-200', icon: 'text-purple-500' },
              { bg: 'from-teal-100 to-teal-200', icon: 'text-teal-500' },
            ];
            const scheme = colorSchemes[index % colorSchemes.length];

            return (
              <div 
                key={service.id} 
                className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className={`h-32 md:h-44 overflow-hidden relative bg-gradient-to-br ${scheme.bg} flex-shrink-0`}>
                   <div className="absolute inset-0 flex items-center justify-center opacity-20">
                     <IconComponent className={`w-20 h-20 md:w-28 md:h-28 ${scheme.icon}`} />
                   </div>
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <div className="p-5 md:p-6 relative flex-grow flex flex-col">
                  <div className="absolute -top-6 md:-top-9 right-6 w-12 h-12 md:w-16 md:h-16 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform z-10">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-4 pt-1">{service.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="#locations" 
                      className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-brand-500 hover:text-white transition-all group/btn active:scale-95"
                    >
                      Saiba mais 
                      <Icons.ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};