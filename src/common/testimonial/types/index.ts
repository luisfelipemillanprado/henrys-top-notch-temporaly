/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for testimonial name labels.
 * @interface TestimonialNameProps
 * @property {string} name - Customer or reviewer display name.
 */
export interface TestimonialNameProps {
  name: string
}

/**
 * @description Defines the structure of a testimonial card payload.
 * @interface TestimonialProps
 * @property {string} name - Customer or reviewer display name.
 * @property {string} position - Role, location, or subtitle displayed under the name.
 * @property {string} comment - Testimonial message text.
 * @property {string} url - Avatar image URL.
 * @property {{ id: number }[]} stars - Visual rating configuration.
 * @property {number} stars[].id - Stable key for each star item.
 */
export interface TestimonialProps {
  name: string
  position: string
  comment: string
  url: string
  stars: { id: number }[]
}
