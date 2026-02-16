import React, { useState, useCallback } from 'react';
import { UNITS } from '../constants';
import { Icons } from './Icons';

export const Locations: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);

  const selectedUnit = UNITS[selectedIndex];

  const prevUnit = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + UNITS.length) % UNITS.length);
    setShowMap(false);
  }, []);

  const nextUnit = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % UNITS.length);
    setShowMap(false);
  }, []);

  return (
    <section id="locations" className="pt-10 md:pt-12 pb-6 md:pb-8 bg-white scroll-mt-20">
      <div className="container mx-auto px-5 md:px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">Onde Estamos</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Encontre a Virtuosa mais próxima</h3>
          <p className="text-gray-500 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Estamos presentes em 4 localizações estratégicas na Grande Florianópolis. 
            Selecione uma unidade para ver detalhes e agendar.
          </p>
        </div>

        {/* Mobile: Unit selector with arrows */}
        <div className="flex md:hidden items-center justify-center gap-3 mb-4">
          <button 
            onClick={prevUnit}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 active:bg-brand-100 active:text-brand-500 transition-colors flex-shrink-0"
            aria-label="Unidade anterior"
          >
            <Icons.ChevronDown className="w-5 h-5 rotate-90" />
          </button>
          
          <div className="text-center min-w-[180px]">
            <p className="font-bold text-gray-900 text-base">{selectedUnit.name}</p>
            <p className="text-xs text-gray-500">{selectedIndex + 1} de {UNITS.length}</p>
          </div>
          
          <button 
            onClick={nextUnit}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 active:bg-brand-100 active:text-brand-500 transition-colors flex-shrink-0"
            aria-label="Próxima unidade"
          >
            <Icons.ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
        </div>

        {/* Mobile: pill indicators */}
        <div className="flex md:hidden justify-center gap-1.5 mb-4">
          {UNITS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setSelectedIndex(i); setShowMap(false); }}
              className={`h-1.5 rounded-full transition-all ${
                selectedIndex === i ? 'w-6 bg-brand-500' : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Unidade ${i + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Unit List — desktop only */}
          <div className="hidden md:block bg-ice rounded-2xl p-6 overflow-y-auto border border-gray-100 shadow-inner max-h-[450px]">
            <h4 className="font-bold text-gray-700 mb-4 px-2">Nossas Unidades</h4>
            <div className="space-y-3">
              {UNITS.map((unit, index) => (
                <button
                  key={unit.id}
                  onClick={() => {
                    setSelectedIndex(index);
                    setShowMap(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    selectedIndex === index 
                      ? 'bg-white border-brand-500 shadow-md ring-1 ring-brand-200' 
                      : 'bg-white border-transparent hover:border-brand-200 hover:bg-white/80'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className={`font-bold ${selectedIndex === index ? 'text-brand-600' : 'text-gray-800'}`}>
                        {unit.name}
                      </h5>
                      <p className="text-xs text-gray-500 mt-1">{unit.address}</p>
                    </div>
                    {selectedIndex === index && <Icons.MapPin className="w-5 h-5 text-brand-500" />}
                  </div>
                  
                  {selectedIndex === index && (
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between animate-fade-in">
                       <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                         Aberto agora
                       </span>
                       <span className="text-xs text-gray-400">09:00 - 19:00</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details & Map */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col relative">
            {/* Gallery / Map */}
            <div className="flex-grow bg-gray-200 relative min-h-[220px] md:min-h-[300px]">
               {selectedUnit.images && selectedUnit.images.length > 0 && !showMap ? (
                 <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                      <img 
                        src={selectedUnit.images[0]} 
                        alt={`${selectedUnit.name} - Principal`}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="w-full md:w-1/2 h-1/2 md:h-full grid grid-cols-2 grid-rows-2">
                      {selectedUnit.images.slice(1, 5).map((img, idx) => (
                        <div key={idx} className="relative overflow-hidden group border-l border-b last:border-b-0 border-white/20">
                          <img 
                            src={img} 
                            alt={`${selectedUnit.name} - Galeria ${idx + 1}`}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                      ))}
                    </div>
                 </div>
               ) : (
                 <iframe
                   src={selectedUnit.mapUrl}
                   width="100%"
                   height="100%"
                   style={{ border: 0 }}
                   allowFullScreen={true}
                   loading="lazy"
                   title={`Mapa ${selectedUnit.name}`}
                   className="absolute inset-0 w-full h-full"
                 ></iframe>
               )}
            </div>

            {/* Bottom Action Bar */}
            <div className="bg-white p-4 md:p-6 border-t border-gray-100 z-10">
              <div className="flex flex-col gap-3 md:gap-4">
                {/* Unit info — show address on mobile since list is hidden */}
                <div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900">{selectedUnit.name}</h3>
                   <p className="text-xs text-gray-500 mt-0.5 md:hidden">{selectedUnit.address}</p>
                   <div className="flex items-center gap-2 text-gray-600 mt-1 text-sm">
                     <Icons.Phone className="w-4 h-4 flex-shrink-0" />
                     <span>{selectedUnit.phone}</span>
                   </div>
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <a 
                    href={selectedUnit.id === 'fln-estreito' 
                      ? 'https://api.whatsapp.com/send?phone=554899364612&text=Estava%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
                      : selectedUnit.id === 'fln-centro'
                      ? 'https://api.whatsapp.com/send?phone=554830911777&text=Ol%C3%A1,%20estava%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
                      : selectedUnit.id === 'sao-jose-kobrasol'
                      ? 'https://api.whatsapp.com/send?phone=5548996050531&text=Estava%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
                      : selectedUnit.id === 'tijucas-centro'
                      ? 'https://api.whatsapp.com/send?phone=554891244978&text=Ol%C3%A1,%20estava%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
                      : `https://wa.me/${selectedUnit.whatsapp}?text=Olá, gostaria de agendar uma avaliação gratuita na unidade ${selectedUnit.name}.`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[140px] bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-200 text-sm md:text-base active:scale-95"
                  >
                    <Icons.WhatsApp className="w-5 h-5" />
                    WhatsApp
                  </a>
                  
                  {(selectedUnit.instagram || selectedUnit.facebook) && (
                    <div className="flex gap-2">
                       {selectedUnit.instagram && (
                         <a 
                           href={`https://instagram.com/${selectedUnit.instagram}`}
                           target="_blank"
                           rel="noreferrer"
                           className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity shadow-md active:scale-95"
                           title="Instagram da Unidade"
                         >
                           <Icons.Instagram className="w-5 h-5 md:w-6 md:h-6" />
                         </a>
                       )}
                       {selectedUnit.facebook && (
                         <a 
                           href={`https://facebook.com/${selectedUnit.facebook}`}
                           target="_blank"
                           rel="noreferrer"
                           className="w-11 h-11 md:w-12 md:h-12 bg-[#1877F2] text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity shadow-md active:scale-95"
                           title="Facebook da Unidade"
                         >
                           <Icons.Facebook className="w-5 h-5 md:w-6 md:h-6" />
                         </a>
                       )}
                    </div>
                  )}
                  {selectedUnit.images && selectedUnit.images.length > 0 && (
                    <button 
                      onClick={() => setShowMap(!showMap)}
                      className="flex-1 min-w-[100px] bg-brand-100 hover:bg-brand-200 text-brand-700 px-4 md:px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm md:text-base active:scale-95"
                    >
                      {showMap ? (
                        <>
                          <Icons.Star className="w-4 h-4 md:w-5 md:h-5 text-brand-500" />
                          Fotos
                        </>
                      ) : (
                        <>
                          <Icons.MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand-500" />
                          Mapa
                        </>
                      )}
                    </button>
                  )}
                  <a 
                    href={selectedUnit.googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[100px] bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 md:px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-sm md:text-base active:scale-95"
                  >
                    <Icons.ArrowUp className="w-4 h-4 md:w-5 md:h-5 rotate-45" />
                    Chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};