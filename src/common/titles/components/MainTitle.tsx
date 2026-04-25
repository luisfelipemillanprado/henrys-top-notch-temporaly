import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a main title component with responsive styling.
 * @public
 * @interface MainTitleProps
 * @param {object} props - Component properties.
 * @param {MainTitleProps['title']} props.title - The text content rendered as the main heading.
 * @returns The rendered main title component.
 */
export const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <div className={clsx('horizontal w-full px-4', 'md:px-0')}>
      <h1
        id={title}
        className={clsx(
          'text-primary text-center text-[2.0625rem] leading-10.5 font-semibold',
          'm1x:text-[2.1875rem] m1x:leading-11.5',
          'm2x:text-[2.3125rem] m2x:leading-12.5',
          'm3x:text-[2.375rem] m3x:leading-13',
          'm4x:leading-13.25',
          'md:text-start md:text-[3.3125rem] md:leading-17.5',
          'lg:text-[3.5625rem] lg:leading-19',
          'xl:text-[3.625rem] xl:leading-20',
          '1xl:text-[4.0625rem] 1xl:leading-21.5',
          '2xl:text-[4.3125rem] 2xl:leading-22',
          '3xl:text-[4.625rem] 3xl:leading-25',
          '5xl:text-[5.125rem] 5xl:leading-27'
        )}
      >
        {title}
      </h1>
    </div>
  )
}
