
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy registration - in real app this would create account in backend
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-spa-light">
      <div className="max-w-md w-full mx-4">
        <Link 
          to="/" 
          className="inline-flex items-center text-spa-secondary hover:text-spa-secondary/80 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Voltar
        </Link>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-playfair text-spa-secondary text-center mb-6">
            Criar Conta
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Comece sua jornada de bem-estar
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Nome completo"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="w-full"
                required
              />
            </div>
            
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                className="w-full"
                autoComplete="new-password"
                required
                style={{ WebkitTextSecurity: showPassword ? 'none' : 'disc' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            <Button type="submit" className="w-full bg-spa-secondary hover:bg-spa-secondary/90">
              Criar conta
            </Button>
          </form>
          
          <p className="mt-4 text-center text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-spa-secondary hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
