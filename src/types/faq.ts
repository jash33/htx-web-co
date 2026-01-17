/**
 * FAQ Accordion Types
 * Type definitions for the FAQ accordion component.
 */

/**
 * Represents a single FAQ item
 */
export interface FAQItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question text */
  question: string;
  /** The answer content (can include HTML for formatting) */
  answer: string;
  /** Optional category for grouping FAQs */
  category?: FAQCategory;
}

/**
 * FAQ category options for organizing questions
 */
export type FAQCategory =
  | 'pricing'
  | 'timeline'
  | 'services'
  | 'process'
  | 'general';

/**
 * Props for the FAQAccordion component
 */
export interface FAQAccordionProps {
  /** Array of FAQ items to display */
  items: FAQItem[];
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Whether multiple panels can be open at once */
  allowMultiple?: boolean;
  /** Index of initially expanded item (null for all collapsed) */
  initialExpanded?: number | null;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * State for a single accordion item
 */
export interface FAQAccordionItemState {
  /** Whether the item is currently expanded */
  isExpanded: boolean;
  /** Unique ID for ARIA relationships */
  triggerId: string;
  /** Unique ID for the panel content */
  panelId: string;
}

/**
 * Default FAQ items for Houston Web Services
 * Covering pricing, timelines, services, and process
 */
export const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-pricing-structure',
    question: 'How much does a professional website cost?',
    answer: `Our website packages start at $899 for a basic 5-page business website. Custom designs and online store setups range from $1,800 to $6,000+ depending on what your business needs. We provide detailed quotes after understanding your specific goals during our free consultation. Every project includes a mobile-friendly design, help getting found on Google, and 30 days of support after launch.`,
    category: 'pricing',
  },
  {
    id: 'faq-project-timeline',
    question: 'How long does it take to build a website?',
    answer: `A typical business website takes 3-6 weeks from kickoff to launch. Simple one-page sites can be completed in 1-2 weeks, while online stores or more complex projects may take 8-12 weeks. We'll provide a detailed timeline during our initial meeting, and we keep you updated throughout the entire process with regular check-ins and milestone reviews.`,
    category: 'timeline',
  },
  {
    id: 'faq-services-offered',
    question: 'What services do you offer beyond web design?',
    answer: `In addition to custom website design, we offer everything you need to succeed online: help getting your business found on Google, ongoing website care and security updates, reliable website hosting with 99.9% uptime, training so you can easily update your own content, logo and brand design, and Google Business Profile setup to attract local Houston customers.`,
    category: 'services',
  },
  {
    id: 'faq-design-process',
    question: 'What does your design process look like?',
    answer: `Our process has five clear phases: <strong>Discovery</strong> - We learn about your business, goals, and the customers you want to reach. <strong>Design</strong> - We create visual mockups for your approval so you can see exactly what your site will look like. <strong>Build</strong> - We create your website with speed and search visibility in mind. <strong>Testing</strong> - We make sure everything works perfectly on phones, tablets, and computers. <strong>Launch</strong> - We put your site live and show you how to make updates yourself.`,
    category: 'process',
  },
  {
    id: 'faq-revisions',
    question: 'How many revisions are included?',
    answer: `All our packages include unlimited revisions during the design phase - we want you to be 100% satisfied with the look and feel before we start building. During the build phase, we include 2 rounds of revisions to fine-tune everything. Additional revisions beyond this are billed at our hourly rate, but this is rarely needed when we nail the design phase.`,
    category: 'process',
  },
  {
    id: 'faq-maintenance',
    question: 'Do I need ongoing maintenance for my website?',
    answer: `We strongly recommend ongoing maintenance to keep your website secure, fast, and up-to-date. Our maintenance plans start at $49/month and include security protection, regular backups, speed monitoring, and minor content updates. Without maintenance, websites can become vulnerable to hackers and may eventually stop working properly as internet standards change.`,
    category: 'services',
  },
  {
    id: 'faq-ownership',
    question: 'Will I own my website after it\'s completed?',
    answer: `Absolutely! Once your final payment is received, you own 100% of your website including all custom design work and content. We'll provide all login information and access to your hosting account. If you ever decide to move to a different provider, we'll assist with the transition at no additional charge.`,
    category: 'general',
  },
  {
    id: 'faq-local-focus',
    question: 'Do you only work with Houston-area businesses?',
    answer: `While we specialize in serving small businesses in West Houston, the Energy Corridor, Katy, and Memorial areas, we work with clients throughout Texas and beyond. Our local focus means we understand the Houston market deeply, but we can work with you remotely just as effectively. We're happy to meet in person locally or connect via video call.`,
    category: 'general',
  },
];
