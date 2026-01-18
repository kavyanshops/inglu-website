import React from 'react';
import { classNames, scrollToElement } from '../../utils/helpers';
import { NAV_LINKS } from '../../utils/constants';
import { useScrollPosition, useMobileMenu } from '../../hooks';
import { Container, HamburgerMenu } from '../common';
import { Button } from '../ui';

/**
 * Navigation component with sticky header and mobile menu
 */
const Navigation = () => {
  const { isScrolled } = useScrollPosition(50);
  const { isOpen, toggleMenu, closeMenu, menuRef, triggerRef } = useMobileMenu();

  // Handle nav link click with smooth scroll
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    scrollToElement(targetId, 80);
    closeMenu();
  };

  return (
    <>
      {/* Main Navigation */}
      <header
        className={classNames(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300 ease-out',
          isScrolled
            ? 'bg-inglu-dark/95 backdrop-blur-nav shadow-nav'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 text-inglu-light group"
              aria-label="INGLU Home"
            >
              <div className="relative">
                {/* Logo mark */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-inglu-blue via-inglu-purple to-inglu-orange flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-inglu-blue via-inglu-purple to-inglu-orange opacity-0 blur-lg group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold tracking-tight hidden sm:block">
                INGLU
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={classNames(
                    'text-body-sm font-medium text-inglu-text-secondary',
                    'transition-colors duration-200',
                    'hover:text-inglu-light',
                    'relative after:absolute after:bottom-0 after:left-0',
                    'after:w-0 after:h-0.5 after:bg-inglu-accent',
                    'after:transition-all after:duration-300',
                    'hover:after:w-full'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                href="https://ingluglobal.in/my-account/"
                className="text-inglu-light"
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="https://ingluglobal.in/inglu-membership/"
              >
                Join – ₹49/mo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <HamburgerMenu
                ref={triggerRef}
                isOpen={isOpen}
                onClick={toggleMenu}
                className="text-inglu-light"
              />
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={classNames(
          'fixed inset-0 z-40 md:hidden',
          'transition-opacity duration-300',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={classNames(
            'absolute top-0 left-0 bottom-0 w-[280px]',
            'bg-inglu-dark border-r border-white/10',
            'transform transition-transform duration-300 ease-out',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <a href="/" className="flex items-center gap-2 text-inglu-light">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-inglu-blue via-inglu-purple to-inglu-orange flex items-center justify-center">
                <span className="text-white font-bold">I</span>
              </div>
              <span className="text-lg font-bold">INGLU</span>
            </a>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-inglu-text-secondary hover:text-inglu-light hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="p-5 space-y-2">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={classNames(
                  'block px-4 py-3 rounded-lg',
                  'text-body font-medium text-inglu-text-secondary',
                  'hover:text-inglu-light hover:bg-white/10',
                  'transition-all duration-200',
                  'animate-slide-in-left'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Menu CTA Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3 border-t border-white/10">
            <Button
              variant="tertiary"
              fullWidth
              href="https://ingluglobal.in/my-account/"
              className="text-inglu-light border-inglu-light/50 hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              fullWidth
              href="https://ingluglobal.in/inglu-membership/"
            >
              Join – ₹49/mo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
