import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/helpers';

/**
 * Hamburger Menu Icon component with animated state
 * @param {object} props - HamburgerMenu props
 */
const HamburgerMenu = ({
  isOpen = false,
  onClick,
  className = '',
  ariaLabel = 'Toggle navigation menu',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'relative w-10 h-10 flex items-center justify-center',
        'rounded-lg transition-colors duration-200',
        'hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inglu-accent',
        className
      )}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className="relative w-6 h-5 flex flex-col justify-center items-center">
        {/* Top line */}
        <span
          className={classNames(
            'absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out',
            isOpen
              ? 'rotate-45 translate-y-0'
              : '-translate-y-2'
          )}
          aria-hidden="true"
        />
        
        {/* Middle line */}
        <span
          className={classNames(
            'absolute h-0.5 w-6 bg-current rounded-full transition-all duration-200',
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          )}
          aria-hidden="true"
        />
        
        {/* Bottom line */}
        <span
          className={classNames(
            'absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out',
            isOpen
              ? '-rotate-45 translate-y-0'
              : 'translate-y-2'
          )}
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default HamburgerMenu;
