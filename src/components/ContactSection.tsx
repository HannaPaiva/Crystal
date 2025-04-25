
import React from 'react';
import { Instagram, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ContactSection: React.FC = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Marble Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%237fe8e3' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: '0.15'
        }}
      />

      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Entre em contato conosco e agende seu horário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`bg-gray-50 p-8 rounded-xl shadow-md transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-spa-teal mb-6">Agende seu horário</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-teal"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-teal"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-2">Serviço desejado</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-teal"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="hair">Cabelo</option>
                  <option value="nails">Unhas</option>
                  <option value="massage">Massagem</option>
                  <option value="eyelashes">Cílios</option>
                  <option value="depilation">Depilação</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-teal"
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-secondary w-full"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div>
            <div className={`bg-gray-50 p-8 rounded-xl shadow-md mb-8 transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-2xl font-bold text-spa-teal mb-6">Informações de contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-spa-teal mr-4" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="text-spa-teal mr-4" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Instagram className="text-spa-teal mr-4" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-gray-600">@belezaemfocospa</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-spa-teal mr-4" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600">Av. Paulista, 1000, São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`rounded-xl overflow-hidden shadow-md h-[300px] transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098391933635!2d-46.65604278826406!3d-23.56413496752757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1691167058425!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
