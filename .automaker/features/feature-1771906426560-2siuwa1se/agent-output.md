Looking at the screenshots, I can clearly see the issue. In the dark mode (second image), the text in the hero section has very poor contrast - the heading "Websites That Grow Houston Businesses." appears in a dark grayish color that's nearly unreadable against the dark blue background.

Let me explore the codebase to find the hero section and understand how the styling is implemented.

🔧 Tool: Glob
Input: {
  "pattern": "**/*hero*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/components/**/*.tsx"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/app/**/*.tsx"
}
This appears to be an Astro project. Let me explore the source structure:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\types\\hero.ts"
}
Now let me look at the HeroSection component and the CSS files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\variables.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\globals.css"
}
Now let me read the HeroSection component in parts:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "limit": 400
}
Now let me read the CSS styles section of this component:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "offset": 400,
  "limit": 500
}
Let me search for the headline styling specifically, particularly looking for dark mode adjustments:

🔧 Tool: Grep
Input: {
  "pattern": "hero__headline|color-text-inverse|data-theme.*dark",
  "path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "output_mode": "content",
  "-n": true
}
I see that the headline is using `color: var(--color-text-inverse)`. Looking at the dark mode in variables.css, in dark mode `--color-text-inverse` is set to `#0f172a` which is a very dark color - essentially the same as the background! This is the problem.

Let me check what the dark mode values look like:

🔧 Tool: Grep
Input: {
  "pattern": "--color-text-inverse",
  "path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\variables.css",
  "output_mode": "content",
  "-n": true
}
I found the problem. In dark mode (line 601), `--color-text-inverse` is set to `#0f172a` (a very dark navy blue), but the hero section background remains dark even in dark mode (using the same navy gradient). So the text becomes nearly invisible!

The hero section doesn't change its dark background colors based on theme - it's designed to be dark always. This means in dark mode, the "inverse" color logic breaks down.

The solution is to add specific dark mode overrides for the hero section to ensure the text remains white/light colored regardless of the theme, since the hero background stays dark.

Let me read more of the HeroSection styles to see if there are any dark mode overrides already:

🔧 Tool: Grep
Input: {
  "pattern": "data-theme.*dark|html\\[data-theme",
  "path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "output_mode": "content",
  "-n": true
}
There are no dark mode overrides in the HeroSection component. Let me look at the end of the file to see all the styles:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "offset": 2300,
  "limit": 500
}
I can see the file ends at line 2504. Now I understand the problem completely:

1. The hero section has a dark navy background (using primary-700, 800, 900 colors)
2. The text uses `var(--color-text-inverse)` which is white (#ffffff) in light mode
3. In dark mode, `--color-text-inverse` becomes `#0f172a` (dark navy) - which was designed for text that should be dark on light backgrounds when in dark mode
4. But the hero section's background stays the same dark color in both modes, so the text becomes unreadable in dark mode

The fix is to add dark mode overrides in the HeroSection component that explicitly set the text colors to light values (white/light colors) regardless of theme, since the hero background is always dark.

Let me add the dark mode styles. I'll add them right before the closing `</style>` tag:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "old_string": "  @media print {\n    .hero {\n      min-height: auto;\n      padding: var(--spacing-8) 0;\n      background: transparent;\n      color: var(--color-text-primary);\n      animation: none;\n    }\n\n    .hero::before {\n      display: none;\n    }\n\n    .hero__headline,\n    .hero__value-prop,\n    .hero__subheadline,\n    .hero__location-text {\n      color: var(--color-text-primary);\n      animation: none;\n    }\n\n    .hero__value-prop,\n    .hero__subheadline {\n      background: transparent;\n      border: 1px solid var(--color-border);\n    }\n\n    .hero__background,\n    .hero__skyline,\n    .hero__accent-shape,\n    .hero__mockup,\n    .hero__mockup-float,\n    .hero__orbs,\n    .hero__grid-bg {\n      display: none;\n    }\n\n    .hero__cta-wrapper {\n      display: none;\n    }\n  }\n</style>",
  "new_string": "  @media print {\n    .hero {\n      min-height: auto;\n      padding: var(--spacing-8) 0;\n      background: transparent;\n      color: var(--color-text-primary);\n      animation: none;\n    }\n\n    .hero::before {\n      display: none;\n    }\n\n    .hero__headline,\n    .hero__value-prop,\n    .hero__subheadline,\n    .hero__location-text {\n      color: var(--color-text-primary);\n      animation: none;\n    }\n\n    .hero__value-prop,\n    .hero__subheadline {\n      background: transparent;\n      border: 1px solid var(--color-border);\n    }\n\n    .hero__background,\n    .hero__skyline,\n    .hero__accent-shape,\n    .hero__mockup,\n    .hero__mockup-float,\n    .hero__orbs,\n    .hero__grid-bg {\n      display: none;\n    }\n\n    .hero__cta-wrapper {\n      display: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE OVERRIDES\n   * The hero section has a dark background in both light and dark modes,\n   * so we need to ensure text remains light/visible regardless of theme.\n   * The CSS variable --color-text-inverse changes to dark in dark mode,\n   * which breaks contrast on this always-dark section.\n   * =================================================================\n   */\n\n  :global(html[data-theme=\"dark\"]) .hero__headline {\n    color: #f8fafc; /* slate-50 - explicit light color for dark backgrounds */\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__value-prop {\n    color: #e2e8f0; /* slate-200 - slightly muted but still high contrast */\n    background: rgba(255, 255, 255, 0.08);\n    border-color: rgba(255, 255, 255, 0.12);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__subheadline {\n    color: #f1f5f9; /* slate-100 - high contrast for readability */\n    background: rgba(255, 255, 255, 0.06);\n    border-left-color: var(--color-primary-300);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__subheadline-icon {\n    color: var(--color-primary-300);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__location-text {\n    color: #f8fafc;\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__location-icon {\n    color: var(--color-primary-200);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__coordinates {\n    color: var(--color-primary-200);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__trust-badge {\n    color: #e2e8f0;\n    background: rgba(255, 255, 255, 0.08);\n    border-color: rgba(255, 255, 255, 0.12);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero__trust-badge-icon {\n    color: var(--color-primary-300);\n  }\n\n  /* Ensure CTA buttons maintain proper contrast in dark mode */\n  :global(html[data-theme=\"dark\"]) .hero :global(.btn--primary) {\n    background-color: #f8fafc;\n    color: var(--color-primary-700);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero :global(.btn--primary:hover:not(.btn--disabled)) {\n    background-color: #ffffff;\n    color: var(--color-primary-800);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero :global(.btn--secondary) {\n    color: #f8fafc;\n    border-color: rgba(255, 255, 255, 0.4);\n  }\n\n  :global(html[data-theme=\"dark\"]) .hero :global(.btn--secondary:hover:not(.btn--disabled)) {\n    color: #ffffff;\n    border-color: rgba(255, 255, 255, 0.7);\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n</style>"
}
Now let me verify the changes were applied correctly by reading the end of the file:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "offset": 2500,
  "limit": 150
}
The changes have been applied successfully. Let me also check if there might be other elements in the hero section that need dark mode treatment by looking at the browser mockup section, which also appears in the screenshots:

🔧 Tool: Grep
Input: {
  "pattern": "hero__browser-chrome|hero__mock-|hero__browser-content",
  "path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro",
  "output_mode": "content",
  "-n": true,
  "head_limit": 50
}
Looking at the screenshots again, I notice the browser mockup inside the hero section looks fine in dark mode - it's the main text content on the left side that's the issue. The mockup appears to be using its own internal styles that don't rely on `--color-text-inverse`.

Let me verify the fix covers all the main text elements visible in the dark mode screenshot. Looking at the second image, the problematic elements are:
1. The main headline "Websites That Grow Houston Businesses." - ✅ Fixed with `.hero__headline`
2. The value proposition box (Fast-loading, search-friendly...) - ✅ Fixed with `.hero__value-prop`
3. The subheadline with the code icon - ✅ Fixed with `.hero__subheadline`
4. The CTA buttons - ✅ Fixed with button overrides
5. Trust badges (10+ Years Experience, etc.) - ✅ Fixed with `.hero__trust-badge`
6. Location cue text - ✅ Fixed with `.hero__location-text`

The fix should be complete. Let me run a build or type check to make sure there are no errors:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\houston-web-services\" && npm run build 2>&1 | head -50",
  "description": "Build the Astro project to verify changes",
  "timeout": 120000
}
The build completed successfully with no errors. The CSS changes are valid and the project builds correctly.

<summary>
## Summary: Hero Section Dark Mode Contrast Fix

### Problem
The homepage hero section was unreadable in dark mode due to poor text contrast. The text was using `var(--color-text-inverse)` which correctly displays as white (#ffffff) in light mode but changes to dark navy (#0f172a) in dark mode. Since the hero section maintains a dark navy gradient background regardless of theme, the dark text became nearly invisible against the dark background.

### Changes Implemented
- Added comprehensive dark mode overrides at the end of the HeroSection.astro component's `<style>` block
- Explicitly set all hero text elements to use light colors (slate-50, slate-100, slate-200) in dark mode
- Fixed the following elements for dark mode:
  - Main headline (`.hero__headline`)
  - Value proposition box (`.hero__value-prop`)
  - Subheadline with icon (`.hero__subheadline`, `.hero__subheadline-icon`)
  - Location cue text and icons (`.hero__location-text`, `.hero__location-icon`, `.hero__coordinates`)
  - Trust badges (`.hero__trust-badge`, `.hero__trust-badge-icon`)
  - CTA buttons (both primary and secondary variants, including hover states)

### Files Modified
- `src/components/HeroSection.astro` - Added ~70 lines of dark mode CSS overrides

### Notes for Developer
- The fix uses Astro's `:global()` selector combined with the `html[data-theme="dark"]` attribute selector to properly scope styles
- Colors use explicit hex values (like #f8fafc) rather than CSS variables to ensure they aren't overridden by the dark mode variable system
- The browser mockup section inside the hero already had proper internal styling and didn't need modification
- Build verified successful with no errors
</summary>