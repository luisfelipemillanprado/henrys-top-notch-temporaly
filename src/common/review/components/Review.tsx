import { Avatar } from '@/common/avatar/components/Avatar'
import { CardDescription } from '@/common/card-description/components/CardDescription'
import type { ReviewProps } from '@/common/review/types/index'
import { Stars } from '@/common/stars/components/Stars'
import clsx from 'clsx'

/**
 * @description Render a review card item component.
 * @component
 * @param {ReviewProps} props - Component properties with name, position, comment, url and stars.
 * @param {string} props.name - The name value for the review.
 * @param {string} props.position - The position value for the review.
 * @param {string} props.comment - The comment value for the review.
 * @param {string} props.url - The url value for the avatar image.
 * @param {{ id: number }[]} props.stars - The stars value with id for each star.
 * @param {number} props.stars[].id - The id value for each star.
 * @param {number} props.id - The id value for the review.
 * @returns Returns a review card item component.
 */
export const Review = ({ name, position, comment, url, stars }: ReviewProps) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-start',
        'rounded-3xl',
        'border',
        'border-electric-blue/30',
        'shadow-md',
        'bg-primary',
        'gap-y-4.5',
        'p-5',
        'm3x:p-5.25',
        'm4x:p-5.5',
        'md:w-98'
      )}
    >
      <div className={clsx('horizontal', 'w-full', 'justify-start', 'gap-x-3')}>
        <Avatar url={url} />
        <div className={clsx('vertical', 'items-start')}>
          <span
            className={clsx(
              'font-bold',
              'text-secondary',
              'text-[1.0625rem]',
              'leading-7',
              'md:text-lg',
              'md:leading-7.5',
              '2xl:leading-8',
              '3xl:text-xl',
              '3xl:leading-8.5',
              '5xl:text-[1.375rem]',
              '5xl:leading-9.5'
            )}
          >
            {name}
          </span>
          <CardDescription description={position} changeColor={true} />
        </div>
      </div>
      <CardDescription description={comment} addPadding={true} />
      <Stars stars={stars} changePosition={true} />
    </div>
  )
}
