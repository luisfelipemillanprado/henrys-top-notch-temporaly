/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for the primary "Get Started" call-to-action button.
 * @interface GetStartedButtonProps
 * @property {string} text - Visible label of the button.
 * @property {string} href - Destination URL or anchor.
 * @property {boolean} [hidden] - Hides the button when true.
 * @property {boolean} [float] - Enables floating style variants.
 */
export interface GetStartedButtonProps {
  text: string
  href: string
  hidden?: boolean
  float?: boolean
}

/**
 * @description Defines props for the reusable CTA button used across sections.
 * @interface ReusableButtonProps
 * @property {string} text - Visible label of the button.
 * @property {string} href - Destination URL or anchor.
 * @property {boolean} [startIcon] - Renders an icon before the label when true.
 * @property {boolean} [endIcon] - Renders an icon after the label when true.
 * @property {boolean} [float] - Enables floating style variants.
 * @property {boolean} [secondColor] - Enables alternate color theme.
 * @property {boolean} [noAnimation] - Disables transition and animation effects.
 * @property {boolean} [newTab] - Opens destination in a new browser tab.
 */
export interface ReusableButtonProps {
  text: string
  href: string
  startIcon?: boolean
  endIcon?: boolean
  float?: boolean
  secondColor?: boolean
  noAnimation?: boolean
  newTab?: boolean
}

/**
 * @description Defines props for CTA buttons rendered inside cards.
 * @interface CardActionButtonProps
 * @property {string} text - Visible label of the button.
 * @property {string} href - Destination URL or anchor.
 * @property {boolean} [float] - Enables floating style variants.
 * @property {boolean} [thirdColor] - Enables tertiary color theme.
 * @property {boolean} [noAnimation] - Disables transition and animation effects.
 */
export interface CardActionButtonProps {
  text: string
  href: string
  float?: boolean
  thirdColor?: boolean
  noAnimation?: boolean
}
