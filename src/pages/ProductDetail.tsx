import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, Plus, Minus } from 'lucide-react';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useCart } from '../hooks/useCart';
import PageLayout from '../components/PageLayout';

const products = [
  {
    id: 1,
    name: "Shampoo Revitalizante",
    price: 59.90,
    description: "Shampoo profissional para cabelos danificados. Formulado com ingredientes de alta qualidade, este shampoo ajuda a reparar cabelos danificados pelo uso de químicas e chapinha. Uso regular proporciona cabelos mais saudáveis, brilhantes e fortes.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    details: [
      "Volume: 300ml",
      "Para cabelos danificados",
      "Uso profissional",
      "Sem parabenos",
      "Vegano"
    ]
  },
  {
    id: 2,
    name: "Máscara Hidratante",
    price: 89.90,
    description: "Máscara de tratamento intensivo para todos os tipos de cabelo. Especialmente desenvolvida para nutrir profundamente os fios, esta máscara hidratante contém óleos naturais e proteínas que restauram a hidratação e saúde do cabelo.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    details: [
      "Volume: 250g",
      "Para todos os tipos de cabelo",
      "Hidratação profunda",
      "Sem sulfatos",
      "Fragrância suave"
    ]
  },
  {
    id: 3,
    name: "Óleo Capilar",
    price: 49.90,
    description: "Óleo para finalização e brilho intenso. Este óleo leve é perfeito para finalizar o penteado, controlar o frizz e adicionar um brilho natural. Protege os fios contra agressões externas e é rapidamente absorvido sem deixar resíduos oleosos.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    details: [
      "Volume: 100ml",
      "Livre de silicone",
      "Anti-frizz",
      "Com filtro UV",
      "Para todos os tipos de cabelo"
    ]
  }
];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart, cartItems, itemCount, updateQuantity } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <PageLayout>
        <main className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-spa-teal mb-4">Produto não encontrado</h1>
            <Button onClick={() => navigate('/products')}>Voltar para Produtos</Button>
          </div>
        </main>
        <Footer />
      </PageLayout>
    );
  }

  // Check if product exists in cart
  const cartItem = cartItems.find(item => item.id === product.id);
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const handleBuyNow = () => {
    if (!cartItem) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
    navigate('/checkout');
  };

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
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
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-spa-teal">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-spa-teal">Detalhes do Produto</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1 h-1 bg-spa-gold rounded-full mr-2"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-3xl font-bold text-spa-teal">
              R$ {product.price.toFixed(2)}
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleIncrement}
                  className="h-10 w-10 rounded-none"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="flex-1 bg-spa-gold text-spa-teal hover:bg-spa-gold/90"
                onClick={handleAddToCart}
              >
                Adicionar ao Carrinho
              </Button>
              <Button
                className="flex-1 bg-spa-teal text-white hover:bg-spa-teal/90"
                onClick={handleBuyNow}
              >
                Comprar Agora
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
};

export default ProductDetail;
