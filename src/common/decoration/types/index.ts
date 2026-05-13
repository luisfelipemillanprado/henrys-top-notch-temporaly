/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for ring decoration elements.
 * @interface DecorationProps
 * @property {2 | 4} [rings=2] - Number of visible rings.
 * @property {boolean} [changeColor] - Enables alternate ring color tokens.
 */
export interface DecorationProps {
  rings?: 2 | 4
  changeColor?: boolean
}
