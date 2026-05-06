/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for a lead/avatar image element.
 * @interface LeadAvatarProps
 * @property {string} url - Image source URL.
 * @property {boolean} [background=false] - Enables background styling for the avatar container.
 */
export interface LeadAvatarProps {
  url: string
  background?: boolean
}
