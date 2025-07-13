import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';

import { ChevronLeft, ShoppingCart } from 'lucide-react';

import { Button } from '../components/ui/button';
import { useCart } from '../hooks/useCart';
import PageLayout from '../components/PageLayout';
import type { Product } from '../models/product.model';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state as Product;

  const { addToCart, itemCount } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  if (!product) {
    return (
      <PageLayout>
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-spa-teal mb-4">Produto não encontrado</h1>
          <Button onClick={() => navigate('/products')}>Voltar para Produtos</Button>
        </main>

      </PageLayout>
    );
  }

  const handleThumbnailClick = (index: number) => {
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            className="flex items-center text-spa-teal"
            onClick={() => navigate('/products')}
          >
            <ChevronLeft className="mr-2" />
            Voltar para Produtos
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart />
            <span>Carrinho ({itemCount})</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagem principal com slider */}
          <div className="flex flex-col items-center">
            <div
              ref={sliderRef}
              className="keen-slider w-full max-w-md rounded-lg overflow-hidden mb-4 shadow-md"
            >
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className="keen-slider__slide flex items-center justify-center"
                >
                  <div
                    className="relative group w-full overflow-hidden"
                    style={{ height: '400px' }}
                  >
                    <img
                      src={img}
                      alt={`Imagem ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-300 ease-out"
                      onMouseMove={(e) => {
                        const target = e.currentTarget;
                        const rect = target.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        target.style.transformOrigin = `${x}% ${y}%`;
                        target.style.transform = 'scale(2)';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget;
                        target.style.transform = 'scale(1)';
                        target.style.transformOrigin = 'center center';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 rounded border-2 ${index === currentSlide ? 'border-spa-teal' : 'border-gray-200'}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-full object-cover rounded" />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do produto */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-spa-teal">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>

            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {product.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>

            <p className="text-3xl font-bold text-spa-teal">€ {product.price.toFixed(2)}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="flex-1 bg-spa-gold text-spa-teal hover:bg-spa-gold/90"
                onClick={() => addToCart(product)}
              >
                Adicionar ao Carrinho
              </Button>
              <Button
                className="flex-1 bg-spa-teal text-white hover:bg-spa-teal/90"
                onClick={() => {
                  addToCart(product);
                  navigate('/checkout');
                }}
              >
                Comprar Agora
              </Button>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default ProductDetail;
