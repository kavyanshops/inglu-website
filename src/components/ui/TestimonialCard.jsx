import React from 'react';
import PropTypes from 'prop-types';
import { classNames, getInitials } from '../../utils/helpers';
import { useInView } from '../../hooks';

/**
 * Testimonial Card component with quote, author, and rating
 * @param {object} props - TestimonialCard props
 */
const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  className = '',
  index = 0,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Render star rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={classNames(
          'text-lg',
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        )}
        aria-hidden="true"
      >
        ★
      </span>
    ));
  };

  return (
    <div
      ref={ref}
      className={classNames(
        'bg-gray-50 border border-gray-200 rounded-card p-8',
        'transition-all duration-500 ease-out',
        'hover:shadow-card-hover hover:border-gray-300',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: isInView ? `${index * 150}ms` : '0ms',
      }}
    >
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {renderStars()}
      </div>

      {/* Quote */}
      <blockquote className="relative mb-6">
        <span
          className="absolute -top-2 -left-2 text-6xl text-inglu-blue/10 font-serif"
          aria-hidden="true"
        >
          "
        </span>
        <p className="text-inglu-dark text-body leading-relaxed italic pl-4">
          {quote}
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={`${author}'s profile`}
              className="w-12 h-12 rounded-full object-cover border-2 border-inglu-blue/20"
              loading="lazy"
            />
          ) : (
            <div
              className={classNames(
                'w-12 h-12 rounded-full flex items-center justify-center',
                'bg-gradient-to-br from-inglu-blue to-inglu-purple',
                'text-white font-bold text-sm'
              )}
              aria-hidden="true"
            >
              {getInitials(author)}
            </div>
          )}
        </div>

        {/* Author info */}
        <div>
          <p className="font-bold text-inglu-dark text-body-sm">{author}</p>
          <p className="text-inglu-text-secondary text-caption">{role}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  rating: PropTypes.number,
  className: PropTypes.string,
  index: PropTypes.number,
};

export default TestimonialCard;
