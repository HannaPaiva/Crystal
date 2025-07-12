
import React from 'react';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Marble Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[rgb(127,232,227)]/5 to-white opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%237fe8e3' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: '0.15'
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`rounded-xl overflow-hidden shadow-xl transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <img 
              src="./salao/salao-01.jpg" 
              alt="Salon Interior" 
              className="w-full h-full object-cover"
              style={{
                height: "535px"
              }}
            />
          </div>
          <div>
            <h2 className={`font-playfair text-2xl md:text-3xl font-bold mb-6 text-[#3A9099] transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Sobre o Crystal - Beleza & Bem-estar
            </h2>
            <p className={`text-lg text-gray-600 mb-6 font-montserrat transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Somos mais que um salão de beleza, somos um espaço dedicado ao seu bem-estar e autoestima. 
              Com profissionais apaixonados e ambiente acolhedor, transformamos cada visita em uma experiência única.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {/* Features */}
              <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[rgb(127,232,227)]/20 transition-all duration-700 delay-300 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h3 className="text-xl font-semibold text-[rgb(14,91,96)] mb-2 font-playfair">
                  Profissionais Especializados
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Nossa equipe é formada por profissionais altamente qualificados e em constante atualização.
                </p>
              </div>
              <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[rgb(127,232,227)]/20 transition-all duration-700 delay-400 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h3 className="text-xl font-semibold text-[rgb(14,91,96)] mb-2 font-playfair">
                  Ambiente Relaxante
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Criamos um espaço onde você pode relaxar enquanto cuida da sua beleza.
                </p>
              </div>
              <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[rgb(127,232,227)]/20 transition-all duration-700 delay-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h3 className="text-xl font-semibold text-[rgb(14,91,96)] mb-2 font-playfair">
                  Produtos Premium
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Utilizamos produtos de alta qualidade para garantir os melhores resultados.
                </p>
              </div>
              <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-[rgb(127,232,227)]/20 transition-all duration-700 delay-600 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h3 className="text-xl font-semibold text-[rgb(14,91,96)] mb-2 font-playfair">
                  Atendimento Personalizado
                </h3>
                <p className="text-gray-600 font-montserrat">
                  Cada cliente é único e nosso atendimento é focado em suas necessidades específicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
