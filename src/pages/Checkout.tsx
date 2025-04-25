import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useCart } from '../hooks/useCart';
import { Separator } from '../components/ui/separator';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner';
import PageLayout from '../components/PageLayout';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, total } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    sameAsBilling: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, sameAsBilling: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.address || !formData.city || 
        !formData.state || !formData.zipCode) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    navigate('/payment');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-spa-teal mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-spa-teal mb-4">Informações Pessoais</h2>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-spa-teal mb-4">Endereço de Entrega</h2>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Input 
                        id="state" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input 
                      id="zipCode" 
                      name="zipCode" 
                      value={formData.zipCode} 
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sameAsBilling" 
                    checked={formData.sameAsBilling}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="sameAsBilling">Endereço de cobrança igual ao de entrega</Label>
                </div>
                
                {!formData.sameAsBilling && (
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <p className="text-sm text-gray-500">Os campos de endereço de cobrança apareceriam aqui</p>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/cart')}
                >
                  Voltar para o Carrinho
                </Button>
                
                <Button 
                  type="submit"
                  className="bg-spa-gold text-spa-teal hover:bg-spa-gold/90"
                >
                  Ir para Pagamento
                </Button>
              </div>
            </form>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow sticky top-20">
              <h2 className="text-xl font-bold text-spa-teal mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-1">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-800">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">R$ {total.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Entrega</span>
                <span className="font-medium">R$ 0.00</span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium text-spa-teal">Total</span>
                <span className="text-2xl font-bold text-spa-teal">
                  R$ {total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  );
};

export default Checkout;
