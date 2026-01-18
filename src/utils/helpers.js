/**
 * INGLU Website Utility Functions
 * Helper functions for common operations
 */

/**
 * Combines class names, filtering out falsy values
 * @param  {...string} classes - Class names to combine
 * @returns {string} Combined class string
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Format large numbers with commas and optional suffix
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toLocaleString();
};

/**
 * Check if current viewport is mobile
 * @returns {boolean} True if mobile viewport
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

/**
 * Check if current viewport is tablet
 * @returns {boolean} True if tablet viewport
 */
export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

/**
 * Check if current viewport is desktop
 * @returns {boolean} True if desktop viewport
 */
export const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 1024;
};

/**
 * Debounce function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 100) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

/**
 * Throttle function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Smooth scroll to element by ID
 * @param {string} elementId - ID of target element
 * @param {number} offset - Offset from top in pixels
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

/**
 * Get accent color classes based on color name
 * @param {string} color - Color name (blue, orange, purple)
 * @returns {object} Object with text, bg, border, and shadow classes
 */
export const getAccentColorClasses = (color) => {
  const colors = {
    blue: {
      text: 'text-inglu-blue',
      bg: 'bg-inglu-blue',
      border: 'border-inglu-blue',
      shadow: 'shadow-glow-blue',
      hover: 'hover:bg-blue-700',
    },
    orange: {
      text: 'text-inglu-orange',
      bg: 'bg-inglu-orange',
      border: 'border-inglu-orange',
      shadow: 'shadow-glow-orange',
      hover: 'hover:bg-orange-600',
    },
    purple: {
      text: 'text-inglu-purple',
      bg: 'bg-inglu-purple',
      border: 'border-inglu-purple',
      shadow: 'shadow-glow-purple',
      hover: 'hover:bg-purple-600',
    },
    cyan: {
      text: 'text-inglu-accent',
      bg: 'bg-inglu-accent',
      border: 'border-inglu-accent',
      shadow: 'shadow-glow-cyan',
      hover: 'hover:bg-cyan-500',
    },
  };
  return colors[color] || colors.blue;
};

/**
 * Generate initials from name
 * @param {string} name - Full name
 * @returns {string} Initials (max 2 characters)
 */
export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
