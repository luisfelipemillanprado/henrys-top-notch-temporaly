import type { BenefitProps } from '@/common/benefit/types'
import { CheckIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a component that displays an individual benefit item.
 * @component
 * @param {BenefitProps} props - Component properties with text and id optional.
 * @param {string} props.text - The text value for the benefit.
 * @param {number} [props.id] - Optional id value for the benefit.
 * @returns A rendered benefit component.
 */
export const Benefit = ({ text }: BenefitProps) => {
  return (
    <div className={clsx('horizontal', 'justify-center', 'gap-x-2', 'm3x:gap-x-2.5', 'md:justify-start')}>
      <span
        className={clsx(
          'horizontal',
          'bg-off-white',
          'border',
          'border-strong-blue/40',
          'rounded-full',
          'p-1',
          'shadow-md'
        )}
      >
        <CheckIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('size-2.75', 'fill-strong-blue', 'm1x:size-3')}
        />
      </span>
      <span
        className={clsx(
          'truncate',
          'font-medium',
          'text-base',
          'leading-6.75',
          'text-secondary',
          'm1x:text-[1.0625rem]',
          'm1x:leading-7'
        )}
      >
        {text}
      </span>
    </div>
  )
}
