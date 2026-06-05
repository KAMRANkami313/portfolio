<h1 align="center">Muhammad Kamran — Portfolio</h1>

<p align="center">
  <strong>A premium, interactive developer portfolio built with React 19, Tailwind CSS 4, and Framer Motion.</strong>
</p>

<p align="center">
  <a href="https://mk-kami-portfolio.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/LIVE-View_Site-6366f1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" />
  </a>
  <a href="https://github.com/KAMRANkami313/portfolio" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Source_Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

<p align="center">
  <a href="https://mk-kami-portfolio.vercel.app/" target="_blank">
    👉 <strong>Click here to visit the live site</strong> 👈
  </a>
</p>

---

## Overview

This is my personal portfolio website — a single-page application designed to showcase my skills, projects, experience, and professional background as a MERN Stack Developer. Built with a focus on performance, interactivity, and visual polish, it features custom animations, an AI chatbot, a command palette, achievement system, theme presets, PWA support, and much more. Every component is hand-crafted without any UI framework, using pure Tailwind CSS for styling and Framer Motion for animations.

---

## Live Demo

**URL:** [https://mk-kami-portfolio.vercel.app/](https://mk-kami-portfolio.vercel.app/)

The site is deployed on Vercel and automatically updates on every push to the `main` branch.

---

## Tech Stack

| Category          | Technology                 | Version    |
| ----------------- | -------------------------- | ---------- |
| **UI Framework**  | React                      | 19         |
| **Build Tool**    | Vite                       | 8          |
| **Styling**       | Tailwind CSS               | 4          |
| **Animation**     | Framer Motion              | 12         |
| **Smooth Scroll** | Lenis                      | 1          |
| **Icons**         | React Icons + Lucide React | 5.6 / 1.16 |
| **Sound Effects** | use-sound (Howler.js)      | 5          |
| **Confetti**      | canvas-confetti            | 1.9        |
| **Email Service** | EmailJS (@emailjs/browser) | 4.4        |
| **Linting**       | ESLint                     | 10         |
| **Deployment**    | Vercel                     | —          |

---

## Features

### Core Sections

- **Hero** — Animated role typewriter, gradient text, resume download, social links
- **About** — Profile image, personal bio, dev stats (GitHub, experience), terminal-style intro
- **Projects** — SpotlightCard-based project showcase with challenge/solution details and live metrics
- **Skills** — Categorized skill grid with proficiency bars across Frontend, Backend, Database, and Tools
- **Experience** — Animated vertical timeline of career and education milestones
- **Testimonials** — Auto-rotating testimonial carousel with avatar initials
- **Contact** — EmailJS-powered contact form with real-time validation and submission states

### Interactive UI Components

| Component                | Description                                                                     |
| ------------------------ | ------------------------------------------------------------------------------- |
| **Command Palette**      | Ctrl+K to open — search sections, toggle features, navigate instantly           |
| **AI Chatbot (KAMI_AI)** | Pattern-matching chatbot with knowledge base about skills, projects, experience |
| **Dock**                 | macOS-style bottom dock with quick access to sections, achievements, and tools  |
| **Cursor**               | Custom animated cursor that follows mouse with glow effect (hidden on mobile)   |
| **SpotlightCard**        | Cards with mouse-following spotlight gradient overlay                           |
| **CopyEmail**            | One-click copy email to clipboard with toast feedback                           |
| **ShareButton**          | Share portfolio via Web Share API with fallback                                 |
| **Magnetic**             | Magnetic hover effect that pulls elements toward the cursor                     |
| **Reveal**               | Scroll-triggered reveal animations using IntersectionObserver                   |

### Visual Effects

| Effect               | Description                                                           |
| -------------------- | --------------------------------------------------------------------- |
| **Aura**             | Ambient radial gradient that follows the mouse cursor across the page |
| **Particles**        | Floating particle system in the background for depth                  |
| **Click Sparkle**    | Burst of sparkle particles on every mouse click                       |
| **Click Ripple**     | Material-style ripple effect expanding from click position            |
| **Confetti**         | Confetti burst animation triggered on contact form submission         |
| **Section Dividers** | Decorative dividers between sections (wave, dots, line variants)      |
| **Noise Overlay**    | Subtle SVG noise texture overlay for a premium feel                   |
| **Grid Background**  | Dot-grid pattern on the page background                               |
| **Progress Bar**     | Animated scroll progress bar at the top of the page                   |

### System Features

| Feature                 | Description                                                                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Theme Presets**       | 10 accent color presets (Indigo, Cyberpunk, Matrix, Ocean, Sunset, Cherry, Violet, Pink, Emerald, Amber) — persisted in localStorage                      |
| **Color Picker**        | Custom color picker for selecting any accent color beyond presets                                                                                         |
| **Achievement System**  | 11 unlockable achievements (first visit, scroll tracking, section visits, chatbot use, theme change, Konami code, etc.) with animated popup notifications |
| **Toast Notifications** | Stackable toast system (success, error, info, warning) with auto-dismiss and manual close                                                                 |
| **Visitor Counter**     | Client-side visitor count tracked via localStorage                                                                                                        |
| **Status Bar**          | Live status bar showing current time, scroll position, and section indicator                                                                              |
| **Performance Monitor** | FPS counter and render performance display (dev mode)                                                                                                     |
| **Dev Mode**            | Debug grid overlay showing 12-column layout with column indicators                                                                                        |
| **Loader**              | Animated loading screen with progress on initial site load                                                                                                |

### PWA Support

- **manifest.json** — App name, icons, theme color, standalone display mode
- **Service Worker (sw.js)** — Cache-first for static assets, network-first for navigation, offline fallback
- **Installable** — Can be installed as a native-like app on mobile and desktop

### SEO & Meta

- Open Graph meta tags for social media previews
- Twitter Card meta tags for rich Twitter shares
- JSON-LD structured data (Person schema)
- Semantic HTML with proper heading hierarchy
- Preconnect and DNS-prefetch for GitHub API

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg              # Site favicon (SVG)
│   ├── icons.svg                # Icon sprite
│   ├── manifest.json            # PWA manifest
│   ├── resume.pdf               # Downloadable resume
│   └── sw.js                    # Service worker
├── src/
│   ├── assets/                  # Images, audio files
│   ├── components/
│   │   ├── sections/            # Page sections
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx      # EmailJS integration
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Testimonials.jsx
│   │   └── ui/                  # Reusable UI components
│   │       ├── AIChatbot.jsx
│   │       ├── Achievements.jsx
│   │       ├── Architecture.jsx
│   │       ├── Aura.jsx
│   │       ├── ClickSparkle.jsx
│   │       ├── ColorPicker.jsx
│   │       ├── CommandPalette.jsx
│   │       ├── Confetti.jsx
│   │       ├── CopyEmail.jsx
│   │       ├── Cursor.jsx
│   │       ├── DevToggle.jsx
│   │       ├── Dock.jsx
│   │       ├── EasterEgg.jsx
│   │       ├── GithubStats.jsx
│   │       ├── Heatmap.jsx
│   │       ├── Loader.jsx
│   │       ├── Magnetic.jsx
│   │       ├── MusicWidget.jsx
│   │       ├── Particles.jsx
│   │       ├── Performance.jsx
│   │       ├── ProfileImage.jsx
│   │       ├── Reveal.jsx
│   │       ├── Ripple.jsx
│   │       ├── ScrollToTop.jsx
│   │       ├── SectionDivider.jsx
│   │       ├── SectionNav.jsx
│   │       ├── SectionWrapper.jsx
│   │       ├── ShareButton.jsx
│   │       ├── SpotlightCard.jsx
│   │       ├── Stats.jsx
│   │       ├── StatusBar.jsx
│   │       ├── TechMarquee.jsx
│   │       ├── Terminal.jsx
│   │       ├── ThemePresets.jsx
│   │       ├── TimeDisplay.jsx
│   │       └── VisitorCounter.jsx
│   ├── constants/
│   │   └── index.jsx            # All data (projects, skills, experience, etc.)
│   ├── context/
│   │   ├── AchievementContext.jsx
│   │   ├── DevModeContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── ToastContext.jsx
│   ├── hooks/
│   │   ├── useAudio.js          # Hover & click sound effects
│   │   ├── useScramble.js       # Text scramble animation
│   │   └── useTypewriter.js     # Typewriter text effect
│   ├── layout/
│   │   └── Layout.jsx           # Main layout (Lenis, navbar, particles, progress bar)
│   ├── styles/
│   │   └── index.css            # Tailwind CSS 4 + custom theme + keyframes + utilities
│   ├── App.jsx                  # Root component with all providers and feature wiring
│   └── main.jsx                 # React entry point with context providers
├── index.html                   # HTML entry with SEO meta, PWA links, JSON-LD
├── vite.config.js               # Vite configuration
├── vercel.json                  # Vercel deployment caching headers
├── package.json
├── .env                         # Environment variables (NOT in repo)
└── .gitignore

```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/KAMRANkami313/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [EmailJS Dashboard](https://dashboard.emailjs.com/):

1. Create an account and verify your email
2. Add an email service (Gmail, Outlook, etc.) → copy the **Service ID**
3. Create an email template → copy the **Template ID**
4. Go to Account → API Keys → copy the **Public Key**

### Development

```bash
# Start the dev server
npm run dev

# Open in browser
# http://localhost:5173
```

### Build

```bash
# Create production build
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

## Customization

### Change Content

All portfolio data lives in **`src/constants/index.jsx`**:

- `HERO_CONTENT` — Name, roles, description, links
- `SKILLS` — Skill items with icons and proficiency levels
- `SKILLS_CATEGORIES` — Categorized skills for the skills section
- `PROJECTS` — Project cards with title, description, tech, links
- `EXPERIENCE` — Timeline entries with year, title, company, tags
- `TESTIMONIALS` — Testimonial items
- `CONTACT` — Email, social links, resume link
- `STATS` — Stat counters
- `CHATBOT_KNOWLEDGE` — AI chatbot response patterns

### Change Theme

Edit `THEME_PRESETS` in **`src/context/ThemeContext.jsx`** to modify color presets, or change the default accent color in **`src/styles/index.css`** under the `@theme` block.

### Change SEO

Edit meta tags and JSON-LD in **`index.html`** and the `og:image` in the `public/` folder.

---

## Key Design Decisions

- **No UI component library** — Every component is built from scratch with Tailwind CSS for full control over design and bundle size
- **Tailwind CSS 4** — Uses the new `@import "tailwindcss"` syntax and `@theme` directive instead of `tailwind.config.js`
- **CSS variable theming** — Accent color is controlled via `--color-accent` and `--color-accent-rgb` CSS custom properties, enabling real-time theme switching without re-renders
- **localStorage persistence** — Theme preference, achievements, and visitor count survive page refreshes
- **Service worker** — Cache-first for assets, network-first for navigation, ensuring offline support without stale content
- **EmailJS** — Serverless contact form — no backend needed, emails sent directly from the browser

---

## Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Lenis](https://lenis.studiofreight.com/) — Smooth scroll library
- [EmailJS](https://www.emailjs.com/) — Serverless email service
- [React Icons](https://react-icons.github.io/react-icons/) — Icon library
- [canvas-confetti](https://github.com/catdad/canvas-confetti) — Confetti animations
- [use-sound](https://github.com/joshwcomeau/use-sound) — Sound effect hooks

<p align="center">
  Built with passion by <a href="https://github.com/KAMRANkami313">Muhammad Kamran</a>
</p>
