/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for individual benefit chips/items.
 * @interface BenefitProps
 * @property {string} text - Benefit description text.
 * @property {number} [id] - Optional stable render key.
 */
export interface BenefitProps {
  text: string
  id?: number
}
