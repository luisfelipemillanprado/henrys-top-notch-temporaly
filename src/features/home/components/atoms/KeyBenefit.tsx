import { CheckIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a list of key benefits with check icons.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.text - The text content of the key benefit.
 * @param {number} props.index - The index of the key benefit in the list, used for styling purposes.
 * @returns {JSX.Element} The rendered key benefits component.
 */
export const KeyBenefit = (props: { text: string; index: number }) => {
  const { text, index } = props
  const isLast = index === 2
  const isHiddenOnMobile = index > 2
  return (
    <div
      className={clsx(
        'horizontal gap-x-2',
        'm3x:gap-x-2.5',
        isLast && ['col-span-2 justify-center', 'md:col-auto md:justify-start'],
        isHiddenOnMobile && 'hidden md:flex'
      )}
    >
      <span className={clsx('horizontal bg-irongray rounded-full p-1')}>
        <CheckIcon aria-hidden={'true'} role={'img'} className={clsx('fill-vivid-orange size-3')} />
      </span>
      <span
        className={clsx(
          'text-secondary truncate text-base leading-6.75 font-medium',
          'm1x:text-[1.0625rem] m1x:leading-7'
        )}
      >
        {text}
      </span>
    </div>
  )
}
