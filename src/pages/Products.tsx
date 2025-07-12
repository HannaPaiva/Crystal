
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useCart } from '../hooks/useCart';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import CartDrawer from '../components/CartDrawer';
import PageLayout from '../components/PageLayout';

const products = [
  {
    id: 1,
    name: "Shampoo Revitalizante",
    price: 59.90,
    description: "Shampoo profissional para cabelos danificados",
    image: ""
  },
  {
    id: 2,
    name: "Máscara Hidratante",
    price: 89.90,
    description: "Máscara de tratamento intensivo",
    image: ""
  },
  {
    id: 3,
    name: "Óleo Capilar",
    price: 49.90,
    description: "Óleo para finalização e brilho",
    image: ""
  },
];

const Products = () => {
  const navigate = useNavigate();
  const { addToCart, cartItems, itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleViewProduct = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-spa-teal">Nossos Produtos</h1>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-spa-teal text-spa-teal hover:bg-spa-teal/10"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart />
            <span>Carrinho ({itemCount})</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="flex flex-col hover:shadow-lg transition-shadow bg-white border-spa-primary/10"
            >
              <CardHeader className="pb-0">
                <div className="w-full h-[400px] overflow-hidden rounded-t-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardTitle 
                  className="text-xl font-semibold text-spa-teal cursor-pointer hover:text-spa-teal/80 transition-colors"
                  onClick={() => handleViewProduct(product.id)}
                >
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{product.description}</p>
                <p className="text-2xl font-bold text-spa-teal mt-4">
                  R$ {product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button 
                  className="flex-1 bg-spa-teal text-white hover:bg-spa-teal/90"
                  onClick={() => addToCart(product)}
                >
                  Adicionar ao Carrinho
                </Button>
                <Button
                  variant="outline"
                  className="flex-shrink-0 border-spa-teal text-spa-teal hover:bg-spa-teal/10"
                  onClick={() => handleViewProduct(product.id)}
                >
                  Detalhes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </PageLayout>
  );
};

export default Products;
