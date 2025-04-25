
import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useInView = (options: UseInViewOptions = {}) => {
  const { triggerOnce = true, ...observerOptions } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  // Add a unique ID to prevent duplicate observers
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clean up previous observer if it exists
    if (observerRef.current && ref.current) {
      observerRef.current.unobserve(ref.current);
      observerRef.current = null;
    }
    
    // Create new observer
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce && ref.current) {
          observerRef.current?.unobserve(ref.current);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, {
      threshold: 0.1,
      ...observerOptions
    });

    const currentRef = ref.current;
    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (currentRef && observerRef.current) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [options, triggerOnce]);

  return { ref, isInView };
};
