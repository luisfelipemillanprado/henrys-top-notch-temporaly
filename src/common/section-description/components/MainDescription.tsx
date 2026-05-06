import type { SectionDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Render a responsive main description list item component.
 * @component
 * @param {SectionDescriptionProps} props - Component properties with description and changeWidth optional.
 * @param {string} props.description - The description value for the main description.
 * @param {boolean} [props.changeWidth] - Optional flag to change text position.
 * @returns Renders a responsive main description list item component.
 */
export const MainDescription = ({ description, changeWidth }: SectionDescriptionProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'justify-center', 'md:justify-start')}>
      <p
        className={clsx(
          'text-center',
          'text-[0.9375rem]',
          'leading-7',
          'text-dimgray',
          changeWidth ? ['w-68', 'm1x:w-73'] : ['w-69', 'm1x:w-73.5'],
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
