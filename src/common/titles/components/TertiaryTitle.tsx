import type { TertiaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Render tertiary title list item component with a title.
 * @component
 * @param {TertiaryTitleProps} props - Component properties with title, changePosition, truncate and isActive optional.
 * @param {string} props.title - The title value for the tertiary title.
 * @param {boolean} [props.changePosition=false] - Optional flag to change text position.
 * @param {boolean} [props.truncate=true] - Optional flag to truncate text.
 * @param {boolean} [props.isActive=false] - Optional flag to change text color to primary.
 * @param {boolean} [props.changeWidth=false] - Optional flag to change text width.
 * @returns Render tertiary title list item component with a title.
 */
export const TertiaryTitle = ({
  title,
  changePosition = false,
  truncate = true,
  isActive = false,
  changeWidth = false,
}: TertiaryTitleProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        changePosition ? 'justify-center' : 'justify-start',
        changeWidth && ['xl:max-w-64'],
        'md:justify-start'
      )}
    >
      <h3
        className={clsx(
          'font-semibold',
          'text-[1.0625rem]',
          'leading-6.5',
          truncate && 'truncate',
          isActive ? 'text-primary' : 'text-secondary',
          'm1x:text-lg',
          'm1x:leading-7',
          'md:text-[1.1875rem]',
          'md:leading-7.5',
          'lg:text-xl',
          'lg:leading-8',
          'xl:text-[1.1875rem]',
          'xl:leading-7.5'
        )}
      >
        {title}
      </h3>
    </div>
  )
}
