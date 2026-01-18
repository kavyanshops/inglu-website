import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/helpers';

/**
 * Reusable Button component with multiple variants and sizes
 * @param {object} props - Button props
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  ...rest
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: `
      bg-inglu-blue text-white
      hover:bg-blue-700 active:bg-blue-800
      shadow-md hover:shadow-lg
      focus:ring-inglu-blue
    `,
    secondary: `
      bg-inglu-orange text-white
      hover:bg-orange-600 active:bg-orange-700
      shadow-md hover:shadow-lg
      focus:ring-inglu-orange
    `,
    tertiary: `
      bg-transparent text-inglu-blue
      border-2 border-inglu-blue
      hover:bg-inglu-blue/10 active:bg-inglu-blue/20
      focus:ring-inglu-blue
    `,
    ghost: `
      bg-transparent text-inglu-light
      hover:bg-white/10 active:bg-white/20
      focus:ring-white
    `,
    dark: `
      bg-inglu-dark text-white
      hover:bg-inglu-slate active:bg-gray-900
      shadow-md hover:shadow-lg
      focus:ring-inglu-dark
    `,
  };

  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-btn
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    transform hover:scale-[1.02] active:scale-[0.98]
  `;

  const buttonClasses = classNames(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    className
  );

  // Loading spinner
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Button content
  const content = (
    <>
      {loading && <LoadingSpinner />}
      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2" aria-hidden="true">{icon}</span>
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2" aria-hidden="true">{icon}</span>
      )}
    </>
  );

  // Render as link if href is provided
  if (href && !disabled) {
    return (
      <a
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        {...rest}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...rest}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'dark']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ariaLabel: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
