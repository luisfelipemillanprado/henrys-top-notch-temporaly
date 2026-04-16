import type { ButtonPulseAnimationProps } from '@/common/animations/types'
import clsx from 'clsx'

/**
 * @description Enum representing the available types of pulse animations.
 * @private
 * @property {string} SOFT  - Represents a soft pulse animation.
 * @property {string} SLOW  - Represents a slow pulse animation.
 */
enum AnimationType {
  SOFT = 'soft',
  SLOW = 'slow',
}

/**
 * @description Returns an animation configuration object based on the provided animation type.
 * @private
 * @param {AnimationType} type - Animation type enum value.
 * @returns {object} An object containing the animation type string for use in class names.
 */
const animationSwitch = (type: string) => {
  switch (type) {
    case AnimationType.SOFT:
      return { type: 'animate-soft-pulse' }
    case AnimationType.SLOW:
      return { type: 'animate-slow-pulse' }
    default:
      return { type: 'animate-none' }
  }
}

/**
 * @description Creates a pulsing button effect with various customizable animation options.
 * @export
 * @param {object} props - Component properties.
 * @param {ButtonPulseAnimationProps['children']} props.children - The content to render centered above the pulse layers.
 * @param {ButtonPulseAnimationProps['type']} props.type - Animation type key, should be one of `AnimationType` enum values.
 * @param {ButtonPulseAnimationProps['float']} [props.float] - Enables vertical floating animation if true.
 * @param {ButtonPulseAnimationProps['firstColor']} [props.firstColor] - Uses the first color for the pulse if true.
 * @param {ButtonPulseAnimationProps['secondColor']} [props.secondColor] - Uses the second color for the pulse if true.
 * @param {ButtonPulseAnimationProps['thirdColor']} [props.thirdColor] - Uses the third color for the pulse if true.
 * @param {ButtonPulseAnimationProps['rounded']} [props.rounded] - Applies fully rounded corners if true; otherwise uses rounded-2xl.
 * @param {ButtonPulseAnimationProps['overlayMore']} [props.overlayMore] - Enlarges pulse overlay area if true.
 * @param {ButtonPulseAnimationProps['hidden']} [props.hidden] - Hides the entire component if true.
 * @param {ButtonPulseAnimationProps['noAnimation']} [props.noAnimation] - Hides pulse layers (disables animation) if true.
 * @returns A container with animated pulse layers and centered children content.
 */
export const ButtonPulse = ({
  children,
  type,
  float,
  firstColor = false,
  secondColor = false,
  thirdColor = false,
  forthColor = false,
  rounded,
  overlayMore,
  hidden,
  noAnimation,
}: ButtonPulseAnimationProps) => {
  const pulseLayers = [0, 0.7, 1.5]
  return (
    <div
      className={clsx(
        'relative h-auto w-auto',
        { 'animate-float-y': float },
        hidden ? 'hidden' : 'horizontal',
        'lg:flex'
      )}
    >
      {pulseLayers.map((delay, index) => (
        <span
          key={index}
          className={clsx(
            noAnimation && 'hidden',
            `${animationSwitch(type).type} absolute z-10 opacity-60`,
            firstColor && 'bg-electric-blue',
            secondColor && 'bg-strong-blue',
            thirdColor && 'bg-strong-blue/40',
            forthColor && 'bg-light-green',
            rounded ? 'rounded-full' : 'rounded-2xl',
            overlayMore ? '-inset-0.75' : '-inset-0.5'
          )}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {children}
    </div>
  )
}
