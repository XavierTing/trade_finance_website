# Design System — Extracted from happyrobot.ai

## 1. Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#f5f5f0` | Page background — warm off-white with slight cream tone |
| `bg-secondary` | `#eeeee9` | Secondary surfaces, table headers, subtle panels |
| `text-primary` | `#1a1a1a` | Primary headings and body text |
| `text-secondary` | `#6b6b63` | Subheadings (second line), body copy, labels — warm gray with olive undertone |
| `accent` | `#1a1a1a` | Primary buttons (dark/black), not blue |
| `accent-hover` | `#333333` | Button hover state |
| `surface` | `#ffffff` | Card backgrounds |
| `border` | `rgba(26,26,26,0.06)` | Subtle card/section borders |
| `border-strong` | `rgba(26,26,26,0.12)` | Dividers, table borders |

**Key observation**: The palette is warm and neutral — NO bright blue accent. Primary buttons are dark/black. The entire feel is warm cream/olive, not cool gray/blue.

## 2. Typography

| Element | Size | Weight | Line-height | Letter-spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| H1 (hero) | 72–96px (responsive) | 700 (bold) | 1.05 | -0.02em | `text-primary` first line, `text-secondary` second |
| H2 (section) | 48–64px (responsive) | 700 | 1.1 | -0.02em | Two-tone split |
| H3 (card title) | 20px | 600 (semibold) | 1.3 | -0.01em | `text-primary` |
| Body | 16–18px | 400 | 1.6 | 0 | `text-secondary` |
| Small / Label | 13–14px | 500 | 1.4 | 0.02em (uppercase labels) | `text-secondary` |
| Nav links | 14px | 500 | 1 | 0 | `text-secondary`, hover: `text-primary` |

**Font**: Inter (sans-serif). `text-wrap: balance` on all headings. `-webkit-font-smoothing: antialiased`.

## 3. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Section padding | `py-36` (144px) | Vertical spacing between major sections |
| Heading → content | `mb-16` to `mb-20` | Gap below section headings |
| Card padding | `p-6` to `p-8` | Internal card padding |
| Card gap | `gap-6` | Grid gap between cards |
| Container max-width | `max-w-6xl` (1152px) | Slightly narrower than 7xl for tighter feel |
| Container padding | `px-6 lg:px-8` | Horizontal page padding |

## 4. Layout Patterns

- **Centered** hero text, centered footer CTA
- **Left-aligned** section headings for content sections
- **2-column grid** for product cards on desktop, 1-column mobile
- **3-column grid** for feature cards on desktop
- **Subtle horizontal dividers** between major sections (1px, ~6% opacity)
- Generous whitespace — sections breathe with large vertical padding

## 5. Component Styles

### Buttons
- **Primary**: `bg-[#1a1a1a] text-white rounded-full px-7 py-3.5` — dark/black, not blue
- **Secondary**: `border border-[#1a1a1a]/20 text-[#1a1a1a] rounded-full px-7 py-3.5` — outlined
- **Hover**: Subtle scale `1.02`, primary lightens to `#333`
- **Icon rotation**: SVG children rotate 45deg on hover
- **Disabled**: `opacity-50 pointer-events-none`

### Cards
- `bg-white rounded-xl border border-black/[0.04]`
- Shadow: `0 1px 2px rgba(0,0,0,0.03)` at rest
- Hover shadow: `0 8px 24px rgba(0,0,0,0.06)` — softer than before
- Transition: `duration-300 ease-out`

### Navigation
- Fixed top, transparent background until scroll
- On scroll: `bg-[#f5f5f0]/80 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.06)]`
- No visible border-bottom at top
- Active nav item: `text-[#1a1a1a] font-semibold` (no background pill, no blue)
- Inactive: `text-[#6b6b63]`

### Badges
- `rounded-full px-3 py-1 text-xs font-medium`
- Subtle colored backgrounds at 8% opacity

### Tables
- `rounded-xl` container with subtle border
- Header row: slightly warm gray background
- Row hover: subtle warm gray

## 6. Visual Effects

- **Hero**: Background video/image with LIGHT overlay (not dark). Text is dark on bright background.
- **Shadows**: Very subtle — `0 1px 2px rgba(0,0,0,0.03)` resting, `0 8px 24px rgba(0,0,0,0.06)` hover
- **Blur**: Navbar uses `backdrop-blur-lg` on scroll
- **Transitions**: `duration-300 ease-out` for most interactions
- **Animations**: Fade-in-up with `blur(10px)`, `y: 24px`, `duration: 0.8s`. Stagger `0.2s`.
- **Scrollbar**: Thin (6px), warm-toned thumb
- **Selection**: Warm accent highlight

## 7. Overall Mood

- **Light, warm, airy** — cream-tinted backgrounds, NOT cool gray
- **Minimal** — very few visual elements, let whitespace do the work
- **Neutral/monochrome** — primary accent is black/dark, not a bright color
- **Professional enterprise** — clean, trustworthy, sophisticated
- **Generous** — large type, ample spacing, breathing room everywhere
- **Soft** — rounded corners, subtle shadows, gentle transitions
