import type { RatingStarsProps } from '@/common/rating-stars/types'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a star rating component.
 * @public
 * @interface RatingStarsProps
 * @param {object} props - Component properties.
 * @param {RatingStarsProps['stars']} props.stars - An array of objects representing the star rating.
 * @param {RatingStarsProps['stars'][number]['id']} props.stars.id - A unique identifier for each star in the star rating.
 * @param {RatingStarsProps['changePosition']} [props.changePosition] - An optional boolean to indicate if the position stars.
 * @returns Renders the star rating.
 */
export const RatingStars = ({ stars, changePosition = false }: RatingStarsProps) => {
  return (
    <div
      className={clsx(
        'horizontal w-full gap-x-1.5',
        changePosition ? 'justify-start' : 'justify-center',
        'm1x:gap-x-2',
        'lg:justify-start lg:gap-x-2.5'
      )}
    >
      {stars.map((item) => (
        <span key={item.id} className={clsx('horizontal')}>
          <StarIcon
            aria-hidden={'true'}
            role={'img'}
            className={clsx('fill-golden size-5.75', 'm1x:size-6', 'm3x:size-6.25', 'lg:size-6.5')}
          />
        </span>
      ))}
    </div>
  )
}
