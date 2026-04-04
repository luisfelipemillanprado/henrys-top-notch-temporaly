import type { TestimonialNameProps } from '@/common/testimonial/types/index'
import clsx from 'clsx'

/**
 * @description Render a component that displays the full name of the person providing the testimonial.
 * @public
 * @interface TestimonialNameProps
 * @param {object} props - Component properties.
 * @param {TestimonialNameProps['name']} props.name - The full name of the person providing the testimonial.
 * @returns {JSX.Element} The rendered TestimonialName component.
 */
export const TestimonialName = ({ name }: TestimonialNameProps) => {
  return (
    <div className={clsx('horizontal w-full justify-start')}>
      <span
        className={clsx(
          'text-secondary text-base font-bold',
          'm1x:text-[1.0625rem]',
          'md:text-[1.1875rem]',
          '3xl:text-xl',
          '5xl:text-[1.375rem]'
        )}
      >
        {name}
      </span>
    </div>
  )
}
