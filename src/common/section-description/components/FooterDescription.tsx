import type { HeaderDescriptionProps } from '@/common/section-description/types'
import clsx from 'clsx'

/**
 * @description Renders a footer description component.
 * @public
 * @interface HeaderDescriptionProps
 * @param {object} props - Component properties.
 * @param {HeaderDescriptionProps['description']} description - The text content to be displayed in the header description.
 * @param {HeaderDescriptionProps['firstChangeTextPosition']} [firstChangeTextPosition] - Optional flag to change text position.
 * @param {HeaderDescriptionProps['secondChangeTextPosition']} [secondChangeTextPosition] - Optional flag to change text position.
 * @returns {JSX.Element} A rendering the responsive footer description.
 */
export const FooterDescription = (props: HeaderDescriptionProps) => {
  const { description } = props
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
