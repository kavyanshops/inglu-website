import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../../utils/helpers';
import { COPY } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Section } from '../common';
import { Icon } from '../ui';

/**
 * Expandable Pillar Card with progressive disclosure
 * Click to expand and see features (UX Blueprint)
 * Now uses professional SVG icons
 */
const ExpandablePillarCard = ({ 
  icon, 
  title, 
  tagline,
  description, 
  features, 
  color,
  isExpanded,
  onClick,
  index 
}) => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const colorClasses = {
    blue: {
      bg: 'bg-[#EFF6FF]',
      border: 'border-inglu-blue',
      text: 'text-inglu-blue',
      glow: 'shadow-glow-blue',
      gradient: 'from-inglu-blue/10 to-transparent',
      bullet: 'bg-inglu-blue',
      iconBg: 'bg-inglu-blue/10',
    },
    orange: {
      bg: 'bg-[#FFF7ED]',
      border: 'border-inglu-orange',
      text: 'text-inglu-orange',
      glow: 'shadow-glow-orange',
      gradient: 'from-inglu-orange/10 to-transparent',
      bullet: 'bg-inglu-orange',
      iconBg: 'bg-inglu-orange/10',
    },
    purple: {
      bg: 'bg-[#FAF5FF]',
      border: 'border-inglu-purple',
      text: 'text-inglu-purple',
      glow: 'shadow-glow-purple',
      gradient: 'from-inglu-purple/10 to-transparent',
      bullet: 'bg-inglu-purple',
      iconBg: 'bg-inglu-purple/10',
    },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div
      ref={ref}
      className={classNames(
        'relative rounded-2xl overflow-hidden cursor-pointer',
        'border-2 transition-all duration-500',
        'hover:scale-[1.02]',
        isExpanded ? `${colors.border} ${colors.bg}` : 'border-gray-200 bg-white hover:border-gray-300',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-expanded={isExpanded}
    >
      {/* Header - Always visible */}
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          {/* Icon - Now uses SVG */}
          <div
            className={classNames(
              'flex-shrink-0 w-14 h-14 rounded-xl',
              'flex items-center justify-center',
              isExpanded ? colors.iconBg : 'bg-gray-100',
              isExpanded ? colors.text : 'text-gray-500',
              'transition-all duration-300'
            )}
          >
            <Icon name={icon} size={28} strokeWidth={1.5} />
          </div>

          {/* Title and tagline */}
          <div className="flex-1">
            <h3 className={classNames(
              'text-xl md:text-2xl font-bold mb-1 transition-colors duration-300',
              isExpanded ? colors.text : 'text-gray-900'
            )}>
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              {tagline}
            </p>
          </div>

          {/* Expand indicator */}
          <div
            className={classNames(
              'flex-shrink-0 w-8 h-8 rounded-full',
              'flex items-center justify-center',
              'border border-gray-200 transition-all duration-300',
              isExpanded ? `${colors.bg} ${colors.border} rotate-180` : 'bg-gray-50'
            )}
          >
            <svg
              className={classNames('w-4 h-4 transition-colors', isExpanded ? colors.text : 'text-gray-400')}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Expandable content - Progressive disclosure */}
      <div
        className={classNames(
          'overflow-hidden transition-all duration-500',
          isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features list */}
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={classNames('w-2 h-2 rounded-full', colors.bullet)} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-6">
            <a
              href={`#${title.toLowerCase()}`}
              className={classNames(
                'inline-flex items-center gap-2 font-medium',
                colors.text,
                'hover:underline'
              )}
              onClick={(e) => e.stopPropagation()}
            >
              Explore {title}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ExpandablePillarCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.oneOf(['blue', 'orange', 'purple']).isRequired,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number,
};

/**
 * Three Pillars section with progressive disclosure (UX Blueprint)
 * Collapsible 3E sections - tap to expand
 * Now uses professional SVG icons
 */
const ThreePillars = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [expandedPillar, setExpandedPillar] = useState(null);

  const pillars = [
    {
      icon: 'education',
      title: COPY.EDUCATION_TITLE,
      tagline: COPY.EDUCATION_TAGLINE,
      description: COPY.EDUCATION_DESCRIPTION,
      features: COPY.EDUCATION_FEATURES,
      color: 'blue',
    },
    {
      icon: 'enhancement',
      title: COPY.ENHANCEMENT_TITLE,
      tagline: COPY.ENHANCEMENT_TAGLINE,
      description: COPY.ENHANCEMENT_DESCRIPTION,
      features: COPY.ENHANCEMENT_FEATURES,
      color: 'orange',
    },
    {
      icon: 'entertainment',
      title: COPY.ENTERTAINMENT_TITLE,
      tagline: COPY.ENTERTAINMENT_TAGLINE,
      description: COPY.ENTERTAINMENT_DESCRIPTION,
      features: COPY.ENTERTAINMENT_FEATURES,
      color: 'purple',
    },
  ];

  const handlePillarClick = (index) => {
    setExpandedPillar(expandedPillar === index ? null : index);
  };

  return (
    <Section id="solutions" background="light" padding="lg">
      <div ref={ref}>
        {/* Section Header */}
        <div
          className={classNames(
            'text-center max-w-3xl mx-auto mb-12',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* E3 Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-inglu-dark/5 mb-6">
            <span className="w-3 h-3 rounded-full bg-inglu-blue" />
            <span className="text-xl font-bold">+</span>
            <span className="w-3 h-3 rounded-full bg-inglu-orange" />
            <span className="text-xl font-bold">+</span>
            <span className="w-3 h-3 rounded-full bg-inglu-purple" />
            <span className="text-sm font-medium text-inglu-dark ml-2">= Experience</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-inglu-dark mb-4">
            {COPY.PILLARS_TITLE}
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            {COPY.PILLARS_SUBTITLE}
          </p>
          <p className="text-sm text-gray-500">
            {COPY.PILLARS_EXPLAINER}
          </p>
        </div>

        {/* Pillars Grid - Progressive disclosure */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <ExpandablePillarCard
              key={pillar.title}
              {...pillar}
              isExpanded={expandedPillar === index}
              onClick={() => handlePillarClick(index)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom visual - How 3Es connect */}
        <div
          className={classNames(
            'mt-12 p-6 md:p-8 rounded-2xl',
            'bg-gradient-to-br from-inglu-dark to-inglu-slate',
            'transition-all duration-700 delay-400',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Venn diagram */}
            <div className="relative w-40 h-40 flex-shrink-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-inglu-blue/30 border-2 border-inglu-blue" />
              <div className="absolute bottom-2 left-2 w-20 h-20 rounded-full bg-inglu-orange/30 border-2 border-inglu-orange" />
              <div className="absolute bottom-2 right-2 w-20 h-20 rounded-full bg-inglu-purple/30 border-2 border-inglu-purple" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-inglu-blue via-inglu-purple to-inglu-orange flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">E³</span>
              </div>
            </div>

            {/* Explanation */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-inglu-light mb-3">
                The Complete Growth Formula
              </h3>
              <p className="text-inglu-text-secondary leading-relaxed">
                INGLU's E³ Model creates a holistic pathway for youth development.{' '}
                <span className="text-inglu-blue font-medium">Education</span> builds knowledge,{' '}
                <span className="text-inglu-orange font-medium">Enhancement</span> creates opportunities,{' '}
                and <span className="text-inglu-purple font-medium">Entertainment</span> fosters connections.
                Together, they deliver complete <span className="text-inglu-accent font-medium">Experience</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ThreePillars;
