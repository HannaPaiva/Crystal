
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Drawer, DrawerContent, DrawerHeader, DrawerFooter } from "@/components/ui/drawer";
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-[95vh]">
        <DrawerHeader className="text-2xl font-bold text-spa-teal border-b pb-4">
          Seu Carrinho
        </DrawerHeader>
        
        <div className="flex-1 overflow-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Seu carrinho está vazio
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-spa-teal">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-lg font-bold text-spa-teal mt-1">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center border border-gray-300 rounded-md">
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
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <DrawerFooter className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-spa-teal">Total</span>
              <span className="text-2xl font-bold text-spa-teal">
                R$ {total.toFixed(2)}
              </span>
            </div>
            
            <div className="flex gap-4">
              <Button
                className="flex-1 bg-spa-teal text-white hover:bg-spa-teal/90"
                onClick={() => {
                  onClose();
                  navigate('/checkout');
                }}
              >
                Finalizar Compra
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  onClose();
                  navigate('/cart');
                }}
              >
                Ver Carrinho
              </Button>
            </div>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
