/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Represents the properties for the CardDescription component.
 * @export
 * @interface CardDescriptionProps
 * @property {string} description - A brief description of a specific service in the professional services section.
 * @property {boolean} [changePosition] - An optional boolean that, when true, changes the text alignment to center.
 * @property {boolean} [changeWidth] - An optional boolean that, when true, adjusts the width of the description.
 * @property {boolean} [changeMargin] - An optional boolean that, when true, adds a bottom margin to the description.
 * @property {boolean} [changeColor] - An optional boolean that, when true, changes the text color of the description.
 * @property {boolean} [addPadding] - An optional boolean that, when true, adds padding to the description.
 */
export interface CardDescriptionProps {
  description: string
  changePosition?: boolean
  changeWidth?: boolean
  changeMargin?: boolean
  changeColor?: boolean
  addPadding?: boolean
}
