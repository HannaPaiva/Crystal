import { useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, Plus, Minus } from 'lucide-react';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useCart } from '../hooks/useCart';
import PageLayout from '../components/PageLayout';
import { useState } from 'react';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const { addToCart, cartItems, itemCount, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

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

  const cartItem = cartItems.find(item => item.id === product.id);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
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
                {product.details?.map((detail: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1 h-1 bg-spa-gold rounded-full mr-2"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-3xl font-bold text-spa-teal">
              € {product.price.toFixed(2)}
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
