import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../utils/helpers';
import { Container } from '../components/common';
import { Button, Icon } from '../components/ui';

/**
 * Student Page - Dedicated landing for student persona
 * Focus on Education, Internships, and Growth
 */

const StudentBenefits = [
  {
    icon: 'briefcase',
    title: 'First Internship Program',
    description: 'Get real-world experience with our partner companies. Perfect for freshers.',
    highlight: 'Most Popular',
  },
  {
    icon: 'academicCap',
    title: 'Premium Workshops',
    description: 'Skill development sessions led by industry experts and successful entrepreneurs.',
    highlight: null,
  },
  {
    icon: 'ticket',
    title: 'Free Event Passes',
    description: 'Access exclusive networking events, parties, and cultural festivals.',
    highlight: null,
  },
  {
    icon: 'certificate',
    title: 'Certified Courses',
    description: 'Industry-recognized certifications to boost your resume.',
    highlight: null,
  },
  {
    icon: 'currencyDollar',
    title: 'Earning Opportunities',
    description: 'Part-time gigs and projects that fit your schedule.',
    highlight: 'New',
  },
  {
    icon: 'userGroup',
    title: 'Peer Networking',
    description: 'Connect with 5,000+ students across top colleges in India.',
    highlight: null,
  },
];

const Testimonials = [
  {
    quote: "INGLU helped me land my first internship at a top startup. The community support is unmatched!",
    author: 'Priya Sharma',
    college: 'Delhi University',
    role: 'Marketing Intern',
  },
  {
    quote: "The workshops are incredible. I learned more in 2 months than a whole semester in college.",
    author: 'Rahul Verma',
    college: 'Amity University',
    role: 'Product Intern',
  },
];

const StudentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 bg-gradient-to-br from-inglu-blue to-inglu-purple blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 bg-gradient-to-tr from-inglu-blue to-transparent blur-3xl" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-inglu-blue/10 border border-inglu-blue/20 mb-6">
              <Icon name="student" size={16} className="text-inglu-blue" />
              <span className="text-sm text-inglu-blue font-medium">For Students</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-inglu-light leading-tight mb-6">
              Kickstart Your Career with{' '}
              <span className="text-inglu-blue">Real Opportunities</span>
            </h1>

            <p className="text-lg md:text-xl text-inglu-text-secondary leading-relaxed mb-8 max-w-2xl">
              Join 5,000+ students who are building their careers through internships, skill development, 
              and exclusive networking opportunities with INGLU.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                href="https://ingluglobal.in/membership"
                icon={<Icon name="arrowRight" size={18} strokeWidth={2} />}
                iconPosition="right"
                className="shadow-lg shadow-inglu-blue/20"
              >
                Become a Member
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#benefits"
                className="text-inglu-light border border-white/20 hover:bg-white/5"
              >
                See All Benefits
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
              { number: '5,000+', label: 'Students', icon: 'userGroup' },
              { number: '500+', label: 'Internships Placed', icon: 'briefcase' },
              { number: '100+', label: 'Partner Companies', icon: 'building' },
              { number: '50+', label: 'Premium Workshops', icon: 'academicCap' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-inglu-blue/10 flex items-center justify-center">
                  <Icon name={stat.icon} size={24} className="text-inglu-blue" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-inglu-light mb-1">{stat.number}</div>
                <div className="text-sm text-inglu-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              What You Get as a Member
            </h2>
            <p className="text-inglu-text-secondary max-w-2xl mx-auto">
              Everything you need to build skills, gain experience, and launch your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {StudentBenefits.map((benefit) => (
              <div 
                key={benefit.title}
                className={classNames(
                  'relative p-6 rounded-2xl',
                  'bg-white/5 border border-white/10',
                  'hover:bg-white/10 hover:border-inglu-blue/30 transition-all duration-300',
                  'group'
                )}
              >
                {benefit.highlight && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-inglu-blue/20 text-inglu-blue">
                    {benefit.highlight}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-inglu-blue/10 flex items-center justify-center mb-4 group-hover:bg-inglu-blue/20 transition-colors">
                  <Icon name={benefit.icon} size={24} className="text-inglu-blue" />
                </div>
                <h3 className="text-lg font-semibold text-inglu-light mb-2">{benefit.title}</h3>
                <p className="text-inglu-text-secondary text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-inglu-slate/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-inglu-light mb-4">
              Success Stories
            </h2>
            <p className="text-inglu-text-secondary">
              Hear from students who transformed their careers with INGLU
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {Testimonials.map((testimonial) => (
              <div 
                key={testimonial.author}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-inglu-light mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-inglu-light">{testimonial.author}</div>
                  <div className="text-sm text-inglu-text-secondary">
                    {testimonial.college} • {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-inglu-light mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-inglu-text-secondary mb-8">
              Join thousands of students who are already building their future with INGLU. 
              Affordable membership, unlimited opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="https://ingluglobal.in/membership"
                icon={<Icon name="rocket" size={18} />}
                iconPosition="left"
              >
                Get Membership
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="https://ingluglobal.in"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default StudentPage;
