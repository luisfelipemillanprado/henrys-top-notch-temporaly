import type { EyeBrowProps } from '@/common/eye-brow/types'
import { MinusIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a line icon.
 * @private
 */
const decorationLine = (
  <MinusIcon
    aria-hidden={'true'}
    role={'img'}
    className={clsx('size-6', 'fill-bright-orange', 'm1x:size-7', 'm3x:size-7.5')}
  />
)

/**
 * @description Render a decorative eyebrow label with side line icons.
 * @component
 * @param {EyeBrowProps} props - Component properties with text and hidden optional.
 * @param {string} props.text - The eyebrow label text.
 * @param {boolean} [props.hidden] - Optional flag to hide the eyebrow on render.
 * @returns Renders a decorative eyebrow row with mirrored line icons and label text.
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
      {decorationLine}
      <span
        className={clsx(
          'font-bold',
          'text-[0.9375rem]',
          'leading-6.75',
          'text-bright-orange',
          'm1x:text-base',
          'm1x:leading-7',
          'm3x:text-[1.0625rem]'
        )}
      >
        {text}
      </span>
      {decorationLine}
    </div>
  )
}
