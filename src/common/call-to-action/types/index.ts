/**
 * @description Represents the properties for a "Get Started" button component.
 * @export
 * @interface GetStartedButtonProps
 * @property {string} text - The display text for the button.
 * @property {string} href - The URL the button points to.
 * @property {boolean} [hidden] - Optional flag to hide the button when true.
 * @property {boolean} [float] - Optional flag to render the button as a floating element.
 */
export interface GetStartedButtonProps {
  text: string
  href: string
  hidden?: boolean
  float?: boolean
}

/**
 * @description Represents the properties for a reusable call-to-action button component.
 * @export
 * @interface ReusableButtonProps
 * @property {string} text - The display text for the button.
 * @property {string} href - The URL the button points to.
 * @property {boolean} icon - Indicates whether an icon should be displayed on the button.
 * @property {boolean} [float] - Optional flag to render the button as a floating element.
 * @property {boolean} [colorChange] - Optional flag to change the button color on interaction.
 * @property {boolean} [noAnimation] - Optional flag to disable button animation.
 */
export interface ReusableButtonProps {
  text: string
  href: string
  icon: boolean
  float?: boolean
  colorChange?: boolean
  noAnimation?: boolean
}
