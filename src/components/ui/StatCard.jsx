import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/helpers';
import { useInView } from '../../hooks';

/**
 * Stat Card component with animated number counting
 * @param {object} props - StatCard props
 */
const StatCard = ({
  number,
  label,
  icon,
  className = '',
  index = 0,
  animateOnView = true,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [displayNumber, setDisplayNumber] = useState('0');
  const hasAnimated = useRef(false);

  // Parse number for animation
  const parseNumber = (numStr) => {
    const cleaned = numStr.replace(/[^0-9.]/g, '');
    return parseFloat(cleaned) || 0;
  };

  // Get suffix (like '+', 'B', 'M', '%')
  const getSuffix = (numStr) => {
    const match = numStr.match(/[^0-9.,]+$/);
    return match ? match[0] : '';
  };

  // Get prefix (like '$')
  const getPrefix = (numStr) => {
    const match = numStr.match(/^[^0-9]+/);
    return match ? match[0] : '';
  };

  // Animate number counting
  useEffect(() => {
    if (!animateOnView || !isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const target = parseNumber(number);
    const prefix = getPrefix(number);
    const suffix = getSuffix(number);
    const duration = 2000;
    const startTime = Date.now();
    const hasDecimal = number.includes('.');

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = target * easeOut;

      // Format the number
      let formatted;
      if (hasDecimal) {
        formatted = current.toFixed(1);
      } else if (target >= 1000) {
        formatted = Math.floor(current).toLocaleString();
      } else {
        formatted = Math.floor(current).toString();
      }

      setDisplayNumber(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayNumber(number);
      }
    };

    // Delay based on index for staggered effect
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 150);
  }, [isInView, number, animateOnView, index]);

  // Dynamically import Icon component
  const IconComponent = React.lazy(() => import('./Icons').then(module => ({ default: module.Icon })));

  return (
    <div
      ref={ref}
      className={classNames(
        'flex flex-col items-center text-center',
        'p-6 md:p-8',
        'transition-all duration-500',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon - Now uses SVG */}
      {icon && (
        <div
          className="w-14 h-14 rounded-2xl bg-inglu-accent/10 flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110"
          aria-hidden="true"
        >
          <React.Suspense fallback={<span className="text-2xl">●</span>}>
            {typeof icon === 'string' ? (
              <IconComponent name={icon} size={28} className="text-inglu-accent" strokeWidth={1.5} />
            ) : (
              icon
            )}
          </React.Suspense>
        </div>
      )}

      {/* Number */}
      <div
        className={classNames(
          'text-4xl md:text-5xl lg:text-h1 font-bold',
          'text-inglu-accent mb-2',
          'tabular-nums'
        )}
      >
        {displayNumber}
      </div>

      {/* Label */}
      <p className="text-inglu-text-secondary text-body md:text-body-lg">
        {label}
      </p>
    </div>
  );
};

StatCard.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
  index: PropTypes.number,
  animateOnView: PropTypes.bool,
};

export default StatCard;
