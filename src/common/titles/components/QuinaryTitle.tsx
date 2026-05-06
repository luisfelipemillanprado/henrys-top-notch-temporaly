import type { QuinaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Render quinary title list item component with a title.
 * @component
 * @param {QuinaryTitleProps} props - Component properties with title for the quinary title.
 * @param {string} props.title - The title value for the quinary title.
 * @returns Render quinary title list item component with a title.
 */
export const QuinaryTitle = ({ title }: QuinaryTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'justify-center', 'md:justify-start', 'md:-mt-2')}>
      <h5
        className={clsx(
          'text-center',
          'font-semibold',
          'text-primary',
          'text-[1.375rem]',
          'leading-9',
          'm1x:text-2xl',
          'm1x:leading-9.5',
          'm3x:text-[1.5625rem]',
          'm3x:leading-10',
          'md:text-start',
          'md:text-[1.6875rem]',
          'md:leading-11',
          'lg:text-3xl',
          'lg:leading-12'
        )}
      >
        {title}
      </h5>
    </div>
  )
}
