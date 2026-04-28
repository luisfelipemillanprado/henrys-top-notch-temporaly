/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Represents the properties for the CircularDecoration component.
 * @export
 * @interface CircularDecorationProps
 * @property {2 | 3} [rings=2] - An optional property that specifies the number of rings to display (default is 2).
 * @property {boolean} [changeColor] - An optional boolean to indicate if the color of the rings should change.
 */
export interface CircularDecorationProps {
  rings?: 2 | 4
  changeColor?: boolean
}
