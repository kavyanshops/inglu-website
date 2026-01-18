import React from 'react';
import PropTypes from 'prop-types';
import { classNames, getAccentColorClasses } from '../../utils/helpers';

/**
 * Reusable Card component with variants
 * @param {object} props - Card props
 */
const Card = ({
  children,
  className = '',
  variant = 'light',
  hasBorder = false,
  borderColor = 'blue',
  shadow = 'md',
  padding = 'lg',
  hover = true,
  animate = false,
  onClick,
  ...rest
}) => {
  // Variant classes
  const variantClasses = {
    light: 'bg-white',
    dark: 'bg-inglu-slate',
    transparent: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-inglu-slate to-inglu-dark',
  };

  // Shadow classes
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-card',
    lg: 'shadow-card-lg',
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  // Border color classes
  const borderColorClass = hasBorder ? getAccentColorClasses(borderColor).border : '';

  // Hover classes
  const hoverClasses = hover
    ? 'hover:shadow-card-hover hover:scale-[1.02] cursor-pointer'
    : '';

  // Animation class
  const animateClass = animate ? 'transition-all duration-300' : 'transition-shadow duration-200';

  const cardClasses = classNames(
    'rounded-card',
    variantClasses[variant],
    shadowClasses[shadow],
    paddingClasses[padding],
    hasBorder && 'border-2',
    borderColorClass,
    hoverClasses,
    animateClass,
    onClick && 'cursor-pointer',
    className
  );

  const handleKeyDown = (e) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      onKeyDown={onClick ? handleKeyDown : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['light', 'dark', 'transparent', 'gradient']),
  hasBorder: PropTypes.bool,
  borderColor: PropTypes.oneOf(['blue', 'orange', 'purple', 'cyan']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  hover: PropTypes.bool,
  animate: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card;
