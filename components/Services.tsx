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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Sparkles;
            return (
              <div key={service.id} className="group bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="h-28 md:h-40 overflow-hidden relative bg-gradient-to-br from-brand-100 to-brand-200">
                   <div className="absolute inset-0 flex items-center justify-center opacity-20">
                     <IconComponent className="w-16 h-16 md:w-24 md:h-24 text-brand-500" />
                   </div>
                </div>
                <div className="p-3 md:p-5 relative">
                  <div className="absolute -top-5 md:-top-8 right-3 md:right-6 w-10 h-10 md:w-14 md:h-14 bg-brand-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                    <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h4 className="text-sm md:text-xl font-bold text-gray-900 mb-1.5 md:mb-3 mt-1 md:mt-2 pr-8 md:pr-0">{service.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2 md:mb-4 hidden sm:block">
                    {service.description}
                  </p>
                  <a href="#locations" className="text-brand-600 font-semibold text-xs md:text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Saiba mais <Icons.ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};