import type { TestimonialNameProps } from '@/common/testimonial/types/index'
import clsx from 'clsx'

/**
 * @description Render a component that displays the full name of the person providing the testimonial.
 * @public
 * @interface TestimonialNameProps
 * @param {object} props - Component properties.
 * @param {TestimonialNameProps['name']} props.name - The full name of the person providing the testimonial.
 * @returns The rendered TestimonialName component.
 */
export const TestimonialName = ({ name }: TestimonialNameProps) => {
  return (
    <div className={clsx('horizontal w-full justify-start')}>
      <span
        className={clsx(
          'text-secondary text-base leading-6.75 font-bold',
          'm1x:text-[1.0625rem] m1x:leading-7',
          'md:text-[1.1875rem] md:leading-7.5',
          '2xl:leading-8',
          '3xl:text-xl 3xl:leading-8.5',
          '5xl:text-[1.375rem] 5xl:leading-9.5'
        )}
      >
        {name}
      </span>
    </div>
  )
}
