import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Render main title list item component with a title.
 * @component
 * @param {MainTitleProps} props - Component properties with title and headingId.
 * @param {string} props.title - The title value for the main title.
 * @param {string} props.headingId - Stable anchor ID forwarded to the H1 DOM node.
 * @returns Render main title list item component with a title.
 */
export const MainTitle = ({ title, headingId }: MainTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'px-4', 'md:px-0')}>
      <h1
        id={headingId}
        className={clsx(
          'text-center',
          'font-semibold',
          'text-primary',
          'text-[2.0625rem]',
          'leading-11.5',
          'm1x:text-[2.1875rem]',
          'm1x:leading-12',
          'm2x:text-[2.3125rem]',
          'm2x:leading-12.5',
          'm3x:text-[2.375rem]',
          'm3x:leading-13',
          'm4x:leading-13.5',
          'md:text-start',
          'md:text-[3.25rem]',
          'md:leading-18',
          'lg:text-[3.4375rem]',
          'lg:leading-19',
          'xl:text-[3.6875rem]',
          'xl:leading-20'
        )}
      >
        {title}
      </h1>
    </div>
  )
}
