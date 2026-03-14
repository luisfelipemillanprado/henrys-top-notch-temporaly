import type { HeaderDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Renders a responsive header description with customizable text.
 * @public
 * @interface HeaderDescriptionProps
 * @param {object} props - Component properties.
 * @param {HeaderDescriptionProps['description']} description - The text content to be displayed in the header description.
 * @param {HeaderDescriptionProps['firstChangeTextPosition']} [firstChangeTextPosition] - Optional flag to change text position.
 * @param {HeaderDescriptionProps['secondChangeTextPosition']} [secondChangeTextPosition] - Optional flag to change text position.
 * @returns {JSX.Element} A rendering the responsive header description.
 */
export const HeaderDescription = (props: HeaderDescriptionProps) => {
  const { description } = props
  return (
    <div
      className={clsx(
        'horizontal z-30 w-full justify-center',
        'md:w-7/10 md:px-6',
        '1xl:w-33/50',
        '3xl:w-16/25',
        '4xl:w-7/10',
        '5xl:w-67/100'
      )}
    >
      <p
        className={clsx(
          'text-warmgray w-79 text-center text-[0.9375rem] leading-6.75',
          'm1x:text-base m1x:leading-7 m1x:w-83.5',
          'm2x:w-85',
          'md:mt-2 md:w-auto md:text-start md:leading-7.5',
          '1xl:text-[1.0625rem] 1xl:leading-7.75',
          '2xl:leading-8',
          '3xl:text-lg 3xl:leading-8.5',
          '5xl:text-[1.3125rem] 5xl:leading-9.5'
        )}
      >
        {description}
      </p>
    </div>
  )
}
