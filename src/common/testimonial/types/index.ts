/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Represents the properties for the testimonial name component.
 * @export
 * @interface TestimonialNameProps
 * @property {string} name - The full name of the person providing the testimonial.
 */
export interface TestimonialNameProps {
  name: string
}

/**
 * @description Represents the properties for a testimonial item.
 * @export
 * @interface TestimonialProps
 * @property {string} name - The full name of the person providing the testimonial.
 * @property {string} position - The role or position of the person (displayed below the name).
 * @property {string} comment - The testimonial text content.
 * @property {string} url - The URL of the avatar image.
 * @property {object[]} stars - An array of star objects representing the rating.
 * @property {number} stars[].id - The unique identifier of each star.
 */
export interface TestimonialProps {
  name: string
  position: string
  comment: string
  url: string
  stars: { id: number }[]
}
