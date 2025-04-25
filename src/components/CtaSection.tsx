
import React from 'react';
import { useInView } from '../hooks/useInView';

const CtaSection: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section 
      ref={ref}
      className="py-20 bg-spa-primary" 
      style={{
        backgroundImage: `url(/marmore2.png)`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-6 text-spa-secondary transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Pronta para se cuidar?
        </h2>
        <p 
          className={`text-xl text-gray-700 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Agende um horário e experimente nossos serviços. Você merece esse momento!
        </p>
        <a 
          href="#contact" 
          className={`btn-primary text-lg px-8 py-4 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Agende seu horário
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
