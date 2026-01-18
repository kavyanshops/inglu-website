import React from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '../../utils/helpers';
import { COPY, PERSONA_PATHS } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Section } from '../common';
import { Button } from '../ui';
import { Icon } from '../ui';

/**
 * CTA Section - Simplified with persona routing (UX Blueprint)
 * One Primary CTA + Three Secondary CTAs (segmented)
 * No pricing shown in primary CTA - defers to persona pages
 */
const CTASection = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const navigate = useNavigate();

  const handlePersonaClick = (persona) => {
    navigate(persona.href);
  };

  return (
    <Section id="cta" background="gradient" padding="xl">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-inglu-blue/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-inglu-purple/10 blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10">
        {/* Content */}
        <div
          className={classNames(
            'text-center max-w-3xl mx-auto',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* E3 Visual with SVG icons */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-inglu-blue/20 flex items-center justify-center border-2 border-inglu-blue">
                <Icon name="education" size={24} className="text-inglu-blue" />
              </div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-inglu-blue to-inglu-orange" />
              <div className="w-12 h-12 rounded-xl bg-inglu-orange/20 flex items-center justify-center border-2 border-inglu-orange">
                <Icon name="enhancement" size={24} className="text-inglu-orange" />
              </div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-inglu-orange to-inglu-purple" />
              <div className="w-12 h-12 rounded-xl bg-inglu-purple/20 flex items-center justify-center border-2 border-inglu-purple">
                <Icon name="entertainment" size={24} className="text-inglu-purple" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-inglu-light mb-6">
            {COPY.CTA_TITLE}
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-inglu-text-secondary mb-10 max-w-2xl mx-auto">
            {COPY.CTA_SUBTITLE}
          </p>

          {/* Primary CTA - No pricing, focus on action */}
          <div className="mb-10">
            <Button
              variant="primary"
              size="lg"
              href="#membership"
              icon={<Icon name="arrowRight" size={18} strokeWidth={2} />}
              iconPosition="right"
              className="min-w-[250px] shadow-lg shadow-inglu-blue/20"
            >
              Start Your Journey
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8 max-w-md mx-auto">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-inglu-text-secondary text-sm">or choose your path</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Secondary CTAs - Persona segmented with proper routing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {Object.entries(PERSONA_PATHS).map(([key, persona]) => {
              const colorClasses = {
                blue: 'border-inglu-blue text-inglu-blue hover:bg-inglu-blue/10',
                orange: 'border-inglu-orange text-inglu-orange hover:bg-inglu-orange/10',
                purple: 'border-inglu-purple text-inglu-purple hover:bg-inglu-purple/10',
              };

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handlePersonaClick(persona)}
                  className={classNames(
                    'flex items-center gap-3 px-6 py-3 rounded-xl',
                    'border-2 bg-transparent',
                    'font-medium transition-all duration-300',
                    'hover:scale-105 active:scale-95',
                    colorClasses[persona.color]
                  )}
                >
                  <div className="w-8 h-8 rounded-lg bg-current/10 flex items-center justify-center">
                    <Icon name={persona.icon} size={18} />
                  </div>
                  <span>{persona.title}</span>
                </button>
              );
            })}
          </div>

          {/* Trust note with SVG icons */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-inglu-text-secondary/70">
            <div className="flex items-center gap-2">
              <Icon name="check" size={14} className="text-green-400" />
              <span>Free to explore</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="check" size={14} className="text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="check" size={14} className="text-green-400" />
              <span>Join 5,000+ students</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
