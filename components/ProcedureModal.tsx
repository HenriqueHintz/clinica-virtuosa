import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';
import { SubService } from '../types';

interface ProcedureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  procedures: SubService[];
}

export const ProcedureModal: React.FC<ProcedureModalProps> = ({ isOpen, onClose, title, procedures }) => {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-brand-50/50 flex-shrink-0">
              <div>
                <h3 className="text-xl md:text-3xl font-extrabold text-gray-900">{title}</h3>
                <p className="text-brand-600 text-sm md:text-base font-medium mt-1">Conheça todos os nossos tratamentos especializados</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-brand-500 hover:rotate-90 transition-all duration-300"
              >
                <Icons.Close className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {procedures.map((proc, index) => {
                  const Icon = (Icons as any)[proc.icon || 'Sparkles'] || Icons.Sparkles;
                  return (
                    <motion.div 
                      key={proc.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group p-5 bg-gray-50 hover:bg-white rounded-2xl border border-transparent hover:border-brand-100 hover:shadow-md transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-500 flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors">
                          {proc.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                          {proc.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50 flex-shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-xs md:text-sm text-center sm:text-left">
                Todos os tratamentos são realizados com tecnologia aprovada pela <strong>ANVISA</strong>.
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=554830911777&text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação!"
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-bold text-center transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 active:scale-95"
              >
                Agendar Avaliação
                <Icons.WhatsApp className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
