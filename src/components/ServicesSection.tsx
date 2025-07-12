
import React from 'react';
import { Scissors, Star, Sparkles, Hand, Eye as EyeIcon, Gem } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ServicesSection: React.FC = () => {
  const { ref, isInView } = useInView();
  
  const services = [
    {
      id: 1,
      title: 'Cabelos',
      description: 'Cortes, coloração, tratamentos e penteados para todas as ocasiões.',
      icon: Scissors,
      bgColor: 'bg-white/80',
    },
    {
      id: 2,
      title: 'Unhas',
      description: 'Manicure, pedicure, alongamentos e nail art personalizada.',
      icon: Sparkles,
      bgColor: 'bg-[rgb(127,232,227)]/5',
    },
    {
      id: 3,
      title: 'Massagens',
      description: 'Relaxantes, modeladoras e terapêuticas para corpo e mente.',
      icon: Hand,
      bgColor: 'bg-white/80',
    },
    {
      id: 4,
      title: 'Cílios',
      description: 'Extensão, volume russo, lifting e design de sobrancelhas.',
      icon: EyeIcon,
      bgColor: 'bg-[rgb(127,232,227)]/5',
    },
    {
      id: 5,
      title: 'Depilação',
      description: 'Cera quente, cera fria e depilação a laser para todos os tipos de pele.',
      icon: Star,
      bgColor: 'bg-white/80',
    },
    {
      id: 6,
      title: 'Maquiagem',
      description: 'Social, noiva, festas e produções para eventos especiais.',
      icon: Gem,
      bgColor: 'bg-[rgb(127,232,227)]/5',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white bg-[url(marmore2.png)] bg-no-repeat bg-cover" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-spa-secondary">
            Nossos Serviços
          </h2>
          <p className="font-montserrat text-xl text-spa-dark max-w-3xl mx-auto">
            Oferecemos uma variedade de serviços de beleza e bem-estar para cuidar de você por completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-spa-primary/20 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6">
                <service.icon size={48} className="text-spa-secondary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-spa-secondary mb-4 text-center">
                {service.title}
              </h3>
              <p className="font-montserrat text-spa-dark mb-6 text-center">
                {service.description}
              </p>
              <div className="text-center">
                {/* <button className="font-montserrat text-spa-secondary font-medium hover:text-spa-medium transition-colors">
                  Saiba mais
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
