/**
 * @description Interface defining the properties for the AvatarPulse component.
 * @export
 * @interface AvatarPulseAnimationProps
 * @property {React.ReactNode} children - The content to display in the center of the pulse (e.g., avatar or icon).
 * @property {boolean} [float] - If true, applies a vertical floating animation to the container.
 * @property {boolean} [colorChange] - If true, uses neutral 'bg-irongray' pulse colors; otherwise uses colored pulses.
 * @property {boolean} [hidden] - If true, hides the entire component.
 * @property {boolean} [noAnimation] - If true, disables the pulse animation by hiding the pulse layers.
 */
export interface AvatarPulseAnimationProps {
  children: React.ReactNode
  float?: boolean
  colorChange?: boolean
  hidden?: boolean
  noAnimation?: boolean
}

/**
 * @description Interface defining the properties for the ButtonPulse component.
 * @export
 * @interface ButtonPulseAnimationProps
 * @property {React.ReactNode} children - The content to render centered above the pulse layers (usually a button or icon).
 * @property {string} type - Animation type key, should be one of `AnimationType` enum values.
 * @property {boolean} [float] - Enables vertical floating animation if true.
 * @property {boolean} [firstColor] - Uses the first color for the pulse if true.
 * @property {boolean} [secondColor] - Uses the second color for the pulse if true.
 * @property {boolean} [thirdColor] - Uses the third color for the pulse if true.
 * @property {boolean} [forthColor] - Uses the fourth color for the pulse if true.
 * @property {boolean} [rounded] - Applies fully rounded corners if true; otherwise uses rounded-2xl.
 * @property {boolean} [overlayMore] - Enlarges pulse overlay area if true.
 * @property {boolean} [hidden] - Hides the entire component if true.
 * @property {boolean} [noAnimation] - Hides pulse layers (disables animation) if true.
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
