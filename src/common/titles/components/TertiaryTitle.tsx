import type { TertiaryTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a tertiary heading (h3) with support for truncation, conditional positioning, and active states.
 * @component
 * @param {TertiaryTitleProps} props - The properties for the TertiaryTitle component.
 * @param {string} props.title - The text content to be displayed in the heading.
 * @param {string} [props.headingId] - Optional unique identifier. Defaults to the title if not provided.
 * @param {boolean} [props.changePosition=false] - If true, centers the title on mobile/tablet views.
 * @param {boolean} [props.truncate=true] - If true, applies overflow truncation to the text.
 * @param {boolean} [props.isActive=false] - If true, changes the text color to primary; otherwise uses secondary.
 * @returns A container div wrapping a styled h3 element.
 */
export const TertiaryTitle = ({
  title,
  headingId,
  changePosition = false,
  truncate = true,
  isActive = false,
}: TertiaryTitleProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        changePosition ? 'justify-center' : 'justify-start',
        'lg:justify-start'
      )}
    >
      <h3
        id={headingId ?? title}
        className={clsx(
          'font-semibold',
          isActive ? 'text-primary' : 'text-secondary',
          truncate && 'truncate',
          'text-[1.0625rem]',
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
