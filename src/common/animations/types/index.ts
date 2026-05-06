/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for avatar-like pulse animation wrappers.
 * @interface AvatarPulseAnimationProps
 * @property {React.ReactNode} children - Content rendered at the center of the pulse.
 * @property {boolean} [float] - Enables vertical floating motion.
 * @property {boolean} [colorChange] - Switches to alternate pulse color tokens.
 * @property {boolean} [hidden] - Hides the component when true.
 * @property {boolean} [noAnimation] - Disables pulse layers and animation.
 */
export interface AvatarPulseAnimationProps {
  children: React.ReactNode
  float?: boolean
  colorChange?: boolean
  hidden?: boolean
  noAnimation?: boolean
}

/**
 * @description Defines props for button-like pulse animation wrappers.
 * @interface ButtonPulseAnimationProps
 * @property {React.ReactNode} children - Content rendered above pulse layers.
 * @property {string} type - Animation variant key.
 * @property {boolean} [float] - Enables vertical floating motion.
 * @property {boolean} [firstColor] - Enables first color variant.
 * @property {boolean} [secondColor] - Enables second color variant.
 * @property {boolean} [thirdColor] - Enables third color variant.
 * @property {boolean} [forthColor] - Enables fourth color variant.
 * @property {boolean} [rounded] - Uses fully rounded geometry.
 * @property {boolean} [overlayMore] - Enlarges pulse overlay area.
 * @property {boolean} [hidden] - Hides the component when true.
 * @property {boolean} [noAnimation] - Disables pulse layers and animation.
 */
export interface ButtonPulseAnimationProps {
  children: React.ReactNode
  type: string
  float?: boolean
  firstColor?: boolean
  secondColor?: boolean
  thirdColor?: boolean
  forthColor?: boolean
  rounded?: boolean
  overlayMore?: boolean
  hidden?: boolean
  noAnimation?: boolean
}
