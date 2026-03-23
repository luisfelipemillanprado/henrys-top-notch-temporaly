import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a tertiary title component with customizable properties.
 * @public
 * @interface MainTitleProps
 * @param {object} props - Component properties.
 * @param {MainTitleProps['title']} props.title - The text content rendered as the main heading.
 * @param {MainTitleProps['changePosition']} [props.changePosition] - Optional boolean to indicate if the position should be changed.
 * @returns {JSX.Element} The rendered tertiary title component.
 */
export const TertiaryTitle = ({ title, changePosition = false }: MainTitleProps) => {
  return (
    <div className={clsx('horizontal w-full', changePosition ? 'justify-center' : 'justify-start')}>
      <h3
        id={title}
        className={clsx(
          'text-secondary truncate text-[1.0625rem] font-semibold',
          'm1x:text-lg',
          'md:text-[1.1875rem]',
          'lg:text-xl lg:leading-7.5',
          '3xl:text-[1.3125rem] 3xl:leading-7.75',
          '5xl:text-2xl 5xl:leading-8'
        )}
      >
        {title}
      </h3>
    </div>
  )
}
