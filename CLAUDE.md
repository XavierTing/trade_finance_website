# Trade Finance Demo Website

## Project Overview

A modern trade finance demo website built to showcase trade finance workflows and capabilities. The site is a single-page application with a polished, professional aesthetic.

## Tech Stack

- **Framework**: React 18+ with Vite
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion for micro-interactions and page transitions
- **Routing**: React Router v7
- **Icons**: Lucide React

## Design System

The visual style is inspired by [happyrobot.ai](https://www.happyrobot.ai/) — a clean, modern SaaS aesthetic with purposeful motion design.

### Color Palette

- **Background**: Off-white / light gray (`#eeeeee`, `#f5f5f5`)
- **Primary text**: Deep black (`#0e0d0c`)
- **Secondary text**: Medium gray (`#858484`)
- **Accent**: Bright blue (`#4d65ff`) for CTAs, links, and interactive elements
- **Error/Alert**: Red (`#e63757`)
- **Surfaces**: White cards with subtle borders or shadows

### Typography

- Use a clean sans-serif font (Inter or similar)
- Fluid, responsive type scale — headings adapt across breakpoints
- Headings use primary color on the first line, secondary gray on subsequent lines for visual hierarchy
- Keep text minimal and scannable

### Layout Principles

- Centered, max-width containers (`max-w-7xl`)
- Responsive grid: 4-5 columns on desktop, stacking to 1-2 on mobile
- Generous whitespace — let content breathe
- Consistent spacing scale (multiples of 4px / 1rem)

### Animation & Motion

- Staggered fade-in + slight vertical offset on scroll-triggered elements
- Smooth easing (`ease-out` or `power2.out` curves)
- Subtle hover transforms on buttons and cards (scale, slight rotation on icons)
- Keep animations under 500ms — purposeful, not decorative
- Use Framer Motion's `whileInView` for scroll-triggered animations

### Component Patterns

- Cards with rounded corners (`rounded-xl`), white background, subtle shadow
- Buttons: filled primary (blue accent), outlined secondary, disabled at 50% opacity
- Clean form inputs with off-white backgrounds and focus rings
- Logo/partner grids with consistent spacing

## Code Conventions

### File Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Base UI primitives (Button, Card, Input)
│   └── sections/     # Page sections (Hero, Features, CTA)
├── pages/            # Route-level page components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
├── types/            # TypeScript type definitions
├── assets/           # Static assets (images, SVGs)
└── styles/           # Global styles and Tailwind config
```

### Naming

- Components: PascalCase (`TradeFlowCard.tsx`)
- Hooks: camelCase with `use` prefix (`useScrollAnimation.ts`)
- Utilities: camelCase (`formatCurrency.ts`)
- Types: PascalCase with descriptive names (`TradeDocument.ts`)

### Component Guidelines

- Use functional components with arrow functions
- Props interfaces defined above the component in the same file
- Prefer composition over prop drilling
- Keep components focused — one responsibility per component
- Extract reusable UI into `components/ui/`

### TypeScript

- Strict mode enabled — no `any` types
- Use `interface` for component props, `type` for unions and utility types
- Export types alongside their components when tightly coupled

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Workflow Orchestration
### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity
### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution
### 3. Self-Improvement Loop
- After ANY correction from the user: update tasks/lessons.md with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project
### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness
### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes -- don't over-engineer
- Challenge your own work before presenting it
### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests -- then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how
## Task Management
1. Plan First: Write plan to tasks/todo.md with checkable items
2. Verify Plan: Check in before starting implementation
3. Track Progress: Mark items complete as you go
4. Explain Changes: High-level summary at each step
5. Document Results: Add review section to tasks/todo.md
6. Capture Lessons: Update tasks/lessons.md after corrections
## Core Principles
- Simplicity First: Make every change as simple as possible. Impact minimal code.
- No Laziness: Find root causes. No temporary fixes. Senior developer standards.
- Minimal Impact: Only touch what's necessary. No side effects with new bugs.
