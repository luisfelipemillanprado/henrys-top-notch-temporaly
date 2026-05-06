import type { SectionDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Render a footer description list item component.
 * @component
 * @param {SectionDescriptionProps} props - Component properties with description and changeWidth optional.
 * @param {string} props.description - The description value for the footer description.
 * @param {unknown} [props.changeWidth] - An optional boolean that, when true, adjusts the width.
 * @returns Renders a responsive footer description.
 */
export const FooterDescription = ({ description }: SectionDescriptionProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'justify-center', 'md:justify-start')}>
      <p
        className={clsx(
          'w-68',
          'text-center',
          'text-[0.9375rem]',
          'leading-7',
          'text-warmgray',
          'm1x:w-71',
          'm1x:text-base',
          'm1x:leading-7.5',
          'md:w-auto',
          'md:text-start',
          '1xl:text-left',
          '1xl:text-[1.0625rem]',
          '1xl:leading-8',
          '3xl:text-lg',
          '3xl:leading-8.5',
          '5xl:text-[1.3125rem]',
          '5xl:leading-9'
        )}
      >
        {description}
      </p>
    </div>
  )
}
