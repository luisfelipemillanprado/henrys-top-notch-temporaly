import type { EyeBrowProps } from '@/common/eye-brow/types'
import { MinusIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a decorative eyebrow label icon with side line icons.
 * @constant
 */
const decorationLineIcon = (
  <MinusIcon
    aria-hidden={'true'}
    role={'img'}
    className={clsx('size-6', 'fill-bright-orange', 'm1x:size-6.5', 'm3x:size-7')}
  />
)

/**
 * @description Render a decorative eyebrow label component with side line icons.
 * @component
 * @param {EyeBrowProps} props - Component properties with text and hidden optional.
 * @param {string} props.text - The eyebrow label text for the decorative eyebrow label with side line icons.
 * @param {boolean} [props.hidden] - Optional flag to hide the eyebrow on render.
 * @returns Returns a decorative eyebrow label with side line icons.
 */
export const EyeBrow = ({ text, hidden = false }: EyeBrowProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'justify-center',
        'gap-x-2',
        'md:justify-start',
        hidden && 'hidden'
      )}
    >
      {decorationLineIcon}
      <span
        className={clsx(
          'font-bold',
          'text-[0.9375rem]',
          'leading-7',
          'text-bright-orange',
          'm1x:text-base',
          'm1x:leading-7.5'
        )}
      >
        {text}
      </span>
      {decorationLineIcon}
    </div>
  )
}
