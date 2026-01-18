import React from 'react';
import PropTypes from 'prop-types';
import { classNames, getAccentColorClasses } from '../../utils/helpers';
import { useInView } from '../../hooks';
import { Icon } from './Icons';

/**
 * Step Card component for How It Works section
 * Now uses professional SVG icons
 * @param {object} props - StepCard props
 */
const StepCard = ({
  number,
  icon,
  title,
  description,
  color = 'blue',
  className = '',
  index = 0,
  isLast = false,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const colorClasses = getAccentColorClasses(color);

  // Icon background colors
  const iconBgClasses = {
    blue: 'bg-inglu-blue/10 text-inglu-blue',
    orange: 'bg-inglu-orange/10 text-inglu-orange',
    purple: 'bg-inglu-purple/10 text-inglu-purple',
  };

  return (
    <div
      ref={ref}
      className={classNames(
        'flex flex-col items-center text-center relative',
        'transition-all duration-500 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: isInView ? `${index * 200}ms` : '0ms',
      }}
    >
      {/* Step number circle */}
      <div
        className={classNames(
          'w-16 h-16 rounded-full flex items-center justify-center',
          'text-white font-bold text-2xl mb-5',
          'shadow-lg transform transition-transform duration-300',
          'hover:scale-110',
          colorClasses.bg
        )}
      >
        {number}
      </div>

      {/* Icon - Now uses SVG */}
      <div
        className={classNames(
          'w-20 h-20 rounded-2xl flex items-center justify-center mb-4',
          'transform transition-transform duration-300',
          'hover:scale-110',
          iconBgClasses[color] || iconBgClasses.blue
        )}
        aria-hidden="true"
      >
        {typeof icon === 'string' ? (
          <Icon name={icon} size={40} strokeWidth={1.5} />
        ) : (
          icon
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-inglu-dark mb-3">{title}</h3>

      {/* Description */}
      <p className="text-inglu-text-secondary text-body-sm max-w-[250px] leading-relaxed">
        {description}
      </p>

      {/* Connecting arrow (hidden on mobile, shown on desktop) */}
      {!isLast && (
        <div
          className={classNames(
            'hidden lg:flex absolute top-12 -right-6 xl:-right-10',
            'items-center justify-center',
            colorClasses.text,
            'animate-pulse'
          )}
          aria-hidden="true"
        >
          <Icon name="arrowRight" size={24} strokeWidth={2} />
        </div>
      )}

      {/* Mobile connecting chevron */}
      {!isLast && (
        <div
          className={classNames(
            'lg:hidden mt-8',
            'text-inglu-accent animate-bounce'
          )}
          aria-hidden="true"
        >
          <Icon name="chevronDown" size={28} strokeWidth={2} />
        </div>
      )}
    </div>
  );
};

StepCard.propTypes = {
  number: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'orange', 'purple']),
  className: PropTypes.string,
  index: PropTypes.number,
  isLast: PropTypes.bool,
};

export default StepCard;
