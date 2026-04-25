import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a quinary title component with responsive styling.
 * @public
 * @interface MainTitleProps
 * @param {object} props - Component properties.
 * @param {MainTitleProps['title']} props.title - The text content rendered as the main heading.
 * @returns The rendered quinary title component.
 */
export const QuinaryTitle = ({ title }: MainTitleProps) => {
  return (
    <div className={clsx('horizontal w-full justify-center', 'md:justify-start')}>
      <h5
        className={clsx(
          'text-primary text-center text-[1.375rem] leading-9 font-semibold',
          'm1x:text-[1.4375rem]',
          'm4x:text-2xl',
          'md:text-start md:text-[1.75rem] md:leading-11',
          'lg:text-[1.8125rem]',
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
