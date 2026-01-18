import React from 'react';
import { classNames } from '../../utils/helpers';
import { COPY, TESTIMONIALS_DATA } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Section } from '../common';
import { TestimonialCard, Icon } from '../ui';

/**
 * Testimonials section with student stories
 * Now uses professional SVG icons
 */
const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="testimonials" background="light" padding="lg">
      <div ref={ref}>
        {/* Section Header */}
        <div
          className={classNames(
            'text-center max-w-3xl mx-auto mb-12',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-inglu-purple/10 mb-6">
            <Icon name="star" size={18} className="text-inglu-purple" />
            <span className="text-sm font-medium text-inglu-purple">
              Student Stories
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-inglu-dark mb-4">
            {COPY.TESTIMONIALS_TITLE}
          </h2>
          <p className="text-lg text-gray-600">
            {COPY.TESTIMONIALS_SUBTITLE}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={classNames(
            'mt-12 text-center',
            'transition-all duration-700 delay-400',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <p className="text-gray-600 mb-4">
            Join 5,000+ students already experiencing the INGLU difference
          </p>
          <a
            href="https://ingluglobal.in/inglu-membership/"
            className={classNames(
              'inline-flex items-center gap-2',
              'text-inglu-purple font-semibold',
              'hover:underline'
            )}
          >
            Become a member today
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
