import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Entrance animation for WhatsApp
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show tooltip only on desktop after a delay
  useEffect(() => {
    if (isVisible && window.innerWidth >= 768) {
      const timer = setTimeout(() => setShowTooltip(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3 md:gap-4 pointer-events-none">
      {/* Scroll To Top Button */}
      <div 
        className={`transition-all duration-300 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <button
          onClick={scrollToTop}
          className="bg-white/80 backdrop-blur-md border border-gray-200 text-gray-600 p-2.5 md:p-3 rounded-full shadow-lg hover:bg-brand-500 hover:text-white transition-all pointer-events-auto active:scale-90"
          aria-label="Voltar ao topo"
        >
          <Icons.ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      {/* WhatsApp CTA Section */}
      {isVisible && (
        <div className="relative flex flex-col items-end pointer-events-auto">
          {/* Tooltip Message — hidden on mobile */}
          {showTooltip && (
            <div className="hidden md:block mb-4 bg-white p-4 rounded-xl shadow-xl max-w-xs border border-gray-100 relative animate-fade-in-up">
              <button 
                onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <Icons.Close className="w-4 h-4" />
              </button>
              <p className="text-gray-800 text-sm font-medium leading-snug pr-4">
                🎁 <span className="text-brand-600 font-bold">Ganhe um presente surpresa</span> ao agendar sua avaliação hoje!
              </p>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
            </div>
          )}

          {/* Main Button — smaller on mobile */}
          <a
            href="#locations"
            className="group relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg shadow-green-500/30 transition-all transform hover:scale-110 active:scale-95"
            aria-label="Falar no WhatsApp"
          >
            <span className="absolute w-full h-full rounded-full bg-green-500 opacity-75 animate-ping group-hover:hidden"></span>
            <Icons.WhatsApp className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
          </a>
        </div>
      )}
    </div>
  );
};