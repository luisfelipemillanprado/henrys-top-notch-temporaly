import type { QuinaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a quinary heading (h5) with specific responsive offsets and typography.
 * @component
 * @param {QuinaryTitleProps} props - The properties for the QuinaryTitle component.
 * @param {string} props.title - The text content to be displayed in the heading.
 * @returns A container div wrapping a styled h5 element.
 */
export const QuinaryTitle = ({ title }: QuinaryTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'justify-center', 'md:-mt-2', 'md:justify-start')}>
      <h5
        className={clsx(
          'text-primary',
          'text-center',
          'font-semibold',
          'text-[1.375rem]',
          'leading-9',
          'm1x:text-[1.4375rem]',
          'm4x:text-2xl',
          'md:text-start',
          'md:text-[1.6875rem]',
          'md:leading-11',
          'lg:text-3xl',
          'lg:leading-12',
          '1xl:text-xl',
          '3xl:text-[1.3125rem]',
          '5xl:text-2xl'
        )}
      >
        {title}
      </h5>
    </div>
  )
}
