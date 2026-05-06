/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for eyebrow/overline text labels.
 * @interface EyeBrowProps
 * @property {string} text - Eyebrow text content.
 * @property {boolean} [hidden] - Hides the eyebrow label when true.
 */
export interface EyeBrowProps {
  text: string
  hidden?: boolean
}
