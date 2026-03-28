/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Represents the properties for a key benefit item.
 * @export
 * @interface BenefitProps
 * @property {string} text - The text description of the key benefit item.
 * @property {number} [id] - The optional unique identifier of the key benefit item.
 */
export interface BenefitProps {
  text: string
  id?: number
}
