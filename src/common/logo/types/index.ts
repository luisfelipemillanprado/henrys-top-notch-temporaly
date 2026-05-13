/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for logo renderers.
 * @interface LogoProps
 * @property {string} url - Logo image URL.
 * @property {boolean} [footer] - Enables visual styles for the footer section.
 */
export interface LogoProps {
  url: string
  footer?: boolean
}
