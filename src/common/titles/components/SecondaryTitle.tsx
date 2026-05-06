import type { SecondaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Render secondary title list item component with a title.
 * @component
 * @param {SecondaryTitleProps} props - Component properties.
 * @param {string} props.title - The title value for the secondary title.
 * @param {string} props.headingId - Stable anchor ID forwarded to the H2 DOM node.
 * @returns Render secondary title list item component with a title.
 */
export const SecondaryTitle = ({ title, headingId }: SecondaryTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'justify-center', 'md:justify-start')}>
      <h2
        id={headingId}
        className={clsx(
          'text-center',
          'font-semibold',
          'text-secondary',
          'text-[1.5625rem]',
          'leading-9.5',
          'm1x:text-[1.625rem]',
          'm1x:leading-10',
          'm3x:text-[1.6875rem]',
          'm3x:leading-10.5',
          'md:text-start',
          'md:text-[2.1875rem]',
          'md:leading-12',
          'lg:text-4xl',
          'lg:leading-12.5'
        )}
      >
        {title}
      </h2>
    </div>
  )
}
