# Planning Outline

1. **Goal**: Add the same load animations from the home page to the services and portfolio pages.

2. **Approach**: First, I'll explore the home page to understand what animations are being used on load. Then I'll identify the services and portfolio pages and apply the same animation patterns to their components, ensuring consistency across the site.

3. **Files to Touch**:
   - Home page component (to understand existing animations)
   - Services page component (add animations)
   - Portfolio page component (add animations)
   - Possibly shared animation utilities/CSS if they exist

4. **Tasks**:
   1. Explore the home page to identify the load animations
   2. Find the services page and understand its structure
   3. Find the portfolio page and understand its structure
   4. Apply the same animation patterns to the services page
   5. Apply the same animation patterns to the portfolio page
   6. Verify consistency in animation implementation

5. **Risks**:
   - Animation library dependencies may need to be imported
   - Different page structures may require adapted animation approaches
   - CSS classes or animation utilities might be page-specific

[PLAN_GENERATED] Planning outline complete.

Now let me explore the codebase to understand the existing animations and page structures.

🔧 Tool: Glob
Input: {
  "pattern": "**/*{home,Home,index}*.{tsx,jsx,js,ts}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*{service,Service}*.{tsx,jsx,js,ts}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*{portfolio,Portfolio}*.{tsx,jsx,js,ts}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/pages/**/*.{tsx,jsx,js,ts}"
}
Let me explore the source directory structure more comprehensively:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{astro,tsx,jsx}"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\"",
  "description": "List source directory structure"
}
Now let me read the home page (index.astro) to understand the animations being used:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\portfolio.astro"
}
Now let me look at the HeroSection component from the home page to understand the load animations being used:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro"
}
Now I understand the animations on the home page. The HeroSection uses a `heroFadeIn` animation that creates a staggered fade-in effect where elements fade in from below with different delays. The key animations are:

1. **`heroFadeIn`**: Elements fade in from 20px below with opacity transition (0.6s ease-out)
2. **Staggered delays**: Headline (0.1s), value-prop (0.2s), subheadline (0.3s), cta-wrapper (0.4s), location-cue and trust-badges (0.5s)
3. **`gradientShift`**: Background gradient animation
4. **`mockupSlideIn`**: Browser mockup slides in from the right
5. **`accentFloat`**: Decorative element floating animation

Now I need to add similar animations to the services and portfolio pages. Let me add these animations to both pages:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  .services-hero {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4) var(--spacing-20);\n    background: linear-gradient(\n      135deg,\n      var(--color-background) 0%,\n      var(--color-primary-50) 50%,\n      var(--color-background) 100%\n    );\n    overflow: hidden;\n  }",
  "new_string": "  .services-hero {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4) var(--spacing-20);\n    background: linear-gradient(\n      135deg,\n      var(--color-background) 0%,\n      var(--color-primary-50) 50%,\n      var(--color-background) 100%\n    );\n    background-size: 200% 200%;\n    animation: gradientShift 15s ease infinite;\n    overflow: hidden;\n  }"
}
Now let me add the animation keyframes and apply the staggered fade-in animations to the services page hero elements. I need to add the keyframes and the animation classes:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n\n  @media (prefers-reduced-motion: reduce) {\n    .services-hero__preview-card {\n      transition: none;\n    }\n\n    .services-hero__preview-card:hover {\n      transform: none;\n    }\n\n    .services-hero__cards-preview {\n      transform: none;\n    }\n\n    .service-detail__icon {\n      transition: none;\n    }\n\n    .pricing-section__grid :global(.pricing-card--popular),\n    .pricing-section__grid :global(.pricing-card--popular:hover) {\n      transform: none;\n    }\n\n    .cta-section :global(.btn:hover) {\n      transform: none;\n    }\n  }",
  "new_string": "  /* =================================================================\n   * ANIMATIONS\n   * ================================================================= */\n\n  @keyframes gradientShift {\n    0%, 100% { background-position: 0% 50%; }\n    50% { background-position: 100% 50%; }\n  }\n\n  @keyframes heroFadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes cardsSlideIn {\n    from {\n      opacity: 0;\n      transform: translateX(40px) perspective(1000px) rotateY(-5deg) rotateX(2deg);\n    }\n    to {\n      opacity: 1;\n      transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);\n    }\n  }\n\n  /* Hero section staggered animations */\n  .services-hero__badge {\n    animation: heroFadeIn 0.6s ease-out 0.1s backwards;\n  }\n\n  .services-hero__title {\n    animation: heroFadeIn 0.6s ease-out 0.2s backwards;\n  }\n\n  .services-hero__description {\n    animation: heroFadeIn 0.6s ease-out 0.3s backwards;\n  }\n\n  .services-hero__cta-group {\n    animation: heroFadeIn 0.6s ease-out 0.4s backwards;\n  }\n\n  .services-hero__stats {\n    animation: heroFadeIn 0.6s ease-out 0.5s backwards;\n  }\n\n  .services-hero__cards-preview {\n    animation: cardsSlideIn 0.8s ease-out 0.3s backwards;\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n\n  @media (prefers-reduced-motion: reduce) {\n    .services-hero {\n      animation: none;\n    }\n\n    .services-hero__badge,\n    .services-hero__title,\n    .services-hero__description,\n    .services-hero__cta-group,\n    .services-hero__stats,\n    .services-hero__cards-preview {\n      animation: none;\n    }\n\n    .services-hero__preview-card {\n      transition: none;\n    }\n\n    .services-hero__preview-card:hover {\n      transform: none;\n    }\n\n    .services-hero__cards-preview {\n      transform: none;\n    }\n\n    .service-detail__icon {\n      transition: none;\n    }\n\n    .pricing-section__grid :global(.pricing-card--popular),\n    .pricing-section__grid :global(.pricing-card--popular:hover) {\n      transform: none;\n    }\n\n    .cta-section :global(.btn:hover) {\n      transform: none;\n    }\n  }"
}
Now let me add the same animations to the portfolio page:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\portfolio.astro",
  "old_string": "  .portfolio-hero {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4) var(--spacing-20);\n    background: linear-gradient(\n      135deg,\n      var(--color-background) 0%,\n      var(--color-primary-50) 50%,\n      var(--color-background) 100%\n    );\n    overflow: hidden;\n  }",
  "new_string": "  .portfolio-hero {\n    position: relative;\n    padding: var(--spacing-16) var(--spacing-4) var(--spacing-20);\n    background: linear-gradient(\n      135deg,\n      var(--color-background) 0%,\n      var(--color-primary-50) 50%,\n      var(--color-background) 100%\n    );\n    background-size: 200% 200%;\n    animation: gradientShift 15s ease infinite;\n    overflow: hidden;\n  }"
}
Now let me add the animation keyframes and staggered animations to the portfolio page:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\portfolio.astro",
  "old_string": "  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n\n  @media (prefers-reduced-motion: reduce) {\n    .portfolio-hero__preview-card {\n      transition: none;\n    }\n\n    .portfolio-hero__preview-card:hover {\n      transform: none;\n    }\n\n    .portfolio-hero__cards-preview {\n      transform: none;\n    }\n  }",
  "new_string": "  /* =================================================================\n   * ANIMATIONS\n   * ================================================================= */\n\n  @keyframes gradientShift {\n    0%, 100% { background-position: 0% 50%; }\n    50% { background-position: 100% 50%; }\n  }\n\n  @keyframes heroFadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes cardsSlideIn {\n    from {\n      opacity: 0;\n      transform: translateX(40px) perspective(1000px) rotateY(-5deg) rotateX(2deg);\n    }\n    to {\n      opacity: 1;\n      transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);\n    }\n  }\n\n  /* Hero section staggered animations */\n  .portfolio-hero__badge {\n    animation: heroFadeIn 0.6s ease-out 0.1s backwards;\n  }\n\n  .portfolio-hero__title {\n    animation: heroFadeIn 0.6s ease-out 0.2s backwards;\n  }\n\n  .portfolio-hero__description {\n    animation: heroFadeIn 0.6s ease-out 0.3s backwards;\n  }\n\n  .portfolio-hero__cta-group {\n    animation: heroFadeIn 0.6s ease-out 0.4s backwards;\n  }\n\n  .portfolio-hero__stats {\n    animation: heroFadeIn 0.6s ease-out 0.5s backwards;\n  }\n\n  .portfolio-hero__cards-preview {\n    animation: cardsSlideIn 0.8s ease-out 0.3s backwards;\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n\n  @media (prefers-reduced-motion: reduce) {\n    .portfolio-hero {\n      animation: none;\n    }\n\n    .portfolio-hero__badge,\n    .portfolio-hero__title,\n    .portfolio-hero__description,\n    .portfolio-hero__cta-group,\n    .portfolio-hero__stats,\n    .portfolio-hero__cards-preview {\n      animation: none;\n    }\n\n    .portfolio-hero__preview-card {\n      transition: none;\n    }\n\n    .portfolio-hero__preview-card:hover {\n      transform: none;\n    }\n\n    .portfolio-hero__cards-preview {\n      transform: none;\n    }\n  }"
}
The animations have been added to both pages. Let me verify the changes look correct by reading the modified sections:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "offset": 645,
  "limit": 30
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\portfolio.astro",
  "offset": 425,
  "limit": 30
}
Both pages now have the animations properly applied. Let me also verify the print styles are still intact:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\portfolio.astro",
  "offset": 798,
  "limit": 25
}
The implementation is complete. Both the services and portfolio pages now have the same load animations as the home page.

<summary>
## Summary: Add Home Page Load Animations to Services and Portfolio Pages

### Changes Implemented
- Added gradient shift animation to the hero section backgrounds on both pages (subtle 15s infinite color gradient movement)
- Added staggered fade-in animations to hero section elements:
  - Badge: 0.1s delay
  - Title: 0.2s delay  
  - Description: 0.3s delay
  - CTA group: 0.4s delay
  - Stats: 0.5s delay
- Added slide-in animation for the preview cards visual (slides in from right with 0.8s duration)
- Added proper reduced motion support that disables all animations when users prefer reduced motion
- Maintained print styles compatibility

### Files Modified
- `src/pages/services.astro` - Added gradientShift, heroFadeIn, and cardsSlideIn animations with staggered delays on hero elements
- `src/pages/portfolio.astro` - Added the same animation patterns to match the home page experience

### Notes for Developer
- The animations follow the exact same pattern as the home page's HeroSection component (`heroFadeIn` keyframes with 0.6s ease-out timing)
- All animations are properly disabled for users who prefer reduced motion (`prefers-reduced-motion: reduce` media query)
- The background gradient now animates subtly (200% 200% background-size with gradientShift keyframe)
- Preview cards use the same slide-in effect as the browser mockup on the home page
</summary>