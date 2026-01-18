import React from 'react';
import PropTypes from 'prop-types';
import { classNames, getAccentColorClasses } from '../../utils/helpers';
import { useInView } from '../../hooks';

/**
 * Pillar Card component for the 3E ecosystem display
 * @param {object} props - PillarCard props
 */
const PillarCard = ({
  icon,
  title,
  description,
  features = [],
  color = 'blue',
  ctaText = 'Explore →',
  ctaHref = '#',
  className = '',
  index = 0,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const colorClasses = getAccentColorClasses(color);

  return (
    <div
      ref={ref}
      className={classNames(
        'group relative bg-white rounded-card p-8 lg:p-10',
        'border-2 transition-all duration-300 ease-out',
        'hover:shadow-card-lg hover:scale-[1.02]',
        colorClasses.border,
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: isInView ? `${index * 150}ms` : '0ms',
      }}
    >
      {/* Decorative gradient background on hover */}
      <div
        className={classNames(
          'absolute inset-0 rounded-card opacity-0 group-hover:opacity-5',
          'transition-opacity duration-300',
          colorClasses.bg
        )}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={classNames(
          'text-5xl mb-6',
          'transform transition-transform duration-300',
          'group-hover:scale-110 group-hover:rotate-3'
        )}
        role="img"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={classNames(
          'text-2xl font-bold mb-3',
          colorClasses.text
        )}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-inglu-text-secondary text-body mb-6">
        {description}
      </p>

      {/* Features list */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-body-sm text-inglu-dark"
            >
              <span className={classNames('mt-0.5', colorClasses.text)}>•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Link */}
      <a
        href={ctaHref}
        className={classNames(
          'inline-flex items-center gap-2',
          'text-body-sm font-semibold',
          'transition-all duration-200',
          'hover:gap-3 hover:underline underline-offset-4',
          colorClasses.text
        )}
      >
        {ctaText}
      </a>

      {/* Border glow effect on hover */}
      <div
        className={classNames(
          'absolute inset-0 rounded-card pointer-events-none',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-300',
          color === 'blue' && 'shadow-glow-blue',
          color === 'orange' && 'shadow-glow-orange',
          color === 'purple' && 'shadow-glow-purple'
        )}
        aria-hidden="true"
      />
    </div>
  );
};

PillarCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.oneOf(['blue', 'orange', 'purple']),
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  className: PropTypes.string,
  index: PropTypes.number,
};

export default PillarCard;
