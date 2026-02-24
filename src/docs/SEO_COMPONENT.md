# SEO Component Documentation

The SEO component provides a centralized, reusable solution for managing all SEO-related meta tags, Open Graph tags, Twitter Cards, and structured data (JSON-LD) across your Astro application.

## Table of Contents

- [Quick Start](#quick-start)
- [Props Reference](#props-reference)
- [Usage Examples](#usage-examples)
- [JSON-LD Structured Data](#json-ld-structured-data)
- [Configuration](#configuration)
- [Best Practices](#best-practices)
- [Testing & Validation](#testing--validation)
- [Troubleshooting](#troubleshooting)

## Quick Start

### Basic Usage via Layout

The simplest way to use the SEO component is through the `Layout.astro` component, which automatically includes SEO functionality:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="About Us"
  description="Learn about Houston Web Services and our mission to help small businesses succeed online."
>
  <main>
    <h1>About Us</h1>
    <!-- Page content -->
  </main>
</Layout>
```

### Direct Usage

For more control, you can use the SEO component directly in your pages:

```astro
---
import SEO from '../components/SEO.astro';
---

<html lang="en">
  <head>
    <SEO
      title="Services"
      description="Explore our web design and development services."
      canonicalUrl="https://houstonwebservices.com/services"
      image="/images/services-og.jpg"
    />
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

## Props Reference

### Required Props

| Prop          | Type     | Description                                                            |
| ------------- | -------- | ---------------------------------------------------------------------- |
| `title`       | `string` | Page title. Combined with site name using titleTemplate.               |
| `description` | `string` | Meta description for search engines (recommended: 150-160 characters). |

### Optional Meta Props

| Prop       | Type     | Default           | Description                    |
| ---------- | -------- | ----------------- | ------------------------------ |
| `keywords` | `string` | -                 | Comma-separated meta keywords. |
| `robots`   | `string` | `'index, follow'` | Robots directive.              |
| `author`   | `string` | -                 | Content author.                |

### URL Configuration

| Prop           | Type     | Default          | Description                                 |
| -------------- | -------- | ---------------- | ------------------------------------------- |
| `canonicalUrl` | `string` | Current page URL | Canonical URL for the page.                 |
| `siteUrl`      | `string` | From config      | Base URL for making relative URLs absolute. |

### Title Configuration

| Prop              | Type      | Default             | Description                                       |
| ----------------- | --------- | ------------------- | ------------------------------------------------- |
| `titleTemplate`   | `string`  | `'%s \| Site Name'` | Template for page title. Use `%s` as placeholder. |
| `noTitleTemplate` | `boolean` | `false`             | Disable title template for this page.             |

### Image Configuration

| Prop       | Type     | Default             | Description                   |
| ---------- | -------- | ------------------- | ----------------------------- |
| `image`    | `string` | Default from config | Image URL for social sharing. |
| `imageAlt` | `string` | -                   | Alt text for the image.       |

### Open Graph Configuration

| Prop                        | Type       | Description                                     |
| --------------------------- | ---------- | ----------------------------------------------- |
| `openGraph.title`           | `string`   | OG title (defaults to page title).              |
| `openGraph.description`     | `string`   | OG description (defaults to meta description).  |
| `openGraph.image`           | `string`   | OG image URL.                                   |
| `openGraph.imageAlt`        | `string`   | Alt text for OG image.                          |
| `openGraph.imageWidth`      | `number`   | Image width in pixels.                          |
| `openGraph.imageHeight`     | `number`   | Image height in pixels.                         |
| `openGraph.url`             | `string`   | Canonical URL for OG.                           |
| `openGraph.type`            | `string`   | Content type (website, article, product, etc.). |
| `openGraph.siteName`        | `string`   | Site name for OG.                               |
| `openGraph.locale`          | `string`   | Locale (e.g., 'en_US').                         |
| `openGraph.localeAlternate` | `string[]` | Alternate locales.                              |

### Twitter Card Configuration

| Prop                  | Type     | Default                 | Description                   |
| --------------------- | -------- | ----------------------- | ----------------------------- |
| `twitter.card`        | `string` | `'summary_large_image'` | Card type.                    |
| `twitter.site`        | `string` | From config             | @username of the website.     |
| `twitter.creator`     | `string` | -                       | @username of content creator. |
| `twitter.title`       | `string` | OG/page title           | Title for Twitter.            |
| `twitter.description` | `string` | OG/meta description     | Description for Twitter.      |
| `twitter.image`       | `string` | OG image                | Image URL for Twitter.        |
| `twitter.imageAlt`    | `string` | -                       | Alt text for Twitter image.   |

### Language & Locale

| Prop                 | Type     | Default | Description                  |
| -------------------- | -------- | ------- | ---------------------------- |
| `lang`               | `string` | `'en'`  | HTML lang attribute.         |
| `alternateLanguages` | `Array`  | -       | hreflang alternate versions. |

### Structured Data

| Prop     | Type                             | Description                        |
| -------- | -------------------------------- | ---------------------------------- |
| `jsonLd` | `JsonLdSchema \| JsonLdSchema[]` | JSON-LD structured data schema(s). |

### Additional Configuration

| Prop                 | Type              | Description                       |
| -------------------- | ----------------- | --------------------------------- |
| `additionalMetaTags` | `CustomMetaTag[]` | Custom additional meta tags.      |
| `additionalLinkTags` | `Array`           | Additional link tags.             |
| `charset`            | `string`          | Character set (default: 'UTF-8'). |
| `viewport`           | `string`          | Viewport content.                 |
| `themeColor`         | `string`          | Browser theme color.              |

## Usage Examples

### Homepage

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Houston Web Services"
  description="Professional web design and development services for small businesses in West Houston."
  noTitleTemplate
  openGraph={{
    type: 'website',
    image: '/images/homepage-og.jpg',
    imageWidth: 1200,
    imageHeight: 630,
  }}
  jsonLd={{
    type: 'Organization',
    name: 'Houston Web Services',
    url: 'https://houstonwebservices.com',
    logo: 'https://houstonwebservices.com/images/logo.svg',
    description: 'Professional web design services in West Houston.',
    sameAs: [
      'https://www.facebook.com/houstonwebservices',
      'https://www.linkedin.com/company/houstonwebservices',
    ],
  }}
>
  <!-- Homepage content -->
</Layout>
```

### Blog Post / Article

```astro
---
import Layout from '../layouts/Layout.astro';

const post = {
  title: '10 Tips for Small Business Websites',
  description: 'Learn the essential tips for creating an effective small business website.',
  author: 'John Smith',
  datePublished: '2024-01-15',
  image: '/images/blog/small-business-tips.jpg',
};
---

<Layout
  title={post.title}
  description={post.description}
  author={post.author}
  image={post.image}
  openGraph={{
    type: 'article',
  }}
  jsonLd={{
    type: 'Article',
    headline: post.title,
    description: post.description,
    author: post.author,
    datePublished: post.datePublished,
    image: post.image,
  }}
>
  <article>
    <h1>{post.title}</h1>
    <!-- Blog content -->
  </article>
</Layout>
```

### Service Page with Breadcrumbs

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Web Design Services"
  description="Custom web design services tailored for small businesses."
  jsonLd={[
    {
      type: 'WebPage',
      name: 'Web Design Services',
      description: 'Custom web design services tailored for small businesses.',
    },
    {
      type: 'BreadcrumbList',
      items: [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: 'Web Design', url: '/services/web-design' },
      ],
    },
  ]}
>
  <!-- Service page content -->
</Layout>
```

### Product/Service with Pricing

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Starter Website Package"
  description="Affordable website package for small businesses - starting at $999."
  jsonLd={{
    type: 'Product',
    name: 'Starter Website Package',
    description: 'Professional 5-page website for small businesses.',
    image: '/images/starter-package.jpg',
    offers: {
      price: 999,
      priceCurrency: 'USD',
      availability: 'InStock',
    },
  }}
>
  <!-- Product content -->
</Layout>
```

### Page with Multiple Languages

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="About Us"
  description="Learn about our company."
  lang="en"
  alternateLanguages={[
    { hreflang: 'en', href: 'https://example.com/about' },
    { hreflang: 'es', href: 'https://example.com/es/sobre-nosotros' },
    { hreflang: 'x-default', href: 'https://example.com/about' },
  ]}
>
  <!-- Content -->
</Layout>
```

### Custom Meta Tags

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Contact Us"
  description="Get in touch with our team."
  additionalMetaTags={[
    { name: 'format-detection', content: 'telephone=no' },
    { property: 'fb:app_id', content: '123456789' },
    { httpEquiv: 'x-ua-compatible', content: 'IE=edge' },
  ]}
  additionalLinkTags={[
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://analytics.example.com' },
  ]}
>
  <!-- Contact page content -->
</Layout>
```

### No Index Page (Privacy Policy, etc.)

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Privacy Policy"
  description="Our privacy policy and data handling practices."
  robots="noindex, nofollow"
>
  <!-- Privacy policy content -->
</Layout>
```

## JSON-LD Structured Data

The SEO component supports the following JSON-LD schema types:

### Article Schema

Supports: `Article`, `NewsArticle`, `BlogPosting`

```typescript
{
  type: 'Article',
  headline: 'Article Title',
  description: 'Article description',
  author: 'Author Name', // or ['Author 1', 'Author 2']
  datePublished: '2024-01-15', // ISO 8601
  dateModified: '2024-01-16', // optional
  image: '/images/article.jpg',
  publisher: {
    name: 'Publisher Name',
    logo: '/images/logo.svg',
  },
  articleSection: 'Technology',
  wordCount: 1500,
}
```

### Organization Schema

Supports: `Organization`, `LocalBusiness`

```typescript
{
  type: 'LocalBusiness',
  name: 'Business Name',
  description: 'Business description',
  url: 'https://example.com',
  logo: '/images/logo.svg',
  contactPoint: {
    telephone: '+1-555-555-5555',
    email: 'contact@example.com',
    contactType: 'customer service',
  },
  sameAs: ['https://facebook.com/business', 'https://linkedin.com/company/business'],
  address: {
    streetAddress: '123 Main St',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    postalCode: '77077',
    addressCountry: 'US',
  },
}
```

### Product Schema

```typescript
{
  type: 'Product',
  name: 'Product Name',
  description: 'Product description',
  image: ['/images/product-1.jpg', '/images/product-2.jpg'],
  brand: 'Brand Name',
  sku: 'SKU123',
  offers: {
    price: 99.99,
    priceCurrency: 'USD',
    availability: 'InStock', // InStock, OutOfStock, PreOrder, Discontinued
    url: 'https://example.com/product',
    validFrom: '2024-01-01',
    priceValidUntil: '2024-12-31',
  },
  aggregateRating: {
    ratingValue: 4.5,
    reviewCount: 100,
  },
}
```

### BreadcrumbList Schema

```typescript
{
  type: 'BreadcrumbList',
  items: [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Widget', url: '/products/widget' },
  ],
}
```

### WebPage Schema

Supports: `WebPage`, `AboutPage`, `ContactPage`, `FAQPage`, `CollectionPage`

```typescript
{
  type: 'ContactPage',
  name: 'Contact Us',
  description: 'Get in touch with our team',
  url: '/contact',
  lastReviewed: '2024-01-15',
  primaryImageOfPage: '/images/contact-hero.jpg',
}
```

## Configuration

### Site-Wide Defaults

Edit `src/config/seo.config.ts` to configure site-wide defaults:

```typescript
export const seoConfig: SEOConfig = {
  siteName: "Your Site Name",
  siteUrl: "https://yoursite.com",
  titleTemplate: "%s | Your Site Name",
  defaultDescription: "Your default meta description.",
  defaultLang: "en",
  defaultLocale: "en_US",
  defaultImage: "/images/og-default.jpg",
  defaultImageAlt: "Your Site Name",
  twitterSite: "@yourusername",
  twitterCardType: "summary_large_image",
  defaultOgType: "website",
  defaultRobots: "index, follow",
  themeColor: "#1a365d",
  organization: {
    // Your organization details for JSON-LD
  },
};
```

### Image Requirements

For optimal social media sharing:

- **Open Graph Images**: 1200 x 630 pixels (1.91:1 ratio)
- **Twitter Images**: 1200 x 600 pixels (2:1 ratio) or 1200 x 628 (summary_large_image)
- **Format**: JPG or PNG
- **File size**: Under 5MB (ideally under 1MB)
- **Always use absolute URLs** for images (the component handles this automatically)

## Best Practices

### Title

- Keep titles under 60 characters
- Include primary keyword near the beginning
- Make each page title unique
- Use the title template for consistency

### Description

- Aim for 150-160 characters
- Include primary and secondary keywords naturally
- Write compelling copy that encourages clicks
- Make each description unique

### Images

- Always provide an image for social sharing
- Use descriptive alt text
- Ensure images are high quality and relevant
- Create page-specific OG images for important pages

### Structured Data

- Use appropriate schema types for your content
- Validate your structured data with Google's Rich Results Test
- Don't include markup for content that isn't visible on the page
- Keep structured data consistent with visible content

### Canonical URLs

- Always set canonical URLs for duplicate content
- Use absolute URLs
- Be consistent with trailing slashes

## Testing & Validation

### Tools for Testing

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Tests Open Graph tags

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Tests Twitter Card tags

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Tests Open Graph tags for LinkedIn

4. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Tests JSON-LD structured data

5. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validates structured data markup

### Manual Verification

1. View page source and check:
   - `<title>` tag
   - Meta description
   - Open Graph tags (og:\*)
   - Twitter Card tags (twitter:\*)
   - Canonical link
   - JSON-LD scripts

2. Check in browser DevTools:
   - Network tab for proper loading
   - Console for any SEO warnings

## Troubleshooting

### Images Not Showing in Social Shares

1. Ensure image URL is absolute (starts with `https://`)
2. Verify image exists and is accessible
3. Check image dimensions meet requirements
4. Use Facebook/Twitter debuggers to refresh cache

### Title/Description Being Overridden

1. Check for duplicate meta tags
2. Ensure you're not setting both via Layout and SEO component
3. Check for head manipulation in other components

### Structured Data Errors

1. Validate with Google Rich Results Test
2. Ensure all required fields are provided
3. Check for special characters that need escaping
4. Verify URLs are absolute

### Development Warnings

The component logs warnings in development for:

- Missing title or description
- Title/description exceeding recommended lengths
- Missing social sharing image

These are informational and help ensure optimal SEO.
