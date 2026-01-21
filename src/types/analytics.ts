/**
 * =================================================================
 * ANALYTICS & CONSENT TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for Google Analytics 4 integration with
 * privacy-compliant configuration and cookie consent management.
 *
 * =================================================================
 */

// =================================================================
// CONSENT TYPES
// =================================================================

/**
 * Consent categories for granular user control
 */
export type ConsentCategory =
  | 'necessary'      // Essential cookies (always enabled)
  | 'analytics'      // Analytics & performance tracking
  | 'marketing'      // Marketing & advertising cookies
  | 'preferences';   // User preference cookies

/**
 * Consent status for each category
 */
export type ConsentStatus = 'granted' | 'denied' | 'pending';

/**
 * User consent preferences object
 */
export interface ConsentPreferences {
  necessary: true;           // Always true (required for site functionality)
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

/**
 * Full consent state including metadata
 */
export interface ConsentState {
  preferences: ConsentPreferences;
  timestamp: number;         // When consent was given/updated
  version: string;           // Consent version for tracking policy changes
  region?: string;           // User's region for compliance (GDPR/CCPA)
  hasConsented: boolean;     // Whether user has made a consent choice
}

/**
 * Cookie consent banner configuration
 */
export interface ConsentBannerConfig {
  /** Show banner on first visit */
  showOnFirstVisit: boolean;
  /** Position of the banner */
  position: 'bottom' | 'top' | 'center';
  /** Privacy policy URL */
  privacyPolicyUrl: string;
  /** Cookie policy URL */
  cookiePolicyUrl?: string;
  /** Company name for consent text */
  companyName: string;
  /** Consent version (update when policy changes) */
  consentVersion: string;
  /** Auto-hide after accepting */
  autoHide: boolean;
  /** Cookie expiration in days */
  cookieExpireDays: number;
}

// =================================================================
// GOOGLE ANALYTICS 4 TYPES
// =================================================================

/**
 * GA4 Configuration options
 */
export interface GA4Config {
  /** GA4 Measurement ID (G-XXXXXXXXXX) */
  measurementId: string;
  /** Enable debug mode (development only) */
  debug?: boolean;
  /** Send page views automatically */
  sendPageView?: boolean;
  /** Enable IP anonymization (recommended for GDPR) */
  anonymizeIp?: boolean;
  /** Cookie domain configuration */
  cookieDomain?: string;
  /** Cookie expiration in seconds */
  cookieExpires?: number;
  /** Cookie flags */
  cookieFlags?: string;
  /** Data retention period */
  dataRetention?: '14months' | '26months' | '38months' | '50months';
}

/**
 * GA4 Consent mode configuration
 * @see https://developers.google.com/tag-platform/devguides/consent
 */
export interface GA4ConsentMode {
  /** Analytics storage consent */
  analytics_storage: ConsentStatus;
  /** Ad storage consent */
  ad_storage: ConsentStatus;
  /** Ad user data consent */
  ad_user_data: ConsentStatus;
  /** Ad personalization consent */
  ad_personalization: ConsentStatus;
  /** Functionality storage */
  functionality_storage?: ConsentStatus;
  /** Personalization storage */
  personalization_storage?: ConsentStatus;
  /** Security storage */
  security_storage?: ConsentStatus;
  /** Wait for consent update (ms) */
  wait_for_update?: number;
  /** Regions for this consent configuration */
  region?: string[];
  /** Index signature for gtag compatibility */
  [key: string]: ConsentStatus | number | string[] | undefined;
}

// =================================================================
// EVENT TRACKING TYPES
// =================================================================

/**
 * Standard GA4 event names
 */
export type GA4StandardEvent =
  | 'page_view'
  | 'scroll'
  | 'click'
  | 'view_item'
  | 'add_to_cart'
  | 'begin_checkout'
  | 'purchase'
  | 'sign_up'
  | 'login'
  | 'search'
  | 'share'
  | 'generate_lead'
  | 'select_content';

/**
 * Custom event names for Houston Web Services
 */
export type CustomEventName =
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'contact_form_error'
  | 'service_view'
  | 'portfolio_view'
  | 'cta_click'
  | 'phone_click'
  | 'email_click'
  | 'social_click'
  | 'navigation_click'
  | 'scroll_depth'
  | 'time_on_page'
  | 'file_download'
  | 'video_play'
  | 'consent_granted'
  | 'consent_denied'
  | 'consent_updated'
  | 'page_not_found';

/**
 * Union of all event types
 */
export type AnalyticsEvent = GA4StandardEvent | CustomEventName;

/**
 * Base event parameters
 */
export interface BaseEventParams {
  /** Event timestamp */
  timestamp?: number;
  /** Page path */
  page_path?: string;
  /** Page title */
  page_title?: string;
  /** Page location (URL) */
  page_location?: string;
  /** User engagement time */
  engagement_time_msec?: number;
}

/**
 * Page view event parameters
 */
export interface PageViewParams extends BaseEventParams {
  page_referrer?: string;
}

/**
 * Click event parameters
 */
export interface ClickEventParams extends BaseEventParams {
  link_url?: string;
  link_text?: string;
  link_id?: string;
  link_classes?: string;
  outbound?: boolean;
}

/**
 * Form event parameters
 */
export interface FormEventParams extends BaseEventParams {
  form_id?: string;
  form_name?: string;
  form_destination?: string;
  form_submit_text?: string;
  value?: number;
}

/**
 * Scroll event parameters
 */
export interface ScrollEventParams extends BaseEventParams {
  percent_scrolled: number;
}

/**
 * CTA click event parameters
 */
export interface CTAEventParams extends BaseEventParams {
  cta_text: string;
  cta_location: string;
  cta_destination: string;
  cta_type?: 'primary' | 'secondary' | 'link';
}

/**
 * Lead generation event parameters
 */
export interface LeadEventParams extends BaseEventParams {
  lead_source?: string;
  value?: number;
  currency?: string;
  service_interest?: string;
}

/**
 * Union type for all event parameters
 */
export type EventParams =
  | BaseEventParams
  | PageViewParams
  | ClickEventParams
  | FormEventParams
  | ScrollEventParams
  | CTAEventParams
  | LeadEventParams
  | Record<string, unknown>;

// =================================================================
// USER PROPERTIES
// =================================================================

/**
 * Custom user properties for GA4
 */
export interface UserProperties {
  /** User type (visitor, lead, customer) */
  user_type?: 'visitor' | 'lead' | 'customer';
  /** First visit date */
  first_visit_date?: string;
  /** Geographic region */
  user_region?: string;
  /** Referral source */
  traffic_source?: string;
  /** Device category */
  device_category?: 'desktop' | 'mobile' | 'tablet';
  /** Consent status */
  consent_analytics?: boolean;
  consent_marketing?: boolean;
  /** Index signature for gtag compatibility */
  [key: string]: string | boolean | undefined;
}

// =================================================================
// ANALYTICS SERVICE INTERFACE
// =================================================================

/**
 * Analytics service interface for abstraction
 */
export interface AnalyticsService {
  /** Initialize analytics */
  init(config: GA4Config): void;
  /** Track an event */
  trackEvent(eventName: AnalyticsEvent, params?: EventParams): void;
  /** Track page view */
  trackPageView(params?: PageViewParams): void;
  /** Set user properties */
  setUserProperties(properties: UserProperties): void;
  /** Update consent */
  updateConsent(consent: Partial<GA4ConsentMode>): void;
  /** Check if analytics is enabled */
  isEnabled(): boolean;
}

// =================================================================
// PERFORMANCE METRICS
// =================================================================

/**
 * Core Web Vitals metrics
 */
export interface WebVitals {
  /** Largest Contentful Paint */
  LCP?: number;
  /** First Input Delay */
  FID?: number;
  /** Cumulative Layout Shift */
  CLS?: number;
  /** First Contentful Paint */
  FCP?: number;
  /** Time to First Byte */
  TTFB?: number;
  /** Interaction to Next Paint */
  INP?: number;
}

/**
 * Performance entry for tracking
 */
export interface PerformanceEntry {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// =================================================================
// GTAG TYPE DECLARATIONS
// =================================================================

/**
 * Global gtag function declaration
 */
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set' | 'consent',
      targetId: string | Date | 'default' | 'update',
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export {};
