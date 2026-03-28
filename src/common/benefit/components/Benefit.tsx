import type { BenefitProps } from '@/common/benefit/types'
import { CheckIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a component that displays an individual benefit item.
 * @public
 * @interface BenefitProps
 * @param {object} props - Component properties.
 * @param {BenefitProps['text']} props.text - The text description of the key benefit item.
 * @param {BenefitProps['id']} props.id - The unique identifier of the key benefit item.
 * @returns {JSX.Element} The rendered key benefit component.
 */
export const Benefit = ({ text }: BenefitProps) => {
  return (
    <div className={clsx('horizontal justify-start gap-x-2', 'm3x:gap-x-2.5')}>
      <span
        className={clsx('horizontal bg-off-white border-strong-blue/40 rounded-full border p-1 shadow-md')}
      >
        <CheckIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-strong-blue', 'size-2.75', 'm1x:size-3')}
        />
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
