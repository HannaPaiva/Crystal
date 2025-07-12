
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useCart } from '../hooks/useCart';
import { Separator } from '../components/ui/separator';
import PageLayout from '../components/PageLayout';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <PageLayout>
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-spa-teal mb-4">Seu Carrinho</h1>
            <div className="flex justify-center mb-8">
              <ShoppingCart className="h-24 w-24 text-gray-300" />
            </div>
            <p className="text-gray-600 mb-8">Seu carrinho está vazio</p>
            <Button
              className="bg-spa-gold text-spa-teal hover:bg-spa-gold/90"
              onClick={() => navigate('/products')}
            >
              Ver Produtos
            </Button>
          </div>
        </main>
  
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-spa-teal mb-8">Seu Carrinho</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white rounded-lg shadow"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-spa-teal">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-xl font-bold text-spa-teal mt-1">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-2 sm:mt-0">
                    <div className="flex items-center border border-gray-300 rounded-md mr-4">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 rounded-none"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 rounded-none"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button
                variant="outline"
                className="text-spa-teal"
                onClick={() => navigate('/products')}
              >
                Continuar Comprando
              </Button>
              
              <Button
                variant="ghost"
                className="ml-4 text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={clearCart}
              >
                Limpar Carrinho
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold text-spa-teal mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium text-spa-teal">Total</span>
                <span className="text-2xl font-bold text-spa-teal">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              
              <Button
                className="w-full bg-spa-gold text-spa-teal hover:bg-spa-gold/90 py-6"
                onClick={() => navigate('/checkout')}
              >
                Finalizar Compra
              </Button>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Cart;
