import type { SecondaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a secondary heading (h2) with responsive alignment and custom typography.
 * @component
 * @param {SecondaryTitleProps} props - The properties for the SecondaryTitle component.
 * @param {string} props.title - The text content to be displayed in the heading.
 * @param {string} [props.headingId] - Optional unique identifier. Defaults to the title if not provided.
 * @returns A container div wrapping a responsive h2 element.
 */
export const SecondaryTitle = ({ title, headingId }: SecondaryTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'justify-center', 'md:justify-start')}>
      <h2
        id={headingId ?? title}
        className={clsx(
          'text-secondary',
          'text-center',
          'font-semibold',
          'text-[1.5625rem]',
          'leading-9.5',
          'm1x:text-[1.625rem]',
          'm3x:text-[1.6875rem]',
          'md:text-start',
          'md:text-[2.1875rem]',
          'md:leading-11.75',
          'lg:text-4xl',
          'lg:leading-12.5',
          '1xl:text-[2.875rem]',
          '1xl:leading-14.5',
          '3xl:text-[3.0625rem]',
          '3xl:leading-16',
          '5xl:text-[3.4375rem]',
          '5xl:leading-17'
        )}
      >
        {title}
      </h2>
    </div>
  )
}
