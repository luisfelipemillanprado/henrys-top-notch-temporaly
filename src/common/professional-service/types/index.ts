/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Represents the properties for the CardDescription component.
 * @export
 * @interface CardDescriptionProps
 * @property {string} description - A brief description of a specific service in the professional services section.
 */
export interface CardDescriptionProps {
  description: string
}

/**
 * @description Represents the properties for the ServiceStars component.
 * @export
 * @interface ServiceStarsProps
 * @property {{ id: number }[]} stars - An array of objects representing the star rating for a specific service.
 * @property {number} stars.id - A unique identifier for each star in the star rating of a specific service.
 */
export interface ServiceStarsProps {
  stars: { id: number }[]
}

/**
 * @description Represents the properties for the ServiceBenefits component.
 * @export
 * @interface ServiceBenefitsProps
 * @property {Array} benefits - An array of benefit objects, each containing text and id, representing the key benefits.
 * @property {string} benefits.text - The text description of a key benefit item for a specific service.
 * @property {number} benefits.id - A unique identifier for each key benefit item for a specific service.
 */
export interface ServiceBenefitsProps {
  benefits: { text: string; id: number }[]
}

/**
 * @description Represents the properties for the ProfessionalService component.
 * @export
 * @interface ProfessionalServiceProps
 * @property {string} url - The URL of the image representing a specific service in the professional services section.
 * @property {string} title - The title describing a specific service in the professional services section.
 * @property {{ id: number }[]} stars - An array of objects representing the star rating for a specific service.
 * @property {number} stars.id - A unique identifier for each star in the star rating of a specific service.
 * @property {string} description - A brief description of a specific service in the professional services section.
 * @property {Array} benefits - An array of benefit objects, each containing text and id, representing the key benefits.
 * @property {string} benefits.text - The text description of a key benefit item for a specific service.
 * @property {number} benefits.id - A unique identifier for each key benefit item for a specific service.
 * @property {object} secondaryCta - An object containing the text and href for the secondary call-to-action button.
 * @property {string} secondaryCta.text - The text of the secondary call-to-action button related to a specific service.
 * @property {string} secondaryCta.href - The URL of the secondary call-to-action button related to a specific service.
 */
export interface ProfessionalServiceProps {
  url: string
  title: string
  stars: { id: number }[]
  description: string
  benefits: { text: string; id: number }[]
  secondaryCta: { text: string; href: string }
}
