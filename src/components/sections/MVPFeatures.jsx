import React from 'react';
import { classNames } from '../../utils/helpers';
import { COPY, MVP_FEATURES } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Section } from '../common';
import { FeatureCard, Button } from '../ui';
import { Icon } from '../ui';

/**
 * Membership Benefits section - showcasing what you get with INGLU membership
 * Pricing shown only when user scrolls to this section (not above fold)
 */
const MVPFeatures = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Section id="membership" background="gradient" padding="lg">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-inglu-blue/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-inglu-purple/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10">
        {/* Section Header */}
        <div
          className={classNames(
            'text-center max-w-3xl mx-auto mb-12',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-inglu-orange/20 backdrop-blur-sm mb-6">
            <Icon name="sparkles" size={16} className="text-inglu-orange" />
            <span className="text-body-sm font-medium text-inglu-orange">
              Membership Benefits
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-inglu-light mb-4">
            {COPY.MEMBERSHIP_TITLE}
          </h2>
          <p className="text-lg text-inglu-text-secondary">
            {COPY.MEMBERSHIP_SUBTITLE}
          </p>
        </div>

        {/* Features Grid - Shown First */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MVP_FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
              index={index}
            />
          ))}
        </div>

        {/* Pricing Section - Revealed after benefits */}
        <div
          className={classNames(
            'max-w-4xl mx-auto p-8 rounded-3xl',
            'bg-gradient-to-br from-white/10 to-white/5',
            'border border-white/10',
            'transition-all duration-700 delay-200',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-inglu-light mb-2">
              Choose Your Plan
            </h3>
            <p className="text-inglu-text-secondary">
              Affordable access to premium opportunities
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* Monthly */}
            <div className="flex-1 min-w-[180px] max-w-[220px] p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-inglu-blue/30 transition-all">
              <Icon name="currencyDollar" size={24} className="text-inglu-blue mx-auto mb-3" />
              <div className="text-2xl font-bold text-inglu-light mb-1">₹49<span className="text-sm font-normal text-inglu-text-secondary">/mo</span></div>
              <div className="text-sm text-inglu-text-secondary">Monthly</div>
            </div>

            {/* Quarterly - Popular */}
            <div className="flex-1 min-w-[180px] max-w-[220px] p-6 rounded-2xl bg-inglu-orange/10 border-2 border-inglu-orange text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full bg-inglu-orange text-white">
                Most Popular
              </span>
              <Icon name="rocket" size={24} className="text-inglu-orange mx-auto mb-3" />
              <div className="text-2xl font-bold text-inglu-light mb-1">₹149<span className="text-sm font-normal text-inglu-text-secondary">/3mo</span></div>
              <div className="text-sm text-inglu-orange font-medium">Save 33%</div>
            </div>

            {/* Annual */}
            <div className="flex-1 min-w-[180px] max-w-[220px] p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-inglu-purple/30 transition-all">
              <Icon name="star" size={24} className="text-inglu-purple mx-auto mb-3" />
              <div className="text-2xl font-bold text-inglu-light mb-1">₹499<span className="text-sm font-normal text-inglu-text-secondary">/yr</span></div>
              <div className="text-sm text-inglu-purple font-medium">Best Value</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={classNames(
            'mt-12 text-center',
            'transition-all duration-700 delay-500',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <Button
            variant="primary"
            size="lg"
            href="https://ingluglobal.in/inglu-membership/"
            className="min-w-[200px]"
            icon={<Icon name="arrowRight" size={18} strokeWidth={2} />}
            iconPosition="right"
          >
            Get Membership Now
          </Button>
          <p className="mt-4 text-sm text-inglu-text-secondary">
            Cancel anytime • Full access to all benefits
          </p>
        </div>
      </div>
    </Section>
  );
};

export default MVPFeatures;
