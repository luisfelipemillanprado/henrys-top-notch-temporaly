import type { SectionDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Renders a footer description component.
 * @public
 * @interface SectionDescriptionProps
 * @param {object} props - Component properties.
 * @param {SectionDescriptionProps['description']} props.description - The text content to be displayed in the section description.
 * @param {SectionDescriptionProps['changeWidth']} [props.changeWidth] - An optional boolean that, when true, adjusts the width.
 * @returns A rendering the responsive footer description.
 */
export const FooterDescription = ({ description }: SectionDescriptionProps) => {
  return (
    <div className={clsx('horizontal w-full justify-center', '1xl:justify-start')}>
      <p
        className={clsx(
          'text-warmgray w-68 text-center text-[0.9375rem] leading-6.75',
          'm1x:text-base m1x:w-71 m1x:leading-7',
          '1xl:text-[1.0625rem] 1xl:leading-8 1xl:text-left',
          '3xl:text-lg 3xl:leading-8.5',
          '5xl:text-[1.3125rem] 5xl:leading-9'
        )}
      >
        {description}
      </p>
    </div>
  )
}
