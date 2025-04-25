
import React from 'react';
import { useLocation } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Se estiver na página inicial e o sectionId for 'home', faça scroll para o topo
    if (location.pathname === '/' && sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-spa-light opacity-100"
      />
      
      {/* Marble Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-30 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(/hero2.png)`,
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-[#3A9099] animate-fade-in">
          Sua Beleza, Nossa Arte
        </h1>
        <p className="font-montserrat text-xl md:text-2xl mb-10 text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Um espaço dedicado ao seu bem-estar e beleza
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-3 bg-[#3A9099] text-white rounded-full hover:shadow-lg transition-all duration-300 font-montserrat"
          >
            Nossos Serviços
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white/80 text-[#3A9099] rounded-full hover:shadow-lg transition-all duration-300 font-montserrat border border-[rgb(14,91,96)]"
          >
            Agende seu Horário
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-[rgb(127,232,227)]"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
