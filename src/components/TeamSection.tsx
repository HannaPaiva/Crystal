import React from 'react';
import { useInView } from '../hooks/useInView';

const TeamSection: React.FC = () => {
  const { ref, isInView } = useInView();
  
  const team = [
    {
      id: 1,
      name: 'Cristiane dos Santos',
      position: 'Especialista em massagem',
      image: '/staff/crys-02.jpg',
      description: 'Com mais de 10 anos de experiência, Cristiane promete todo tipo de relaxamento muscular e corporal.',
      instagram: "",
      telefone: "",
    },
    {
      id: 2,
      name: 'Brena Teodoro',
      position: 'Cabeleleira',
      image: '/staff/brena-1.jpg',
      description: 'Especialista em todos os tipos de cabelo com mais de 20 anos de experiência.',
      instagram: "",
      telefone: "+351 967 849 971",
    },

    {
      id: 5,
      name: 'Nayara Ferreira',
      position: 'Lash designer',
      image: '/staff/nay-01.jpeg',
      description: 'Especializada em cílios para levantar o seu olhar com mais de 7 anos de experiência',
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
