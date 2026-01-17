# Planning Outline

1. **Goal**: Redesign the services page hero section to have a unique visual identity distinct from the home page, similar to how the portfolio page has its own styling.

2. **Approach**: First, I'll explore the current services page and portfolio page implementations to understand existing patterns. Then I'll create a new hero section design for services that maintains brand consistency while being visually distinct - likely using a different color scheme, layout, or visual elements than the home page hero.

3. **Files to Touch**:
   - `src/app/services/page.tsx` - Update hero section with new design
   - Possibly component files if hero is componentized
   - Possibly CSS/styling files

4. **Tasks**:
   1. Explore current services page structure and hero implementation
   2. Review portfolio page for reference on unique page styling
   3. Review home page hero to understand what to differentiate from
   4. Design and implement new services hero section
   5. Ensure responsive design across device sizes
   6. Verify visual consistency with brand

5. **Risks**:
   - Breaking existing responsive layouts
   - Inconsistency with brand colors/typography
   - Accessibility issues with new design choices

[PLAN_GENERATED] Planning outline complete.

---

Now let me explore the codebase to understand the existing structure:

🔧 Tool: Glob
Input: {
  "pattern": "src/app/services/**/*"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/app/portfolio/**/*"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/app/page.tsx"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/**/*Hero*"
}
Let me search more broadly for the project structure:

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/services*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/portfolio*"
}
This is an Astro project. Let me read the key files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\portfolio.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\index.astro"
}
Now I have a clear picture:

1. **Current Services Page**: Uses the shared `HeroSection` component (blue gradient background with skyline, browser mockup, etc.) - the same as the home page
2. **Portfolio Page**: Has its own custom hero section with a distinct lighter gradient style (`linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-background) 100%)`)

I'll now create a unique hero section for the services page that:
- Has a distinct visual identity (not the blue hero used on home page)
- Maintains brand consistency 
- Focuses on services messaging
- Takes inspiration from the portfolio page's approach (inline styles, lighter/different color scheme)

Let me create a services-specific hero section:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "import Layout from '../layouts/Layout.astro';\nimport HeroSection from '../components/HeroSection.astro';\nimport PricingCard from '../components/PricingCard.astro';",
  "new_string": "import Layout from '../layouts/Layout.astro';\nimport PricingCard from '../components/PricingCard.astro';"
}
Now let me replace the HeroSection component usage with a custom services hero:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  <main>\n    <!-- Hero Section -->\n    <HeroSection\n      id=\"services-hero\"\n      headline=\"Web Solutions That Grow With Your Business\"\n      valueProposition=\"Transparent pricing, no hidden costs\"\n      subheadline=\"From simple single-page sites to full-featured e-commerce platforms, we offer flexible packages designed for Houston small businesses at every stage of growth.\"\n      primaryCTA={{\n        text: \"View Pricing\",\n        href: \"#pricing\",\n      }}\n      secondaryCTA={{\n        text: \"Our Process\",\n        href: \"#process\",\n      }}\n    />",
  "new_string": "  <main>\n    <!-- Services Hero Section - Unique to Services Page -->\n    <section class=\"services-hero\" aria-labelledby=\"services-hero-heading\">\n      <div class=\"services-hero__container\">\n        <div class=\"services-hero__content\">\n          <div class=\"services-hero__badge\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"16\" height=\"16\" aria-hidden=\"true\">\n              <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/>\n            </svg>\n            <span>Transparent Pricing • No Hidden Costs</span>\n          </div>\n          <h1 id=\"services-hero-heading\" class=\"services-hero__title\">\n            Web Solutions That<br/>\n            <span class=\"services-hero__title-highlight\">Grow With Your Business</span>\n          </h1>\n          <p class=\"services-hero__description\">\n            From simple single-page sites to full-featured e-commerce platforms, we offer flexible packages designed for Houston small businesses at every stage of growth.\n          </p>\n          <div class=\"services-hero__cta-group\">\n            <Button\n              text=\"View Pricing\"\n              href=\"#pricing\"\n              variant=\"primary\"\n              size=\"large\"\n            />\n            <Button\n              text=\"Our Process\"\n              href=\"#process\"\n              variant=\"secondary\"\n              size=\"large\"\n            />\n          </div>\n          <div class=\"services-hero__stats\">\n            <div class=\"services-hero__stat\">\n              <span class=\"services-hero__stat-value\">$499</span>\n              <span class=\"services-hero__stat-label\">Starting price</span>\n            </div>\n            <div class=\"services-hero__stat-divider\"></div>\n            <div class=\"services-hero__stat\">\n              <span class=\"services-hero__stat-value\">2-4 wks</span>\n              <span class=\"services-hero__stat-label\">Typical delivery</span>\n            </div>\n            <div class=\"services-hero__stat-divider\"></div>\n            <div class=\"services-hero__stat\">\n              <span class=\"services-hero__stat-value\">100%</span>\n              <span class=\"services-hero__stat-label\">Satisfaction</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"services-hero__visual\" aria-hidden=\"true\">\n          <div class=\"services-hero__cards-preview\">\n            <div class=\"services-hero__preview-card services-hero__preview-card--1\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h16v9H4V6zm0 11h16v1H4v-1z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Website Design</span>\n              <span class=\"services-hero__preview-price\">From $499</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--2\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">SEO Optimization</span>\n              <span class=\"services-hero__preview-price\">From $179/mo</span>\n            </div>\n            <div class=\"services-hero__preview-card services-hero__preview-card--3\">\n              <div class=\"services-hero__preview-icon\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"24\" height=\"24\">\n                  <path d=\"M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z\"/>\n                </svg>\n              </div>\n              <span class=\"services-hero__preview-label\">Maintenance</span>\n              <span class=\"services-hero__preview-price\">From $49/mo</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"services-hero__decoration\" aria-hidden=\"true\"></div>\n    </section>"
}
Now I need to add the styles for the new services hero section. Let me add them at the beginning of the style section:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "<style>\n  /* =================================================================\n   * SERVICES PAGE STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention\n   */\n\n  /* =================================================================\n   * SERVICES OVERVIEW SECTION\n   * ================================================================= */",
  "new_string": "<style>\n  /* =================================================================\n   * SERVICES PAGE STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention\n   */\n\n  /* =================================================================\n   * SERVICES HERO SECTION - Unique to Services Page\n   * ================================================================= */\n\n  .services-hero {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4) var(--spacing-20);\n    background: linear-gradient(\n      135deg,\n      var(--color-background) 0%,\n      var(--color-primary-50) 50%,\n      var(--color-background) 100%\n    );\n    overflow: hidden;\n  }\n\n  .services-hero__container {\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-10);\n    align-items: center;\n  }\n\n  .services-hero__content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: var(--spacing-5);\n  }\n\n  .services-hero__badge {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    padding: var(--spacing-2) var(--spacing-4);\n    background-color: var(--color-success-50);\n    border: 1px solid var(--color-success-200);\n    border-radius: var(--radius-full);\n    color: var(--color-success-700);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .services-hero__badge svg {\n    color: var(--color-success-600);\n  }\n\n  .services-hero__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-3xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-text-primary);\n    line-height: var(--line-height-tight);\n    margin: 0;\n  }\n\n  .services-hero__title-highlight {\n    color: var(--color-primary);\n    display: block;\n  }\n\n  .services-hero__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    max-width: 50ch;\n    margin: 0;\n  }\n\n  .services-hero__cta-group {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-3);\n    width: 100%;\n    max-width: 20rem;\n  }\n\n  .services-hero__stats {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: var(--spacing-4);\n    padding: var(--spacing-4) var(--spacing-6);\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n    margin-top: var(--spacing-2);\n  }\n\n  .services-hero__stat {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-1);\n  }\n\n  .services-hero__stat-value {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-primary);\n  }\n\n  .services-hero__stat-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    color: var(--color-text-tertiary);\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n\n  .services-hero__stat-divider {\n    width: 1px;\n    height: var(--spacing-8);\n    background-color: var(--color-border);\n  }\n\n  /* Visual/Cards Preview */\n  .services-hero__visual {\n    display: none;\n  }\n\n  .services-hero__cards-preview {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n    padding: var(--spacing-6);\n    background: var(--color-background-elevated);\n    border-radius: var(--radius-2xl);\n    border: 1px solid var(--color-border);\n    box-shadow: var(--shadow-xl);\n    transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);\n  }\n\n  .services-hero__preview-card {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-4);\n    padding: var(--spacing-4);\n    background: var(--color-background);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    transition: transform var(--duration-200) var(--ease-out),\n                box-shadow var(--duration-200) var(--ease-out);\n  }\n\n  .services-hero__preview-card:hover {\n    transform: translateX(4px);\n    box-shadow: var(--shadow-md);\n  }\n\n  .services-hero__preview-card--1 .services-hero__preview-icon {\n    background-color: var(--color-primary-100);\n    color: var(--color-primary-600);\n  }\n\n  .services-hero__preview-card--2 .services-hero__preview-icon {\n    background-color: var(--color-success-100);\n    color: var(--color-success-600);\n  }\n\n  .services-hero__preview-card--3 .services-hero__preview-icon {\n    background-color: var(--color-warning-100);\n    color: var(--color-warning-600);\n  }\n\n  .services-hero__preview-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-12);\n    height: var(--spacing-12);\n    border-radius: var(--radius-lg);\n    flex-shrink: 0;\n  }\n\n  .services-hero__preview-label {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    flex: 1;\n  }\n\n  .services-hero__preview-price {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-primary);\n    background-color: var(--color-primary-50);\n    padding: var(--spacing-1) var(--spacing-3);\n    border-radius: var(--radius-full);\n  }\n\n  /* Decorative element */\n  .services-hero__decoration {\n    position: absolute;\n    bottom: -50%;\n    right: -20%;\n    width: 60%;\n    height: 100%;\n    background: radial-gradient(\n      ellipse at center,\n      var(--color-primary-100) 0%,\n      transparent 70%\n    );\n    opacity: 0.5;\n    pointer-events: none;\n  }\n\n  /* =================================================================\n   * SERVICES OVERVIEW SECTION\n   * ================================================================= */"
}
Now I need to add the responsive styles for the services hero. Let me find the tablet responsive section and add the services hero responsive styles:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "offset": 1080,
  "limit": 200
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "offset": 1290,
  "limit": 200
}
Now I need to add the responsive styles for the services hero in each media query. Let me add them:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (640px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 640px) {\n    .services-overview__features {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .services-overview__cards {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    /* Service Detail Sections - Tablet */\n    .service-detail__benefits {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      gap: var(--spacing-3) var(--spacing-6);\n      max-width: 60ch;\n    }\n\n    .service-detail__benefit {\n      margin-bottom: 0;\n    }\n\n    .cta-section__buttons {\n      flex-direction: row;\n      justify-content: center;\n    }\n  }",
  "new_string": "  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (640px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 640px) {\n    /* Services Hero - Tablet */\n    .services-hero {\n      padding: var(--spacing-20) var(--spacing-6) var(--spacing-24);\n    }\n\n    .services-hero__title {\n      font-size: var(--font-size-4xl);\n    }\n\n    .services-hero__cta-group {\n      flex-direction: row;\n      max-width: none;\n      width: auto;\n    }\n\n    .services-hero__stats {\n      gap: var(--spacing-6);\n    }\n\n    .services-hero__stat-value {\n      font-size: var(--font-size-2xl);\n    }\n\n    .services-overview__features {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .services-overview__cards {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    /* Service Detail Sections - Tablet */\n    .service-detail__benefits {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      gap: var(--spacing-3) var(--spacing-6);\n      max-width: 60ch;\n    }\n\n    .service-detail__benefit {\n      margin-bottom: 0;\n    }\n\n    .cta-section__buttons {\n      flex-direction: row;\n      justify-content: center;\n    }\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (768px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 768px) {\n    .services-overview {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .services-overview__heading {\n      font-size: var(--font-size-3xl);\n    }\n\n    .service-detail {\n      padding: var(--spacing-20) var(--spacing-6);\n    }",
  "new_string": "  /* =================================================================\n   * RESPONSIVE STYLES - Tablet (768px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 768px) {\n    /* Services Hero - Medium Tablet */\n    .services-hero__title {\n      font-size: var(--font-size-5xl);\n    }\n\n    .services-hero__description {\n      font-size: var(--font-size-xl);\n    }\n\n    .services-overview {\n      padding: var(--spacing-20) var(--spacing-6);\n    }\n\n    .services-overview__heading {\n      font-size: var(--font-size-3xl);\n    }\n\n    .service-detail {\n      padding: var(--spacing-20) var(--spacing-6);\n    }"
}
Now let me add the desktop responsive styles for the services hero:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  /* =================================================================\n   * RESPONSIVE STYLES - Desktop (1024px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 1024px) {\n    .services-overview__features {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .services-overview__cards {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    /* Service Detail Sections - Desktop */\n    .service-detail {\n      padding: var(--spacing-24) var(--spacing-8);\n    }",
  "new_string": "  /* =================================================================\n   * RESPONSIVE STYLES - Desktop (1024px+)\n   * ================================================================= */\n\n  @media screen and (min-width: 1024px) {\n    /* Services Hero - Desktop */\n    .services-hero {\n      padding: var(--spacing-24) var(--spacing-8) var(--spacing-28);\n    }\n\n    .services-hero__container {\n      grid-template-columns: 1fr 1fr;\n      gap: var(--spacing-12);\n    }\n\n    .services-hero__content {\n      align-items: flex-start;\n      text-align: left;\n    }\n\n    .services-hero__visual {\n      display: block;\n    }\n\n    .services-hero__stats {\n      align-self: flex-start;\n    }\n\n    .services-overview__features {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .services-overview__cards {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    /* Service Detail Sections - Desktop */\n    .service-detail {\n      padding: var(--spacing-24) var(--spacing-8);\n    }"
}
Now I need to add reduced motion and print styles for the services hero. Let me find those sections:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "offset": 1540,
  "limit": 100
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n\n  @media (prefers-reduced-motion: reduce) {\n    .feature-item {\n      transition: none;\n    }\n\n    .feature-item:hover {\n      transform: none;\n    }\n\n    .service-detail__icon {\n      transition: none;\n    }\n\n    .pricing-section__grid :global(.pricing-card--popular),\n    .pricing-section__grid :global(.pricing-card--popular:hover) {\n      transform: none;\n    }\n\n    .cta-section :global(.btn:hover) {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n\n  @media print {\n    .services-overview,\n    .service-detail,\n    .pricing-section,\n    .addons-section-wrapper,\n    .process-section-wrapper {\n      padding: var(--spacing-8) 0;\n    }\n\n    .cta-section {\n      display: none;\n    }\n\n    .feature-item,\n    .pricing-section__grid :global(.pricing-card--popular) {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .service-detail__cta {\n      display: none;\n    }\n  }",
  "new_string": "  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n\n  @media (prefers-reduced-motion: reduce) {\n    .services-hero__preview-card {\n      transition: none;\n    }\n\n    .services-hero__preview-card:hover {\n      transform: none;\n    }\n\n    .services-hero__cards-preview {\n      transform: none;\n    }\n\n    .feature-item {\n      transition: none;\n    }\n\n    .feature-item:hover {\n      transform: none;\n    }\n\n    .service-detail__icon {\n      transition: none;\n    }\n\n    .pricing-section__grid :global(.pricing-card--popular),\n    .pricing-section__grid :global(.pricing-card--popular:hover) {\n      transform: none;\n    }\n\n    .cta-section :global(.btn:hover) {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n\n  @media print {\n    .services-hero {\n      background: none;\n      padding: var(--spacing-8) 0;\n    }\n\n    .services-hero__visual,\n    .services-hero__decoration {\n      display: none;\n    }\n\n    .services-hero__cta-group {\n      display: none;\n    }\n\n    .services-overview,\n    .service-detail,\n    .pricing-section,\n    .addons-section-wrapper,\n    .process-section-wrapper {\n      padding: var(--spacing-8) 0;\n    }\n\n    .cta-section {\n      display: none;\n    }\n\n    .feature-item,\n    .pricing-section__grid :global(.pricing-card--popular) {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .service-detail__cta {\n      display: none;\n    }\n  }"
}
Now let me verify the changes are correct by checking the structure at the top of the file to make sure the imports are clean:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "limit": 30
}
Good - the HeroSection import has been removed. Now let me run the build to verify everything compiles correctly:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\houston-web-services\" && npm run build 2>&1 | head -50",
  "description": "Build the Astro project to verify changes",
  "timeout": 120000
}
The build completed successfully. Let me verify the generated services page to ensure the new hero section is included:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\houston-web-services\" && head -100 dist/services/index.html",
  "description": "Verify the built services page HTML"
}
The build output shows that the new services hero section is correctly rendered. I can see the HTML structure with:
- The `services-hero` section with the unique styling
- The badge with "Transparent Pricing • No Hidden Costs"
- The title "Web Solutions That Grow With Your Business"
- The stats section with "$499", "2-4 wks", and "100%"
- The visual preview cards on desktop

The implementation is complete and working. Let me provide the summary:

<summary>
## Summary: Redesign Services Page Hero Section

### Changes Implemented
- Removed the shared `HeroSection` component from the services page (which used the same blue gradient as the home page)
- Created a brand new inline hero section specifically for the services page with a unique visual identity:
  - **Light gradient background** (white to light primary, to white) instead of the dark blue home page gradient
  - **Green "Transparent Pricing" badge** at the top for immediate trust signals
  - **Split title design** with the second line highlighted in brand primary color
  - **Stats bar** showing key metrics ($499 starting, 2-4 week delivery, 100% satisfaction)
  - **Service preview cards** (visible on desktop) showing Website Design, SEO, and Maintenance with pricing
  - **Decorative background element** for visual interest
- Added complete responsive design support:
  - Mobile: Stacked layout, centered content, hidden visual cards
  - Tablet (640px+): Inline CTAs, larger typography
  - Medium Tablet (768px+): Larger titles
  - Desktop (1024px+): Two-column grid with visual preview cards
- Added reduced motion and print styles for accessibility

### Files Modified
- `src/pages/services.astro` - Complete redesign of hero section with custom inline styles

### Notes for Developer
- The services page hero now uses a light theme similar to the portfolio page approach, making it visually distinct from the home page's dark blue hero
- The visual preview cards on the right side are hidden on mobile/tablet for better performance
- All CSS uses existing design system variables for consistency
- The implementation follows BEM naming conventions used throughout the project
- Build was tested and completes successfully
</summary>