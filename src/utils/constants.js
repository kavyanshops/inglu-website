/**
 * INGLU Website Constants
 * Based on UX Analysis Design Blueprint
 * Centralized configuration for colors, breakpoints, and copy
 */

// ===== COLORS =====
export const COLORS = {
  // Core brand colors
  INGLU_DARK: '#0F172A',
  INGLU_SLATE: '#1E293B',
  WHITE: '#FFFFFF',
  
  // 3E Color coding (as per UX blueprint)
  EDUCATION_BLUE: '#2563EB',
  EDUCATION_LIGHT: '#EFF6FF',
  ENHANCEMENT_ORANGE: '#F97316',
  ENHANCEMENT_LIGHT: '#FFF7ED',
  ENTERTAINMENT_PURPLE: '#A855F7',
  ENTERTAINMENT_LIGHT: '#FAF5FF',
  
  // Aliases for backward compatibility
  INGLU_BLUE: '#2563EB',
  INGLU_ORANGE: '#F97316',
  INGLU_PURPLE: '#A855F7',
  
  // Neutrals
  INGLU_LIGHT: '#F1F5F9',
  INGLU_TEXT_SECONDARY: '#6B7280',
  INGLU_ACCENT: '#38BDF8',
  INGLU_BORDER: 'rgba(59, 130, 246, 0.1)',
  SURFACE: '#F9FAFB',
  TEXT_DARK: '#1F2937',
};

// ===== BREAKPOINTS =====
export const BREAKPOINTS = {
  MOBILE: 375,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1440,
};

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Membership', href: '#membership' },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
];

// ===== TRUST STATS (Above fold - as per UX blueprint) =====
export const TRUST_STATS = [
  { number: '5,000+', label: 'Learners', icon: 'academicCap', color: 'blue' },
  { number: '100+', label: 'Events', icon: 'calendar', color: 'purple' },
  { number: '50+', label: 'Partners', icon: 'building', color: 'orange' },
];

// ===== PARTNER BRANDS (Trust signals) =====
export const PARTNER_BRANDS = [
  'Delhi University',
  'Amity',
  'VIT',
  'SRM',
  'BITS',
];

// ===== PERSONA PATHS (UX Blueprint - Persona routing) =====
export const PERSONA_PATHS = {
  student: {
    title: "I'm a Student",
    icon: 'student',
    tagline: 'Internships, skills & events',
    cta: 'Explore Benefits',
    href: '/student',
    color: 'blue',
  },
  brand: {
    title: "I'm a Brand",
    icon: 'brand',
    tagline: 'Reach youth, sponsor events',
    cta: 'Partner With Us',
    href: '/brand',
    color: 'orange',
  },
  organizer: {
    title: "I'm an Organizer",
    icon: 'organizer',
    tagline: 'Volunteers & production',
    cta: 'Organize Events',
    href: '/organizer',
    color: 'purple',
  },
};

// ===== COPY / TEXT CONTENT =====
export const COPY = {
  // Hero Section - Clear value prop (UX Blueprint)
  HERO_HEADLINE: 'The Fastest Growing',
  HERO_HEADLINE_ACCENT: 'Global Youth Community',
  HERO_SUBHEADLINE: 'Experience holistic growth through our E3 Model — Education + Enhancement + Entertainment. Join 5,000+ students already building their future.',
  HERO_CTA_PRIMARY: 'Start Your Journey',
  HERO_CTA_SECONDARY: 'See How It Works',
  HERO_QUESTION: 'What are you looking for?',
  
  // 3E Section - Progressive disclosure
  PILLARS_TITLE: 'The E3 Model',
  PILLARS_SUBTITLE: 'Experience = Education + Enhancement + Entertainment',
  PILLARS_EXPLAINER: 'Tap each pillar to discover how INGLU creates complete growth for students.',
  
  // Education Pillar
  EDUCATION_TITLE: 'Education',
  EDUCATION_TAGLINE: 'Learn from the best',
  EDUCATION_DESCRIPTION: 'Premium courses, certified workshops, and skill development programs designed for the modern youth.',
  EDUCATION_FEATURES: [
    'Premium certified courses',
    'Industry expert workshops',
    'CUET preparation resources',
    'Skill development programs',
  ],
  
  // Enhancement Pillar  
  ENHANCEMENT_TITLE: 'Enhancement',
  ENHANCEMENT_TAGLINE: 'Build real-world experience',
  ENHANCEMENT_DESCRIPTION: 'Internships, earning opportunities, and networking that actually builds your career.',
  ENHANCEMENT_FEATURES: [
    'First internship program',
    'Earning opportunities',
    'Unconventional internships',
    'Portfolio building',
  ],
  
  // Entertainment Pillar
  ENTERTAINMENT_TITLE: 'Entertainment',
  ENTERTAINMENT_TAGLINE: 'Connect & have fun',
  ENTERTAINMENT_DESCRIPTION: 'Exclusive events, meetups, and experiences that create memories and connections.',
  ENTERTAINMENT_FEATURES: [
    'Exclusive parties & events',
    'Meetups and get-togethers',
    'Discounts at cafes & clubs',
    'Chance to meet celebs',
  ],
  
  // Membership Section
  MEMBERSHIP_TITLE: 'INGLU Membership',
  MEMBERSHIP_SUBTITLE: 'Join the Biggest Youth Army. Premium experiences at student-friendly prices.',
  
  // Membership Benefits (from INGLU website)
  MEMBERSHIP_BENEFITS: [
    { icon: 'briefcase', title: 'First Internship Program', description: 'Get your first real internship experience' },
    { icon: 'academicCap', title: 'Exclusive Workshops', description: 'Members-only skill development sessions' },
    { icon: 'ticket', title: 'Free Event Passes', description: 'Access to premium events for free' },
    { icon: 'education', title: 'Premium Courses', description: 'Certified courses from industry experts' },
    { icon: 'sparkles', title: 'Exclusive Parties', description: 'Networking events and celebrations' },
    { icon: 'tag', title: 'Brand Discounts', description: 'Special prices at your favorite brands' },
    { icon: 'currencyDollar', title: 'Earning Opportunities', description: 'Flexible ways to earn while you learn' },
    { icon: 'coffee', title: 'Cafe & Club Discounts', description: 'Save at popular hangout spots' },
  ],
  
  // How It Works Section
  HOW_IT_WORKS_TITLE: 'Get Started in 3 Steps',
  HOW_IT_WORKS_SUBTITLE: 'From signup to success in minutes',
  
  // Testimonials Section
  TESTIMONIALS_TITLE: 'Loved by 5,000+ Students',
  TESTIMONIALS_SUBTITLE: 'See what our community has to say',
  
  // CTA Section - Simplified (UX Blueprint)
  CTA_TITLE: 'Ready to Join the Movement?',
  CTA_SUBTITLE: 'Choose your path and start experiencing Education, Enhancement & Entertainment',
  
  // Footer
  FOOTER_COPYRIGHT: '© 2026 INGLU Global. All rights reserved.',
  FOOTER_TAGLINE: 'The Fastest Growing Global Youth Community',
  FOOTER_ADDRESS: '82, SatyaNiketan, First Floor, New Delhi - 110021',
  FOOTER_EMAIL: 'info@ingluglobal.in',
  FOOTER_PHONE: '+91 7827808413',
};

// ===== MVP FEATURES =====
export const MVP_FEATURES = [
  {
    icon: 'briefcase',
    title: 'First Internship',
    description: 'Get your first real-world internship with partner companies.',
    accentColor: 'orange',
  },
  {
    icon: 'academicCap',
    title: 'Premium Workshops',
    description: 'Exclusive skill sessions led by industry experts.',
    accentColor: 'blue',
  },
  {
    icon: 'ticket',
    title: 'Free Event Passes',
    description: 'Access to exclusive parties and networking events.',
    accentColor: 'purple',
  },
  {
    icon: 'currencyDollar',
    title: 'Earning Opportunities',
    description: 'Flexible ways to earn while you learn.',
    accentColor: 'orange',
  },
  {
    icon: 'userGroup',
    title: 'Networking',
    description: 'Build your professional network with peers.',
    accentColor: 'blue',
  },
  {
    icon: 'tag',
    title: 'Brand Discounts',
    description: 'Special prices at cafes, clubs, and brands.',
    accentColor: 'purple',
  },
];

// ===== STATS DATA =====
export const STATS_DATA = [
  { number: '5,000+', label: 'Students Connected', icon: 'userGroup' },
  { number: '100+', label: 'Events Organized', icon: 'calendar' },
  { number: '50+', label: 'Brand Partners', icon: 'building' },
  { number: '15+', label: 'Cities Reached', icon: 'globe' },
];

// ===== HOW IT WORKS STEPS =====
export const STEPS_DATA = [
  {
    number: 1,
    icon: 'phone',
    title: 'Join INGLU',
    description: 'Sign up for membership in less than 2 minutes. Start your growth journey today.',
    color: 'blue',
  },
  {
    number: 2,
    icon: 'target',
    title: 'Choose Your Path',
    description: 'Select what interests you — Education, Enhancement, or Entertainment. Or all three!',
    color: 'orange',
  },
  {
    number: 3,
    icon: 'rocket',
    title: 'Start Growing',
    description: 'Access internships, workshops, events, and exclusive community benefits instantly.',
    color: 'purple',
  },
];

// ===== TESTIMONIALS DATA =====
export const TESTIMONIALS_DATA = [
  {
    quote: "INGLU helped me get my first internship when no one else would give me a chance. The community support is amazing!",
    author: 'Priya Sharma',
    role: 'Student, Delhi University',
    avatar: null,
    rating: 5,
  },
  {
    quote: "The networking events are incredible. I've made connections that have genuinely helped my career.",
    author: 'Rahul Verma',
    role: 'Marketing Intern, Tech Startup',
    avatar: null,
    rating: 5,
  },
  {
    quote: "For just ₹49/month, the value is unbelievable. Premium workshops, free events, and real opportunities.",
    author: 'Ananya Singh',
    role: 'BBA Student, Amity University',
    avatar: null,
    rating: 5,
  },
];

// ===== FOOTER LINKS =====
export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Membership', href: '/membership' },
    { label: 'Careers', href: '/careers' },
    { label: 'Shop', href: '/shop' },
    { label: 'Blog', href: '/blog' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Support', href: '/support' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/inglu_global/', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://in.linkedin.com/company/inglu', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://www.youtube.com/c/INGLUGLOBAL', icon: 'youtube' },
    { label: 'Facebook', href: 'https://www.facebook.com/ingluglobal/', icon: 'facebook' },
  ],
};
