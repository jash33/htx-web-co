1. **Goal**: Remove the duplicate row of 4 service cards on the services page, keeping only one row.

2. **Approach**: First, I'll explore the services page to understand the current structure and identify where the duplicate cards are rendered. Then I'll modify the code to remove the redundant row while preserving the single row of cards.

3. **Files to Touch**:
   - Services page component (likely `src/app/services/page.tsx` or similar) - remove duplicate card section

4. **Tasks**:
   1. Locate the services page file
   2. Identify the duplicate card sections
   3. Remove the redundant row of cards
   4. Verify the remaining structure is correct

5. **Risks**:
   - Need to ensure we remove the right duplicate (keep the better styled one)
   - May need to adjust spacing/layout after removal

[PLAN_GENERATED] Planning outline complete.

🔧 Tool: Glob
Input: {
  "pattern": "**/services/**/*.{tsx,jsx,ts,js}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/services*.{tsx,jsx,ts,js}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/pages/**/*.{astro,tsx,jsx}"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro"
}
Now I can see the issue. Looking at the services page, I can identify the duplicate rows of cards:

1. **First row** (lines 390-430): The `services-overview__features` section with 4 feature items (Custom Design, Mobile First, SEO Optimized, Secure & Fast)

2. **Second row** (lines 432-446): The `services-overview__cards` section that maps over the `services` array (Website Design, SEO Optimization, Maintenance, Hosting)

The user says these 4 cards are redundant. Looking more closely, the first row shows generic features (Custom Design, Mobile First, SEO Optimized, Secure & Fast) while the second row shows the actual service offerings (Website Design, SEO Optimization, Maintenance, Hosting). 

The user specifically mentions "custom design card" being redundant, and looking at both sections, the `services-overview__features` section appears to be duplicative of the service cards. The service cards (second section) have links to the services and are more actionable, so I'll remove the first section (the 4 feature items).

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "        <div class=\"services-overview__features\">\n          <div class=\"feature-item\">\n            <div class=\"feature-item__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/>\n              </svg>\n            </div>\n            <h3 class=\"feature-item__title\">Custom Design</h3>\n            <p class=\"feature-item__description\">No templates. Every website is designed specifically for your brand and business goals.</p>\n          </div>\n\n          <div class=\"feature-item\">\n            <div class=\"feature-item__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"/>\n              </svg>\n            </div>\n            <h3 class=\"feature-item__title\">Mobile First</h3>\n            <p class=\"feature-item__description\">Every site looks perfect on phones, tablets, and desktops. Over 60% of web traffic is mobile.</p>\n          </div>\n\n          <div class=\"feature-item\">\n            <div class=\"feature-item__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\n              </svg>\n            </div>\n            <h3 class=\"feature-item__title\">SEO Optimized</h3>\n            <p class=\"feature-item__description\">Built-in search engine optimization to help your business get found by local customers.</p>\n          </div>\n\n          <div class=\"feature-item\">\n            <div class=\"feature-item__icon\" aria-hidden=\"true\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z\"/>\n              </svg>\n            </div>\n            <h3 class=\"feature-item__title\">Secure & Fast</h3>\n            <p class=\"feature-item__description\">Modern, secure code with optimized performance. Your site will be fast and protected.</p>\n          </div>\n        </div>\n\n        <!-- Services Cards Grid -->",
  "new_string": "        <!-- Services Cards Grid -->"
}
Now I'll also clean up the unused CSS styles for the `.feature-item` classes and the `.services-overview__features` grid since they're no longer used:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  .services-overview__features {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n  }\n\n  .feature-item {\n    background-color: var(--color-background-elevated);\n    padding: var(--spacing-6);\n    border-radius: var(--radius-xl);\n    border: 1px solid var(--color-border);\n    text-align: center;\n    transition:\n      box-shadow var(--duration-200) var(--ease-in-out),\n      transform var(--duration-200) var(--ease-in-out);\n  }\n\n  .feature-item:hover {\n    box-shadow: var(--shadow-md);\n    transform: translateY(-2px);\n  }\n\n  .feature-item__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-14);\n    height: var(--spacing-14);\n    margin: 0 auto var(--spacing-4);\n    background-color: var(--color-primary-50);\n    border-radius: var(--radius-lg);\n    color: var(--color-primary);\n  }\n\n  .feature-item__icon svg {\n    width: var(--spacing-7);\n    height: var(--spacing-7);\n  }\n\n  .feature-item__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0 0 var(--spacing-2) 0;\n  }\n\n  .feature-item__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    margin: 0;\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* Services Cards Grid */",
  "new_string": "  /* Services Cards Grid */"
}
Now let me also remove the unused responsive styles for `.services-overview__features` and `.feature-item`:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "    .services-overview__features {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .services-overview__cards {",
  "new_string": "    .services-overview__cards {"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "    .services-overview__features {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    .services-overview__cards {\n      grid-template-columns: repeat(4, 1fr);\n    }",
  "new_string": "    .services-overview__cards {\n      grid-template-columns: repeat(4, 1fr);\n    }"
}
Now let me also remove the unused `.feature-item` references in the reduced motion and print styles:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "    .feature-item {\n      transition: none;\n    }\n\n    .feature-item:hover {\n      transform: none;\n    }\n\n    .service-detail__icon {",
  "new_string": "    .service-detail__icon {"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "    .feature-item,\n    .pricing-section__grid :global(.pricing-card--popular) {",
  "new_string": "    .pricing-section__grid :global(.pricing-card--popular) {"
}
Now let me also remove the `margin-top` from the `.services-overview__cards` since it no longer needs to be spaced below the feature items:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "offset": 895,
  "limit": 20
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "old_string": "  /* Services Cards Grid */\n  .services-overview__cards {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n    margin-top: var(--spacing-12);\n  }",
  "new_string": "  /* Services Cards Grid */\n  .services-overview__cards {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: var(--spacing-6);\n  }"
}
The changes are complete. Let me verify the final structure of the file to ensure everything looks correct:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\services.astro",
  "offset": 378,
  "limit": 40
}
The changes are complete. The services overview section now has just one row of 4 cards (the ServiceCard components) instead of two rows.

<summary>
## Summary: Remove Duplicate Service Cards Row

### Changes Implemented
- Removed the redundant `services-overview__features` section which contained 4 feature cards (Custom Design, Mobile First, SEO Optimized, Secure & Fast)
- Kept the `services-overview__cards` section which displays the 4 actual service offerings (Website Design, SEO Optimization, Maintenance, Hosting) with proper CTAs
- Cleaned up unused CSS styles for `.services-overview__features` and `.feature-item` classes
- Removed unused responsive styles for the deleted feature grid
- Removed unused reduced motion and print styles for the deleted elements
- Removed the extra `margin-top` from the cards grid since it's no longer needed

### Files Modified
- `src/pages/services.astro` - Removed duplicate feature cards section and associated CSS

### Notes for Developer
- The services page now displays only one row of 4 service cards in the "What We Offer" section
- The remaining cards are the interactive ServiceCard components that link to the contact page with the appropriate service parameter
- All responsive behavior is preserved (1 column on mobile, 2 on tablet, 4 on desktop)
</summary>