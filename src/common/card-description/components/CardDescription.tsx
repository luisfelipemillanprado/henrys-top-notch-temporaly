import type { CardDescriptionProps } from '@/common/card-description/types'
import clsx from 'clsx'

/**
 * @description Renders a responsive description paragraph used inside service, info and booking cards.
 * @component
 * @param {CardDescriptionProps} props - Component properties.
 * @param {string} props.description - The description text content.
 * @param {boolean} [props.changePosition=false] - Centers the paragraph when true.
 * @param {'narrow' | 'wide'} [props.changeWidth] - Selects a width preset when defined.
 * @param {boolean} [props.changeMargin=false] - Adds vertical margin adjustments.
 * @param {boolean} [props.changeColor=false] - Switches color to `text-secondary`.
 * @param {boolean} [props.isActive=false] - Switches color to `text-warmgray` (overrides `changeColor`).
 * @param {boolean} [props.addPadding=false] - Adds extra right-side padding on selected breakpoints.
 * @returns A rendered responsive description paragraph.
 */
export const CardDescription = ({
  description,
  changePosition = false,
  changeWidth,
  changeMargin = false,
  changeColor = false,
  isActive = false,
  addPadding = false,
}: CardDescriptionProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        changePosition ? 'justify-center' : 'justify-start',
        changeMargin && ['mb-0.5', 'm1x:mb-1'],
        'md:justify-start'
      )}
    >
      <p
        className={clsx(
          'text-[0.9375rem]',
          'leading-7',
          isActive ? 'text-warmgray' : changeColor ? 'text-secondary' : 'text-dimgray',
          changePosition && 'text-center',
          changeWidth === 'narrow' && [
            'max-w-67',
            'm1x:max-w-71',
            'md:max-w-76',
            'lg:max-w-93',
            'xl:w-auto',
          ],
          changeWidth === 'wide' && ['max-w-74', 'm1x:max-w-79', 'lg:w-auto'],
          addPadding && ['m3x:pr-3', 'm4x:pr-5'],
          'm1x:text-base',
          'm1x:leading-7.5',
          'md:text-start',
          '1xl:text-[1.0625rem]',
          '1xl:leading-7.5',
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
