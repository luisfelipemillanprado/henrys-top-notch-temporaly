import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a highly responsive main title (h1) with centralized styling.
 * @component
 * @param {MainTitleProps} props - The properties for the MainTitle component.
 * @param {string} props.title - The text content to be displayed in the heading.
 * @param {string} [props.headingId] - Optional unique identifier. Defaults to the title string if not provided.
 * @returns A container div wrapping a responsive h1 element.
 */
export const MainTitle = ({ title, headingId }: MainTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'px-4', 'md:px-0')}>
      <h1
        id={headingId ?? title}
        className={clsx(
          'text-primary',
          'text-center',
          'font-semibold',
          'text-[2.0625rem]',
          'leading-10.5',
          'm1x:text-[2.1875rem]',
          'm1x:leading-11.5',
          'm2x:text-[2.3125rem]',
          'm2x:leading-12.5',
          'm3x:text-[2.375rem]',
          'm3x:leading-13',
          'm4x:leading-13.25',
          'md:text-start',
          'md:text-[3.25rem]',
          'md:leading-18',
          'lg:text-[3.4375rem]',
          'lg:leading-19',
          'xl:text-[3.6875rem]',
          'xl:leading-20.5',
          '1xl:text-[4.0625rem]',
          '1xl:leading-21.5',
          '2xl:text-[4.3125rem]',
          '2xl:leading-22',
          '3xl:text-[4.625rem]',
          '3xl:leading-25',
          '5xl:text-[5.125rem]',
          '5xl:leading-27'
        )}
      >
        {title}
      </h1>
    </div>
  )
}
