import { EyeBrowProps } from '@/common/eye-brow/types'
import { MinusIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a line icon used in the EyeBrow component.
 * @private
 */
const decorationLine = (
  <MinusIcon
    aria-hidden={'true'}
    role={'img'}
    className={clsx('fill-bright-orange size-6', 'm1x:size-6.75', 'm3x:size-7.5')}
  />
)

/**
 * @description Renders an eye brow component with an icon and text.
 * @public
 * @interface EyeBrowProps
 * @param {object} props - Component properties.
 * @param {string} props.text - The text content to be displayed in the eye brow.
 * @param {boolean} [props.hidden] - An optional boolean that, when true, hides the eye brow component.
 * @returns {JSX.Element} A JSX element representing the eye brow component.
 */
export const EyeBrow = ({ text, hidden = false }: EyeBrowProps) => {
  return (
    <div className={clsx('horizontal w-full justify-center gap-x-2', hidden && 'hidden')}>
      {decorationLine}
      <span
        className={clsx(
          'text-bright-orange text-[0.9375rem] leading-6.75 font-semibold',
          'm1x:text-base m1x:leading-7',
          'm3x:text-[1.0625rem]'
        )}
      >
        {text}
      </span>
      {decorationLine}
    </div>
  )
}
