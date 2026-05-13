/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for stars renderers.
 * @interface StarsProps
 * @property {{ id: number }[]} stars - Stars items to render.
 * @property {number} stars.id - Stable key for each stars item.
 * @property {boolean} [changePosition] - Optional flag to indicate if the position stars is justify-start.
 */
export interface StarsProps {
  stars: { id: number }[]
  changePosition?: boolean
}
