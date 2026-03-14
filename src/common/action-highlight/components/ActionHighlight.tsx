import type { ActionHighlightProps } from '@/common/action-highlight/types'
import { ArrowTrendingDownIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a highlighted action block with an arrow icon and two lines of customizable text.
 * @public
 * @interface ActionHighlightProps
 * @param {object} props - Component properties.
 * @param {ActionHighlightProps['firstText']} firstText - The primary (first) text line to display.
 * @param {ActionHighlightProps['secondText']} secondText - The secondary (second) text line to display.
 * @param {ActionHighlightProps['firstChangePosition']} [firstChangePosition] - Applies styles for the first positioning.
 * @returns {JSX.Element} A container with an arrow icon and two text lines positioned absolutely.
 */
export const ActionHighlight = (props: ActionHighlightProps) => {
  const { firstText, secondText, firstChangePosition } = props
  return (
    <div
      className={clsx(
        'horizontal absolute gap-x-2.75',
        firstChangePosition && [
          '-bottom-14.5 pr-8',
          'm2x:-bottom-15',
          'md:-bottom-15.75 md:ml-13.5',
          'lg:-bottom-16.5',
          '1xl:-bottom-18.5',
          '2xl:-bottom-19.75',
          '3xl:-bottom-21',
          '5xl:-bottom-23',
        ]
      )}
    >
      <span className={clsx('horizontal pb-5')}>
        <ArrowTrendingDownIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-primary size-9 -rotate-180',
            'm2x:size-9.25',
            'md:size-10',
            '1xl:size-11',
            '2xl:size-12'
          )}
        />
      </span>
      <p
        style={{ fontFamily: 'var(--font-reenie-beanie)' }}
        className={clsx(
          'vertical text-primary text-2xl leading-6.75',
          'm2x:text-[1.5625rem]',
          'md:text-[1.625rem] md:leading-7',
          'lg:text-[1.75rem] lg:leading-7.5',
          '1xl:text-3xl 1xl:leading-8',
          '2xl:text-[2rem] 2xl:leading-8.5',
          '3xl:text-[2.0625rem] 3xl:leading-9',
          '5xl:text-[2.125rem] 5xl:leading-9.5'
        )}
      >
        <span>{firstText}</span>
        <span>{secondText}</span>
      </p>
    </div>
  )
}
