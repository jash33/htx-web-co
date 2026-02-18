/**
 * Featured Projects Configuration
 *
 * This file contains the configuration for the featured projects displayed
 * on the homepage. Update this file to change which projects are featured
 * without modifying component code.
 *
 * Instructions for updating:
 * 1. To change featured projects, modify the FEATURED_PROJECTS array below
 * 2. Each project should include all required fields (id, title, description, thumbnail, technologies, category)
 * 3. Recommended: Display 2-3 projects for optimal visual balance
 * 4. Images should be placed in the /public/portfolio/ directory
 * 5. Use WebP format for better performance when available
 */

import type { Project } from '../types/portfolio';

/**
 * Featured projects to display on the homepage
 * These are a curated selection of the best work to showcase immediately to visitors
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'houston-energy-consulting',
    title: 'Houston Energy Consulting',
    description: 'A professional website for a Houston-based energy consulting firm featuring a modern design, custom CMS integration, and lead generation forms that increased client inquiries by 150%.',
    thumbnail: {
      src: '/htx-web-co/portfolio/energy-consulting.svg',
      alt: 'Houston Energy Consulting website homepage showing professional dark blue design with energy industry imagery',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Astro', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Tailwind CSS', category: 'frontend' },
      { name: 'Netlify CMS', category: 'cms' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2024-11-15',
    links: [
      { text: 'View Live Site', href: 'https://example-energy.com', type: 'live-site', openInNewTab: true },
    ],
  },
  {
    id: 'houston-dental-care',
    title: 'Houston Family Dental Care',
    description: 'Complete website redesign for a dental practice in Houston, TX. Includes online appointment booking, patient portal integration, and HIPAA-compliant contact forms.',
    thumbnail: {
      src: '/htx-web-co/portfolio/dental-care.svg',
      alt: 'Houston Family Dental Care website with bright, welcoming design and appointment booking interface',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Next.js', category: 'fullstack' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'Stripe', category: 'ecommerce' },
    ],
    category: 'web-app',
    featured: true,
    completedDate: '2024-10-20',
    links: [
      { text: 'View Live Site', href: 'https://example-dental.com', type: 'live-site', openInNewTab: true },
      { text: 'Case Study', href: '/htx-web-co/case-studies/dental-care', type: 'case-study' },
    ],
  },
  {
    id: 'texas-realty-partners',
    title: 'Texas Realty Partners',
    description: 'Real estate listing platform with MLS integration, property search filters, virtual tour support, and agent dashboard. Built for mobile-first browsing experience.',
    thumbnail: {
      src: '/htx-web-co/portfolio/real-estate.svg',
      alt: 'Texas Realty Partners website with property listings and advanced search functionality',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Next.js', category: 'fullstack' },
      { name: 'GraphQL', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'AWS', category: 'backend' },
    ],
    category: 'web-app',
    featured: true,
    completedDate: '2024-05-20',
    links: [
      { text: 'View Live Site', href: 'https://example-realty.com', type: 'live-site', openInNewTab: true },
    ],
  },
];

/**
 * Section configuration for the featured projects preview
 * Customize the heading, subheading, and CTA text/link
 */
export const FEATURED_PROJECTS_CONFIG = {
  /** Main heading for the section */
  heading: 'Featured Work',

  /** Subheading/description text */
  subheading: 'Explore some of our recent projects that showcase our expertise in web design and development for Houston businesses.',

  /** Text for the "View All" call-to-action button */
  viewAllText: 'View All Projects',

  /** URL for the "View All" call-to-action button */
  viewAllHref: '/htx-web-co/portfolio',

  /** Section ID for anchor linking */
  id: 'featured-projects',
};
