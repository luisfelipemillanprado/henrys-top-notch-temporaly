import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Render a star rating component for a professional service.
 * @public
 * @param {object} props - Component properties.
 * @param {{ id: number }[]} props.stars - An array of objects representing the star rating for a specific service.
 * @param {number} props.stars.id - A unique identifier for each star in the star rating of a specific service.
 * @returns {JSX.Element} Renders the star rating.
 */
export const Stars = ({ stars }: { stars: { id: number }[] }) => {
  return (
    <div className={clsx('horizontal justify-center gap-x-1.5')}>
      {stars.map((item) => (
        <span key={item.id} className={clsx('horizontal')}>
          <StarIcon
            aria-hidden={'true'}
            role={'img'}
            className={clsx('fill-golden size-5.5', '2xl:size-5.75', '3xl:size-6.25', '5xl:size-6.5')}
          />
        </span>
      ))}
    </div>
  )
}
