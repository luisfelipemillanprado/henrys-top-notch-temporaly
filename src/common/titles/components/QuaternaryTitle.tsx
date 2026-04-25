import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a quaternary title component with customizable properties such as text position, and truncation.
 * @public
 * @interface MainTitleProps
 * @param {object} props - Component properties.
 * @param {MainTitleProps['title']} props.title - The text content rendered as the main heading.
 * @param {MainTitleProps['changePosition']} [props.changePosition] - Optional flag to indicate if the title position.
 * @param {MainTitleProps['truncate']} [props.truncate] - Optional flag to enable text truncation with ellipsis for long titles.
 * @returns The rendered quaternary title component.
 */
export const QuaternaryTitle = ({ title, changePosition = false, truncate = true }: MainTitleProps) => {
  return (
    <div className={clsx('horizontal w-full', changePosition ? 'justify-center' : 'justify-start')}>
      <h4
        id={title}
        className={clsx(
          'text-secondary text-lg font-semibold',
          truncate && 'truncate',
          'md:text-[1.3125rem]',
          'lg:text-[1.375rem]'
        )}
      >
        {title}
      </h4>
    </div>
  )
}
