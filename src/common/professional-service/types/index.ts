/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for service preview images.
 * @interface ServiceImageProps
 * @property {string} url - Service image URL.
 */
export interface ServiceImageProps {
  url: string
}

/**
 * @description Defines props for service benefit lists.
 * @interface ServiceBenefitsProps
 * @property {{ text: string; id: number }[]} benefits - Benefit entries rendered for the service.
 * @property {string} benefits.text - Benefit description text.
 * @property {number} benefits.id - Stable key for each benefit item.
 */
export interface ServiceBenefitsProps {
  benefits: { text: string; id: number }[]
}

/**
 * @description Defines the full payload for a professional-service card.
 * @interface ProfessionalServiceProps
 * @property {string} url - Service image URL.
 * @property {string} title - Service title.
 * @property {{ id: number }[]} stars - Rating star entries.
 * @property {number} stars.id - Stable key for each star.
 * @property {string} description - Service description.
 * @property {{ text: string; id: number }[]} benefits - Benefit list.
 * @property {string} benefits.text - Benefit description text.
 * @property {number} benefits.id - Stable key for each benefit.
 * @property {{ text: string; href: string }} secondaryCta - Secondary action configuration.
 * @property {string} secondaryCta.text - Secondary button label.
 * @property {string} secondaryCta.href - Secondary button destination.
 */
export interface ProfessionalServiceProps {
  url: string
  title: string
  stars: { id: number }[]
  description: string
  benefits: { text: string; id: number }[]
  secondaryCta: { text: string; href: string }
}
