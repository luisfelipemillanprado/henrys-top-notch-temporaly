/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for circular/ring decoration elements.
 * @interface CircularDecorationProps
 * @property {2 | 4} [rings=2] - Number of visible rings.
 * @property {boolean} [changeColor] - Enables alternate ring color tokens.
 */
export interface CircularDecorationProps {
  rings?: 2 | 4
  changeColor?: boolean
}
