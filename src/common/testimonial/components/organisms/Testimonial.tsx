import { CardDescription } from '@/common/card-description/components/CardDescription'
import { RatingStars } from '@/common/rating-stars/components/RatingStars'
import { TestimonialAvatar } from '@/common/testimonial/components/atoms/TestimonialAvatar'
import { TestimonialName } from '@/common/testimonial/components/atoms/TestimonialName'
import { TestimonialRole } from '@/common/testimonial/components/atoms/TestimonialRole'
import clsx from 'clsx'

/**
 * @description Renders a presentational testimonial card component.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.name - Full name of the person providing the testimonial.
 * @param {string} props.position - Role or position of the person (displayed below the name).
 * @param {string} props.comment - Testimonial text content.
 * @param {string} props.url - URL of the avatar image.
 * @param {object[]} props.stars - An array of star objects representing the rating.
 * @param {number} props.stars[].id - The unique identifier of each star.
 * @param {number} props.id - The unique identifier of the testimonial.
 * @returns {JSX.Element} A testimonial card with avatar, comment, name, and role.
 */
export const Testimonial = ({
  name,
  position,
  comment,
  url,
  stars,
}: {
  name: string
  position: string
  comment: string
  url: string
  stars: { id: number }[]
}) => {
  return (
    <div
      className={clsx(
        'bg-primary border-warmgray/30 vertical w-full items-start gap-y-5 rounded-3xl border p-5 shadow-md'
      )}
    >
      <div className={clsx('horizontal w-full justify-start gap-x-3.5')}>
        <TestimonialAvatar url={url} />
        <div className={clsx('vertical items-start gap-y-1')}>
          <TestimonialName name={name} />
          <TestimonialRole position={position} />
        </div>
      </div>
      <CardDescription description={comment} />
      <RatingStars stars={stars} changePosition={true} changeSize={true} />
    </div>
  )
}
