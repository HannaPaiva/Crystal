import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useCart } from '../hooks/useCart';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { ChevronLeft } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>('credit');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'credit') {
      if (!cardData.cardNumber || !cardData.cardName || !cardData.expiryDate || !cardData.cvv) {
        toast.error("Por favor, preencha todos os dados do cartão");
        return;
      }
    }

    toast.loading("Processando pagamento...");
    
    setTimeout(() => {
      toast.dismiss();
      toast.success("Pagamento realizado com sucesso!");
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="flex items-center text-spa-teal mb-6"
          onClick={() => navigate('/checkout')}
        >
          <ChevronLeft className="mr-2" />
          Voltar para Checkout
        </Button>
        
        <h1 className="text-3xl font-bold text-spa-teal mb-8">Pagamento</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold text-spa-teal mb-4">Método de Pagamento</h2>
                
                <RadioGroup 
                  defaultValue="credit" 
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit" className="cursor-pointer flex-grow">Cartão de Crédito</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="cursor-pointer flex-grow">Pix</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label htmlFor="boleto" className="cursor-pointer flex-grow">Boleto Bancário</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {paymentMethod === 'credit' && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-bold text-spa-teal mb-4">Dados do Cartão</h2>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número do Cartão</Label>
                      <Input 
                        id="cardNumber" 
                        name="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        value={cardData.cardNumber} 
                        onChange={handleChange}
                        maxLength={19}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nome no Cartão</Label>
                      <Input 
                        id="cardName" 
                        name="cardName" 
                        placeholder="Nome como está no cartão" 
                        value={cardData.cardName} 
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Data de Expiração</Label>
                        <Input 
                          id="expiryDate" 
                          name="expiryDate" 
                          placeholder="MM/AA" 
                          value={cardData.expiryDate} 
                          onChange={handleChange}
                          maxLength={5}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          name="cvv" 
                          placeholder="123" 
                          value={cardData.cvv} 
                          onChange={handleChange}
                          maxLength={4}
                          type="password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'pix' && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-bold text-spa-teal mb-4">Pagamento via Pix</h2>
                  <p className="text-gray-600 mb-4">
                    Escaneie o QR Code abaixo ou copie a chave Pix para realizar o pagamento.
                  </p>
                  
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">QR Code aqui</p>
                    </div>
                    
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input value="pix-code-example-12345" readOnly />
                      <Button type="button" variant="outline">Copiar</Button>
                    </div>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'boleto' && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-bold text-spa-teal mb-4">Boleto Bancário</h2>
                  <p className="text-gray-600 mb-4">
                    Gere seu boleto e realize o pagamento em qualquer casa lotérica ou através do seu internet banking.
                  </p>
                  
                  <div className="flex justify-center">
                    <Button type="button" variant="outline">Gerar Boleto</Button>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  className="bg-spa-gold text-spa-teal hover:bg-spa-gold/90 py-6 px-8"
                >
                  Finalizar Pedido
                </Button>
              </div>
            </form>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow sticky top-20">
              <h2 className="text-xl font-bold text-spa-teal mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-1">
                        {item.quantity}x
                      </span>
                      <span className="text-gray-800 truncate max-w-[150px]">
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
     
    </PageLayout>
  );
};

export default Payment;
