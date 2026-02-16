import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

export const About: React.FC = () => {
  const stats = [
    { value: "8+", label: "Anos de experiência" },
    { value: "10K+", label: "Clientes atendidas" },
    { value: "50K+", label: "Procedimentos realizados" },
    { value: "5", label: "Unidades na Grande Florianópolis" },
  ];

  const features = [
    {
      icon: Icons.Shield,
      title: "Profissionais Certificados",
      description: "Equipe 100% certificada e em constante atualização"
    },
    {
      icon: Icons.Sparkles,
      title: "Tecnologia de Ponta",
      description: "Equipamentos aprovados pela ANVISA"
    },
    {
      icon: Icons.Smile,
      title: "Atendimento Personalizado",
      description: "Protocolos exclusivos para cada cliente"
    },
    {
      icon: Icons.User,
      title: "10.000+ Clientes",
      description: "Satisfeitas com nossos resultados"
    }
  ];

  return (
    <section id="about" className="pt-10 md:pt-12 pb-6 md:pb-8 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-5 md:px-4 mb-6 md:mb-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block bg-brand-100 text-brand-600 px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              Sobre Nós
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Há 8 anos <br />
              transformando vidas <br />
              através da <span className="text-brand-500">estética</span>
            </h2>
            
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
              A Clínica Estética Virtuosa nasceu da paixão por resultados reais. Nossa equipe de profissionais especializados utiliza apenas tecnologias aprovadas pela ANVISA, garantindo segurança e efetividade em cada tratamento.
            </p>
            
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              Com 5 unidades estrategicamente localizadas na Grande Florianópolis, levamos bem-estar e autoestima para mais perto de você.
            </p>
            
            <ul className="space-y-2.5 md:space-y-3 mb-8 md:mb-10">
              {[
                "Compromisso com resultados reais",
                "Segurança em todos os procedimentos",
                "Transparência nos valores",
                "Acolhimento e empatia",
                "Inovação constante"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2.5 md:gap-3 text-gray-700 font-medium text-sm md:text-base">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-brand-500 flex items-center justify-center flex-shrink-0">
                    <Icons.CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3 text-brand-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=554830911777&text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita!" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand-500 hover:bg-brand-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-center transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 text-sm md:text-base active:scale-95"
              >
                Agendar Avaliação
                <Icons.ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="border border-gray-300 hover:border-brand-500 hover:text-brand-500 text-gray-600 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-center transition-all text-sm md:text-base active:scale-95"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>

          {/* Right Column: Feature Grid - Hidden on mobile as per user request */}
          <div className="hidden md:block w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-50/50 p-5 md:p-8 rounded-2xl md:rounded-3xl hover:bg-brand-50 transition-colors duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-100/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3 md:mb-6 text-brand-500 relative z-10">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1.5 md:mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm relative z-10">
                    {feature.description}
                  </p>
                  {feature.title === "Profissionais Certificados" && (
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-600 bg-brand-100 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                      <Icons.Shield className="w-3 h-3" />
                      Anvisa
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Stats Bar - Noir Redesign */}
      <div className="w-full bg-[#0a0a0a] text-white py-12 md:py-20 relative overflow-hidden">
        {/* Decorative elements for Noir essence */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/5 blur-[100px] rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-2 md:mb-4">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                    <Counter value={stat.value} />
                  </span>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-brand-400 transition-colors duration-300 max-w-[150px] text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Counter component for numbers
const Counter: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState("0");
  const nodeRef = React.useRef(null);
  const isInView = (window as any).IntersectionObserver ? true : false; // Placeholder check
  
  // Extract number and suffix
  const numericMatch = value.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(/\d+/g, "");

  React.useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      
      // Power3 easeOut function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);
      
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // We'll use a simple entrance detection for now, since we're inside whileInView parent
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 200);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [target, suffix]);

  return <span ref={nodeRef}>{displayValue}</span>;
};