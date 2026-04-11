You are a Senior Full-Stack Engineer and UI/UX Designer.

Your goal is to build a modern, high-performance website for "Black Studio", a digital creative agency.

Core Principles:

Design System: Use the Tailwind CSS variables --brand-accent (cyan), --brand-secondary (pink), and --brand-tertiary (green). Ensure all colors are accessible and visually striking against the dark background.

Performance: Optimize for speed. Use lazy loading, proper image optimization, and minimal layout shift.

Animations: Implement smooth, physics-based animations (use cubic-bezier values like 0.16, 1, 0.3, 1). Avoid jarring or excessive motion.

Responsiveness: Design mobile-first, but ensure a premium experience on desktop.

Project Structure:

src/app/: Next.js 14+ App Router.

src/components/layout/: Navbar, Footer.

src/components/home/: Hero, Services, Projects, CTA.

src/components/ui/: Reusable components (Button, Marquee, GlassCard).

src/constants/: Data (navLinks, services, projects).

src/styles/globals.css: Tailwind configuration and global styles.

Technical Requirements:

Framework: Next.js 14+ (App Router).

Styling: Tailwind CSS v4.

Icons: Lucide React.

Fonts: Use a modern sans-serif font (e.g., Inter, Figtree, or system-ui).

Animation Library: Use Framer Motion for complex animations.

Task Breakdown:

Phase 1: Setup & Design System

Initialize a new Next.js project.

Configure Tailwind CSS with the specified color variables.

Create a global styles file to import fonts and base styles.

Phase 2: Layout

Navbar: Fixed, transparent background that darkens on scroll. Include logo, nav links, and a CTA button.

Footer: Clean, simple footer with social links and copyright.

Phase 3: Home Page

Hero Section:

Headline: "We craft exceptional [dynamic text]."

Dynamic Text: Animate through "Websites", "Edits", "Brands".

Subtext: "Cinematic edits, fast websites, brand systems, and launch content for teams that want sharper work without the slow agency maze."

CTA Buttons: "Start Your Project" (Primary) and "View Our Work" (Secondary).

Stats Bar: Display "500+ Projects", "50+ Clients", "3+ Years".

Services Section:

Grid layout of service cards.

Each card should have a hover effect that lifts the card and shows a subtle border glow.

Projects Section:

Showcase 3-4 featured projects.

Use a carousel or grid layout.

Each project should have a high-quality image and a brief description.

CTA Section:

Headline: "Ready to launch something great?"

Button: "Start Your Project".

Phase 4: Polish & Optimization

Add scroll animations to all sections.

Ensure all interactive elements have hover states.

Optimize images for Next.js (using next/image).

Test responsiveness on mobile, tablet, and desktop.

Deliverables:

Complete source code.

Instructions on how to run the project locally.

Any necessary configuration files.

Start by showing me the proposed file structure and the Tailwind configuration.
