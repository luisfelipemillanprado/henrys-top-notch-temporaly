import type { QuaternaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a quaternary heading (h4) with options for text truncation and alignment.
 * @component
 * @param {QuaternaryTitleProps} props - The properties for the QuaternaryTitle component.
 * @param {string} props.title - The text content to be displayed in the heading.
 * @param {string} [props.headingId] - Optional unique identifier. Defaults to the title if not provided.
 * @param {boolean} [props.changePosition=false] - If true, centers the title within its container.
 * @param {boolean} [props.truncate=true] - If true, applies ellipsis to overflowing text.
 * @returns A container div wrapping a styled h4 element.
 */
export const QuaternaryTitle = ({
  title,
  headingId,
  changePosition = false,
  truncate = true,
}: QuaternaryTitleProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', changePosition ? 'justify-center' : 'justify-start')}>
      <h4
        id={headingId ?? title}
        className={clsx(
          'text-secondary',
          'font-semibold',
          truncate && 'truncate',
          'text-lg',
          'md:text-[1.3125rem]',
          'lg:text-[1.375rem]'
        )}
      >
        {title}
      </h4>
    </div>
  )
}
