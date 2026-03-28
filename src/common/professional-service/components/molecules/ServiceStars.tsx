import type { ServiceStarsProps } from '@/common/professional-service/types'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Render a star rating component for a professional service.
 * @public
 * @interface ServiceStarsProps
 * @param {object} props - Component properties.
 * @param {ServiceStarsProps['stars']} props.stars - An array of objects representing the star rating for a specific service.
 * @param {ServiceStarsProps['stars'][number]['id']} props.stars.id - A unique identifier for each star in the star rating.
 * @returns {JSX.Element} Renders the star rating.
 */
export const ServiceStars = ({ stars }: ServiceStarsProps) => {
  return (
    <div className={clsx('horizontal justify-center gap-x-1.5', 'm1x:gap-x-2')}>
      {stars.map((item) => (
        <span key={item.id} className={clsx('horizontal')}>
          <StarIcon
            aria-hidden={'true'}
            role={'img'}
            className={clsx('fill-golden size-5.5', 'm1x:size-5.75', 'm3x:size-6')}
          />
        </span>
      ))}
    </div>
  )
}
