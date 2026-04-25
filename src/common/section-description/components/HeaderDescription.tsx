import type { SectionDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Renders a responsive header description with customizable text.
 * @public
 * @interface SectionDescriptionProps
 * @param {object} props - Component properties.
 * @param {SectionDescriptionProps['description']} props.description - The text content to be displayed in the header.
 * @param {SectionDescriptionProps['changeWidth']} [props.changeWidth] - Optional flag to change text position.
 * @returns A rendering the responsive header description.
 */
export const HeaderDescription = ({ description }: SectionDescriptionProps) => {
  return (
    <div
      className={clsx(
        'horizontal z-30 w-full justify-center',
        'md:mt-2 md:w-full md:justify-start',
        'md:max-w-63/100',
        'lg:max-w-3/5',
        'xl:max-w-61/100',
        '1xl:max-w-67/100',
        '3xl:max-w-16/25',
        '4xl:max-w-7/10',
        '5xl:max-w-67/100'
      )}
    >
      <p
        className={clsx(
          'text-warmgray w-71 text-center text-[0.9375rem] leading-6.75',
          'm1x:text-base m1x:leading-7 m1x:w-75.5',
          'md:w-auto md:text-start md:leading-7.5',
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
