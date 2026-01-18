import { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utils/helpers';

/**
 * Custom hook to track scroll position and direction
 * @param {number} threshold - Minimum scroll amount to trigger update
 * @returns {object} Scroll position data
 */
const useScrollPosition = (threshold = 10) => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: 'none',
    isScrolled: false,
    isAtTop: true,
    isAtBottom: false,
  });

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrollData((prevData) => {
        const scrollDirection =
          currentScrollY > prevData.scrollY
            ? 'down'
            : currentScrollY < prevData.scrollY
            ? 'up'
            : prevData.scrollDirection;

        return {
          scrollY: currentScrollY,
          scrollX: currentScrollX,
          scrollDirection,
          isScrolled: currentScrollY > threshold,
          isAtTop: currentScrollY <= threshold,
          isAtBottom: currentScrollY >= maxScroll - threshold,
        };
      });
    }, 50),
    [threshold]
  );

  useEffect(() => {
    // Set initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollData;
};

export default useScrollPosition;
