import React from 'react';
import { Icons } from './Icons';
import { UNITS } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-8 md:pt-12 pb-8 md:pb-10">
      <div className="container mx-auto px-5 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-brand-500 rounded-full flex items-center justify-center">
                <Icons.Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight">VIRTUOSA</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              A maior rede de clínicas de estética da Grande Florianópolis. 
              Tecnologia, conforto e resultados reais para você.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 transition-colors active:scale-90">
                <Icons.Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 transition-colors active:scale-90">
                <Icons.Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Units */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Unidades</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
              {UNITS.map(unit => (
                <li key={unit.id} className="hover:text-brand-400 transition-colors">
                  <a href="#locations">{unit.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Procedimentos</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
              <li><a href="#services" className="hover:text-brand-400">Depilação a Laser</a></li>
              <li><a href="#services" className="hover:text-brand-400">Emagrecimento</a></li>
              <li><a href="#services" className="hover:text-brand-400">Botox e Preenchimento</a></li>
              <li><a href="#services" className="hover:text-brand-400">Limpeza de Pele</a></li>
              <li><a href="#services" className="hover:text-brand-400">Tratamento Celulite</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-base md:text-lg font-bold mb-4 md:mb-6">Contato Central</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li className="flex items-start gap-2 md:gap-3">
                <Icons.Mail className="w-4 h-4 md:w-5 md:h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>contato@clinicavirtuosa.com.br</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Icons.Phone className="w-4 h-4 md:w-5 md:h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>0800 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] md:text-xs text-gray-500">
          <p>&copy; {currentYear} Clínica Estética Virtuosa. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};