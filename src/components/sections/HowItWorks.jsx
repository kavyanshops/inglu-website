import React from 'react';
import { classNames } from '../../utils/helpers';
import { COPY, STEPS_DATA } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Section } from '../common';
import { StepCard } from '../ui';
import { Icon } from '../ui';

/**
 * How It Works section with step-by-step guide
 */
const HowItWorks = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="how-it-works" background="light" padding="lg">
      <div ref={ref}>
        {/* Section Header */}
        <div
          className={classNames(
            'text-center max-w-3xl mx-auto mb-16',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="heading-h2 text-inglu-dark mb-4">
            {COPY.HOW_IT_WORKS_TITLE}
          </h2>
          <p className="body-lg text-inglu-text-secondary">
            {COPY.HOW_IT_WORKS_SUBTITLE}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {STEPS_DATA.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
              index={index}
              isLast={index === STEPS_DATA.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={classNames(
            'mt-16 text-center',
            'transition-all duration-700 delay-500',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <span className="text-inglu-text-secondary">
              Ready to get started?
            </span>
            <a
              href="https://ingluglobal.in/inglu-membership/"
              className={classNames(
                'inline-flex items-center gap-2',
                'px-6 py-3 rounded-btn',
                'bg-inglu-dark text-inglu-light font-semibold',
                'hover:bg-inglu-slate transition-colors duration-200'
              )}
            >
              Join INGLU Now
              <Icon name="arrowRight" size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
