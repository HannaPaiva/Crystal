
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { state } = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Check if there's a scroll target from navigation
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
      <div className="pt-24 pb-16" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
