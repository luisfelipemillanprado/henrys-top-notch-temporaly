/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Defines props for an avatar image element.
 * @interface AvatarProps
 * @property {string} url - Image source URL.
 * @property {boolean} [background=false] - Enables background styling for the avatar container.
 */
export interface AvatarProps {
  url: string
  background?: boolean
}
