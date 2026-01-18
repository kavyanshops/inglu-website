import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../utils/helpers';
import { Container } from '../components/common';
import { Button, Icon } from '../components/ui';

/**
 * Brand Page - Dedicated landing for brand/company persona
 * Focus on youth marketing, sponsorships, and partnerships
 */

const BrandBenefits = [
  {
    icon: 'userGroup',
    title: 'Access 5,000+ Youth',
    description: 'Connect directly with engaged college students across top universities in India.',
    highlight: 'High Reach',
  },
  {
    icon: 'target',
    title: 'Targeted Campaigns',
    description: 'Launch marketing campaigns tailored to the Gen-Z and millennial audience.',
    highlight: null,
  },
  {
    icon: 'calendar',
    title: 'Event Sponsorships',
    description: 'Sponsor exclusive college events, festivals, and community gatherings.',
    highlight: null,
  },
  {
    icon: 'briefcase',
    title: 'Talent Pipeline',
    description: 'Access pre-vetted student talent for internships and entry-level positions.',
    highlight: 'Popular',
  },
  {
    icon: 'globe',
    title: 'Brand Visibility',
    description: 'Get featured across our digital platforms and physical events.',
    highlight: null,
  },
  {
    icon: 'handshake',
    title: 'Campus Ambassadors',
    description: 'Build a network of brand ambassadors across 50+ college campuses.',
    highlight: null,
  },
];

const PartnerTypes = [
  {
    title: 'Event Sponsor',
    description: 'Sponsor college festivals, hackathons, and exclusive INGLU events.',
    icon: 'sparkles',
    cta: 'Become a Sponsor',
  },
  {
    title: 'Hiring Partner',
    description: 'Access our talent pool for internships and campus recruitment.',
    icon: 'briefcase',
    cta: 'Start Hiring',
  },
  {
    title: 'Marketing Partner',
    description: 'Run targeted campaigns and brand activations with our community.',
    icon: 'target',
    cta: 'Launch Campaign',
  },
];

const BrandPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 bg-gradient-to-br from-inglu-orange to-inglu-purple blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 bg-gradient-to-tr from-inglu-orange to-transparent blur-3xl" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-inglu-orange/10 border border-inglu-orange/20 mb-6">
              <Icon name="brand" size={16} className="text-inglu-orange" />
              <span className="text-sm text-inglu-orange font-medium">For Brands & Companies</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inglu-light leading-tight mb-6">
              Connect with India's{' '}
              <span className="text-inglu-orange">Largest Youth Community</span>
            </h1>

            <p className="text-lg md:text-xl text-inglu-text-secondary leading-relaxed mb-8 max-w-2xl">
              Partner with INGLU to reach 5,000+ engaged college students. Sponsor events, 
              recruit talent, and build authentic connections with Gen-Z.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                href="mailto:info@ingluglobal.in?subject=Brand Partnership Inquiry"
                icon={<Icon name="arrowRight" size={18} strokeWidth={2} />}
                iconPosition="right"
                className="bg-inglu-orange hover:bg-inglu-orange/90 shadow-lg shadow-inglu-orange/20"
              >
                Partner With Us
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#benefits"
                className="text-inglu-light border border-white/20 hover:bg-white/5"
              >
                View Benefits
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
              { number: '5,000+', label: 'Active Students', icon: 'userGroup' },
              { number: '50+', label: 'Partner Brands', icon: 'building' },
              { number: '100+', label: 'Events/Year', icon: 'calendar' },
              { number: '15+', label: 'Cities Covered', icon: 'globe' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-inglu-orange/10 flex items-center justify-center">
                  <Icon name={stat.icon} size={24} className="text-inglu-orange" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-inglu-light mb-1">{stat.number}</div>
                <div className="text-sm text-inglu-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Types */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              Ways to Partner
            </h2>
            <p className="text-inglu-text-secondary max-w-2xl mx-auto">
              Choose the partnership model that fits your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PartnerTypes.map((type) => (
              <div 
                key={type.title}
                className={classNames(
                  'p-8 rounded-2xl text-center',
                  'bg-white/5 border border-white/10',
                  'hover:bg-white/10 hover:border-inglu-orange/30 transition-all duration-300',
                  'group'
                )}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-inglu-orange/10 flex items-center justify-center mb-6 group-hover:bg-inglu-orange/20 transition-colors">
                  <Icon name={type.icon} size={32} className="text-inglu-orange" />
                </div>
                <h3 className="text-xl font-semibold text-inglu-light mb-3">{type.title}</h3>
                <p className="text-inglu-text-secondary text-sm leading-relaxed mb-6">{type.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  href="mailto:info@ingluglobal.in"
                  className="text-inglu-orange border-inglu-orange/30 hover:bg-inglu-orange/10"
                >
                  {type.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-16 md:py-24 bg-inglu-slate/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              Why Brands Choose INGLU
            </h2>
            <p className="text-inglu-text-secondary max-w-2xl mx-auto">
              Access, authenticity, and engagement with the youth demographic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BrandBenefits.map((benefit) => (
              <div 
                key={benefit.title}
                className={classNames(
                  'relative p-6 rounded-2xl',
                  'bg-white/5 border border-white/10',
                  'hover:bg-white/10 hover:border-inglu-orange/30 transition-all duration-300',
                  'group'
                )}
              >
                {benefit.highlight && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-inglu-orange/20 text-inglu-orange">
                    {benefit.highlight}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-inglu-orange/10 flex items-center justify-center mb-4 group-hover:bg-inglu-orange/20 transition-colors">
                  <Icon name={benefit.icon} size={24} className="text-inglu-orange" />
                </div>
                <h3 className="text-lg font-semibold text-inglu-light mb-2">{benefit.title}</h3>
                <p className="text-inglu-text-secondary text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Current Partners */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-inglu-light mb-4">
              Trusted by Leading Brands
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['Delhi University', 'Amity', 'VIT', 'SRM', 'BITS', 'Manipal'].map((brand) => (
              <div key={brand} className="text-inglu-light text-lg font-medium">{brand}</div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-inglu-text-secondary mb-8">
              Whether you want to sponsor events, recruit talent, or run marketing campaigns — 
              we're here to help you connect with India's youth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="mailto:info@ingluglobal.in?subject=Brand Partnership Inquiry"
                icon={<Icon name="arrowRight" size={18} />}
                iconPosition="right"
                className="bg-inglu-orange hover:bg-inglu-orange/90"
              >
                Get in Touch
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="tel:+917827808413"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BrandPage;
