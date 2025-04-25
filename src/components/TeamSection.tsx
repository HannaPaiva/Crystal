import React from 'react';
import { useInView } from '../hooks/useInView';

const TeamSection: React.FC = () => {
  const { ref, isInView } = useInView();
  
  const team = [
    {
      id: 1,
      name: 'Ana Silva',
      position: 'Especialista em Cabelos',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      description: 'Com mais de 10 anos de experiência, Ana é especialista em cortes modernos e coloração personalizada.'
    },
    {
      id: 2,
      name: 'Carla Martins',
      position: 'Nail Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
      description: 'Especialista em nail art e técnicas inovadoras de extensão de unhas.'
    },
    {
      id: 3,
      name: 'Fernanda Costa',
      position: 'Terapeuta de Massagem',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
      description: 'Especializada em massagens terapêuticas, relaxantes e modeladoras.'
    },
  ];

  return (
    <section id="team" className="py-20 relative" ref={ref}>
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/hero2.png)`,
          opacity: '0.15'
        }}
      />
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-spa-secondary font-playfair">
            Nossa Equipe
          </h2>
          <p className="text-xl text-spa-dark max-w-3xl mx-auto font-montserrat">
            Conheça os profissionais que farão a diferença na sua experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.id} 
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg overflow-hidden border border-spa-primary/20 group transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-80 mb-4 rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-spa-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-center font-montserrat">{member.description}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-spa-secondary mb-1 font-playfair">{member.name}</h3>
              <p className="text-spa-dark font-montserrat">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
