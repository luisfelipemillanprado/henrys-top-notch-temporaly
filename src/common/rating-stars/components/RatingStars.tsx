import type { RatingStarsProps } from '@/common/rating-stars/types'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Render a star rating list item component.
 * @component
 * @param {RatingStarsProps} props - Component properties with stars list value with id for each star and changePosition optional.
 * @param {object[]} props.stars - The stars list value with id for each star.
 * @param {number} props.stars[].id - The id value for each star.
 * @param {boolean} [props.changePosition] - Optional flag to indicate if the position stars is justify-start.
 * @returns Renders a star rating list item component.
 */
export const RatingStars = ({ stars, changePosition = false }: RatingStarsProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'gap-x-1.5',
        changePosition ? 'justify-start' : 'justify-center',
        'm1x:gap-x-2',
        'md:justify-start',
        'lg:gap-x-2.5'
      )}
    >
      {stars.map((item) => (
        <span key={item.id} className={clsx('horizontal')}>
          <StarIcon
            aria-hidden={'true'}
            role={'img'}
            className={clsx('size-5.75', 'fill-golden', 'm1x:size-6', 'm3x:size-6.25', 'lg:size-6.5')}
          />
        </span>
      ))}
    </div>
  )
}
