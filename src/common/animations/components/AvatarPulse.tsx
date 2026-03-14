import type { AvatarPulseAnimationProps } from '@/common/animations/types'
import clsx from 'clsx'

/**
 * @description Creates a pulsing avatar effect with optional floating and color change animations.
 * @export
 * @param {object} props - Component properties.
 * @param {AvatarPulseAnimationProps['children']} children - The content to display in the center of the pulse.
 * @param {AvatarPulseAnimationProps['float']} [float] - If true, applies a vertical floating animation to the container.
 * @param {AvatarPulseAnimationProps['colorChange']} [colorChange] - If true, uses neutral 'bg-irongray' pulse colors.
 * @param {AvatarPulseAnimationProps['hidden']} [hidden] - If true, hides the entire component.
 * @param {AvatarPulseAnimationProps['noAnimation']} [noAnimation] - If true, disables the pulse animation by hiding.
 * @returns {JSX.Element} A container with animated pulse layers and centered children content.
 */
export const AvatarPulse = ({
  children,
  float,
  colorChange,
  hidden,
  noAnimation,
}: AvatarPulseAnimationProps) => {
  const pulseLayers = [0, 0.7, 1.5]
  return (
    <div
      className={clsx(
        'relative inline-flex items-center justify-center',
        { 'animate-float-y': float },
        hidden ? 'hidden' : 'horizontal'
      )}
    >
      {pulseLayers.map((delay, index) => (
        <span
          key={index}
          className={clsx(
            noAnimation && 'hidden',
            'animate-slow-pulse absolute inset-0 z-10 m-auto scale-[0.6] rounded-full',
            colorChange ? 'bg-irongray' : 'bg-mintgreen'
          )}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {children}
    </div>
  )
}
