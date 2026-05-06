import type { QuaternaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Render quaternary title list item component with a title.
 * @component
 * @param {QuaternaryTitleProps} props - Component properties with title, changePosition and truncate optional.
 * @param {string} props.title - The title value for the quaternary title.
 * @param {boolean} [props.changePosition=false] - Optional flag to change text position.
 * @param {boolean} [props.truncate=true] - Optional flag to truncate text.
 * @returns Render quaternary title list item component with a title.
 */
export const QuaternaryTitle = ({
  title,
  changePosition = false,
  truncate = true,
}: QuaternaryTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', changePosition ? 'justify-center' : 'justify-start')}>
      <h4
        className={clsx(
          'text-[1.0625rem]',
          'leading-6.5',
          'font-semibold',
          'm1x:text-lg',
          'm1x:leading-7',
          'text-secondary',
          truncate && 'truncate',
          'md:text-[1.1875rem]',
          'md:leading-7.5',
          'lg:text-xl',
          'lg:leading-8',
          'xl:text-[1.1875rem]',
          'xl:leading-7.5'
        )}
      >
        {title}
      </h4>
    </div>
  )
}
