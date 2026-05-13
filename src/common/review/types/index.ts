/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines the structure of a review card payload.
 * @interface ReviewProps
 * @property {string} name - Customer or reviewer display name.
 * @property {string} position - Role, location, or subtitle displayed under the name.
 * @property {string} comment - Review message text.
 * @property {string} url - Avatar image URL.
 * @property {{ id: number }[]} stars - Visual rating configuration.
 * @property {number} stars[].id - Stable key for each star item.
 */
export interface ReviewProps {
  name: string
  position: string
  comment: string
  url: string
  stars: { id: number }[]
}
