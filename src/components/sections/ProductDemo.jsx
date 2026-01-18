import React from 'react';
import { classNames } from '../../utils/helpers';
import { COPY } from '../../utils/constants';
import { useInView } from '../../hooks';
import { Section } from '../common';
import { Button, Icon } from '../ui';

/**
 * Product Demo section with platform preview
 * Now uses professional SVG icons
 */
const ProductDemo = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const demoCallouts = [
    { icon: 'academicCap', text: 'Student discovers internship', color: 'blue' },
    { icon: 'building', text: 'Company reviews candidates', color: 'slate' },
    { icon: 'calendar', text: 'Event RSVP workflow', color: 'purple' },
  ];

  return (
    <Section id="demo" background="light" padding="lg">
      <div ref={ref}>
        {/* Section Header */}
        <div
          className={classNames(
            'text-center max-w-3xl mx-auto mb-12',
            'transition-all duration-700',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="heading-h2 text-inglu-dark mb-4">
            {COPY.DEMO_TITLE}
          </h2>
          <p className="body-lg text-inglu-text-secondary">
            {COPY.DEMO_SUBTITLE}
          </p>
        </div>

        {/* Demo Screenshot */}
        <div
          className={classNames(
            'relative max-w-5xl mx-auto mb-12',
            'transition-all duration-700 delay-200',
            isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          )}
        >
          {/* Browser frame */}
          <div className="bg-inglu-slate rounded-xl shadow-card-lg overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-inglu-dark border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-md mx-auto px-4 py-1.5 bg-white/10 rounded-lg text-inglu-text-secondary text-sm text-center">
                  app.inglu.com
                </div>
              </div>
            </div>

            {/* Screenshot placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
              {/* Dashboard mockup */}
              <div className="absolute inset-4 md:inset-8 grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-3 hidden md:block bg-white rounded-lg shadow-sm p-4">
                  <div className="w-20 h-6 bg-inglu-blue/20 rounded mb-6" />
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gray-200 rounded" />
                        <div className="w-16 h-3 bg-gray-200 rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main content */}
                <div className="col-span-12 md:col-span-9 space-y-4">
                  {/* Header bar */}
                  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div className="w-40 h-6 bg-inglu-dark/10 rounded" />
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-inglu-blue/20 rounded-full" />
                      <div className="w-8 h-8 bg-inglu-orange/20 rounded-full" />
                    </div>
                  </div>

                  {/* Content cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Education card */}
                    <div className="bg-white rounded-lg shadow-sm p-4 border-t-4 border-inglu-blue">
                      <div className="w-8 h-8 rounded-lg bg-inglu-blue/10 flex items-center justify-center mb-2">
                        <Icon name="education" size={20} className="text-inglu-blue" />
                      </div>
                      <div className="w-24 h-4 bg-inglu-blue/20 rounded mb-2" />
                      <div className="w-full h-2 bg-gray-100 rounded" />
                      <div className="w-3/4 h-2 bg-gray-100 rounded mt-2" />
                    </div>

                    {/* Enhancement card */}
                    <div className="bg-white rounded-lg shadow-sm p-4 border-t-4 border-inglu-orange">
                      <div className="w-8 h-8 rounded-lg bg-inglu-orange/10 flex items-center justify-center mb-2">
                        <Icon name="enhancement" size={20} className="text-inglu-orange" />
                      </div>
                      <div className="w-24 h-4 bg-inglu-orange/20 rounded mb-2" />
                      <div className="w-full h-2 bg-gray-100 rounded" />
                      <div className="w-3/4 h-2 bg-gray-100 rounded mt-2" />
                    </div>

                    {/* Entertainment card */}
                    <div className="bg-white rounded-lg shadow-sm p-4 border-t-4 border-inglu-purple">
                      <div className="w-8 h-8 rounded-lg bg-inglu-purple/10 flex items-center justify-center mb-2">
                        <Icon name="entertainment" size={20} className="text-inglu-purple" />
                      </div>
                      <div className="w-24 h-4 bg-inglu-purple/20 rounded mb-2" />
                      <div className="w-full h-2 bg-gray-100 rounded" />
                      <div className="w-3/4 h-2 bg-gray-100 rounded mt-2" />
                    </div>
                  </div>

                  {/* Activity feed placeholder */}
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="w-32 h-5 bg-gray-200 rounded mb-4" />
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full" />
                          <div className="flex-1">
                            <div className="w-32 h-3 bg-gray-200 rounded mb-1" />
                            <div className="w-48 h-2 bg-gray-100 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating accent elements */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-inglu-blue/20 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-inglu-purple/20 blur-2xl"
            aria-hidden="true"
          />
        </div>

        {/* Demo Callouts */}
        <div
          className={classNames(
            'flex flex-wrap justify-center gap-6 lg:gap-10',
            'transition-all duration-700 delay-400',
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {demoCallouts.map((callout, index) => {
            const colorMap = {
              blue: 'bg-inglu-blue/10 text-inglu-blue',
              slate: 'bg-inglu-slate/10 text-inglu-slate',
              purple: 'bg-inglu-purple/10 text-inglu-purple',
            };
            
            return (
              <div
                key={index}
                className={classNames(
                  'flex items-center gap-3 px-6 py-3',
                  'bg-gray-50 rounded-full border border-gray-200',
                  'transition-all duration-200',
                  'hover:bg-gray-100 hover:shadow-sm'
                )}
              >
                <div className={classNames(
                  'w-8 h-8 rounded-full flex items-center justify-center',
                  colorMap[callout.color] || colorMap.blue
                )}>
                  <Icon name={callout.icon} size={16} />
                </div>
                <span className="text-body-sm text-inglu-dark font-medium">
                  {callout.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            href="#signup"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
          >
            Request Live Demo
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ProductDemo;
