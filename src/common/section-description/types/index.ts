/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for section-level description text components.
 * @interface SectionDescriptionProps
 * @property {string} description - Description text content.
 * @property {boolean} [changeWidth] - Enables alternate width constraints.
 */
export interface SectionDescriptionProps {
  description: string
  changeWidth?: boolean
}
