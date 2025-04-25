
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);
  
  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };
  
  return {
    isAuthenticated,
    logout
  };
};

export default useAuth;
