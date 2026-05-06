/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for text blocks rendered inside service/info/booking cards.
 * @interface CardDescriptionProps
 * @property {string} description - Main text content.
 * @property {boolean} [changePosition] - Centers text alignment when true.
 * @property {'narrow' | 'wide'} [changeWidth] - Applies a width preset (`narrow` for service/info cards, `wide` for booking cards).
 * @property {boolean} [changeMargin] - Adds vertical margin adjustments for specific layouts.
 * @property {boolean} [changeColor] - Switches the paragraph color to `text-secondary`.
 * @property {boolean} [isActive] - Switches the paragraph color to `text-warmgray` (overrides `changeColor`).
 * @property {boolean} [addPadding] - Adds extra right-side padding on selected breakpoints.
 */
export interface CardDescriptionProps {
  description: string
  changePosition?: boolean
  changeWidth?: 'narrow' | 'wide'
  changeMargin?: boolean
  changeColor?: boolean
  isActive?: boolean
  addPadding?: boolean
}
