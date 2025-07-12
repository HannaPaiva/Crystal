
import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImage, setActiveImage] = useState<null | string>(null);
  const { ref, isInView } = useInView();

  const images = [
    {
      id: 1,
      src: '/salao/salao-00.jpg',
      category: 'salon',
      alt: 'Hair styling'
    },

    {
      id: 2,
      src: '/salao/salao-01.jpg',
      category: 'salon',
      alt: 'Hair styling'
    },
    {
      id: 3,
      src: '/salao/salao-09.jpg',
      category: 'salon',
      alt: 'Eyelash and makeup'
    },
    {
      id: 4,
      src: '/salao/cilios-01.jpeg',
      category: 'salon',
      alt: 'Nail art'
    },

    {
      id: 5,
      src: '/salao/cabelo-01.png',
      category: 'hair',
      alt: 'Hair coloring'
    },
    {
      id: 6,
      src: '/salao/cabelo-02.png',
      category: 'hair',
      alt: 'Manicure process'
    },
    {
      id: 7,
      src: '/salao/cabelo-03.png',
      category: 'hair',
      alt: 'Spa massage'
    },
    {
      id: 8,
      src: '/salao/cabelo-04.png',
      category: 'hair',
      alt: 'Eyelash and makeup'
    },
    {
      id: 9,
      src: '/salao/salao-04.jpg',
      category: 'massage',
      alt: 'Massage treatment'
    },
    {
      id: 10,
      src: '/salao/salao-05.jpg',
      category: 'massage',
      alt: 'Eyelash extension'
    },
    {
      id: 11,
      src: '/salao/massagem-04.png',
      category: 'massage',
      alt: 'Massage treatment'
    },
    {
      id: 12,
      src: '/salao/massagem-05.png',
      category: 'massage',
      alt: 'Eyelash extension'
    },
    {
      id: 13,
      src: '/salao/unha-01.png',
      category: 'nails',
      alt: 'Eyelash extension'
    },
    {
      id: 13,
      src: '/salao/unha-02.png',
      category: 'nails',
      alt: 'Eyelash extension'
    },
    {
      id: 13,
      src: '/salao/unha-03.png',
      category: 'nails',
      alt: 'Eyelash extension'
    },
    {
      id: 13,
      src: '/salao/unha-04.png',
      category: 'nails',
      alt: 'Eyelash extension'
    },
  ];

  const filters = [
    { id: 'all', name: 'Todos' },
    { id: 'salon', name: 'Salão' },
    { id: 'hair', name: 'Cabelo' },
    { id: 'nails', name: 'Unhas' },
    { id: 'massage', name: 'Massagem' },
    { id: 'eyelashes', name: 'Cílios' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="section-title">Galeria</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Veja o que fazemos com carinho.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.id
                ? 'bg-spa-teal text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-500 hover:scale-105 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={activeImage}
              alt="Gallery full view"
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-spa-teal rounded-full p-2"
              onClick={() => setActiveImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
