import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation, Hero } from './components/sections';

// Lazy load sections below the fold for better performance
const ThreePillars = lazy(() => import('./components/sections/ThreePillars'));
const MVPFeatures = lazy(() => import('./components/sections/MVPFeatures'));
const MarketStats = lazy(() => import('./components/sections/MarketStats'));
const HowItWorks = lazy(() => import('./components/sections/HowItWorks'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const CTASection = lazy(() => import('./components/sections/CTASection'));
const Footer = lazy(() => import('./components/sections/Footer'));

// Lazy load persona pages
const StudentPage = lazy(() => import('./pages/StudentPage'));
const BrandPage = lazy(() => import('./pages/BrandPage'));
const OrganizerPage = lazy(() => import('./pages/OrganizerPage'));

/**
 * Loading fallback component for lazy-loaded sections
 */
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-inglu-blue/30 border-t-inglu-blue rounded-full animate-spin" />
      <span className="text-inglu-text-secondary text-sm">Loading...</span>
    </div>
  </div>
);

/**
 * Page loading component for full page transitions
 */
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-inglu-blue/30 border-t-inglu-blue rounded-full animate-spin" />
      <span className="text-inglu-light text-sm">Loading...</span>
    </div>
  </div>
);

/**
 * Home page component with all sections
 */
const HomePage = () => (
  <>
    {/* Hero Section - Critical above fold, not lazy loaded */}
    {/* Includes: Value prop, persona routing, trust signals */}
    <Hero />

    {/* 3E Ecosystem - Progressive disclosure pillars */}
    <Suspense fallback={<SectionLoader />}>
      <ThreePillars />
    </Suspense>

    {/* Membership Benefits */}
    <Suspense fallback={<SectionLoader />}>
      <MVPFeatures />
    </Suspense>

    {/* How It Works - 3 step process */}
    <Suspense fallback={<SectionLoader />}>
      <HowItWorks />
    </Suspense>

    {/* Community Stats */}
    <Suspense fallback={<SectionLoader />}>
      <MarketStats />
    </Suspense>

    {/* Student Testimonials */}
    <Suspense fallback={<SectionLoader />}>
      <Testimonials />
    </Suspense>

    {/* Final CTA - Persona segmented */}
    <Suspense fallback={<SectionLoader />}>
      <CTASection />
    </Suspense>
  </>
);

/**
 * Main App component with routing
 * INGLU Marketing Website - The Fastest Growing Global Youth Community
 * E3 Model: Education + Enhancement + Entertainment = Experience
 */
function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-inglu-blue focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        {/* Navigation - Always visible */}
        <Navigation />

        {/* Main Content with Routes */}
        <main id="main-content">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Persona Pages */}
            <Route 
              path="/student" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <StudentPage />
                </Suspense>
              } 
            />
            <Route 
              path="/brand" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <BrandPage />
                </Suspense>
              } 
            />
            <Route 
              path="/organizer" 
              element={
                <Suspense fallback={<PageLoader />}>
                  <OrganizerPage />
                </Suspense>
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
