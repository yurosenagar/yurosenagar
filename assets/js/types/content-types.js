// File: assets/js/types/content-types.js

/**
 * Shared content shapes for editor autocomplete and future maintenance.
 * This file contains documentation only; it does not change the website.
 *
 * @typedef {Object} NavigationLink
 * @property {string} label
 * @property {string} href
 * @property {boolean} [cta]
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {'japan'|'kathmandu'} visual
 * @property {string} number
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 *
 * @typedef {Object} JournalEntry
 * @property {string} number
 * @property {string} title
 * @property {string} meta
 * @property {string} href
 *
 * @typedef {Object} SocialLink
 * @property {string} label
 * @property {string} href
 * @property {string} [ariaLabel]
 * @property {boolean} [external]
 *
 * @typedef {Object} RaceClockContent
 * @property {string} label
 * @property {string} liveLabel
 * @property {string} timeZone
 * @property {string} locale
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} weatherFallback
 * @property {number} weatherRefreshMinutes
 */
