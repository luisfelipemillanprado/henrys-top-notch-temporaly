/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Represents the properties for the LeadVisual component.
 * @export
 * @interface LeadVisualProps
 * @property {string} image - The URL of the lead avatar image to be displayed.
 * @property {boolean} [changeBackground] - An optional boolean that indicates whether to change the background color.
 */
export interface LeadVisualProps {
  image: string
  changeBackground?: boolean
}
