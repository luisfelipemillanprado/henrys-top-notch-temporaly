/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Represents the properties for the eye brow components.
 * @export
 * @interface EyeBrowProps
 * @property {string} text - The text content to be displayed in the eye brow.
 * @property {boolean} [hidden] - An optional boolean that, when true, hides the eye brow component.
 */
export interface EyeBrowProps {
  text: string
  hidden?: boolean
}
