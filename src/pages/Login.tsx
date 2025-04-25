
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login - in real app this would validate with backend
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
            Bem-vinda de volta
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Entre para agendar seu horário
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
                autoComplete="current-password"
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
              Entrar
            </Button>
          </form>
          
          <p className="mt-4 text-center text-gray-600">
            Não tem uma conta?{' '}
            <Link to="/register" className="text-spa-secondary hover:underline">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
