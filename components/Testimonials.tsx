import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../constants';
import { Icons } from './Icons';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  useEffect(() => {
    const updateCardsPerPage = () => {
      setCardsPerPage(window.innerWidth >= 768 ? 3 : 1);
    };
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(TESTIMONIALS.length / cardsPerPage);

  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(0);
    }
  }, [totalPages, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const getVisibleCards = () => {
    const start = currentIndex * cardsPerPage;
    return TESTIMONIALS.slice(start, start + cardsPerPage);
  };

  return (
    <section id="testimonials" className="pt-10 md:pt-16 pb-6 md:pb-12 bg-[#FFF5F7] relative overflow-hidden scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-100/20 rounded-full blur-[100px] -mr-32 md:-mr-64 -mt-32 md:-mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-100/20 rounded-full blur-[100px] -ml-32 md:-ml-64 -mb-32 md:-mb-64"></div>

      <div className="container mx-auto px-5 md:px-4 relative z-10">
        <div className="text-center mb-6 md:mb-10 px-0 md:px-4">
          <span className="inline-block bg-white text-brand-500 text-[10px] md:text-xs font-bold uppercase tracking-widest py-1 md:py-1.5 px-3 md:px-4 rounded-full border border-brand-100 mb-4 md:mb-6">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4 md:mb-6">
            O que nossas <span className="text-brand-500">clientes dizem</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            Mais de 2.500 clientes satisfeitas em toda a Grande Florianópolis.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-0 md:px-12">
          {/* Navigation Arrows — bigger touch targets, repositioned on mobile */}
          <button 
            onClick={prevSlide}
            className="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-brand-100 text-brand-500 hover:bg-brand-500 hover:text-white transition-all z-20 active:scale-90"
            aria-label="Depoimento anterior"
          >
            <Icons.ChevronDown className="w-5 h-5 md:w-6 md:h-6 rotate-90" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-brand-100 text-brand-500 hover:bg-brand-500 hover:text-white transition-all z-20 active:scale-90"
            aria-label="Próximo depoimento"
          >
            <Icons.ChevronDown className="w-5 h-5 md:w-6 md:h-6 -rotate-90" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full px-10 md:px-0">
            {getVisibleCards().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 md:h-1.5 rounded-full transition-all ${
                  currentIndex === i ? 'w-8 bg-brand-500' : 'w-3 md:w-2 bg-brand-200'
                }`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer info section */}
        <div className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-4 md:gap-6 md:flex-row md:gap-12 opacity-80">
            <div className="flex -space-x-3">
                {['Maria', 'Ana', 'Carol', 'Fernanda', 'Julia'].map((name, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-brand-200 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-brand-700 shadow-sm">
                        {name[0]}{name[1]}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-lg md:text-xl font-bold text-gray-800">2.500+</span>
                    <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-tighter">clientes satisfeitas</span>
                </div>
                <div className="h-6 md:h-8 w-px bg-gray-200"></div>
                <div className="flex flex-col items-center md:items-end">
                    <div className="flex gap-0.5 text-yellow-400">
                        {[...Array(5)].map((_, i) => <Icons.Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />)}
                    </div>
                    <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-tighter font-bold">4.9/5 média</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-[32px] shadow-lg border border-brand-50/50 flex flex-col h-full relative">
      <div className="mb-4 md:mb-6 flex justify-between items-start">
        <div className="text-brand-300">
           <svg width="28" height="22" viewBox="0 0 40 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="md:w-[40px] md:h-[32px]">
              <path d="M11.4286 0C5.11654 0 0 5.11654 0 11.4286V32H16V11.4286H5.71429C5.71429 8.27519 8.27519 5.71429 11.4286 5.71429V0ZM35.4286 0C29.1165 0 24 5.11654 24 11.4286V32H40V11.4286H29.7143C29.7143 8.27519 32.2752 5.71429 35.4286 5.71429V0Z" />
           </svg>
        </div>
        <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
                <Icons.Star key={i} className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} />
            ))}
        </div>
      </div>

      <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6 md:mb-8 flex-grow">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-inner flex-shrink-0">
          {testimonial.avatar || testimonial.name.charAt(0)}
        </div>
        <div>
          <h5 className="font-bold text-gray-900 leading-tight text-sm md:text-base">{testimonial.name}</h5>
          <p className="text-[11px] md:text-xs text-brand-600 font-medium">{testimonial.location}</p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 md:pt-5 flex justify-between items-center text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
        <span className="text-brand-500 bg-brand-50 px-2.5 md:px-3 py-1 rounded-full whitespace-nowrap">
           {testimonial.treatment}
        </span>
        <span className="text-gray-400 hidden sm:inline">
           {testimonial.fullLocation}
        </span>
      </div>
    </div>
  );
};
