
import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import useAuth from '../hooks/useAuth';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Set isScrolled to true immediately if not on homepage
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      // Reset scroll position and check current scroll
      setIsScrolled(window.scrollY > 50);
    }
  }, [isHomePage, location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleScrollTo = (elementId: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If we're on homepage, scroll to section
    if (isHomePage) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage and then scroll to section after page load
      navigate('/', { state: { scrollToId: elementId } });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', action: null },
    { name: 'Produtos', path: '/products', action: null },
    { name: 'Serviços', path: '#services', action: () => handleScrollTo('services') },
    { name: 'Galeria', path: '#gallery', action: () => handleScrollTo('gallery') },
    { name: 'Contato', path: '#contact', action: () => handleScrollTo('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-playfair text-spa-secondary">
            Crystal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  }
                }}
                className="text-sm font-medium text-gray-600 hover:text-spa-secondary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-spa-secondary transition-colors"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-spa-primary text-spa-secondary text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>

            <div className="flex items-center gap-4 ml-4">
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="text-sm font-medium text-gray-600 hover:text-spa-secondary transition-colors"
                >
                  Sair
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 bg-spa-secondary text-white rounded-full hover:bg-spa-secondary/90 transition-colors text-sm font-medium"
                >
                  Entrar
                </Link>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              to="/cart"
              className="relative text-gray-600"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-spa-primary text-spa-secondary text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="text-gray-600 hover:text-spa-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 px-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="text-sm font-medium text-gray-600 hover:text-spa-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <button
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-gray-600 hover:text-spa-secondary transition-colors text-left"
              >
                Sair
              </button>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-spa-secondary hover:text-spa-secondary/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Entrar
              </Link>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
