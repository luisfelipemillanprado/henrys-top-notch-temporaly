/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Represents the properties for the RatingStars component.
 * @export
 * @interface RatingStarsProps
 * @property {{ id: number }[]} stars - An array of objects representing the star rating.
 * @property {number} stars.id - A unique identifier for each star in the star rating.
 * @property {boolean} [changePosition] - An optional boolean to indicate if the position of the stars should change.
 * @property {boolean} [changeSize] - An optional boolean to indicate if the size of the stars should change.
 */
export interface RatingStarsProps {
  stars: { id: number }[]
  changePosition?: boolean
  changeSize?: boolean
}
