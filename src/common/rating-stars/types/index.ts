/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for star-rating renderers.
 * @interface RatingStarsProps
 * @property {{ id: number }[]} stars - Star items to render.
 * @property {number} stars.id - Stable key for each star item.
 * @property {boolean} [changePosition] - Enables alternate alignment styles.
 */
export interface RatingStarsProps {
  stars: { id: number }[]
  changePosition?: boolean
}
