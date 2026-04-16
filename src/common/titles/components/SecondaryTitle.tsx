import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a secondary title component with customizable properties.
 * @public
 * @interface MainTitleProps
 * @param {object} props - Component properties.
 * @param {MainTitleProps['title']} props.title - The text content rendered as the main heading.
 * @returns The rendered secondary title component.
 */
export const SecondaryTitle = ({ title }: MainTitleProps) => {
  return (
    <div id={title} className={clsx('horizontal w-full justify-center', 'md:justify-start')}>
      <h2
        className={clsx(
          'text-secondary text-center text-[1.5625rem] leading-9.5 font-semibold',
          'm1x:text-[1.625rem]',
          'm3x:text-[1.6875rem]',
          'md:text-start md:text-[2.1875rem] md:leading-11.75',
          'lg:text-[2.3125rem] lg:leading-12.5',
          '1xl:text-[2.875rem] 1xl:leading-14.5',
          '3xl:text-[3.0625rem] 3xl:leading-16',
          '5xl:text-[3.4375rem] 5xl:leading-17'
        )}
      >
        {title}
      </h2>
    </div>
  )
}
