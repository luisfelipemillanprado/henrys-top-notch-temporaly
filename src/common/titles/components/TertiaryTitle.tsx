import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a tertiary title component with customizable properties.
 * @public
 * @interface MainTitleProps
 * @param {object} props - Component properties.
 * @param {MainTitleProps['title']} props.title - The text content rendered as the main heading.
 * @param {MainTitleProps['changePosition']} [props.changePosition] - Optional boolean to indicate if the position.
 * @param {MainTitleProps['truncate']} [props.truncate] - An optional boolean to indicate if the title text should be truncated.
 * @returns The rendered tertiary title component.
 */
export const TertiaryTitle = ({ title, changePosition = false, truncate = true }: MainTitleProps) => {
  return (
    <div
      className={clsx(
        'horizontal w-full',
        changePosition ? 'justify-center' : 'justify-start',
        'lg:justify-start'
      )}
    >
      <h3
        id={title}
        className={clsx(
          'text-secondary text-[1.0625rem] font-semibold',
          truncate && 'truncate',
          'm1x:text-lg',
          'md:text-[1.1875rem]',
          'lg:text-xl',
          '3xl:text-[1.3125rem]',
          '5xl:text-2xl'
        )}
      >
        {title}
      </h3>
    </div>
  )
}
