/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for company logo renderers.
 * @interface LogoCompanyProps
 * @property {string} url - Company logo image URL.
 * @property {boolean} [footer] - Enables footer-specific visual styles.
 */
export interface LogoCompanyProps {
  url: string
  footer?: boolean
}
