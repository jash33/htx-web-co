/**
 * =================================================================
 * ANALYTICS CONFIGURATION
 * =================================================================
 *
 * Configuration for Google Analytics 4 with privacy-compliant settings
 * including GDPR/CCPA compliance, consent mode, and data retention.
 *
 * =================================================================
 */

import type {
  GA4Config,
  GA4ConsentMode,
  ConsentBannerConfig,
  ConsentPreferences,
} from '../types/analytics';

// =================================================================
// GOOGLE ANALYTICS 4 CONFIGURATION
// =================================================================

/**
 * GA4 Measurement ID
 * Replace with your actual GA4 Measurement ID
 * Format: G-XXXXXXXXXX
 */
export const GA4_MEASUREMENT_ID = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX';

/**
 * GA4 Configuration with privacy-focused settings
 */
export const ga4Config: GA4Config = {
  measurementId: GA4_MEASUREMENT_ID,
  debug: import.meta.env.DEV,
  sendPageView: true,
  anonymizeIp: true,
  cookieDomain: 'auto',
  cookieExpires: 63072000, // 2 years in seconds (GA4 default)
  cookieFlags: 'SameSite=Lax;Secure',
  dataRetention: '14months',
};

// =================================================================
// CONSENT MODE CONFIGURATION
// =================================================================

/**
 * Default consent state (before user makes a choice)
 * Following Google's Consent Mode v2 requirements
 */
export const defaultConsentMode: GA4ConsentMode = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted', // Always granted for security
  wait_for_update: 500, // Wait 500ms for consent update
};

/**
 * Consent mode for users who accept all cookies
 */
export const acceptAllConsentMode: GA4ConsentMode = {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted',
};

/**
 * Consent mode for users who only accept necessary cookies
 */
export const necessaryOnlyConsentMode: GA4ConsentMode = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
};

/**
 * Map consent preferences to GA4 consent mode
 */
export function mapConsentToGA4(preferences: ConsentPreferences): GA4ConsentMode {
  return {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.marketing ? 'granted' : 'denied',
    ad_user_data: preferences.marketing ? 'granted' : 'denied',
    ad_personalization: preferences.marketing ? 'granted' : 'denied',
    functionality_storage: preferences.preferences ? 'granted' : 'denied',
    personalization_storage: preferences.preferences ? 'granted' : 'denied',
    security_storage: 'granted',
  };
}

// =================================================================
// COOKIE CONSENT BANNER CONFIGURATION
// =================================================================

/**
 * Cookie consent banner configuration
 */
export const consentBannerConfig: ConsentBannerConfig = {
  showOnFirstVisit: true,
  position: 'bottom',
  privacyPolicyUrl: '/privacy-policy',
  cookiePolicyUrl: '/cookie-policy',
  companyName: 'HTX Web Co.',
  consentVersion: '1.0.0',
  autoHide: true,
  cookieExpireDays: 365,
};

/**
 * Default consent preferences (all denied except necessary)
 */
export const defaultConsentPreferences: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

// =================================================================
// CONSENT STORAGE KEYS
// =================================================================

export const CONSENT_STORAGE_KEY = 'hws_consent_preferences';
export const CONSENT_TIMESTAMP_KEY = 'hws_consent_timestamp';
export const CONSENT_VERSION_KEY = 'hws_consent_version';

// =================================================================
// EVENT TRACKING CONFIGURATION
// =================================================================

/**
 * Scroll depth thresholds for tracking (in percentages)
 */
export const SCROLL_DEPTH_THRESHOLDS = [25, 50, 75, 90, 100];

/**
 * Time on page intervals for tracking (in seconds)
 */
export const TIME_ON_PAGE_INTERVALS = [30, 60, 120, 300, 600];

/**
 * Engagement events to track automatically
 */
export const AUTO_TRACK_EVENTS = {
  /** Track outbound link clicks */
  outboundLinks: true,
  /** Track file downloads */
  fileDownloads: true,
  /** Track scroll depth */
  scrollDepth: true,
  /** Track time on page */
  timeOnPage: true,
  /** Track form interactions */
  formInteractions: true,
  /** Track video plays */
  videoPlays: true,
  /** Track phone number clicks */
  phoneClicks: true,
  /** Track email link clicks */
  emailClicks: true,
};

/**
 * File extensions to track as downloads
 */
export const DOWNLOAD_EXTENSIONS = [
  'pdf',
  'doc',
  'docx',
  'xls',
  'xlsx',
  'ppt',
  'pptx',
  'zip',
  'rar',
  '7z',
  'csv',
  'txt',
];

// =================================================================
// PRIVACY COMPLIANCE
// =================================================================

/**
 * Privacy-related configuration
 */
export const privacyConfig = {
  /** Data retention period in months */
  dataRetentionMonths: 14,
  /** Enable IP anonymization */
  anonymizeIp: true,
  /** Disable advertising features by default */
  allowAdFeatures: false,
  /** Respect Do Not Track header */
  respectDoNotTrack: true,
  /** GDPR regions (show consent banner) */
  gdprRegions: ['EU', 'EEA', 'UK', 'CH'],
  /** CCPA regions (show opt-out) */
  ccpaRegions: ['US-CA'],
};

/**
 * Check if user has Do Not Track enabled
 */
export function hasDoNotTrack(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    navigator.doNotTrack === '1' ||
    (window as unknown as { doNotTrack?: string }).doNotTrack === '1'
  );
}

/**
 * Check if analytics should be loaded based on privacy settings
 */
export function shouldLoadAnalytics(): boolean {
  // Respect Do Not Track if configured
  if (privacyConfig.respectDoNotTrack && hasDoNotTrack()) {
    return false;
  }
  return true;
}
