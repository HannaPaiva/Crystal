
import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spa-teal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Crystal - Beleza & Bem-estar</h3>
            <p className="text-white/80 mb-4">
              Transformando vidas através da beleza e do cuidado personalizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-spa-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-spa-gold transition-colors">
                <Phone size={24} />
              </a>
              <a href="#" className="text-white hover:text-spa-gold transition-colors">
                <MapPin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#team" className="text-white/80 hover:text-white transition-colors">Equipe</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-white/60">
            &copy; {currentYear} Crystal - Beleza & Bem-estar Spa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
