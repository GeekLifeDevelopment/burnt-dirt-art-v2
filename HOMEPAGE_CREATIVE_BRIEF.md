# Burnt Dirt Art Homepage Creative Brief

## Purpose
This document defines the creative direction for the Burnt Dirt Art homepage redesign.

It is intentionally written as an art director's brief, not a coding checklist, so future implementation decisions remain aligned with the emotional and strategic goals of the brand.

## Project Intent
Redesign the Burnt Dirt Art homepage from the ground up.

This is not a logo rebrand. Keep the existing Burnt Dirt Art logo.

This is a redesign of experience, pacing, and visual language.

The current site reads as a basic e-commerce gallery. The redesigned homepage should feel like stepping into a quiet artisan studio, an old independent bookstore, or a hidden workshop filled with handcrafted treasures.

Core emotional response:

> I want to slow down, explore, and discover the story behind each piece.

The homepage should immediately communicate craftsmanship, warmth, authenticity, and artistic passion.

## Brand Experience Goals
The homepage should feel:

- Warm
- Inviting
- Handmade
- Timeless
- Elegant
- Artistic
- Relaxing
- Authentic

It should feel like browsing a studio with stories, not scrolling a product catalog.

## Inspiration and Boundaries
Use these as directional cues, not references to copy.

### Visual Mood References

- Cozy artisan bookstore
- Historic library
- Handmade journal
- Antique shop
- Rustic art gallery
- Warm pottery studio
- Botanical sketchbook
- Leather-bound books
- Natural wood furniture
- Handmade paper textures
- Brass accents
- Soft warm lighting

### Avoid

- Fantasy themes
- Gothic themes
- Dark medieval themes
- Modern tech startup aesthetics
- Minimal white gallery aesthetics
- Corporate visual language

## Creative Principles
Use these principles to resolve design decisions when details are ambiguous.

- Story before commerce: Every section should deepen context before asking for purchase action.
- Human over catalog: Showcase the artist's process, materials, and point of view.
- Curation over grids: Present artwork as a collection with editorial intention.
- Texture over flatness: Add subtle depth through paper, linen, or worn materials.
- Calm motion over novelty: Use restrained transitions that support reading and exploration.
- Warm contrast over bright color: Keep visual comfort and legibility in balance.

## Color Direction
Use warm natural tones across backgrounds, surfaces, accents, and typography.

### Primary Palette

- Warm Cream: `#F5F1E8`
- Old Paper: `#ECE4D4`
- Walnut Brown: `#4A3728`
- Terracotta: `#A85F3E`
- Forest Green: `#59684D`
- Burnished Copper: `#B9784A`
- Charcoal: `#2F2B28`

Guidance:

- Avoid bright saturated colors.
- Use terracotta and copper as accents, not full-page dominance.
- Maintain accessible contrast for text and controls.

## Typography Direction
Establish a classic-meets-readable hierarchy.

- Headings: elegant serif (for example: Cormorant Garamond, Libre Baskerville, EB Garamond)
- Body: clean sans-serif (for example: Inter, Source Sans, Lato)

Typography intent:

- Headings should feel literary, tactile, and intentional.
- Body copy should remain modern, clear, and easy to scan.

## Layout and Composition
The page should feel editorial and handcrafted, not rigid and corporate.

- Use large sections with generous spacing.
- Favor soft asymmetry and occasional broken-grid composition.
- Use large imagery to set mood and pacing.
- Keep corner rounding subtle.
- Introduce layered depth where it adds atmosphere.
- Avoid hard geometric layouts with repetitive card repetition.

## Texture and Atmosphere
Use texture sparingly and consistently.

Suggested texture directions:

- Paper grain
- Linen weave
- Watercolor wash
- Worn parchment
- Light wood grain

Textures should never compete with artwork.

## Homepage Narrative Architecture
The homepage should guide visitors through this sequence:

Discover -> Learn -> Connect -> Purchase

Each major section should answer one key visitor question in order:

- Who is the artist?
- What makes the work unique?
- Can I trust this maker?
- What artwork is available?
- Where can I see it in person?
- How do I commission or buy?

## Section-by-Section Direction

### 1) Hero Section
Purpose: establish emotional tone in the first viewport.

Requirements:

- Prominent featured artwork
- Background atmosphere inspired by an artist's workshop
- Large headline and supporting copy
- Primary CTA: Browse Original Artwork
- Secondary CTA: Meet the Artist

Suggested headline:

> Handcrafted art from the heart.

Supporting copy:

Original custom artwork in fired terracotta, plaster, textiles, oil and watercolors.

Behavioral intent:

- The hero should feel immersive and inviting, not sales-forward.

### 2) Section Transitions
Purpose: maintain narrative continuity between content blocks.

Requirements:

- Use torn-paper or textured divider motifs
- Avoid hard horizontal rule lines

### 3) Welcome Section
Purpose: introduce Burnt Dirt Art and establish trust.

Layout:

- Split composition
- Left: featured framed artwork presentation
- Right: short artist introduction story

Include three value markers:

- Handmade
- Inspired by Nature
- One of a Kind

### 4) Featured Artwork
Purpose: show inventory through curatorial framing.

Requirements:

- Curated collection presentation (not generic product grid)
- Gallery-card or museum-label-inspired card treatment
- Include artwork image, title, price, optional category

Hover behavior:

- Slight lift
- Soft shadow
- Gentle zoom
- No flashy effects

### 5) Artist Story Preview
Purpose: humanize the brand and deepen connection.

Include:

- Artist portrait
- Studio image
- Short narrative preview
- CTA: Read Our Story

### 6) Current Collections
Purpose: help visitors browse by thematic intent.

Present named collections as visual entry points, for example:

- Nature
- Relief Sculpture
- Terracotta
- Watercolors
- Seasonal

### 7) Upcoming Shows
Purpose: establish real-world presence and credibility.

Requirements:

- Calendar-inspired cards
- Date, location, and event name
- CTA: See All Events

### 8) Commission Section
Purpose: invite high-intent engagement.

Requirements:

- Warm, prominent CTA treatment
- Headline: Looking for something created just for you?
- Brief commission process overview
- CTA: Start a Commission

### 9) Newsletter Section
Purpose: sustain relationship with non-buyers and returning visitors.

Positioning:

- Use "Join the Studio Journal" instead of "Subscribe"

Value statements:

- New artwork
- Upcoming shows
- Behind-the-scenes updates
- Studio stories

### 10) Footer
Purpose: close the narrative with warmth and structure.

Requirements:

- Dark walnut background
- Logo
- Navigation
- Social links
- Contact
- Copyright and privacy links

Tone reference:

- The final section should feel like the closing page of a beautiful book.

## Motion and Interaction Guidelines
Motion should feel quiet and tactile.

Allowed:

- Soft fade-ins
- Gentle image zoom
- Slow hover transitions
- Subtle paper-like movement

Avoid:

- Bounce effects
- Spins
- Flashy, high-energy transitions

## Content Voice and Copy Direction
Use language that is grounded, human, and sensory.

- Prioritize materials, process, and story.
- Avoid sales-heavy phrasing and urgency tactics.
- Keep CTA labels clear and respectful.
- Use concise storytelling that invites lingering.

## Accessibility and UX Baselines
Design and implementation must preserve usability and inclusion.

- Semantic HTML structure
- Keyboard navigable controls and menus
- Meaningful alt text for all artwork and portrait images
- Sufficient color contrast
- Clear focus states
- Touch-friendly targets on mobile

## Technical Direction

- Build in Astro.
- Use React components only when interactivity requires it.
- Continue sourcing artwork data from existing Contentful integration for now.
- Design component interfaces to support a future Artanize API with minimal refactor.
- Mobile-first implementation with graceful desktop scaling.
- Optimize image delivery and performance.
- Structure components as reusable design system primitives.

## Implementation Strategy
Do not build the full homepage in one pass.

Use this phased delivery plan:

1. Build design system foundations (color tokens, type scale, spacing, buttons, cards).
2. Build global structure (layout shell, navigation, footer, shared containers).
3. Build hero section.
4. Build welcome/story section.
5. Build featured artwork section.
6. Continue one section at a time until complete.

This approach improves maintainability, reduces regressions, and keeps visual quality high.

## Definition of Success
The redesign is successful when:

- Visitors experience the site as an artisan studio rather than an online storefront.
- The homepage establishes a reusable visual language for all future pages.
- Storytelling and trust-building happen before purchase prompts.
- The visual system can scale into future Artanize templates.

## Long-Term Design System Intent
After homepage approval, every other page should inherit this same language:

- Palette behavior
- Typography hierarchy
- Surface and texture treatment
- Card and CTA behavior
- Motion tone
- Narrative pacing

This brief is the foundation document for that continuity.
