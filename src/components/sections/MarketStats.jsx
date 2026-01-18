import React from 'react';
import { classNames } from '../../utils/helpers';
import { STATS_DATA } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Section } from '../common';
import { StatCard } from '../ui';

/**
 * Community Stats section with animated counters
 */
const MarketStats = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Section id="stats" background="gradient" padding="lg">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-inglu-accent/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10">
        {/* Section Header */}
        <div
          className={classNames(
            'text-center max-w-2xl mx-auto mb-12',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-inglu-light mb-4">
            Our Growing Community
          </h2>
          <p className="text-lg text-inglu-text-secondary">
            Join thousands of students already experiencing the E3 ecosystem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((stat, index) => (
            <StatCard
              key={stat.label}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>

        {/* Community note */}
        <div
          className={classNames(
            'mt-12 text-center',
            'transition-all duration-700 delay-500',
            isInView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <p className="text-sm text-inglu-text-secondary/70">
            "Building Fluent Futures for 5000+ Learners and Counting"
          </p>
        </div>
      </div>
    </Section>
  );
};

export default MarketStats;
