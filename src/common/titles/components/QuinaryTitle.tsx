import type { MainTitleProps } from '@/common/titles/types'
import clsx from 'clsx'

/**
 * @description Renders a quinary title component with customizable properties such as color and text position.
 * @public
 * @interface MainTitleProps
 * @param {object} props - Component properties.
 * @param {MainTitleProps['title']} title - The text content rendered as the main heading.
 * @param {MainTitleProps['firstChangeTextPosition']} [firstChangeTextPosition] - Optional flag to adjust text position.
 * @returns {JSX.Element} The rendered quinary title component.
 */
export const QuinaryTitle = (props: MainTitleProps) => {
  const { title } = props
  return (
    <div className={clsx('horizontal w-full justify-center')}>
      <h5
        className={clsx(
          'text-primary text-center text-[1.375rem] font-semibold',
          'm1x:text-[1.4375rem]',
          'm4x:text-2xl',
          'md:text-lg',
          'lg:text-[1.1875rem]',
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
