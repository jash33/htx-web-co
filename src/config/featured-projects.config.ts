/**
 * Featured Projects Configuration
 *
 * Template projects showcasing different business types.
 */

import type { Project } from '../types/portfolio';

/**
 * Featured projects to display on the homepage
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'htx-plumbing',
    title: 'HTX Plumbing Co.',
    description: 'Service business template featuring emergency contact CTAs, service area maps, and trust-building testimonials. Perfect for contractors, repair services, and home service providers.',
    thumbnail: {
      src: '/htx-web-co/portfolio/plumbing-placeholder.svg',
      alt: 'HTX Plumbing Co. website - service business template',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Astro', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2026-02-01',
    links: [
      { text: 'View Live Site', href: 'https://jash33.github.io/service-business/', type: 'live-site', openInNewTab: true },
    ],
  },
  {
    id: 'htx-flowers',
    title: 'HTX Flowers',
    description: 'Retail business template with product showcases, seasonal promotions, and elegant gallery layouts. Ideal for florists, boutiques, and gift shops.',
    thumbnail: {
      src: '/htx-web-co/portfolio/flowers-placeholder.svg',
      alt: 'HTX Flowers website - retail business template',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Astro', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2026-02-15',
    links: [
      { text: 'View Live Site', href: 'https://jash33.github.io/retail-business/', type: 'live-site', openInNewTab: true },
    ],
  },
  {
    id: 'htx-creamery',
    title: 'HTX Creamery',
    description: 'Restaurant template with menu displays, location info, and appetizing imagery. Great for cafes, ice cream shops, bakeries, and eateries.',
    thumbnail: {
      src: '/htx-web-co/portfolio/creamery-placeholder.svg',
      alt: 'HTX Creamery website - restaurant business template',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Astro', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2026-02-20',
    links: [
      { text: 'View Live Site', href: 'https://jash33.github.io/restaurant-business/', type: 'live-site', openInNewTab: true },
    ],
  },
  {
    id: 'athena-photography',
    title: 'Athena Photography',
    description: 'Photography portfolio template with stunning gallery layouts, booking info, and elegant typography. Perfect for photographers, artists, and creatives.',
    thumbnail: {
      src: '/htx-web-co/portfolio/photography-placeholder.svg',
      alt: 'Athena Photography website - photography portfolio template',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Astro', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2026-03-01',
    links: [
      { text: 'View Live Site', href: 'https://jash33.github.io/photography-business/', type: 'live-site', openInNewTab: true },
    ],
  },
];

/**
 * Section configuration for the featured projects preview
 */
export const FEATURED_PROJECTS_CONFIG = {
  heading: 'Featured Work',
  subheading: 'Template sites showcasing different business types. Each one is fully customizable to match your brand.',
  viewAllText: 'View All Projects',
  viewAllHref: '/htx-web-co/portfolio',
  id: 'featured-projects',
};
