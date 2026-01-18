import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/helpers';
import Container from './Container';

/**
 * Section component wrapper with consistent spacing and backgrounds
 * @param {object} props - Section props
 */
const Section = ({
  children,
  className = '',
  background = 'light',
  padding = 'lg',
  id,
  containerWidth = 'xl',
  fullWidth = false,
  ...rest
}) => {
  // Background classes
  const backgroundClasses = {
    light: 'bg-white',
    dark: 'bg-inglu-dark',
    slate: 'bg-inglu-slate',
    gradient: 'bg-gradient-to-br from-inglu-dark via-inglu-slate to-inglu-dark',
    'gradient-reverse': 'bg-gradient-to-br from-inglu-slate to-inglu-dark',
    transparent: 'bg-transparent',
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-24 xl:py-32',
    xl: 'py-24 md:py-32 xl:py-40',
  };

  // Text color based on background
  const textColorClass =
    background === 'dark' || background === 'slate' || background.includes('gradient')
      ? 'text-inglu-light'
      : 'text-inglu-dark';

  return (
    <section
      id={id}
      className={classNames(
        'relative overflow-hidden',
        backgroundClasses[background],
        paddingClasses[padding],
        textColorClass,
        className
      )}
      {...rest}
    >
      {fullWidth ? (
        children
      ) : (
        <Container maxWidth={containerWidth}>{children}</Container>
      )}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  background: PropTypes.oneOf([
    'light',
    'dark',
    'slate',
    'gradient',
    'gradient-reverse',
    'transparent',
  ]),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  id: PropTypes.string,
  containerWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  fullWidth: PropTypes.bool,
};

export default Section;
