import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { classNames } from '../../utils/helpers';
import { COPY, TRUST_STATS, PARTNER_BRANDS, PERSONA_PATHS } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Container } from '../common';
import { Button, Icon } from '../ui';

/**
 * Trust Stats Bar - Above the fold trust signals (UX Blueprint)
 * Uses professional SVG icons instead of emojis
 */
const TrustStats = ({ className }) => {
  const colorClasses = {
    blue: 'bg-inglu-blue/10 text-inglu-blue',
    orange: 'bg-inglu-orange/10 text-inglu-orange',
    purple: 'bg-inglu-purple/10 text-inglu-purple',
  };

  return (
    <div className={classNames('flex flex-wrap justify-center gap-6 md:gap-10', className)}>
      {TRUST_STATS.map((stat) => (
        <div key={stat.label} className="flex items-center gap-3 group">
          <div className={classNames(
            'w-10 h-10 rounded-xl flex items-center justify-center',
            'transition-transform duration-300 group-hover:scale-110',
            colorClasses[stat.color] || 'bg-inglu-blue/10 text-inglu-blue'
          )}>
            <Icon name={stat.icon} size={20} strokeWidth={2} />
          </div>
          <div className="text-left">
            <div className="text-lg md:text-xl font-bold text-inglu-light">
              {stat.number}
            </div>
            <div className="text-xs text-inglu-text-secondary">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

TrustStats.propTypes = {
  className: PropTypes.string,
};

/**
 * Partner Logos Strip - Trust signals
 */
const PartnerLogos = ({ className }) => {
  return (
    <div className={classNames('flex flex-wrap justify-center items-center gap-4 md:gap-8', className)}>
      <span className="text-xs text-inglu-text-secondary/70">Trusted by:</span>
      {PARTNER_BRANDS.map((brand) => (
        <div
          key={brand}
          className="text-inglu-light/50 text-sm font-medium hover:text-inglu-light/80 transition-colors"
        >
          {brand}
        </div>
      ))}
    </div>
  );
};

PartnerLogos.propTypes = {
  className: PropTypes.string,
};

/**
 * Persona Button - For routing different user types
 * Uses professional SVG icons and navigates to dedicated pages
 */
const PersonaButton = ({ persona, onClick }) => {
  const colorConfig = {
    blue: {
      border: 'border-inglu-blue/30 hover:border-inglu-blue',
      bg: 'hover:bg-inglu-blue/5',
      icon: 'bg-inglu-blue/10 text-inglu-blue group-hover:bg-inglu-blue group-hover:text-white',
      text: 'text-inglu-blue',
    },
    orange: {
      border: 'border-inglu-orange/30 hover:border-inglu-orange',
      bg: 'hover:bg-inglu-orange/5',
      icon: 'bg-inglu-orange/10 text-inglu-orange group-hover:bg-inglu-orange group-hover:text-white',
      text: 'text-inglu-orange',
    },
    purple: {
      border: 'border-inglu-purple/30 hover:border-inglu-purple',
      bg: 'hover:bg-inglu-purple/5',
      icon: 'bg-inglu-purple/10 text-inglu-purple group-hover:bg-inglu-purple group-hover:text-white',
      text: 'text-inglu-purple',
    },
  };

  const config = colorConfig[persona.color];

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'group flex flex-col items-center gap-3 p-5 md:p-6 rounded-2xl',
        'border-2 transition-all duration-300',
        'min-w-[150px] md:min-w-[180px]',
        'hover:scale-[1.02] active:scale-[0.98]',
        'backdrop-blur-sm bg-white/5',
        config.border,
        config.bg
      )}
    >
      {/* Icon with animated background */}
      <div className={classNames(
        'w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center',
        'transition-all duration-300',
        config.icon
      )}>
        <Icon name={persona.icon} size={28} strokeWidth={1.5} />
      </div>
      
      <div className="text-center">
        <span className="font-semibold text-inglu-light text-sm md:text-base block mb-1">
          {persona.title}
        </span>
        <span className="text-xs text-inglu-text-secondary leading-tight">
          {persona.tagline}
        </span>
      </div>

      {/* Hover arrow indicator */}
      <div className={classNames(
        'flex items-center gap-1 text-xs font-medium',
        'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
        config.text
      )}>
        <span>Explore</span>
        <Icon name="arrowRight" size={12} strokeWidth={2.5} />
      </div>
    </button>
  );
};

PersonaButton.propTypes = {
  persona: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * 3E Visual Indicator - Color coded pills with icons
 */
const ThreeEIndicator = ({ className }) => {
  const pillars = [
    { name: 'Education', color: 'bg-inglu-blue' },
    { name: 'Enhancement', color: 'bg-inglu-orange' },
    { name: 'Entertainment', color: 'bg-inglu-purple' },
  ];

  return (
    <div className={classNames('flex items-center justify-center gap-2 md:gap-4 flex-wrap', className)}>
      {pillars.map((pillar, index) => (
        <React.Fragment key={pillar.name}>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className={classNames('w-2 h-2 rounded-full', pillar.color, 'animate-pulse')} 
                  style={{ animationDelay: `${index * 200}ms` }} />
            <span className="text-xs md:text-sm text-inglu-light/80 font-medium">{pillar.name}</span>
          </div>
          {index < pillars.length - 1 && (
            <span className="text-inglu-text-secondary/50 text-xs">+</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

ThreeEIndicator.propTypes = {
  className: PropTypes.string,
};

/**
 * Hero section component with persona routing and trust signals
 * Implements UX Blueprint recommendations for clarity
 * NO PRICING shown on initial view
 */
const Hero = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const navigate = useNavigate();

  const handlePersonaClick = (key, persona) => {
    // Navigate to persona-specific page
    navigate(persona.href);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div
          className={classNames(
            'absolute -top-20 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px]',
            'rounded-full opacity-15',
            'bg-gradient-to-br from-inglu-blue to-inglu-purple',
            'blur-3xl animate-float'
          )}
        />
        <div
          className={classNames(
            'absolute -bottom-20 -left-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px]',
            'rounded-full opacity-10',
            'bg-gradient-to-tr from-inglu-orange to-inglu-purple',
            'blur-3xl animate-float'
          )}
          style={{ animationDelay: '2s' }}
        />
        <div
          className={classNames(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-[400px] md:w-[600px] h-[400px] md:h-[600px]',
            'rounded-full opacity-5',
            'bg-gradient-radial from-white to-transparent',
            'blur-3xl'
          )}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Main content */}
      <Container className="relative z-10 pt-24 pb-8 md:pt-32 md:pb-12">
        <div
          ref={ref}
          className={classNames(
            'text-center max-w-4xl mx-auto',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* E3 Model badge */}
          <div
            className={classNames(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full',
              'bg-white/5 border border-white/10 backdrop-blur-sm',
              'mb-6'
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-sm text-inglu-light/90 font-medium">
              E3 Ecosystem
            </span>
          </div>

          {/* Main Headline - Clear, immediate understanding */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inglu-light leading-tight mb-5">
            {COPY.HERO_HEADLINE}{' '}
            <span className="bg-gradient-to-r from-inglu-blue via-inglu-purple to-inglu-orange bg-clip-text text-transparent">
              {COPY.HERO_HEADLINE_ACCENT}
            </span>
          </h1>

          {/* Subheadline - Value prop */}
          <p className="text-base md:text-lg text-inglu-text-secondary leading-relaxed mb-6 max-w-2xl mx-auto">
            {COPY.HERO_SUBHEADLINE}
          </p>

          {/* 3E Visual indicator */}
          <ThreeEIndicator className="mb-10" />

          {/* Persona Question - UX Blueprint key feature */}
          <div
            className={classNames(
              'mb-10',
              'transition-all duration-700 delay-200',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <p className="text-lg md:text-xl text-inglu-light font-medium mb-6">
              {COPY.HERO_QUESTION}
            </p>

            {/* Persona routing buttons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              {Object.entries(PERSONA_PATHS).map(([key, persona]) => (
                <PersonaButton
                  key={key}
                  persona={persona}
                  onClick={() => handlePersonaClick(key, persona)}
                />
              ))}
            </div>
          </div>

          {/* Primary CTA - No pricing shown */}
          <div
            className={classNames(
              'flex flex-col sm:flex-row items-center justify-center gap-4',
              'transition-all duration-700 delay-300',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <Button
              variant="primary"
              size="lg"
              href="#membership"
              icon={<Icon name="arrowRight" size={18} strokeWidth={2} />}
              iconPosition="right"
              className="w-full sm:w-auto min-w-[200px] shadow-lg shadow-inglu-blue/20"
            >
              {COPY.HERO_CTA_PRIMARY}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#how-it-works"
              icon={<Icon name="play" size={16} strokeWidth={2} />}
              iconPosition="left"
              className="w-full sm:w-auto text-inglu-light border border-white/20 hover:bg-white/5 hover:border-white/30"
            >
              {COPY.HERO_CTA_SECONDARY}
            </Button>
          </div>
        </div>
      </Container>

      {/* Trust signals - Above fold (UX Blueprint) */}
      <div className="relative z-10 mt-auto">
        <Container>
          <div
            className={classNames(
              'py-6 md:py-8 border-t border-white/5',
              'transition-all duration-700 delay-500',
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {/* Stats */}
            <TrustStats className="mb-5" />
            
            {/* Partner logos */}
            <PartnerLogos />
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex">
        <div className="flex flex-col items-center gap-1 text-inglu-text-secondary/40 animate-bounce">
          <span className="text-xs">Scroll to explore</span>
          <Icon name="chevronDown" size={16} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
