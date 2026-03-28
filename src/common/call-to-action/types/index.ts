/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

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
 * @property {boolean} [startIcon] - Optional icon identifier rendered before the text.
 * @property {boolean} [endIcon] - Optional icon identifier rendered after the text.
 * @property {boolean} [float] - Optional flag to render the button as a floating element.
 * @property {boolean} [secondColor] - Optional flag to change the button color on interaction.
 * @property {boolean} [noAnimation] - Optional flag to disable button animation.
 */
export interface ReusableButtonProps {
  text: string
  href: string
  startIcon?: boolean
  endIcon?: boolean
  float?: boolean
  secondColor?: boolean
  noAnimation?: boolean
}

/**
 * @description Represents the properties for a card action button component.
 * @export
 * @interface CardActionButtonProps
 * @property {string} text - The display text for the button.
 * @property {string} href - The URL the button points to.
 * @property {boolean} [float] - Optional flag to render the button as a floating element.
 * @property {boolean} [thirdColor] - Optional flag to change the button color on interaction.
 * @property {boolean} [noAnimation] - Optional flag to disable button animation.
 */
export interface CardActionButtonProps {
  text: string
  href: string
  float?: boolean
  thirdColor?: boolean
  noAnimation?: boolean
}
