import React from 'react';
import { useInView } from '../hooks/useInView';

const TeamSection: React.FC = () => {
  const { ref, isInView } = useInView();
  
  const team = [
    {
      id: 1,
      name: 'Cristiane',
      position: 'Especialista em massagem',
      image: '',
      description: 'Com mais de 10 anos de experiência, Ana é especialista em cortes modernos e coloração personalizada.',
      instagram: "",
      telefone: "",
    },
    {
      id: 2,
      name: 'Brena Teodoro',
      position: 'Nail Designer',
      image: '',
      description: 'Especialista em nail art e técnicas inovadoras de extensão de unhas.',
      instagram: "",
      telefone: "",
    },
    {
      id: 3,
      name: 'Livia ',
      position: 'Terapeuta de Massagem',
      image: '',
      description: 'Especializada em massagens terapêuticas, relaxantes e modeladoras.',
      instagram: "",
      telefone: "",
    },
    {
      id: 4,
      name: 'Simoni Rodrigues',
      position: 'Terapeuta de Massagem',
      image: '',
      description: 'Especializada em massagens terapêuticas, relaxantes e modeladoras.',
      instagram: "",
      telefone: "",
    },
    {
      id: 5,
      name: 'Nayara',
      position: 'Terapeuta de Massagem',
      image: '',
      description: 'Especializada em massagens terapêuticas, relaxantes e modeladoras.',
      instagram: "",
      telefone: "",
    },
    {
      id: 6,
      name: 'Daylim',
      position: 'Terapeuta de Massagem',
      image: '',
      description: 'Especializada em massagens terapêuticas, relaxantes e modeladoras.',
      instagram: "",
      telefone: "",
    },
    {
      id: 7,
      name: 'Michele',
      position: 'Terapeuta de Massagem',
      image: '',
      description: 'Especializada em massagens terapêuticas, relaxantes e modeladoras.',
      instagram: "",
      telefone: "",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

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
