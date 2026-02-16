import { Unit, Service, Testimonial, FaqItem } from './types';

// Unidades Virtuosa - Grande Florianópolis
export const UNITS: Unit[] = [
  {
    id: 'fln-centro',
    name: 'Florianópolis - Centro',
    city: 'Florianópolis',
    address: 'R. Dom Jaime Câmara, 50 - Centro, Florianópolis - SC',
    phone: '(48) 3091-1777',
    whatsapp: '554830911777',
    whatsappDisplay: '(48) 3091-1777',
    email: 'centro@clinicavirtuosa.com.br',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.31575824982!2d-48.5548669254194!3d-27.59239318283921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737d97992526b%3A0xfa35192abc1d211!2sCl%C3%ADnica%20de%20Est%C3%A9tica%20Florian%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr',
    googleMapsLink: 'https://www.google.com/maps/place/Cl%C3%ADnica+de+Est%C3%A9tica+Florian%C3%B3polis/@-27.5923932,-48.552278,17z',
    coordinates: { lat: -27.5923932, lng: -48.552278 },
    images: [
      '/assets/units/centro/clinica unidade centro 01.webp',
      '/assets/units/centro/clinica unidadde centro 02.webp'
    ]
  },
  {
    id: 'fln-estreito',
    name: 'Florianópolis - Estreito',
    city: 'Florianópolis',
    address: 'R. General Eurico Gaspar Dutra, 456 - Estreito',
    phone: '(48) 99936-4612',
    whatsapp: '5548999364612',
    whatsappDisplay: '(48) 99936-4612',
    email: 'estreito@clinicavirtuosa.com.br',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5615701890184!2d-48.57942368541983!3d-27.58842308284196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527371cefed46df%3A0x94ac609ab90343c8!2sClinica%20Virtuosa%20Unidade%20Estreito!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr',
    googleMapsLink: 'https://www.google.com/maps/place/Clinica+Virtuosa+Unidade+Estreito/@-27.588423,-48.577235,17z',
    coordinates: { lat: -27.588423, lng: -48.577235 },
    images: [
      '/assets/units/estreito/foto unidade estreito01.webp',
      '/assets/units/estreito/foto unidade estreito02.webp',
      '/assets/units/estreito/foto unidade estreito03.webp',
      '/assets/units/estreito/foto unidade estreito04.webp',
      '/assets/units/estreito/foto unidade estreito05.webp'
    ],
    instagram: 'virtuosafloripaestreito',
    facebook: 'virtuosaflorianopolisestreito'
  },
  {
    id: 'sao-jose-kobrasol',
    name: 'São José - Kobrasol',
    city: 'São José',
    address: 'R. 7 de Setembro, 4 - Kobrasol, São José - SC',
    phone: '(48) 99614-1210',
    whatsapp: '5548996050531',
    whatsappDisplay: '(48) 99605-0531',
    email: 'kobrasol@clinicavirtuosa.com.br',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8398436666666!2d-48.6186984!3d-27.6009761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527491b578bd481%3A0xdbd0352440973e54!2sCl%C3%ADnica%20Est%C3%A9tica%20Virtuosa%20S%C3%A3o%20Jos%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr',
    googleMapsLink: 'https://www.google.com.br/maps/place/Cl%C3%ADnica+Est%C3%A9tica+Virtuosa+S%C3%A3o+Jos%C3%A9/@-27.6009761,-48.6161349,17z',
    coordinates: { lat: -27.6009761, lng: -48.6161349 },
    images: [
      '/assets/units/sao-jose/clinica unidade sao jose01.webp',
      '/assets/units/sao-jose/clinica unidade sao jose02.webp',
      '/assets/units/sao-jose/clinica unidade sao soje03.webp',
      '/assets/units/sao-jose/clinica unidade sao soje04.webp',
      '/assets/units/sao-jose/clinica unidade sao soje05.webp'
    ]
  },
  {
    id: 'tijucas-centro',
    name: 'Tijucas - Centro',
    city: 'Tijucas',
    address: 'R. Antonio A. Vargas, 42 - Loja 2 - Centro, Tijucas - SC',
    phone: '(48) 99158-1829',
    whatsapp: '554891244978',
    whatsappDisplay: '(48) 99124-4978',
    email: 'tijucas@clinicavirtuosa.com.br',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.1398436666666!2d-48.6323624!3d-27.2405934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a94290009417%3A0xe2ec147e014e7f41!2sCl%C3%ADnica%20Est%C3%A9tica%20Virtuosa%20-%20Tijucas!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr',
    googleMapsLink: 'https://www.google.com/maps/place/Cl%C3%ADnica+Est%C3%A9tica+Virtuosa+-+Tijucas/@-27.2405934,-48.630174,17z',
    coordinates: { lat: -27.2405934, lng: -48.630174 },
    images: [
      '/assets/units/tijucas/clinica unidade tijucas01.webp',
      '/assets/units/tijucas/clinica unidade tijucas02.webp',
      '/assets/units/tijucas/clinica unidade tijucas03.webp',
      '/assets/units/tijucas/clinica unidade tijucas04.webp'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'monjifast',
    title: 'MonjiFast 90',
    description: 'Emagreça até 25% de gordura corporal em 3 meses com o protocolo mais avançado da atualidade.',
    image: 'https://placehold.co/800x600/fbcfe8/be185d?text=MonjiFast+90',
    icon: 'TrendingUp',
    subServices: [
      {
        id: 'consulta-medica',
        title: 'Consulta Médica',
        description: 'Acompanhamento especializado para garantir segurança e eficácia no seu processo.',
        icon: 'User'
      },
      {
        id: 'aplicacao-semanal',
        title: 'Aplicação Semanal',
        description: 'Protocolo de medicação semanal com acompanhamento rigoroso.',
        icon: 'Zap'
      },
      {
        id: 'acompanhamento-nutri',
        title: 'Acompanhamento Nutricional',
        description: 'Plano alimentar personalizado focado na queima de gordura e manutenção de peso.',
        icon: 'Scale'
      }
    ]
  },
  {
    id: 'depilacao',
    title: 'Depilação a Laser',
    description: 'Tecnologia avançada para pele lisa e sem pelos. Conforto e eficácia comprovada.',
    image: 'https://placehold.co/800x600/fbcfe8/be185d?text=Depilação+a+Laser',
    icon: 'Sparkles',
    subServices: [
      { id: 'axilas', title: 'Axilas', description: 'Depilação a laser nas axilas.', icon: 'Sparkles' },
      { id: 'buco', title: 'Buço', description: 'Depilação a laser no buço.', icon: 'Sparkles' },
      { id: 'meia-perna', title: 'Meia Perna', description: 'Depilação a laser da meia perna.', icon: 'Sparkles' },
      { id: 'pes-dedos', title: 'Pés e Dedos', description: 'Depilação a laser nos pés e dedos.', icon: 'Sparkles' },
      { id: 'pernas', title: 'Pernas Inteiras', description: 'Depilação a laser nas pernas inteiras.', icon: 'Sparkles' },
      { id: 'coxas', title: 'Coxas', description: 'Depilação a laser nas coxas.', icon: 'Sparkles' },
      { id: 'maos-dedos', title: 'Mãos e Dedos', description: 'Depilação a laser nas mãos e dedos.', icon: 'Sparkles' },
      { id: 'barriga', title: 'Barriga Inteira', description: 'Depilação a laser na barriga inteira.', icon: 'Sparkles' },
      { id: 'bracos', title: 'Braços Inteiros', description: 'Depilação a laser nos braços inteiros.', icon: 'Sparkles' },
      { id: 'pescoco', title: 'Pescoço', description: 'Depilação a laser no pescoço.', icon: 'Sparkles' },
      { id: 'glabela', title: 'Glabela', description: 'Depilação a laser na glabela.', icon: 'Sparkles' },
      { id: 'rosto', title: 'Rosto Inteiro', description: 'Depilação a laser no rosto inteiro.', icon: 'Sparkles' },
      { id: 'nuca', title: 'Nuca', description: 'Depilação a laser na nuca.', icon: 'Sparkles' },
      { id: 'costas', title: 'Costas', description: 'Depilação a laser nas costas.', icon: 'Sparkles' },
      { id: 'lombar', title: 'Lombar', description: 'Depilação a laser na lombar.', icon: 'Sparkles' },
      { id: 'post-coxa', title: 'Posterior de Coxa', description: 'Depilação a laser no posterior de coxa.', icon: 'Sparkles' },
      { id: 'virilha', title: 'Virilha', description: 'Depilação a laser na virilha.', icon: 'Sparkles' }
    ]
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento',
    description: 'Protocolos exclusivos para redução de medidas e perda de peso saudável.',
    image: 'https://placehold.co/800x600/fbcfe8/be185d?text=Emagrecimento',
    icon: 'Scale',
    subServices: [
      {
        id: 'drenagem-emag',
        title: 'Drenagem Linfática',
        description: 'Técnica que estimula o sistema linfático, favorecendo a eliminação de toxinas e reduzindo o inchaço.',
        icon: 'Droplets'
      },
      {
        id: 'mmi',
        title: 'MMI (Método Mary Iaczinski)',
        description: 'Técnicas únicas de massagem, tratamentos cosméticos e nutrição.',
        icon: 'Sparkles'
      },
      {
        id: 'detox',
        title: 'Detox',
        description: 'Tratamento com manta térmica que usa o calor para acelerar o metabolismo.',
        icon: 'Thermometer'
      },
      {
        id: 'criolipolise',
        title: 'Criolipólise',
        description: 'Método não invasivo que congela e elimina células de gordura.',
        icon: 'Thermometer'
      },
      {
        id: 'nutricionista',
        title: 'Consulta com Nutricionista',
        description: 'Plano nutricional personalizado baseado nos seus hábitos e preferências.',
        icon: 'Scale'
      },
      {
        id: 'ultradetox',
        title: 'Ultradetox',
        description: 'Protocolo exclusivo Virtuosa para transformar o corpo de forma rápida.',
        icon: 'Zap'
      },
      {
        id: 'enzimas',
        title: 'Enzimas',
        description: 'Enzimas para inibir o apetite e acelerar o metabolismo.',
        icon: 'Activity'
      },
      {
        id: 'criofast',
        title: 'Criofast',
        description: 'Protocolo exclusivo que trabalha a gordura localizada com o poder criogênico.',
        icon: 'Shield'
      },
      {
        id: 'lipo-fast',
        title: 'Lipo Fast 2.0',
        description: 'Perca até 12cm de circunferência abdominal em apenas 24 horas!',
        icon: 'Zap'
      },
      {
        id: 'infra',
        title: 'Infra',
        description: 'Acelera o metabolismo e queima a gordura localizada.',
        icon: 'Zap'
      },
      {
        id: 'lipo-sem-corte',
        title: 'Lipo sem Corte',
        description: 'Realiza a quebra da célula de gordura e remodelagem corporal.',
        icon: 'Wind'
      },
      {
        id: 'cryogel-emag',
        title: 'Cryogel',
        description: 'Resfria e trata a gordura localizada e a celulite.',
        icon: 'Thermometer'
      },
      {
        id: 'mix-ultra',
        title: 'Mix Ultra',
        description: 'Kit completo para resultados rápidos em emagrecimento.',
        icon: 'Grid'
      }
    ]
  },
  {
    id: 'faciais',
    title: 'Procedimentos Faciais',
    description: 'Rejuvenesça, hidrate e proteja sua pele com nossos procedimentos faciais.',
    image: 'https://placehold.co/800x600/fbcfe8/be185d?text=Procedimentos+Faciais',
    icon: 'Smile',
    subServices: [
      {
        id: 'limpeza-pele',
        title: 'Limpeza de Pele',
        description: 'Remove impurezas, desobstrui os poros e promove a revitalização.',
        icon: 'Sparkles'
      },
      {
        id: 'peeling',
        title: 'Peeling',
        description: 'Promove a renovação celular, melhorando a textura e aparência.',
        icon: 'Activity'
      },
      {
        id: 'preenchimento',
        title: 'Preenchimento Facial',
        description: 'Estimula o colágeno, dando firmeza e elasticidade.',
        icon: 'Heart'
      },
      {
        id: 'skinbooster',
        title: 'Skinbooster',
        description: 'Hidratação profunda e suavização de linhas finas com ácido hialurônico.',
        icon: 'Droplets'
      },
      {
        id: 'perfect-peel',
        title: 'Perfect Peel',
        description: 'Tecnologia exclusiva para o clareamento e uniformização do tom da pele.',
        icon: 'Zap'
      },
      {
        id: 'microagulhamento',
        title: 'Microagulhamento',
        description: 'Deixa a região tratada com uma aparência mais bonita, jovem e saudável.',
        icon: 'Grid'
      },
      {
        id: 'md-codes',
        title: 'MD Codes',
        description: 'Técnica de preenchimento que restaura volume e oferece efeito lifting.',
        icon: 'TrendingUp'
      },
      {
        id: 'botox',
        title: 'Toxina Botulínica (Botox)',
        description: 'Suaviza as rugas e linhas de expressão do rosto.',
        icon: 'Activity'
      },
      {
        id: 'fios-seda',
        title: 'Hidratação Fios de Seda',
        description: 'Hidratação profunda através das fibras naturais do casulo do bicho da seda.',
        icon: 'Sparkles'
      },
      {
        id: 'peeling-diamante',
        title: 'Peeling de Diamante',
        description: 'Esfoliação profunda que retira as células mortas.',
        icon: 'Activity'
      },
      {
        id: 'peeling-quimico',
        title: 'Peeling Químico',
        description: 'Aplicação de ácidos para clareamento e diminuição de linhas finas.',
        icon: 'Activity'
      },
      {
        id: 'preenchimento-labial',
        title: 'Preenchimento Labial',
        description: 'Valoriza seus lábios de forma harmônica e natural.',
        icon: 'Smile'
      },
      {
        id: 'bioestimulador',
        title: 'Bioestimulador de Colágeno',
        description: 'Previne e trata sinais do envelhecimento com 7 benefícios.',
        icon: 'Zap'
      },
      {
        id: 'fios-pdo',
        title: 'Fios de PDO',
        description: 'Rejuvenescimento e efeito lifting com fios pouco invasivos.',
        icon: 'Wind'
      }
    ]
  },
  {
    id: 'corporais',
    title: 'Procedimentos Corporais',
    description: 'Os procedimentos corporais da clínica são planejados para promover beleza, saúde e bem-estar.',
    image: 'https://placehold.co/800x600/fbcfe8/be185d?text=Procedimentos+Corporais',
    icon: 'Activity',
    subServices: [
      {
        id: 'drenagem',
        title: 'Drenagem Linfática',
        description: 'Técnica que estimula o sistema linfático, favorecendo a eliminação de toxinas e reduzindo o inchaço.',
        icon: 'Droplets'
      },
      {
        id: 'modeladora',
        title: 'Massagem Modeladora',
        description: 'Procedimento que auxilia na redução de medidas e melhora a circulação sanguínea.',
        icon: 'Wind'
      },
      {
        id: 'velaryan',
        title: 'Velaryan',
        description: 'O Velaryan permite a lipólise de forma indolor, promovendo a redução do tecido adiposo e a estimulação de novos vasos linfáticos e sanguíneos.',
        icon: 'Zap'
      },
      {
        id: 'terapeutica',
        title: 'Massagem Terapêutica',
        description: 'A massagem visa o relaxamento, melhora a circulação, reduz o estresse e beneficia a saúde mental.',
        icon: 'Heart'
      },
      {
        id: 'lipo-turbinada',
        title: 'Lipo Turbinada',
        description: 'Associa massagem manual com ventosas para modelar o corpo e diminuir medidas, celulite e gordura localizada.',
        icon: 'Zap'
      },
      {
        id: 'hidratacao',
        title: 'Hidratação Corporal',
        description: 'Promove mais maciez, suavidade e melhora a textura da pele do corpo.',
        icon: 'Droplets'
      },
      {
        id: 'vasinhos',
        title: 'Secagem de Vasinhos',
        description: 'Tratamento para microvasinhos, buscando seu desaparecimento e melhora estética.',
        icon: 'Activity'
      },
      {
        id: 'pump-up',
        title: 'Pump Up',
        description: 'Ventosas pulsadas para tonificar glúteos, eliminar a celulite e melhorar o colágeno.',
        icon: 'TrendingUp'
      },
      {
        id: 'corrente-russa',
        title: 'Corrente Russa',
        description: 'Técnica que usa corrente elétrica para melhorar o tônus muscular e a circulação sanguínea.',
        icon: 'Zap'
      },
      {
        id: 'carboxiterapia',
        title: 'Carboxiterapia',
        description: 'Indicado para tratar celulite, estrias, flacidez, olheiras e gordura localizada.',
        icon: 'Activity'
      },
      {
        id: 'celulite',
        title: 'Tratamento para Celulite',
        description: 'Soluções para reduzir o aspecto "casca de laranja" da pele.',
        icon: 'Grid'
      },
      {
        id: 'hidrolipo',
        title: 'Hidrolipo',
        description: 'Injeção e ultrassom quebra células de gordura para resultados eficazes.',
        icon: 'Zap'
      },
      {
        id: 'heccus',
        title: 'Heccus Turbo',
        description: 'Eletroterapia computadorizada destinada a terapias corporais avançadas.',
        icon: 'Zap'
      },
      {
        id: 'cryogel',
        title: 'Cryogel',
        description: 'Resfria e trata a gordura localizada e a celulite, melhorando a silhueta.',
        icon: 'Thermometer'
      },
      {
        id: 'endermoterapia',
        title: 'Endermoterapia',
        description: 'Tratamento de vacuoterapia que trata a celulite e gordura de forma segura e indolor.',
        icon: 'Wind'
      },
      {
        id: 'crioplates',
        title: 'Crioplates',
        description: 'Criolipólise otimizada para redução de gordura e modelagem corporal.',
        icon: 'Shield'
      },
      {
        id: 'criofrequencia',
        title: 'Criofrequência',
        description: 'Une radiofrequência e crioterapia para reduzir gordura e flacidez.',
        icon: 'Zap'
      },
      {
        id: 'flaci-fast',
        title: 'Flaci Fast',
        description: 'Conjunto de técnicas exclusivas para tratar a flacidez de maneira rápida e segura.',
        icon: 'Zap'
      },
      {
        id: 'striort',
        title: 'Procedimento Striort',
        description: 'Aparelho de sucção para tratamento de estrias vermelhas e brancas.',
        icon: 'Wind'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Silva',
    location: 'Florianópolis',
    text: 'Fiz o tratamento de depilação a laser na unidade do Centro e os resultados são incríveis! A equipe é super profissional e o ambiente é muito acolhedor. Super recomendo!',
    rating: 5,
    avatar: 'MS',
    treatment: 'Depilação a Laser',
    fullLocation: 'Florianópolis - Centro'
  },
  {
    id: 2,
    name: 'Ana Paula',
    location: 'São José',
    text: 'Comecei o programa de emagrecimento há 3 meses e já perdi 8kg! O acompanhamento é excelente, me sinto muito mais confiante. Obrigada, Virtuosa!',
    rating: 5,
    avatar: 'AP',
    treatment: 'Programa de Emagrecimento',
    fullLocation: 'São José - Kobrasol'
  },
  {
    id: 3,
    name: 'Carolina Mendes',
    location: 'Estreito',
    text: 'A limpeza de pele mudou minha vida! Minha acne melhorou 90% e minha autoestima voltou. Atendimento impecável na unidade Estreito.',
    rating: 5,
    avatar: 'CM',
    treatment: 'Tratamentos Faciais',
    fullLocation: 'Florianópolis - Estreito'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Qual o valor da avaliação?",
    answer: "A avaliação na Clínica Virtuosa é totalmente gratuita! Nela, nossas especialistas analisam suas necessidades e indicam o melhor tratamento para você."
  },
  {
    question: "Os tratamentos doem?",
    answer: "A maioria dos nossos tratamentos é minimamente invasiva e muito confortável. Para procedimentos como a depilação a laser, utilizamos equipamentos com tecnologia de resfriamento que tornam a sessão praticamente indolor."
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer: "O tempo varia conforme o procedimento e a área tratada. Sessões de depilação a laser podem durar de 5 a 30 minutos, enquanto tratamentos faciais e corporais levam em média 40 a 60 minutos."
  },
  {
    question: "Preciso fazer quantas sessões?",
    answer: "O número de sessões depende do seu objetivo e da avaliação individual. Na sua consulta gratuita, montaremos um plano personalizado com a estimativa ideal para o seu caso."
  },
  {
    question: "Posso parcelar os tratamentos?",
    answer: "Sim! Oferecemos condições facilitadas de pagamento para que você possa cuidar de si sem pesar no bolso. Consulte nossas opções de parcelamento na unidade."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos dinheiro, PIX, e cartões de crédito e débito das principais bandeiras. Também temos opções de parcelamento no cartão de crédito."
  },
  {
    question: "Preciso agendar com antecedência?",
    answer: "Recomendamos o agendamento prévio para garantir o horário de sua preferência, mas você pode sempre consultar a disponibilidade imediata através do nosso WhatsApp."
  },
  {
    question: "Os equipamentos são seguros?",
    answer: "Sim! Todos os nossos equipamentos são aprovados pela ANVISA e operados por profissionais certificados. Segurança é nossa prioridade em todos os procedimentos."
  }
];