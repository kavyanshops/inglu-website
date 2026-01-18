# INGLU Marketing Website

A pixel-perfect, responsive marketing website for INGLU - the Education, Enhancement, and Entertainment platform that connects colleges and brands.

## 🚀 Features

- **3E Ecosystem Visualization**: Clear presentation of Education, Enhancement, and Entertainment pillars
- **Responsive Design**: Optimized for Desktop (1440px), Tablet (768px), and Mobile (375px)
- **Smooth Animations**: Scroll-triggered animations, micro-interactions, and hover effects
- **Accessibility**: WCAG AA compliant, keyboard navigation, ARIA labels
- **Performance Optimized**: Lazy loading, code splitting, optimized bundle size

## 🛠 Tech Stack

- **Framework**: React 18+ (Functional Components only)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom configuration
- **Package Manager**: npm

## 📁 Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, Features, etc.)
│   │   ├── ui/                # Reusable UI components
│   │   └── common/            # Layout components
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # Global CSS and animations
│   ├── utils/                 # Constants and helpers
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

| Color | Hex | Tailwind Class |
|-------|-----|----------------|
| Primary Dark | #0F172A | `inglu-dark` |
| Secondary Dark | #1E293B | `inglu-slate` |
| Education Blue | #2563EB | `inglu-blue` |
| Enhancement Orange | #F97316 | `inglu-orange` |
| Entertainment Purple | #A855F7 | `inglu-purple` |
| Text Light | #F1F5F9 | `inglu-light` |
| Text Secondary | #CBD5E1 | `inglu-text-secondary` |
| Accent Cyan | #38BDF8 | `inglu-accent` |

### Typography

- **H1**: 56px / 32px mobile (bold)
- **H2**: 44px / 28px mobile (bold)
- **H3**: 32px (semibold)
- **H4**: 24px (semibold)
- **Body**: 16px (regular)
- **Body Large**: 18px (regular)
- **Body Small**: 14px (regular)
- **Caption**: 12px (regular)

### Breakpoints

- **Mobile**: 375px (base)
- **Tablet**: 768px (md)
- **Desktop**: 1024px (lg)
- **Wide**: 1440px (xl)

## 📄 Components

### UI Components

- `Button` - Multi-variant button with loading states
- `Card` - Flexible card container
- `FeatureCard` - Feature showcase card
- `StatCard` - Animated statistics card
- `TestimonialCard` - Quote and author card
- `StepCard` - How it works step card
- `PillarCard` - 3E pillar card

### Section Components

- `Navigation` - Fixed header with mobile menu
- `Hero` - Hero section with CTAs
- `ThreePillars` - 3E ecosystem showcase
- `MVPFeatures` - Live features grid
- `ProductDemo` - Platform preview
- `MarketStats` - Animated statistics
- `HowItWorks` - Step-by-step guide
- `Testimonials` - User testimonials
- `CTASection` - Call to action
- `Footer` - Footer with newsletter

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast WCAG AA compliant
- Skip to main content link

## 📦 Performance

- Lazy loading for below-fold sections
- Code splitting with React.lazy()
- Optimized images with loading="lazy"
- Minimal bundle size with tree shaking
- CSS purging with Tailwind

## 📝 License

© 2026 INGLU. All rights reserved.

---

Made with ❤️ by Team INGLU
