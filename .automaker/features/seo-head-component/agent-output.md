🔧 Tool: Task
Input: {
"description": "Explore codebase structure",
"prompt": "Explore this codebase to understand its structure, particularly:\n1. What framework is being used (React, Next.js, Vue, etc.)?\n2. What is the project structure and directory layout?\n3. Are there any existing SEO-related components or utilities?\n4. What styling approach is used?\n5. Is TypeScript being used?\n6. Are there any existing patterns for head/meta tag management?\n\nLook at package.json, tsconfig.json (if exists), and the main source directories to understand the project setup. Provide a comprehensive summary of findings.",
"subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\package.json"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\" | head -30",
"description": "List directory contents to understand project structure"
}

🔧 Tool: Glob
Input: {
"pattern": "\*_/_.json",
"path": "C:\\Users\\James\\Repos\\houston-web-services"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\tsconfig.json"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\astro.config.mjs"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\"",
"description": "List src directory structure"
}

🔧 Tool: Bash
Input: {
"command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\src\" -type f -name \"_.ts\" -o -name \"_.tsx\" -o -name \"_.astro\" -o -name \"_.js\" -o -name \"\*.jsx\" | head -50",
"description": "Find all source files in src directory"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\"",
"description": "List files in pages directory"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\\components\"",
"description": "List files in components directory"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\"",
"description": "List files in layouts directory"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Welcome.astro"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\\assets\"",
"description": "List assets directory"
}

🔧 Tool: Bash
Input: {
"command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\src\" -type d",
"description": "Find all directories in src"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\README.md"
}

🔧 Tool: Bash
Input: {
"command": "find \"C:\\Users\\James\\Repos\\houston-web-services\" -maxdepth 1 -type f -name \".\*\" | grep -v \"^\\.\" | head -20",
"description": "Find configuration files in root"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\public\"",
"description": "List public directory"
}

🔧 Tool: Grep
Input: {
"pattern": "astro|react|vue|next|typescript",
"path": "C:\\Users\\James\\Repos\\houston-web-services",
"type": "json",
"head_limit": 5
}

🔧 Tool: Bash
Input: {
"command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\.automaker\" -type f",
"description": "Find all files in automaker directory"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.automaker\\features\\sitemap-robots-generation\\feature.json"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.automaker\\features\\homepage-hero\\feature.json"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.automaker\\features\\seo-head-component\\feature.json"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.automaker\\features\\local-business-schema\\feature.json"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.automaker\\app_spec.txt"
}

🔧 Tool: Bash
Input: {
"command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\src\" -type f \\( -name \"_.css\" -o -name \"_.scss\" -o -name \"\*.less\" \\)",
"description": "Find styling files in src directory"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\scripts\"",
"description": "List scripts directory if it exists"
}

🔧 Tool: Bash
Input: {
"command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\tests\"",
"description": "List tests directory"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.automaker\\features\\header-navigation\\feature.json"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.automaker\\features\\css-variables-typography\\feature.json"
}
Now I have a good understanding of the codebase. This is an **Astro 5.x** project with TypeScript in strict mode. Let me plan and implement the SEO Head component.

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\index.astro"
}
Now let me create a comprehensive SEO component. I'll create the following files:

1. `src/components/SEO.astro` - The main SEO component
2. `src/types/seo.ts` - TypeScript types for SEO props
3. `src/config/seo.config.ts` - Default SEO configuration

🔧 Tool: TodoWrite
Input: {
"todos": [
{
"content": "Create TypeScript types for SEO props",
"status": "in_progress",
"activeForm": "Creating TypeScript types for SEO props"
},
{
"content": "Create SEO configuration with defaults",
"status": "pending",
"activeForm": "Creating SEO configuration with defaults"
},
{
"content": "Create main SEO.astro component",
"status": "pending",
"activeForm": "Creating main SEO.astro component"
},
{
"content": "Create JSON-LD schema generators",
"status": "pending",
"activeForm": "Creating JSON-LD schema generators"
},
{
"content": "Update Layout.astro to use SEO component",
"status": "pending",
"activeForm": "Updating Layout.astro to use SEO component"
},
{
"content": "Create usage documentation",
"status": "pending",
"activeForm": "Creating usage documentation"
}
]
}

🔧 Tool: Bash
Input: {
"command": "mkdir -p \"C:\\Users\\James\\Repos\\houston-web-services\\src\\types\" \"C:\\Users\\James\\Repos\\houston-web-services\\src\\config\"",
"description": "Create types and config directories"
}

🔧 Tool: Write
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\types\\seo.ts",
"content": "/**\n _ SEO Component TypeScript Types\n _ Provides type definitions for all SEO-related metadata\n \*/\n\n/**\n _ Standard meta tag configuration\n _/\nexport interface MetaTags {\n /** Page title - will be combined with site name using titleTemplate \*/\n title: string;\n /** Meta description for search engines (recommended: 150-160 characters) _/\n description: string;\n /\*\* Meta keywords (comma-separated, optional as modern SEO relies less on this) _/\n keywords?: string;\n /** Robots directive (e.g., 'index, follow', 'noindex, nofollow') \*/\n robots?: string;\n /** Author of the content _/\n author?: string;\n}\n\n/\*\*\n _ Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)\n _/\nexport interface OpenGraphTags {\n /\*\* og:title - Title for social sharing (defaults to meta title) _/\n title?: string;\n /** og:description - Description for social sharing (defaults to meta description) \*/\n description?: string;\n /** og:image - Image URL for social sharing (must be absolute URL) _/\n image?: string;\n /\*\* og:image:alt - Alt text for the og:image _/\n imageAlt?: string;\n /** og:image:width - Width of the og:image in pixels \*/\n imageWidth?: number;\n /** og:image:height - Height of the og:image in pixels _/\n imageHeight?: number;\n /\*\* og:url - Canonical URL for the page _/\n url?: string;\n /** og:type - Type of content (website, article, product, etc.) \*/\n type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'video.movie' | 'video.episode';\n /** og:site_name - Name of the website _/\n siteName?: string;\n /\*\* og:locale - Locale in format language_TERRITORY (e.g., 'en_US') _/\n locale?: string;\n /** og:locale:alternate - Array of alternate locales \*/\n localeAlternate?: string[];\n}\n\n/**\n _ Twitter Card metadata\n _/\nexport interface TwitterTags {\n /** twitter:card - Card type (summary, summary_large_image, app, player) \*/\n card?: 'summary' | 'summary_large_image' | 'app' | 'player';\n /** twitter:site - @username of the website _/\n site?: string;\n /\*\* twitter:creator - @username of content creator _/\n creator?: string;\n /** twitter:title - Title for Twitter (defaults to og:title or meta title) \*/\n title?: string;\n /** twitter:description - Description for Twitter (defaults to og:description or meta description) _/\n description?: string;\n /\*\* twitter:image - Image URL for Twitter (defaults to og:image) _/\n image?: string;\n /** twitter:image:alt - Alt text for the twitter:image \*/\n imageAlt?: string;\n}\n\n/**\n _ Language and locale configuration for international SEO\n _/\nexport interface LanguageConfig {\n /** HTML lang attribute (e.g., 'en', 'es', 'fr') \*/\n lang?: string;\n /** hreflang alternate language versions _/\n alternateLanguages?: Array<{\n /\*\* Language code (e.g., 'en', 'es', 'x-default') _/\n hreflang: string;\n /** URL of the alternate version \*/\n href: string;\n }>;\n}\n\n/**\n _ Article-specific structured data\n _/\nexport interface ArticleSchema {\n type: 'Article' | 'NewsArticle' | 'BlogPosting';\n /** Article headline \*/\n headline: string;\n /** Article description _/\n description?: string;\n /\*\* Author name or array of author names _/\n author: string | string[];\n /** Date the article was published (ISO 8601) \*/\n datePublished: string;\n /** Date the article was last modified (ISO 8601) _/\n dateModified?: string;\n /\*\* Featured image URL _/\n image?: string | string[];\n /** Publisher information \*/\n publisher?: {\n name: string;\n logo?: string;\n };\n /** Article section/category _/\n articleSection?: string;\n /\*\* Word count _/\n wordCount?: number;\n}\n\n/**\n _ Organization structured data\n _/\nexport interface OrganizationSchema {\n type: 'Organization' | 'LocalBusiness';\n /** Organization name _/\n name: string;\n /\*\* Organization description _/\n description?: string;\n /** Organization website URL \*/\n url?: string;\n /** Organization logo URL _/\n logo?: string;\n /\*\* Contact information _/\n contactPoint?: {\n telephone?: string;\n email?: string;\n contactType?: string;\n };\n /** Social media profile URLs \*/\n sameAs?: string[];\n /** Physical address _/\n address?: {\n streetAddress?: string;\n addressLocality?: string;\n addressRegion?: string;\n postalCode?: string;\n addressCountry?: string;\n };\n}\n\n/\*\*\n _ Product structured data\n _/\nexport interface ProductSchema {\n type: 'Product';\n /\*\* Product name _/\n name: string;\n /** Product description \*/\n description?: string;\n /** Product image URL(s) _/\n image?: string | string[];\n /\*\* Product brand _/\n brand?: string;\n /** Product SKU \*/\n sku?: string;\n /** Price and availability _/\n offers?: {\n price: number;\n priceCurrency: string;\n availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n url?: string;\n validFrom?: string;\n priceValidUntil?: string;\n };\n /\*\* Aggregate rating _/\n aggregateRating?: {\n ratingValue: number;\n reviewCount: number;\n };\n}\n\n/**\n _ Breadcrumb structured data\n _/\nexport interface BreadcrumbSchema {\n type: 'BreadcrumbList';\n /** Array of breadcrumb items in order _/\n items: Array<{\n /\*\* Display name of the breadcrumb _/\n name: string;\n /** URL of the breadcrumb (optional for last item) \*/\n url?: string;\n }>;\n}\n\n/**\n _ WebPage structured data\n _/\nexport interface WebPageSchema {\n type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';\n /** Page name \*/\n name: string;\n /** Page description _/\n description?: string;\n /\*\* Page URL _/\n url?: string;\n /** Last reviewed date \*/\n lastReviewed?: string;\n /** Primary image _/\n primaryImageOfPage?: string;\n}\n\n/\*\*\n _ Union type for all supported JSON-LD schema types\n _/\nexport type JsonLdSchema =\n | ArticleSchema\n | OrganizationSchema\n | ProductSchema\n | BreadcrumbSchema\n | WebPageSchema;\n\n/\*\*\n _ Custom meta tag definition\n _/\nexport interface CustomMetaTag {\n /\*\* Meta tag name attribute (mutually exclusive with property and httpEquiv) _/\n name?: string;\n /** Meta tag property attribute (for Open Graph) \*/\n property?: string;\n /** Meta tag http-equiv attribute _/\n httpEquiv?: string;\n /\*\* Meta tag content _/\n content: string;\n}\n\n/**\n _ Main SEO component props\n _/\nexport interface SEOProps {\n // === Required Props ===\n /** Page title (required) _/\n title: string;\n /\*\* Meta description (required, recommended: 150-160 characters) _/\n description: string;\n\n // === Optional Standard Meta Tags ===\n /** Meta keywords (comma-separated) \*/\n keywords?: string;\n /** Robots directive _/\n robots?: string;\n /\*\* Content author _/\n author?: string;\n\n // === URL Configuration ===\n /** Canonical URL for the page \*/\n canonicalUrl?: string;\n /** Base URL for the site (used to make image URLs absolute) _/\n siteUrl?: string;\n\n // === Open Graph Configuration ===\n /\*\* Open Graph tags configuration _/\n openGraph?: OpenGraphTags;\n\n // === Twitter Configuration ===\n /** Twitter Card tags configuration \*/\n twitter?: TwitterTags;\n\n // === Structured Data ===\n /** JSON-LD structured data schema(s) _/\n jsonLd?: JsonLdSchema | JsonLdSchema[];\n\n // === Language & Locale ===\n /\*\* HTML lang attribute _/\n lang?: string;\n /** Alternate language versions for hreflang \*/\n alternateLanguages?: LanguageConfig['alternateLanguages'];\n\n // === Title Configuration ===\n /** Title template (use %s as placeholder for title) _/\n titleTemplate?: string;\n /\*\* Whether to disable the title template for this page _/\n noTitleTemplate?: boolean;\n\n // === Image Configuration ===\n /** Default/fallback image for social sharing \*/\n image?: string;\n /** Alt text for the default image _/\n imageAlt?: string;\n\n // === Additional Configuration ===\n /\*\* Custom additional meta tags _/\n additionalMetaTags?: CustomMetaTag[];\n /** Additional link tags \*/\n additionalLinkTags?: Array<{\n rel: string;\n href: string;\n hreflang?: string;\n type?: string;\n sizes?: string;\n }>;\n\n // === Charset & Viewport (usually use defaults) ===\n /** Charset (default: 'UTF-8') _/\n charset?: string;\n /\*\* Viewport content (default: 'width=device-width, initial-scale=1') _/\n viewport?: string;\n\n // === Theme & App Configuration ===\n /** Theme color for browsers \*/\n themeColor?: string;\n /** Apple mobile web app title _/\n appleMobileWebAppTitle?: string;\n /\*\* Application name _/\n applicationName?: string;\n}\n\n/**\n _ Site-wide SEO defaults configuration\n _/\nexport interface SEOConfig {\n /** Site name used in title template and og:site_name _/\n siteName: string;\n /\*\* Base URL of the site _/\n siteUrl: string;\n /** Default title template \*/\n titleTemplate: string;\n /** Default meta description _/\n defaultDescription: string;\n /\*\* Default language _/\n defaultLang: string;\n /** Default locale for Open Graph \*/\n defaultLocale: string;\n /** Default image for social sharing _/\n defaultImage: string;\n /\*\* Default image alt text _/\n defaultImageAlt: string;\n /** Twitter @username for the site \*/\n twitterSite?: string;\n /** Default Twitter card type _/\n twitterCardType: TwitterTags['card'];\n /\*\* Default Open Graph type _/\n defaultOgType: OpenGraphTags['type'];\n /** Default robots directive \*/\n defaultRobots: string;\n /** Theme color _/\n themeColor?: string;\n /\*\* Organization information for structured data _/\n organization?: OrganizationSchema;\n}\n"
}

🔧 Tool: TodoWrite
Input: {
"todos": [
{
"content": "Create TypeScript types for SEO props",
"status": "completed",
"activeForm": "Creating TypeScript types for SEO props"
},
{
"content": "Create SEO configuration with defaults",
"status": "in_progress",
"activeForm": "Creating SEO configuration with defaults"
},
{
"content": "Create main SEO.astro component",
"status": "pending",
"activeForm": "Creating main SEO.astro component"
},
{
"content": "Create JSON-LD schema generators",
"status": "pending",
"activeForm": "Creating JSON-LD schema generators"
},
{
"content": "Update Layout.astro to use SEO component",
"status": "pending",
"activeForm": "Updating Layout.astro to use SEO component"
},
{
"content": "Create usage documentation",
"status": "pending",
"activeForm": "Creating usage documentation"
}
]
}

🔧 Tool: Write
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\config\\seo.config.ts",
"content": "/**\n _ SEO Configuration\n _ Default values for SEO metadata across the site\n _ Override these values per-page as needed\n _/\n\nimport type { SEOConfig } from '../types/seo';\n\n/**\n _ Default SEO configuration for the entire site\n _ These values are used as fallbacks when page-specific values are not provided\n _/\nexport const seoConfig: SEOConfig = {\n // Site Identity\n siteName: 'Houston Web Services',\n siteUrl: 'https://houstonwebservices.com', // Update with actual domain\n\n // Title Configuration\n titleTemplate: '%s | Houston Web Services',\n\n // Default Meta Content\n defaultDescription:\n 'Professional web design and development services for small businesses in West Houston. Custom websites, SEO optimization, and digital solutions.',\n defaultLang: 'en',\n defaultLocale: 'en_US',\n\n // Default Social Sharing Image\n defaultImage: '/images/og-default.jpg', // Create this image (1200x630 recommended)\n defaultImageAlt: 'Houston Web Services - Professional Web Design',\n\n // Twitter Configuration\n twitterSite: undefined, // Add @username when available\n twitterCardType: 'summary_large_image',\n\n // Open Graph Defaults\n defaultOgType: 'website',\n\n // Search Engine Directives\n defaultRobots: 'index, follow',\n\n // Theme\n themeColor: '#1a365d', // Navy blue - update to match brand\n\n // Organization Schema (for JSON-LD)\n organization: {\n type: 'LocalBusiness',\n name: 'Houston Web Services',\n description:\n 'Professional web design and development services for small businesses in West Houston, including the Energy Corridor, Katy, and Memorial areas.',\n url: 'https://houstonwebservices.com',\n logo: 'https://houstonwebservices.com/images/logo.svg',\n contactPoint: {\n telephone: undefined, // Add phone number when available\n email: undefined, // Add email when available\n contactType: 'customer service',\n },\n sameAs: [\n // Add social media URLs when available\n // 'https://www.facebook.com/houstonwebservices',\n // 'https://www.linkedin.com/company/houstonwebservices',\n // 'https://twitter.com/houstonwebsvc',\n ],\n address: {\n addressLocality: 'Houston',\n addressRegion: 'TX',\n postalCode: '77077',\n addressCountry: 'US',\n },\n },\n};\n\n/\*\*\n _ Maximum lengths for meta content (for truncation)\n _/\nexport const SEO_LIMITS = {\n /\*\* Maximum title length (Google typically shows ~60 characters) _/\n TITLE_MAX_LENGTH: 60,\n /** Maximum description length (Google typically shows ~160 characters) \*/\n DESCRIPTION_MAX_LENGTH: 160,\n /** Recommended minimum description length _/\n DESCRIPTION_MIN_LENGTH: 50,\n /\*\* Maximum Open Graph title length _/\n OG_TITLE_MAX_LENGTH: 95,\n /** Maximum Open Graph description length \*/\n OG_DESCRIPTION_MAX_LENGTH: 200,\n /** Maximum Twitter title length _/\n TWITTER_TITLE_MAX_LENGTH: 70,\n /\*\* Maximum Twitter description length _/\n TWITTER_DESCRIPTION_MAX_LENGTH: 200,\n} as const;\n\n/**\n _ Truncate text to a maximum length with ellipsis\n _ @param text - Text to truncate\n _ @param maxLength - Maximum length\n _ @returns Truncated text\n _/\nexport function truncateText(text: string, maxLength: number): string {\n if (!text || text.length <= maxLength) {\n return text;\n }\n // Find the last space before maxLength to avoid cutting words\n const truncated = text.substring(0, maxLength - 3);\n const lastSpace = truncated.lastIndexOf(' ');\n if (lastSpace > maxLength _ 0.7) {\n return truncated.substring(0, lastSpace) + '...';\n }\n return truncated + '...';\n}\n\n/**\n _ Escape special characters for use in HTML/meta content\n _ @param text - Text to escape\n _ @returns Escaped text\n _/\nexport function escapeHtml(text: string): string {\n if (!text) return '';\n return text\n .replace(/&/g, '&amp;')\n .replace(/</g, '&lt;')\n .replace(/>/g, '&gt;')\n .replace(/\"/g, '&quot;')\n .replace(/'/g, '&#039;');\n}\n\n/**\n _ Convert a relative URL to an absolute URL\n _ @param url - URL to convert\n _ @param baseUrl - Base URL of the site\n _ @returns Absolute URL\n \*/\nexport function toAbsoluteUrl(url: string | undefined, baseUrl: string): string | undefined {\n if (!url) return undefined;\n if (url.startsWith('http://') || url.startsWith('https://')) {\n return url;\n }\n // Remove trailing slash from base URL\n const cleanBase = baseUrl.replace(/\\/$/, '');\n  // Ensure relative URL starts with /\n  const cleanPath = url.startsWith('/') ? url : `/${url}`;\n  return `${cleanBase}${cleanPath}`;\n}\n\n/**\n _ Validate SEO props and log warnings for common issues\n _ @param props - SEO props to validate\n _ @returns Array of warning messages\n _/\nexport function validateSEOProps(props: {\n title?: string;\n description?: string;\n image?: string;\n canonicalUrl?: string;\n}): string[] {\n const warnings: string[] = [];\n\n // Title validation\n if (!props.title) {\n warnings.push('SEO Warning: Title is required for optimal SEO.');\n } else if (props.title.length > SEO_LIMITS.TITLE_MAX_LENGTH) {\n warnings.push(\n `SEO Warning: Title is ${props.title.length} characters (recommended max: ${SEO_LIMITS.TITLE_MAX_LENGTH}).`\n );\n }\n\n // Description validation\n if (!props.description) {\n warnings.push('SEO Warning: Description is required for optimal SEO.');\n } else {\n if (props.description.length > SEO_LIMITS.DESCRIPTION_MAX_LENGTH) {\n warnings.push(\n `SEO Warning: Description is ${props.description.length} characters (recommended max: ${SEO_LIMITS.DESCRIPTION_MAX_LENGTH}).`\n );\n }\n if (props.description.length < SEO_LIMITS.DESCRIPTION_MIN_LENGTH) {\n warnings.push(\n `SEO Warning: Description is ${props.description.length} characters (recommended min: ${SEO_LIMITS.DESCRIPTION_MIN_LENGTH}).`\n );\n }\n }\n\n // Image validation\n if (!props.image) {\n warnings.push('SEO Warning: No social sharing image provided. Using default.');\n }\n\n return warnings;\n}\n"
}

🔧 Tool: TodoWrite
Input: {
"todos": [
{
"content": "Create TypeScript types for SEO props",
"status": "completed",
"activeForm": "Creating TypeScript types for SEO props"
},
{
"content": "Create SEO configuration with defaults",
"status": "completed",
"activeForm": "Creating SEO configuration with defaults"
},
{
"content": "Create main SEO.astro component",
"status": "in_progress",
"activeForm": "Creating main SEO.astro component"
},
{
"content": "Create JSON-LD schema generators",
"status": "pending",
"activeForm": "Creating JSON-LD schema generators"
},
{
"content": "Update Layout.astro to use SEO component",
"status": "pending",
"activeForm": "Updating Layout.astro to use SEO component"
},
{
"content": "Create usage documentation",
"status": "pending",
"activeForm": "Creating usage documentation"
}
]
}

🔧 Tool: Write
Input: {
"file*path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\SEO.astro",
"content": "---\n/\**\n * SEO Component\n * A centralized, reusable component for managing all SEO-related meta tags,\n * Open Graph tags, Twitter Cards, and structured data (JSON-LD).\n *\n * @example Basic usage:\n * ```astro\n * <SEO\n * title=\"About Us\"\n * description=\"Learn about Houston Web Services and our mission.\"\n * />\n * `\n *\n * @example Advanced usage with all options:\n * `astro\n * <SEO\n * title=\"Web Design Services\"\n * description=\"Custom web design services for small businesses.\"\n * canonicalUrl=\"https://example.com/services\"\n * image=\"/images/services-og.jpg\"\n * openGraph={{\n *     type: 'website',\n *     locale: 'en_US'\n *   }}\n * twitter={{\n * card: 'summary_large_image',\n * creator: '@username'\n * }}\n * jsonLd={{\n * type: 'WebPage',\n * name: 'Web Design Services',\n * description: 'Custom web design services for small businesses.'\n * }}\n * />\n * ```\n */\n\nimport type {\n SEOProps,\n JsonLdSchema,\n ArticleSchema,\n OrganizationSchema,\n ProductSchema,\n BreadcrumbSchema,\n WebPageSchema,\n CustomMetaTag,\n} from '../types/seo';\nimport {\n seoConfig,\n SEO_LIMITS,\n truncateText,\n escapeHtml,\n toAbsoluteUrl,\n validateSEOProps,\n} from '../config/seo.config';\n\n// Define props interface using Astro's Props pattern\ninterface Props extends SEOProps {}\n\nconst {\n // Required props\n title,\n description,\n\n // Optional standard meta\n keywords,\n robots = seoConfig.defaultRobots,\n author,\n\n // URL configuration\n canonicalUrl,\n siteUrl = seoConfig.siteUrl,\n\n // Open Graph\n openGraph = {},\n\n // Twitter\n twitter = {},\n\n // Structured Data\n jsonLd,\n\n // Language & Locale\n lang = seoConfig.defaultLang,\n alternateLanguages,\n\n // Title configuration\n titleTemplate = seoConfig.titleTemplate,\n noTitleTemplate = false,\n\n // Image configuration\n image,\n imageAlt,\n\n // Additional configuration\n additionalMetaTags = [],\n additionalLinkTags = [],\n\n // Charset & Viewport\n charset = 'UTF-8',\n viewport = 'width=device-width, initial-scale=1',\n\n // Theme & App\n themeColor = seoConfig.themeColor,\n appleMobileWebAppTitle,\n applicationName,\n} = Astro.props;\n\n// === Validate and warn in development ===\nif (import.meta.env.DEV) {\n const warnings = validateSEOProps({\n title,\n description,\n image: image || seoConfig.defaultImage,\n canonicalUrl,\n });\n warnings.forEach((warning) => console.warn(warning));\n}\n\n// === Process title ===\nconst processedTitle = noTitleTemplate\n ? title\n : titleTemplate.replace('%s', title);\n\n// === Process image URLs (make absolute for social media crawlers) ===\nconst absoluteImage = toAbsoluteUrl(\n image || openGraph.image || seoConfig.defaultImage,\n siteUrl\n);\nconst resolvedImageAlt = imageAlt || openGraph.imageAlt || seoConfig.defaultImageAlt;\n\n// === Compute canonical URL ===\nconst computedCanonicalUrl = canonicalUrl\n ? toAbsoluteUrl(canonicalUrl, siteUrl)\n : toAbsoluteUrl(Astro.url.pathname, siteUrl);\n\n// === Open Graph computed values ===\nconst ogTitle = truncateText(\n openGraph.title || title,\n SEO_LIMITS.OG_TITLE_MAX_LENGTH\n);\nconst ogDescription = truncateText(\n openGraph.description || description,\n SEO_LIMITS.OG_DESCRIPTION_MAX_LENGTH\n);\nconst ogType = openGraph.type || seoConfig.defaultOgType;\nconst ogLocale = openGraph.locale || seoConfig.defaultLocale;\nconst ogSiteName = openGraph.siteName || seoConfig.siteName;\nconst ogUrl = openGraph.url || computedCanonicalUrl;\n\n// === Twitter computed values ===\nconst twitterCard = twitter.card || seoConfig.twitterCardType;\nconst twitterTitle = truncateText(\n twitter.title || ogTitle,\n SEO_LIMITS.TWITTER_TITLE_MAX_LENGTH\n);\nconst twitterDescription = truncateText(\n twitter.description || ogDescription,\n SEO_LIMITS.TWITTER_DESCRIPTION_MAX_LENGTH\n);\nconst twitterImage = twitter.image\n ? toAbsoluteUrl(twitter.image, siteUrl)\n : absoluteImage;\nconst twitterSite = twitter.site || seoConfig.twitterSite;\n\n// === JSON-LD Generation Functions ===\nfunction generateArticleSchema(schema: ArticleSchema): object {\n const authors = Array.isArray(schema.author)\n ? schema.author.map((name) => ({ '@type': 'Person', name }))\n : { '@type': 'Person', name: schema.author };\n\n const images = schema.image\n ? Array.isArray(schema.image)\n ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))\n : [toAbsoluteUrl(schema.image, siteUrl)]\n : absoluteImage\n ? [absoluteImage]\n : undefined;\n\n return {\n '@context': 'https://schema.org',\n '@type': schema.type,\n headline: escapeHtml(schema.headline),\n description: schema.description ? escapeHtml(schema.description) : undefined,\n author: authors,\n datePublished: schema.datePublished,\n dateModified: schema.dateModified || schema.datePublished,\n image: images,\n publisher: schema.publisher\n ? {\n '@type': 'Organization',\n name: schema.publisher.name,\n logo: schema.publisher.logo\n ? {\n '@type': 'ImageObject',\n url: toAbsoluteUrl(schema.publisher.logo, siteUrl),\n }\n : undefined,\n }\n : seoConfig.organization\n ? {\n '@type': 'Organization',\n name: seoConfig.organization.name,\n logo: seoConfig.organization.logo\n ? {\n '@type': 'ImageObject',\n url: toAbsoluteUrl(seoConfig.organization.logo, siteUrl),\n }\n : undefined,\n }\n : undefined,\n mainEntityOfPage: {\n '@type': 'WebPage',\n '@id': computedCanonicalUrl,\n },\n articleSection: schema.articleSection,\n wordCount: schema.wordCount,\n };\n}\n\nfunction generateOrganizationSchema(schema: OrganizationSchema): object {\n return {\n '@context': 'https://schema.org',\n '@type': schema.type,\n name: escapeHtml(schema.name),\n description: schema.description ? escapeHtml(schema.description) : undefined,\n url: schema.url || siteUrl,\n logo: schema.logo ? toAbsoluteUrl(schema.logo, siteUrl) : undefined,\n contactPoint: schema.contactPoint\n ? {\n '@type': 'ContactPoint',\n telephone: schema.contactPoint.telephone,\n email: schema.contactPoint.email,\n contactType: schema.contactPoint.contactType || 'customer service',\n }\n : undefined,\n sameAs: schema.sameAs?.length ? schema.sameAs : undefined,\n address: schema.address\n ? {\n '@type': 'PostalAddress',\n streetAddress: schema.address.streetAddress,\n addressLocality: schema.address.addressLocality,\n addressRegion: schema.address.addressRegion,\n postalCode: schema.address.postalCode,\n addressCountry: schema.address.addressCountry,\n }\n : undefined,\n };\n}\n\nfunction generateProductSchema(schema: ProductSchema): object {\n const images = schema.image\n ? Array.isArray(schema.image)\n ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))\n : [toAbsoluteUrl(schema.image, siteUrl)]\n : undefined;\n\n return {\n '@context': 'https://schema.org',\n '@type': 'Product',\n name: escapeHtml(schema.name),\n description: schema.description ? escapeHtml(schema.description) : undefined,\n image: images,\n brand: schema.brand\n ? {\n '@type': 'Brand',\n name: schema.brand,\n }\n : undefined,\n sku: schema.sku,\n offers: schema.offers\n ? {\n '@type': 'Offer',\n price: schema.offers.price,\n priceCurrency: schema.offers.priceCurrency,\n availability: schema.offers.availability\n ? `https://schema.org/${schema.offers.availability}`\n : undefined,\n url: schema.offers.url || computedCanonicalUrl,\n validFrom: schema.offers.validFrom,\n priceValidUntil: schema.offers.priceValidUntil,\n }\n : undefined,\n aggregateRating: schema.aggregateRating\n ? {\n '@type': 'AggregateRating',\n ratingValue: schema.aggregateRating.ratingValue,\n reviewCount: schema.aggregateRating.reviewCount,\n }\n : undefined,\n };\n}\n\nfunction generateBreadcrumbSchema(schema: BreadcrumbSchema): object {\n return {\n '@context': 'https://schema.org',\n '@type': 'BreadcrumbList',\n itemListElement: schema.items.map((item, index) => ({\n '@type': 'ListItem',\n position: index + 1,\n name: escapeHtml(item.name),\n item: item.url ? toAbsoluteUrl(item.url, siteUrl) : undefined,\n })),\n };\n}\n\nfunction generateWebPageSchema(schema: WebPageSchema): object {\n return {\n '@context': 'https://schema.org',\n '@type': schema.type,\n name: escapeHtml(schema.name),\n description: schema.description ? escapeHtml(schema.description) : undefined,\n url: schema.url || computedCanonicalUrl,\n lastReviewed: schema.lastReviewed,\n primaryImageOfPage: schema.primaryImageOfPage\n ? {\n '@type': 'ImageObject',\n url: toAbsoluteUrl(schema.primaryImageOfPage, siteUrl),\n }\n : undefined,\n };\n}\n\nfunction generateJsonLd(schema: JsonLdSchema): object {\n switch (schema.type) {\n case 'Article':\n case 'NewsArticle':\n case 'BlogPosting':\n return generateArticleSchema(schema as ArticleSchema);\n case 'Organization':\n case 'LocalBusiness':\n return generateOrganizationSchema(schema as OrganizationSchema);\n case 'Product':\n return generateProductSchema(schema as ProductSchema);\n case 'BreadcrumbList':\n return generateBreadcrumbSchema(schema as BreadcrumbSchema);\n case 'WebPage':\n case 'AboutPage':\n case 'ContactPage':\n case 'FAQPage':\n case 'CollectionPage':\n return generateWebPageSchema(schema as WebPageSchema);\n default:\n console.warn(`SEO Warning: Unknown JSON-LD schema type: ${(schema as JsonLdSchema).type}`);\n return {};\n }\n}\n\n// === Process JSON-LD schemas ===\nconst jsonLdSchemas: object[] = [];\nif (jsonLd) {\n if (Array.isArray(jsonLd)) {\n jsonLd.forEach((schema) => {\n const generated = generateJsonLd(schema);\n if (Object.keys(generated).length > 0) {\n jsonLdSchemas.push(generated);\n }\n });\n } else {\n const generated = generateJsonLd(jsonLd);\n if (Object.keys(generated).length > 0) {\n jsonLdSchemas.push(generated);\n }\n }\n}\n\n// === Clean undefined values from objects ===\nfunction cleanObject(obj: object): object {\n return JSON.parse(\n JSON.stringify(obj, (*, value) => (value === undefined ? undefined : value))\n );\n}\n---\n\n<!-- Charset (must be within first 1024 bytes) -->\n<meta charset={charset} />\n\n<!-- Viewport -->\n<meta name=\"viewport\" content={viewport} />\n\n<!-- Title -->\n<title>{processedTitle}</title>\n\n<!-- Standard Meta Tags -->\n<meta name=\"description\" content={escapeHtml(description)} />\n{keywords && <meta name=\"keywords\" content={escapeHtml(keywords)} />}\n{robots && <meta name=\"robots\" content={robots} />}\n{author && <meta name=\"author\" content={escapeHtml(author)} />}\n\n<!-- Canonical URL -->\n{computedCanonicalUrl && <link rel=\"canonical\" href={computedCanonicalUrl} />}\n\n<!-- Language & Locale -->\n{\n alternateLanguages &&\n alternateLanguages.map((alt) => (\n <link rel=\"alternate\" hreflang={alt.hreflang} href={alt.href} />\n ))\n}\n\n<!-- Open Graph Tags -->\n<meta property=\"og:title\" content={escapeHtml(ogTitle)} />\n<meta property=\"og:description\" content={escapeHtml(ogDescription)} />\n<meta property=\"og:type\" content={ogType} />\n{ogUrl && <meta property=\"og:url\" content={ogUrl} />}\n{ogSiteName && <meta property=\"og:site_name\" content={escapeHtml(ogSiteName)} />}\n<meta property=\"og:locale\" content={ogLocale} />\n{\n openGraph.localeAlternate &&\n openGraph.localeAlternate.map((locale) => (\n <meta property=\"og:locale:alternate\" content={locale} />\n ))\n}\n\n<!-- Open Graph Image -->\n{absoluteImage && <meta property=\"og:image\" content={absoluteImage} />}\n{resolvedImageAlt && <meta property=\"og:image:alt\" content={escapeHtml(resolvedImageAlt)} />}\n{openGraph.imageWidth && <meta property=\"og:image:width\" content={String(openGraph.imageWidth)} />}\n{openGraph.imageHeight && <meta property=\"og:image:height\" content={String(openGraph.imageHeight)} />}\n\n<!-- Twitter Card Tags -->\n<meta name=\"twitter:card\" content={twitterCard} />\n<meta name=\"twitter:title\" content={escapeHtml(twitterTitle)} />\n<meta name=\"twitter:description\" content={escapeHtml(twitterDescription)} />\n{twitterImage && <meta name=\"twitter:image\" content={twitterImage} />}\n{twitter.imageAlt && <meta name=\"twitter:image:alt\" content={escapeHtml(twitter.imageAlt)} />}\n{twitterSite && <meta name=\"twitter:site\" content={twitterSite} />}\n{twitter.creator && <meta name=\"twitter:creator\" content={twitter.creator} />}\n\n<!-- Theme Color -->\n{themeColor && <meta name=\"theme-color\" content={themeColor} />}\n\n<!-- App Configuration -->\n{appleMobileWebAppTitle && <meta name=\"apple-mobile-web-app-title\" content={escapeHtml(appleMobileWebAppTitle)} />}\n{applicationName && <meta name=\"application-name\" content={escapeHtml(applicationName)} />}\n\n<!-- Generator (Astro) -->\n<meta name=\"generator\" content={Astro.generator} />\n\n<!-- Additional Meta Tags -->\n{\n additionalMetaTags.map((tag: CustomMetaTag) => {\n if (tag.name) {\n return <meta name={tag.name} content={escapeHtml(tag.content)} />;\n }\n if (tag.property) {\n return <meta property={tag.property} content={escapeHtml(tag.content)} />;\n }\n if (tag.httpEquiv) {\n return <meta http-equiv={tag.httpEquiv} content={escapeHtml(tag.content)} />;\n }\n return null;\n })\n}\n\n<!-- Additional Link Tags -->\n{\n additionalLinkTags.map((link) => (\n <link\n rel={link.rel}\n href={link.href}\n hreflang={link.hreflang}\n type={link.type}\n sizes={link.sizes}\n />\n ))\n}\n\n<!-- JSON-LD Structured Data -->\n{\n jsonLdSchemas.map((schema) => (\n <script\n type=\"application/ld+json\"\n set:html={JSON.stringify(cleanObject(schema), null, 0)}\n />\n ))\n}\n"
}

🔧 Tool: TodoWrite
Input: {
"todos": [
{
"content": "Create TypeScript types for SEO props",
"status": "completed",
"activeForm": "Creating TypeScript types for SEO props"
},
{
"content": "Create SEO configuration with defaults",
"status": "completed",
"activeForm": "Creating SEO configuration with defaults"
},
{
"content": "Create main SEO.astro component",
"status": "completed",
"activeForm": "Creating main SEO.astro component"
},
{
"content": "Create JSON-LD schema generators",
"status": "completed",
"activeForm": "Creating JSON-LD schema generators"
},
{
"content": "Update Layout.astro to use SEO component",
"status": "in_progress",
"activeForm": "Updating Layout.astro to use SEO component"
},
{
"content": "Create usage documentation",
"status": "pending",
"activeForm": "Creating usage documentation"
}
]
}
Now let me update the Layout.astro to use the SEO component:

🔧 Tool: Edit
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro",
"old_string": "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\t\t<meta name=\"generator\" content={Astro.generator} />\n\t\t<title>Astro Basics</title>\n\t</head>\n\t<body>\n\t\t<slot />\n\t</body>\n</html>",
"new_string": "---\n/**\n _ Base Layout Component\n _ Provides the HTML structure and SEO configuration for all pages.\n _\n _ @example\n _ ```astro\n _ <Layout\n _ title=\"Page Title\"\n _ description=\"Page description for SEO\"\n _ >\n _ <main>Page content here</main>\n _ </Layout>\n _ ```\n \*/\n\nimport SEO from '../components/SEO.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';\n\n// Extend SEOProps but make title and description optional with defaults\ninterface Props extends Partial<SEOProps> {\n /** Page title (defaults to site name) _/\n title?: string;\n /\*\* Page description (defaults to site default description) _/\n description?: string;\n /\*_ Additional classes for the body element _/\n bodyClass?: string;\n}\n\nconst {\n title = seoConfig.siteName,\n description = seoConfig.defaultDescription,\n bodyClass = '',\n lang = seoConfig.defaultLang,\n ...seoProps\n} = Astro.props;\n---\n\n<!doctype html>\n<html lang={lang}>\n\t<head>\n\t\t<SEO\n\t\t\ttitle={title}\n\t\t\tdescription={description}\n\t\t\t{...seoProps}\n\t\t/>\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\t\t<!-- Slot for additional head content -->\n\t\t<slot name=\"head\" />\n\t</head>\n\t<body class={bodyClass}>\n\t\t<slot />\n\t</body>\n</html>"
}

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro"
}
The file has changed - there's a global styles import. Let me update it properly:

🔧 Tool: Edit
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro",
"old_string": "---\n// Import global styles including design system variables\nimport '../styles/globals.css';\n---\n\n<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\t\t<meta name=\"generator\" content={Astro.generator} />\n\t\t<title>Astro Basics</title>\n\t</head>\n\t<body>\n\t\t<slot />\n\t</body>\n</html>",
"new_string": "---\n/**\n _ Base Layout Component\n _ Provides the HTML structure and SEO configuration for all pages.\n _\n _ @example\n _ ```astro\n _ <Layout\n _ title=\"Page Title\"\n _ description=\"Page description for SEO\"\n _ >\n _ <main>Page content here</main>\n _ </Layout>\n _ ```\n \*/\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';\n\n// Extend SEOProps but make title and description optional with defaults\ninterface Props extends Partial<SEOProps> {\n /** Page title (defaults to site name) _/\n title?: string;\n /\*\* Page description (defaults to site default description) _/\n description?: string;\n /\*_ Additional classes for the body element _/\n bodyClass?: string;\n}\n\nconst {\n title = seoConfig.siteName,\n description = seoConfig.defaultDescription,\n bodyClass = '',\n lang = seoConfig.defaultLang,\n ...seoProps\n} = Astro.props;\n---\n\n<!doctype html>\n<html lang={lang}>\n\t<head>\n\t\t<SEO\n\t\t\ttitle={title}\n\t\t\tdescription={description}\n\t\t\t{...seoProps}\n\t\t/>\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\t\t<!-- Slot for additional head content -->\n\t\t<slot name=\"head\" />\n\t</head>\n\t<body class={bodyClass}>\n\t\t<slot />\n\t</body>\n</html>"
}

🔧 Tool: TodoWrite
Input: {
"todos": [
{
"content": "Create TypeScript types for SEO props",
"status": "completed",
"activeForm": "Creating TypeScript types for SEO props"
},
{
"content": "Create SEO configuration with defaults",
"status": "completed",
"activeForm": "Creating SEO configuration with defaults"
},
{
"content": "Create main SEO.astro component",
"status": "completed",
"activeForm": "Creating main SEO.astro component"
},
{
"content": "Create JSON-LD schema generators",
"status": "completed",
"activeForm": "Creating JSON-LD schema generators"
},
{
"content": "Update Layout.astro to use SEO component",
"status": "completed",
"activeForm": "Updating Layout.astro to use SEO component"
},
{
"content": "Create usage documentation",
"status": "in_progress",
"activeForm": "Creating usage documentation"
}
]
}
Now let me create comprehensive documentation:

🔧 Tool: Bash
Input: {
"command": "mkdir -p \"C:\\Users\\James\\Repos\\houston-web-services\\src\\docs\"",
"description": "Create docs directory"
}

🔧 Tool: Write
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\docs\\SEO_COMPONENT.md",
"content": "# SEO Component Documentation\n\nThe SEO component provides a centralized, reusable solution for managing all SEO-related meta tags, Open Graph tags, Twitter Cards, and structured data (JSON-LD) across your Astro application.\n\n## Table of Contents\n\n- [Quick Start](#quick-start)\n- [Props Reference](#props-reference)\n- [Usage Examples](#usage-examples)\n- [JSON-LD Structured Data](#json-ld-structured-data)\n- [Configuration](#configuration)\n- [Best Practices](#best-practices)\n- [Testing & Validation](#testing--validation)\n- [Troubleshooting](#troubleshooting)\n\n## Quick Start\n\n### Basic Usage via Layout\n\nThe simplest way to use the SEO component is through the `Layout.astro` component, which automatically includes SEO functionality:\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n---\n\n<Layout\n  title=\"About Us\"\n  description=\"Learn about Houston Web Services and our mission to help small businesses succeed online.\"\n>\n  <main>\n    <h1>About Us</h1>\n    <!-- Page content -->\n  </main>\n</Layout>\n`\n\n### Direct Usage\n\nFor more control, you can use the SEO component directly in your pages:\n\n`astro\n---\nimport SEO from '../components/SEO.astro';\n---\n\n<html lang=\"en\">\n  <head>\n    <SEO\n      title=\"Services\"\n      description=\"Explore our web design and development services.\"\n      canonicalUrl=\"https://houstonwebservices.com/services\"\n      image=\"/images/services-og.jpg\"\n    />\n  </head>\n  <body>\n    <!-- Page content -->\n  </body>\n</html>\n`\n\n## Props Reference\n\n### Required Props\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `title` | `string` | Page title. Combined with site name using titleTemplate. |\n| `description` | `string` | Meta description for search engines (recommended: 150-160 characters). |\n\n### Optional Meta Props\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `keywords` | `string` | - | Comma-separated meta keywords. |\n| `robots` | `string` | `'index, follow'` | Robots directive. |\n| `author` | `string` | - | Content author. |\n\n### URL Configuration\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `canonicalUrl` | `string` | Current page URL | Canonical URL for the page. |\n| `siteUrl` | `string` | From config | Base URL for making relative URLs absolute. |\n\n### Title Configuration\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `titleTemplate` | `string` | `'%s \\| Site Name'` | Template for page title. Use `%s` as placeholder. |\n| `noTitleTemplate` | `boolean` | `false` | Disable title template for this page. |\n\n### Image Configuration\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `image` | `string` | Default from config | Image URL for social sharing. |\n| `imageAlt` | `string` | - | Alt text for the image. |\n\n### Open Graph Configuration\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `openGraph.title` | `string` | OG title (defaults to page title). |\n| `openGraph.description` | `string` | OG description (defaults to meta description). |\n| `openGraph.image` | `string` | OG image URL. |\n| `openGraph.imageAlt` | `string` | Alt text for OG image. |\n| `openGraph.imageWidth` | `number` | Image width in pixels. |\n| `openGraph.imageHeight` | `number` | Image height in pixels. |\n| `openGraph.url` | `string` | Canonical URL for OG. |\n| `openGraph.type` | `string` | Content type (website, article, product, etc.). |\n| `openGraph.siteName` | `string` | Site name for OG. |\n| `openGraph.locale` | `string` | Locale (e.g., 'en_US'). |\n| `openGraph.localeAlternate` | `string[]` | Alternate locales. |\n\n### Twitter Card Configuration\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `twitter.card` | `string` | `'summary_large_image'` | Card type. |\n| `twitter.site` | `string` | From config | @username of the website. |\n| `twitter.creator` | `string` | - | @username of content creator. |\n| `twitter.title` | `string` | OG/page title | Title for Twitter. |\n| `twitter.description` | `string` | OG/meta description | Description for Twitter. |\n| `twitter.image` | `string` | OG image | Image URL for Twitter. |\n| `twitter.imageAlt` | `string` | - | Alt text for Twitter image. |\n\n### Language & Locale\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| `lang` | `string` | `'en'` | HTML lang attribute. |\n| `alternateLanguages` | `Array` | - | hreflang alternate versions. |\n\n### Structured Data\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `jsonLd` | `JsonLdSchema \\| JsonLdSchema[]` | JSON-LD structured data schema(s). |\n\n### Additional Configuration\n\n| Prop | Type | Description |\n|------|------|-------------|\n| `additionalMetaTags` | `CustomMetaTag[]` | Custom additional meta tags. |\n| `additionalLinkTags` | `Array` | Additional link tags. |\n| `charset` | `string` | Character set (default: 'UTF-8'). |\n| `viewport` | `string` | Viewport content. |\n| `themeColor` | `string` | Browser theme color. |\n\n## Usage Examples\n\n### Homepage\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n---\n\n<Layout\n  title=\"Houston Web Services\"\n  description=\"Professional web design and development services for small businesses in West Houston.\"\n  noTitleTemplate\n  openGraph={{\n    type: 'website',\n    image: '/images/homepage-og.jpg',\n    imageWidth: 1200,\n    imageHeight: 630,\n  }}\n  jsonLd={{\n    type: 'Organization',\n    name: 'Houston Web Services',\n    url: 'https://houstonwebservices.com',\n    logo: 'https://houstonwebservices.com/images/logo.svg',\n    description: 'Professional web design services in West Houston.',\n    sameAs: [\n      'https://www.facebook.com/houstonwebservices',\n      'https://www.linkedin.com/company/houstonwebservices',\n    ],\n  }}\n>\n  <!-- Homepage content -->\n</Layout>\n`\n\n### Blog Post / Article\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n\nconst post = {\n  title: '10 Tips for Small Business Websites',\n  description: 'Learn the essential tips for creating an effective small business website.',\n  author: 'John Smith',\n  datePublished: '2024-01-15',\n  image: '/images/blog/small-business-tips.jpg',\n};\n---\n\n<Layout\n  title={post.title}\n  description={post.description}\n  author={post.author}\n  image={post.image}\n  openGraph={{\n    type: 'article',\n  }}\n  jsonLd={{\n    type: 'Article',\n    headline: post.title,\n    description: post.description,\n    author: post.author,\n    datePublished: post.datePublished,\n    image: post.image,\n  }}\n>\n  <article>\n    <h1>{post.title}</h1>\n    <!-- Blog content -->\n  </article>\n</Layout>\n`\n\n### Service Page with Breadcrumbs\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n---\n\n<Layout\n  title=\"Web Design Services\"\n  description=\"Custom web design services tailored for small businesses.\"\n  jsonLd={[\n    {\n      type: 'WebPage',\n      name: 'Web Design Services',\n      description: 'Custom web design services tailored for small businesses.',\n    },\n    {\n      type: 'BreadcrumbList',\n      items: [\n        { name: 'Home', url: '/' },\n        { name: 'Services', url: '/services' },\n        { name: 'Web Design', url: '/services/web-design' },\n      ],\n    },\n  ]}\n>\n  <!-- Service page content -->\n</Layout>\n`\n\n### Product/Service with Pricing\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n---\n\n<Layout\n  title=\"Starter Website Package\"\n  description=\"Affordable website package for small businesses - starting at $999.\"\n  jsonLd={{\n    type: 'Product',\n    name: 'Starter Website Package',\n    description: 'Professional 5-page website for small businesses.',\n    image: '/images/starter-package.jpg',\n    offers: {\n      price: 999,\n      priceCurrency: 'USD',\n      availability: 'InStock',\n    },\n  }}\n>\n  <!-- Product content -->\n</Layout>\n`\n\n### Page with Multiple Languages\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n---\n\n<Layout\n  title=\"About Us\"\n  description=\"Learn about our company.\"\n  lang=\"en\"\n  alternateLanguages={[\n    { hreflang: 'en', href: 'https://example.com/about' },\n    { hreflang: 'es', href: 'https://example.com/es/sobre-nosotros' },\n    { hreflang: 'x-default', href: 'https://example.com/about' },\n  ]}\n>\n  <!-- Content -->\n</Layout>\n`\n\n### Custom Meta Tags\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n---\n\n<Layout\n  title=\"Contact Us\"\n  description=\"Get in touch with our team.\"\n  additionalMetaTags={[\n    { name: 'format-detection', content: 'telephone=no' },\n    { property: 'fb:app_id', content: '123456789' },\n    { httpEquiv: 'x-ua-compatible', content: 'IE=edge' },\n  ]}\n  additionalLinkTags={[\n    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },\n    { rel: 'dns-prefetch', href: 'https://analytics.example.com' },\n  ]}\n>\n  <!-- Contact page content -->\n</Layout>\n`\n\n### No Index Page (Privacy Policy, etc.)\n\n`astro\n---\nimport Layout from '../layouts/Layout.astro';\n---\n\n<Layout\n  title=\"Privacy Policy\"\n  description=\"Our privacy policy and data handling practices.\"\n  robots=\"noindex, nofollow\"\n>\n  <!-- Privacy policy content -->\n</Layout>\n`\n\n## JSON-LD Structured Data\n\nThe SEO component supports the following JSON-LD schema types:\n\n### Article Schema\n\nSupports: `Article`, `NewsArticle`, `BlogPosting`\n\n`typescript\n{\n  type: 'Article',\n  headline: 'Article Title',\n  description: 'Article description',\n  author: 'Author Name', // or ['Author 1', 'Author 2']\n  datePublished: '2024-01-15', // ISO 8601\n  dateModified: '2024-01-16', // optional\n  image: '/images/article.jpg',\n  publisher: {\n    name: 'Publisher Name',\n    logo: '/images/logo.svg',\n  },\n  articleSection: 'Technology',\n  wordCount: 1500,\n}\n`\n\n### Organization Schema\n\nSupports: `Organization`, `LocalBusiness`\n\n`typescript\n{\n  type: 'LocalBusiness',\n  name: 'Business Name',\n  description: 'Business description',\n  url: 'https://example.com',\n  logo: '/images/logo.svg',\n  contactPoint: {\n    telephone: '+1-555-555-5555',\n    email: 'contact@example.com',\n    contactType: 'customer service',\n  },\n  sameAs: ['https://facebook.com/business', 'https://linkedin.com/company/business'],\n  address: {\n    streetAddress: '123 Main St',\n    addressLocality: 'Houston',\n    addressRegion: 'TX',\n    postalCode: '77077',\n    addressCountry: 'US',\n  },\n}\n`\n\n### Product Schema\n\n`typescript\n{\n  type: 'Product',\n  name: 'Product Name',\n  description: 'Product description',\n  image: ['/images/product-1.jpg', '/images/product-2.jpg'],\n  brand: 'Brand Name',\n  sku: 'SKU123',\n  offers: {\n    price: 99.99,\n    priceCurrency: 'USD',\n    availability: 'InStock', // InStock, OutOfStock, PreOrder, Discontinued\n    url: 'https://example.com/product',\n    validFrom: '2024-01-01',\n    priceValidUntil: '2024-12-31',\n  },\n  aggregateRating: {\n    ratingValue: 4.5,\n    reviewCount: 100,\n  },\n}\n`\n\n### BreadcrumbList Schema\n\n`typescript\n{\n  type: 'BreadcrumbList',\n  items: [\n    { name: 'Home', url: '/' },\n    { name: 'Products', url: '/products' },\n    { name: 'Widget', url: '/products/widget' },\n  ],\n}\n`\n\n### WebPage Schema\n\nSupports: `WebPage`, `AboutPage`, `ContactPage`, `FAQPage`, `CollectionPage`\n\n`typescript\n{\n  type: 'ContactPage',\n  name: 'Contact Us',\n  description: 'Get in touch with our team',\n  url: '/contact',\n  lastReviewed: '2024-01-15',\n  primaryImageOfPage: '/images/contact-hero.jpg',\n}\n`\n\n## Configuration\n\n### Site-Wide Defaults\n\nEdit `src/config/seo.config.ts` to configure site-wide defaults:\n\n`typescript\nexport const seoConfig: SEOConfig = {\n  siteName: 'Your Site Name',\n  siteUrl: 'https://yoursite.com',\n  titleTemplate: '%s | Your Site Name',\n  defaultDescription: 'Your default meta description.',\n  defaultLang: 'en',\n  defaultLocale: 'en_US',\n  defaultImage: '/images/og-default.jpg',\n  defaultImageAlt: 'Your Site Name',\n  twitterSite: '@yourusername',\n  twitterCardType: 'summary_large_image',\n  defaultOgType: 'website',\n  defaultRobots: 'index, follow',\n  themeColor: '#1a365d',\n  organization: {\n    // Your organization details for JSON-LD\n  },\n};\n`\n\n### Image Requirements\n\nFor optimal social media sharing:\n\n- **Open Graph Images**: 1200 x 630 pixels (1.91:1 ratio)\n- **Twitter Images**: 1200 x 600 pixels (2:1 ratio) or 1200 x 628 (summary_large_image)\n- **Format**: JPG or PNG\n- **File size**: Under 5MB (ideally under 1MB)\n- **Always use absolute URLs** for images (the component handles this automatically)\n\n## Best Practices\n\n### Title\n\n- Keep titles under 60 characters\n- Include primary keyword near the beginning\n- Make each page title unique\n- Use the title template for consistency\n\n### Description\n\n- Aim for 150-160 characters\n- Include primary and secondary keywords naturally\n- Write compelling copy that encourages clicks\n- Make each description unique\n\n### Images\n\n- Always provide an image for social sharing\n- Use descriptive alt text\n- Ensure images are high quality and relevant\n- Create page-specific OG images for important pages\n\n### Structured Data\n\n- Use appropriate schema types for your content\n- Validate your structured data with Google's Rich Results Test\n- Don't include markup for content that isn't visible on the page\n- Keep structured data consistent with visible content\n\n### Canonical URLs\n\n- Always set canonical URLs for duplicate content\n- Use absolute URLs\n- Be consistent with trailing slashes\n\n## Testing & Validation\n\n### Tools for Testing\n\n1. **Facebook Sharing Debugger**\n - URL: https://developers.facebook.com/tools/debug/\n - Tests Open Graph tags\n\n2. **Twitter Card Validator**\n - URL: https://cards-dev.twitter.com/validator\n - Tests Twitter Card tags\n\n3. **LinkedIn Post Inspector**\n - URL: https://www.linkedin.com/post-inspector/\n - Tests Open Graph tags for LinkedIn\n\n4. **Google Rich Results Test**\n - URL: https://search.google.com/test/rich-results\n - Tests JSON-LD structured data\n\n5. **Schema.org Validator**\n - URL: https://validator.schema.org/\n - Validates structured data markup\n\n### Manual Verification\n\n1. View page source and check:\n - `<title>` tag\n - Meta description\n - Open Graph tags (og:_)\n - Twitter Card tags (twitter:_)\n - Canonical link\n - JSON-LD scripts\n\n2. Check in browser DevTools:\n - Network tab for proper loading\n - Console for any SEO warnings\n\n## Troubleshooting\n\n### Images Not Showing in Social Shares\n\n1. Ensure image URL is absolute (starts with `https://`)\n2. Verify image exists and is accessible\n3. Check image dimensions meet requirements\n4. Use Facebook/Twitter debuggers to refresh cache\n\n### Title/Description Being Overridden\n\n1. Check for duplicate meta tags\n2. Ensure you're not setting both via Layout and SEO component\n3. Check for head manipulation in other components\n\n### Structured Data Errors\n\n1. Validate with Google Rich Results Test\n2. Ensure all required fields are provided\n3. Check for special characters that need escaping\n4. Verify URLs are absolute\n\n### Development Warnings\n\nThe component logs warnings in development for:\n- Missing title or description\n- Title/description exceeding recommended lengths\n- Missing social sharing image\n\nThese are informational and help ensure optimal SEO.\n"
}
Now let me update the index page to demonstrate the SEO component usage and verify everything builds correctly:

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\index.astro"
}

🔧 Tool: Edit
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\index.astro",
"old_string": "---\nimport Welcome from '../components/Welcome.astro';\nimport Layout from '../layouts/Layout.astro';\n\n// Welcome to Astro! Wondering what to do next? Check out the Astro documentation at https://docs.astro.build\n// Don't want to use any of this? Delete everything in this file, the `assets`, `components`, and `layouts` directories, and start fresh.\n---\n\n<Layout>\n\t<Welcome />\n</Layout>",
"new_string": "---\nimport Welcome from '../components/Welcome.astro';\nimport Layout from '../layouts/Layout.astro';\n\n// Welcome to Astro! Wondering what to do next? Check out the Astro documentation at https://docs.astro.build\n// Don't want to use any of this? Delete everything in this file, the `assets`, `components`, and `layouts` directories, and start fresh.\n---\n\n<Layout\n\ttitle=\"Houston Web Services\"\n\tdescription=\"Professional web design and development services for small businesses in West Houston. Custom websites, SEO optimization, and digital solutions for the Energy Corridor, Katy, and Memorial areas.\"\n\tnoTitleTemplate\n\topenGraph={{\n\t\ttype: 'website',\n\t}}\n\tjsonLd={{\n\t\ttype: 'LocalBusiness',\n\t\tname: 'Houston Web Services',\n\t\tdescription: 'Professional web design and development services for small businesses in West Houston.',\n\t\turl: 'https://houstonwebservices.com',\n\t\taddress: {\n\t\t\taddressLocality: 'Houston',\n\t\t\taddressRegion: 'TX',\n\t\t\tpostalCode: '77077',\n\t\t\taddressCountry: 'US',\n\t\t},\n\t}}\n>\n\t<Welcome />\n</Layout>"
}
Now let me verify the build works:

🔧 Tool: Bash
Input: {
"command": "cd \"C:\\Users\\James\\Repos\\houston-web-services\" && npm run build 2>&1",
"description": "Build the Astro project to verify",
"timeout": 120000
}
The build succeeded. Let me also verify the generated HTML has all the SEO tags:

🔧 Tool: Read
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\dist\\index.html"
}
The build output shows all SEO tags are properly rendered:

- Title tag
- Meta description
- Robots meta
- Canonical URL
- Open Graph tags (og:title, og:description, og:type, og:url, og:site_name, og:locale, og:image, og:image:alt)
- Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- Theme color
- JSON-LD structured data for LocalBusiness

Let me complete the todo list and create a type exports file for easier importing:

🔧 Tool: Write
Input: {
"file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\types\\index.ts",
"content": "/\*_\n _ Type Exports\n _ Re-exports all types for convenient importing\n _/\n\nexport type {\n MetaTags,\n OpenGraphTags,\n TwitterTags,\n LanguageConfig,\n ArticleSchema,\n OrganizationSchema,\n ProductSchema,\n BreadcrumbSchema,\n WebPageSchema,\n JsonLdSchema,\n CustomMetaTag,\n SEOProps,\n SEOConfig,\n} from './seo';\n"
}

🔧 Tool: TodoWrite
Input: {
"todos": [
{
"content": "Create TypeScript types for SEO props",
"status": "completed",
"activeForm": "Creating TypeScript types for SEO props"
},
{
"content": "Create SEO configuration with defaults",
"status": "completed",
"activeForm": "Creating SEO configuration with defaults"
},
{
"content": "Create main SEO.astro component",
"status": "completed",
"activeForm": "Creating main SEO.astro component"
},
{
"content": "Create JSON-LD schema generators",
"status": "completed",
"activeForm": "Creating JSON-LD schema generators"
},
{
"content": "Update Layout.astro to use SEO component",
"status": "completed",
"activeForm": "Updating Layout.astro to use SEO component"
},
{
"content": "Create usage documentation",
"status": "completed",
"activeForm": "Creating usage documentation"
}
]
}

<summary>
## Summary: Create Reusable SEO Head Component

### Changes Implemented

- Created comprehensive TypeScript types for all SEO-related props including meta tags, Open Graph, Twitter Cards, JSON-LD schemas, and configuration options
- Implemented SEO configuration file with sensible defaults for site-wide settings (site name, URLs, default images, title templates, etc.)
- Built full-featured SEO.astro component supporting:
  - Standard meta tags (title, description, keywords, robots, author)
  - Open Graph tags for Facebook/LinkedIn sharing (og:title, og:description, og:image, og:url, og:type, og:locale)
  - Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
  - Canonical URL configuration
  - JSON-LD structured data for Article, Organization/LocalBusiness, Product, BreadcrumbList, and WebPage schemas
  - Dynamic title templates with %s placeholder
  - Viewport and charset meta tags
  - Language/locale configuration with hreflang support
  - Custom additional meta tags via flexible props
  - Automatic URL absolutization for social media crawlers
  - Text truncation for long titles/descriptions
  - HTML entity escaping for special characters
  - Development-mode validation warnings
- Updated Layout.astro to integrate SEO component with prop passthrough
- Updated index.astro homepage with SEO props and LocalBusiness JSON-LD schema
- Created comprehensive documentation with usage examples for all features

### Files Modified

- `src/types/seo.ts` (new) - TypeScript type definitions for all SEO props
- `src/types/index.ts` (new) - Type export aggregation
- `src/config/seo.config.ts` (new) - Site-wide SEO defaults and utility functions
- `src/components/SEO.astro` (new) - Main SEO component
- `src/layouts/Layout.astro` (modified) - Integrated SEO component
- `src/pages/index.astro` (modified) - Added SEO props example
- `src/docs/SEO_COMPONENT.md` (new) - Comprehensive documentation

### Notes for Developer

- Update `src/config/seo.config.ts` with actual site URL, Twitter username, and contact information
- Create the default OG image at `/public/images/og-default.jpg` (recommended size: 1200x630px)
- Create the logo image at `/public/images/logo.svg` for JSON-LD organization schema
- Test social sharing with Facebook Sharing Debugger, Twitter Card Validator, and LinkedIn Post Inspector
- Validate JSON-LD with Google Rich Results Test before launch
- The component logs helpful SEO warnings in development mode - check console for optimization tips
</summary>
