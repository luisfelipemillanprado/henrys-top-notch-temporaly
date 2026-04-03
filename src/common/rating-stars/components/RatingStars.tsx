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
 * @param {RatingStarsProps['changePosition']} [props.changePosition] - An optional boolean to indicate if the position of the stars.
 * @param {RatingStarsProps['changeSize']} [props.changeSize] - An optional boolean to indicate if the size of the stars.
 * @returns {JSX.Element} Renders the star rating.
 */
export const RatingStars = ({ stars, changePosition = false, changeSize = false }: RatingStarsProps) => {
  return (
    <div
      className={clsx(
        'horizontal w-full gap-x-1.5',
        changePosition ? 'justify-start' : 'justify-center',
        'm1x:gap-x-2'
      )}
    >
      {stars.map((item) => (
        <span key={item.id} className={clsx('horizontal')}>
          <StarIcon
            aria-hidden={'true'}
            role={'img'}
            className={clsx(
              'fill-golden',
              changeSize
                ? ['size-5.75', 'm1x:size-6', 'm3x:size-6.25']
                : ['size-5.5', 'm1x:size-5.75', 'm3x:size-6']
            )}
          />
        </span>
      ))}
    </div>
  )
}
