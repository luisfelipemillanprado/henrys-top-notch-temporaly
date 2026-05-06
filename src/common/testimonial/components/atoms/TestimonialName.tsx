import type { TestimonialNameProps } from '@/common/testimonial/types/index'
import clsx from 'clsx'

/**
 * @description Renders a testimonial name label component.
 * @component
 * @param {TestimonialNameProps} props - Component properties with name.
 * @param {string} props.name - The name value for the testimonial.
 * @returns A rendered testimonial name label component.
 */
export const TestimonialName = ({ name }: TestimonialNameProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'justify-start')}>
      <span
        className={clsx(
          'font-bold',
          'text-secondary',
          'text-[1.0625rem]',
          'leading-7',
          'md:text-lg',
          'md:leading-7.5',
          '2xl:leading-8',
          '3xl:text-xl',
          '3xl:leading-8.5',
          '5xl:text-[1.375rem]',
          '5xl:leading-9.5'
        )}
      >
        {name}
      </span>
    </div>
  )
}
