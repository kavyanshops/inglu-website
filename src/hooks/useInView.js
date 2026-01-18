import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to detect when an element is in viewport
 * @param {object} options - Intersection Observer options
 * @returns {array} [ref, isInView, entry]
 */
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [entry, setEntry] = useState(null);
  const ref = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const handleIntersect = useCallback(
    (entries) => {
      const [entry] = entries;
      setEntry(entry);

      if (entry.isIntersecting) {
        if (delay > 0) {
          setTimeout(() => setIsInView(true), delay);
        } else {
          setIsInView(true);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    },
    [triggerOnce, delay]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, handleIntersect]);

  return [ref, isInView, entry];
};

export default useInView;
