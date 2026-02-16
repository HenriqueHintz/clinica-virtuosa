import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Icons } from './Icons';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-10 md:pt-12 pb-6 md:pb-8 bg-ice relative overflow-hidden scroll-mt-20">
      {/* Decorative background — smaller on mobile */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-brand-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-brand-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-5 md:px-4 max-w-3xl relative z-10">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-brand-500 font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">Dúvidas Frequentes</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">Tire suas dúvidas</h3>
          <p className="text-gray-500 text-sm md:text-lg">
            Confira as perguntas mais comuns de nossas clientes.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl md:rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'border-brand-200 shadow-lg ring-1 ring-brand-100' 
                  : 'border-gray-100 shadow-sm hover:border-brand-100'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-sm md:text-lg pr-4 md:pr-8 transition-colors ${
                  openIndex === index ? 'text-brand-600' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-brand-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                }`}>
                  <Icons.ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 text-gray-600 leading-relaxed border-t border-brand-50/50 text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 text-center bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-600 text-sm md:text-lg mb-3 md:mb-4">
            Ainda tem alguma pergunta?
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=554830911777&text=Olá,%20tenho%20uma%20dúvida%20e%20gostaria%20de%20ajuda."
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors text-sm md:text-base"
          >
            <Icons.WhatsApp className="w-5 h-5" />
            <span className="hidden sm:inline">Entre em contato conosco pelo WhatsApp e teremos prazer em ajudar.</span>
            <span className="sm:hidden">Fale conosco pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};