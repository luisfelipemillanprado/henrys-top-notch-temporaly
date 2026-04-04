/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Represents the properties for a lead avatar item.
 * @export
 * @interface LeadAvatarProps
 * @property {string} url - The URL of the lead avatar image to be displayed.
 * @property {boolean} [background=false] - Optional flag to determine if a background color should be applied to the avatar.
 */
export interface LeadAvatarProps {
  url: string
  background?: boolean
}
