import type { SectionDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Renders a responsive header description with customizable text and optional positioning.
 * @public
 * @interface SectionDescriptionProps
 * @param {object} props - Component properties.
 * @param {SectionDescriptionProps['description']} props.description - The text content to be displayed in the section description.
 * @param {SectionDescriptionProps['changeWidth']} [props.changeWidth] - An optional boolean that, when true, adjusts the width.
 * @returns A rendering the responsive description.
 */
export const MainDescription = ({ description, changeWidth }: SectionDescriptionProps) => {
  return (
    <div className={clsx('horizontal w-full justify-center', 'md:justify-start')}>
      <p
        className={clsx(
          'text-dimgray text-center text-[0.9375rem] leading-6.75',
          changeWidth ? ['w-68', 'm1x:w-73'] : ['w-69', 'm1x:w-73.5'],
          'm1x:text-base m1x:leading-7',
          'md:w-auto md:text-start'
        )}
      >
        {description}
      </p>
    </div>
  )
}
