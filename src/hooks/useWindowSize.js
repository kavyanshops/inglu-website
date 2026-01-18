import { useState, useEffect, useCallback } from 'react';
import { debounce } from '../utils/helpers';
import { BREAKPOINTS } from '../utils/constants';

/**
 * Custom hook to track window size and breakpoint
 * @returns {object} Window size data and breakpoint info
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < BREAKPOINTS.TABLET : false,
    isTablet: typeof window !== 'undefined' ? 
      window.innerWidth >= BREAKPOINTS.TABLET && window.innerWidth < BREAKPOINTS.DESKTOP : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= BREAKPOINTS.DESKTOP : true,
    breakpoint: 'desktop',
  });

  const getBreakpoint = useCallback((width) => {
    if (width < BREAKPOINTS.TABLET) return 'mobile';
    if (width < BREAKPOINTS.DESKTOP) return 'tablet';
    return 'desktop';
  }, []);

  const handleResize = useCallback(
    debounce(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({
        width,
        height,
        isMobile: width < BREAKPOINTS.TABLET,
        isTablet: width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP,
        isDesktop: width >= BREAKPOINTS.DESKTOP,
        breakpoint: getBreakpoint(width),
      });
    }, 100),
    [getBreakpoint]
  );

  useEffect(() => {
    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return windowSize;
};

export default useWindowSize;
