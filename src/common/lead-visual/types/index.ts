/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for lead visual image blocks.
 * @interface LeadVisualProps
 * @property {string} image - Lead image source URL.
 * @property {boolean} [changeBackground] - Enables alternate background styling.
 * @property {boolean} [changeWidth] - Enables alternate width styling.
 */
export interface LeadVisualProps {
  image: string
  changeBackground?: boolean
  changeWidth?: boolean
}
