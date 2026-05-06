import type { AvatarPulseAnimationProps } from '@/common/animations/types'
import clsx from 'clsx'

/**
 * @description Creates a pulsing avatar effect with optional floating and color change animations.
 * @component
 * @param {AvatarPulseAnimationProps} props - Component properties.
 * @param {ReactNode} props.children - The children value.
 * @param {boolean} [props.float] - If true, applies a vertical floating animation to the container.
 * @param {boolean} [props.colorChange] - If true, uses neutral 'bg-irongray' pulse colors.
 * @param {boolean} [props.hidden] - If true, hides the entire component.
 * @param {boolean} [props.noAnimation] - If true, disables the pulse animation by hiding.
 * @returns A container with animated pulse layers and centered children content.
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
        'relative',
        'inline-flex',
        'items-center',
        'justify-center',
        { 'animate-float-y': float },
        hidden ? 'hidden' : 'horizontal'
      )}
    >
      {pulseLayers.map((delay, index) => (
        <span
          key={index}
          className={clsx(
            noAnimation && 'hidden',
            'absolute',
            'inset-0',
            'z-10',
            'm-auto',
            'scale-[0.6]',
            'rounded-full',
            'animate-slow-pulse',
            colorChange ? 'bg-irongray' : 'bg-light-green'
          )}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
      {children}
    </div>
  )
}
