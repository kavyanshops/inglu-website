import React from 'react';
import PropTypes from 'prop-types';
import { classNames, getAccentColorClasses } from '../../utils/helpers';
import { useInView } from '../../hooks';
import { Icon } from './Icons';

/**
 * Feature Card component for displaying features with icon and description
 * Now uses professional SVG icons instead of emojis
 * @param {object} props - FeatureCard props
 */
const FeatureCard = ({
  icon,
  title,
  description,
  accentColor = 'blue',
  className = '',
  index = 0,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const colorClasses = getAccentColorClasses(accentColor);

  // Determine icon color classes based on accent
  const iconColorClasses = {
    blue: 'text-inglu-blue bg-inglu-blue/10 group-hover:bg-inglu-blue/20',
    orange: 'text-inglu-orange bg-inglu-orange/10 group-hover:bg-inglu-orange/20',
    purple: 'text-inglu-purple bg-inglu-purple/10 group-hover:bg-inglu-purple/20',
    cyan: 'text-inglu-accent bg-inglu-accent/10 group-hover:bg-inglu-accent/20',
  };

  return (
    <div
      ref={ref}
      className={classNames(
        'group relative bg-inglu-slate rounded-card p-8',
        'border border-transparent',
        'transition-all duration-300 ease-out',
        'hover:border-inglu-accent hover:shadow-glow-cyan',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: isInView ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Glow effect on hover */}
      <div
        className={classNames(
          'absolute inset-0 rounded-card opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
          'bg-gradient-to-br from-inglu-accent/5 to-transparent'
        )}
        aria-hidden="true"
      />

      {/* Icon - Now uses SVG */}
      <div
        className={classNames(
          'relative w-14 h-14 flex items-center justify-center',
          'rounded-xl mb-5',
          'group-hover:scale-110 transition-all duration-300',
          iconColorClasses[accentColor] || iconColorClasses.blue
        )}
      >
        {typeof icon === 'string' ? (
          <Icon name={icon} size={28} strokeWidth={1.5} />
        ) : (
          icon
        )}
      </div>

      {/* Content */}
      <div className="relative">
        <h3
          className={classNames(
            'text-xl font-bold mb-3',
            colorClasses.text
          )}
        >
          {title}
        </h3>
        <p className="text-inglu-text-secondary text-body-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div
        className={classNames(
          'absolute bottom-0 right-0 w-20 h-20',
          'opacity-0 group-hover:opacity-10',
          'transition-opacity duration-300',
          colorClasses.bg
        )}
        style={{
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          borderRadius: '0 0 12px 0',
        }}
        aria-hidden="true"
      />
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  accentColor: PropTypes.oneOf(['blue', 'orange', 'purple', 'cyan']),
  className: PropTypes.string,
  index: PropTypes.number,
};

export default FeatureCard;
