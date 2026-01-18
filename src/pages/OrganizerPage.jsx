import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../utils/helpers';
import { Container } from '../components/common';
import { Button, Icon } from '../components/ui';

/**
 * Organizer Page - Dedicated landing for event organizer persona
 * Focus on event production, volunteers, and community support
 */

const OrganizerBenefits = [
  {
    icon: 'userGroup',
    title: 'Volunteer Network',
    description: 'Access trained volunteers for your events from our pool of 5,000+ students.',
    highlight: 'Popular',
  },
  {
    icon: 'sparkles',
    title: 'Production Support',
    description: 'Professional event production assistance including AV, staging, and logistics.',
    highlight: null,
  },
  {
    icon: 'building',
    title: 'Brand Connections',
    description: 'Connect with sponsor brands looking to support college events.',
    highlight: null,
  },
  {
    icon: 'target',
    title: 'Marketing Support',
    description: 'Promote your event across our network for maximum reach.',
    highlight: null,
  },
  {
    icon: 'certificate',
    title: 'Event Management',
    description: 'End-to-end event planning and execution support.',
    highlight: 'Full Service',
  },
  {
    icon: 'globe',
    title: 'Multi-City Reach',
    description: 'Organize events across 15+ cities with local community support.',
    highlight: null,
  },
];

const EventTypes = [
  {
    title: 'College Festivals',
    description: 'Annual fests, cultural nights, and tech fests with full production support.',
    icon: 'sparkles',
  },
  {
    title: 'Corporate Events',
    description: 'Product launches, campus drives, and brand activations.',
    icon: 'building',
  },
  {
    title: 'Community Meetups',
    description: 'Networking events, workshops, and social gatherings.',
    icon: 'userGroup',
  },
];

const OrganizerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 bg-gradient-to-br from-inglu-purple to-inglu-blue blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 bg-gradient-to-tr from-inglu-purple to-transparent blur-3xl" />
        </div>

        <Container className="relative z-10">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-inglu-text-secondary hover:text-inglu-light transition-colors mb-8"
          >
            <Icon name="chevronRight" size={16} className="rotate-180" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-inglu-purple/10 border border-inglu-purple/20 mb-6">
              <Icon name="organizer" size={16} className="text-inglu-purple" />
              <span className="text-sm text-inglu-purple font-medium">For Event Organizers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inglu-light leading-tight mb-6">
              Create{' '}
              <span className="text-inglu-purple">Unforgettable Events</span>{' '}
              with INGLU
            </h1>

            <p className="text-lg md:text-xl text-inglu-text-secondary leading-relaxed mb-8 max-w-2xl">
              From volunteers to production, sponsorships to marketing — 
              we provide everything you need to make your events spectacular.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                href="mailto:info@ingluglobal.in?subject=Event Organizer Partnership"
                icon={<Icon name="arrowRight" size={18} strokeWidth={2} />}
                iconPosition="right"
                className="bg-inglu-purple hover:bg-inglu-purple/90 shadow-lg shadow-inglu-purple/20"
              >
                Start Planning
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#services"
                className="text-inglu-light border border-white/20 hover:bg-white/5"
              >
                Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-inglu-slate/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '100+', label: 'Events Organized', icon: 'calendar' },
              { number: '5,000+', label: 'Volunteers', icon: 'userGroup' },
              { number: '50+', label: 'Brand Sponsors', icon: 'building' },
              { number: '15+', label: 'Cities', icon: 'globe' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-inglu-purple/10 flex items-center justify-center">
                  <Icon name={stat.icon} size={24} className="text-inglu-purple" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-inglu-light mb-1">{stat.number}</div>
                <div className="text-sm text-inglu-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              Events We Support
            </h2>
            <p className="text-inglu-text-secondary max-w-2xl mx-auto">
              From intimate gatherings to large-scale festivals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EventTypes.map((type) => (
              <div 
                key={type.title}
                className={classNames(
                  'p-8 rounded-2xl text-center',
                  'bg-white/5 border border-white/10',
                  'hover:bg-white/10 hover:border-inglu-purple/30 transition-all duration-300',
                  'group'
                )}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-inglu-purple/10 flex items-center justify-center mb-6 group-hover:bg-inglu-purple/20 transition-colors">
                  <Icon name={type.icon} size={32} className="text-inglu-purple" />
                </div>
                <h3 className="text-xl font-semibold text-inglu-light mb-3">{type.title}</h3>
                <p className="text-inglu-text-secondary text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services/Benefits Grid */}
      <section id="services" className="py-16 md:py-24 bg-inglu-slate/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              What We Offer
            </h2>
            <p className="text-inglu-text-secondary max-w-2xl mx-auto">
              Complete event support from planning to execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OrganizerBenefits.map((benefit) => (
              <div 
                key={benefit.title}
                className={classNames(
                  'relative p-6 rounded-2xl',
                  'bg-white/5 border border-white/10',
                  'hover:bg-white/10 hover:border-inglu-purple/30 transition-all duration-300',
                  'group'
                )}
              >
                {benefit.highlight && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-inglu-purple/20 text-inglu-purple">
                    {benefit.highlight}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-inglu-purple/10 flex items-center justify-center mb-4 group-hover:bg-inglu-purple/20 transition-colors">
                  <Icon name={benefit.icon} size={24} className="text-inglu-purple" />
                </div>
                <h3 className="text-lg font-semibold text-inglu-light mb-2">{benefit.title}</h3>
                <p className="text-inglu-text-secondary text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-inglu-light mb-4">
              How It Works
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { step: 1, title: 'Tell Us About Your Event', description: 'Share your vision, date, and requirements.' },
              { step: 2, title: 'Get a Custom Plan', description: 'We create a tailored support package for your event.' },
              { step: 3, title: 'Execute & Celebrate', description: 'Our team handles logistics while you focus on your guests.' },
            ].map((item, index) => (
              <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-inglu-purple flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="w-0.5 h-12 bg-inglu-purple/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-inglu-light mb-1">{item.title}</h3>
                  <p className="text-inglu-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-inglu-slate/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              Ready to Plan Your Next Event?
            </h2>
            <p className="text-inglu-text-secondary mb-8">
              Let's make it memorable. Get in touch and tell us about your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="mailto:info@ingluglobal.in?subject=Event Organizer Partnership"
                icon={<Icon name="calendar" size={18} />}
                iconPosition="left"
                className="bg-inglu-purple hover:bg-inglu-purple/90"
              >
                Plan Your Event
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="tel:+917827808413"
              >
                Call: +91 7827808413
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default OrganizerPage;
