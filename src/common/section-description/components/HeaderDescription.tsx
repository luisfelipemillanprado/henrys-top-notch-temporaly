import type { SectionDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Render a responsive header description list item component.
 * @component
 * @param {SectionDescriptionProps} props - Component properties with description and changeWidth optional.
 * @param {string} props.description - The description value for the header description.
 * @param {boolean} [props.changeWidth] - Optional flag to change text position.
 * @returns Renders a responsive header description list item component.
 */
export const HeaderDescription = ({ description }: SectionDescriptionProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'justify-center',
        'z-30',
        'md:w-full',
        'md:justify-start',
        'md:mt-2',
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
          'w-71',
          'text-center',
          'text-[0.9375rem]',
          'leading-7',
          'text-warmgray',
          'm1x:w-75.5',
          'm1x:text-base',
          'm1x:leading-7.5',
          'md:w-auto',
          'md:text-start',
          '1xl:text-[1.0625rem]',
          '1xl:leading-7.75',
          '2xl:leading-8',
          '3xl:text-lg',
          '3xl:leading-8.5',
          '5xl:text-[1.3125rem]',
          '5xl:leading-9.5'
        )}
      >
        {description}
      </p>
    </div>
  )
}
