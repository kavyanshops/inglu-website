import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/helpers';

/**
 * Container component for consistent max-width and padding
 * @param {object} props - Container props
 */
const Container = ({
  children,
  className = '',
  maxWidth = 'xl',
  as: Component = 'div',
  ...rest
}) => {
  // Max width classes
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={classNames(
        'mx-auto px-5 md:px-10 xl:px-20',
        maxWidthClasses[maxWidth],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  as: PropTypes.elementType,
};

export default Container;
