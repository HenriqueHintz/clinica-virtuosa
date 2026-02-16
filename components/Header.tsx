import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';
import { UNITS } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Procedimentos', href: '#services' },
    { name: 'Unidades', href: '#locations' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 flex flex-col ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-500 text-white py-1.5 md:py-2 px-4 shadow-sm relative z-50 overflow-hidden">
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <motion.div 
              className="flex items-center gap-8 md:gap-12"
              animate={{ x: [0, -1035] }}
              transition={{ 
                repeat: Infinity, 
                duration: 25, 
                ease: "linear",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
                    <span className="animate-bounce">🎁</span> 
                    <span className="hidden sm:inline">Ganhe um presente surpresa ao agendar sua avaliação hoje!</span>
                    <span className="sm:hidden">Presente surpresa ao agendar!</span>
                  </span>
                  <a 
                    href="https://api.whatsapp.com/send?phone=554830911777&text=Olá,%20vi%20o%20banner%20do%20site%20e%20quero%20ganhar%20meu%20presente%20surpresa!" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white text-[10px] md:text-xs font-bold px-2.5 md:px-3 py-1 rounded-full flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
                  >
                    <Icons.WhatsApp className="w-3 h-3" />
                    Agendar
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3 md:py-4'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
             <img src="/assets/logo.svg" alt="Virtuosa" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled ? 'text-gray-600 hover:text-pink-600' : 'text-white hover:text-pink-400'
                }`}
              >
                {link.name}
                <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  isScrolled ? 'bg-pink-600' : 'bg-pink-400'
                }`}></span>
              </a>
            ))}
            <a 
              href="#locations"
              className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Agendar Agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2.5 rounded-full relative z-[60] transition-all active:scale-90 ${
              isScrolled 
                ? 'text-gray-800 bg-gray-100/50 backdrop-blur-sm' 
                : 'text-white bg-white/10 backdrop-blur-md border border-white/20'
            }`}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu"
          >
            <Icons.Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu — OUTSIDE header, renders as a sibling with highest z-index */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[9999] flex flex-col bg-white overflow-y-auto"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}
        >
          {/* Menu Header */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 flex-shrink-0">
            <a href="#" onClick={() => setIsOpen(false)}>
              <img src="/assets/logo.svg" alt="Virtuosa" className="h-8 w-auto" />
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-800 -mr-2"
              aria-label="Fechar menu"
            >
              <Icons.Close className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col px-5 py-2 flex-shrink-0">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-800 font-semibold text-lg py-4 border-b border-gray-100 active:text-brand-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Units Section */}
          <div className="px-5 pt-4 pb-4 flex-shrink-0">
            <p className="text-xs text-gray-400 mb-3 uppercase font-bold tracking-wider">Nossas Unidades</p>
            <div className="flex flex-col gap-3">
              {UNITS.map(unit => (
                <a 
                  key={unit.id}
                  href={`https://wa.me/${unit.whatsapp}?text=Olá, vim pelo site e gostaria de agendar na unidade ${unit.name} e ganhar meu presente!`}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 active:text-brand-500 py-1"
                >
                  <Icons.WhatsApp className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {unit.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button — fixed at bottom */}
          <div className="px-5 pb-6 pt-4 mt-auto flex-shrink-0 border-t border-gray-100">
            <a 
              href="#locations"
              className="bg-brand-500 hover:bg-brand-600 text-white w-full py-4 rounded-full font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Agendar Agora
              <Icons.ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};