import type { CardDescriptionProps } from '@/common/card-description/types'
import clsx from 'clsx'

/**
 * @description Renders a component used to render short descriptive content within cards.
 * @public
 * @interface CardDescriptionProps
 * @param {object} props - Component properties.
 * @param {CardDescriptionProps['description']} props.description - Text content rendered inside the description.
 * @param {CardDescriptionProps['changePosition']} [props.changePosition] - An optional boolean that, when true, changes the text.
 * @param {CardDescriptionProps['changeWidth']} [props.changeWidth] - An optional boolean that, when true, adjusts the width.
 * @param {CardDescriptionProps['changeMargin']} [props.changeMargin] - An optional boolean that, when true, adds a bottom margin.
 * @param {CardDescriptionProps['changeColor']} [props.changeColor] - An optional boolean that, when true, changes the text color.
 * @returns {JSX.Element} A rendering a responsive description paragraph.
 */
export const CardDescription = ({
  description,
  changePosition = false,
  changeWidth = false,
  changeMargin = false,
  changeColor = false,
}: CardDescriptionProps) => {
  return (
    <div
      className={clsx(
        'horizontal w-full',
        changePosition ? 'justify-center' : 'justify-start',
        changeMargin && ['mb-0.5', 'm1x:mb-1']
      )}
    >
      <p
        className={clsx(
          'text-[0.9375rem] leading-6.75',
          changeColor ? 'text-warmgray' : 'text-dimgray',
          changePosition && 'text-center',
          changeWidth && ['w-67', 'm1x:w-71'],
          'm1x:text-base m1x:leading-7',
          'md:leading-7.5',
          '1xl:text-[1.0625rem] 1xl:leading-7.5',
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
