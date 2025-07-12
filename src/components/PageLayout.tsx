import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer'; // ajuste o path se estiver diferente

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { state } = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (state && state.scrollToId) {
      const targetElement = document.getElementById(state.scrollToId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [state]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conteúdo que cresce para empurrar o footer para o fim */}
      <div className="flex-grow pt-24" ref={contentRef}>
        {children}
      </div>

      {/* Footer sempre fixo no fim da tela, mesmo com pouco conteúdo */}
      <Footer />
    </div>
  );
};

export default PageLayout;
