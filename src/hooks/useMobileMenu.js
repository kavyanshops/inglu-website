import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook to manage mobile menu state and behavior
 * @returns {object} Mobile menu state and handlers
 */
const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  // Open menu
  const openMenu = useCallback(() => {
    setIsOpen(true);
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  }, []);

  // Close menu
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = '';
    // Return focus to trigger button
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, openMenu, closeMenu]);

  // Handle escape key press
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    },
    [isOpen, closeMenu]
  );

  // Handle click outside menu
  const handleClickOutside = useCallback(
    (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    },
    [isOpen, closeMenu]
  );

  // Add event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, handleKeyDown, handleClickOutside]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    menuRef,
    triggerRef,
  };
};

export default useMobileMenu;
