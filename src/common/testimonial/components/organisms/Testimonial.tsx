import { CardDescription } from '@/common/card-description/components/CardDescription'
import { LeadAvatar } from '@/common/lead-avatar/components/LeadAvatar'
import { RatingStars } from '@/common/rating-stars/components/RatingStars'
import { TestimonialName } from '@/common/testimonial/components/atoms/TestimonialName'
import type { TestimonialProps } from '@/common/testimonial/types/index'
import clsx from 'clsx'

/**
 * @description Renders a presentational testimonial card component.
 * @public
 * @interface TestimonialProps
 * @param {object} props - Component properties.
 * @param {TestimonialProps['name']} props.name - Full name of the person providing the testimonial.
 * @param {TestimonialProps['position']} props.position - Role or position of the person (displayed below the name).
 * @param {TestimonialProps['comment']} props.comment - Testimonial text content.
 * @param {TestimonialProps['url']} props.url - URL of the avatar image.
 * @param {TestimonialProps['stars']} props.stars - An array of star objects representing the rating.
 * @param {TestimonialProps['stars'][number]['id']} props.stars[].id - The unique identifier of each star.
 * @param {TestimonialProps['id']} props.id - The unique identifier of the testimonial.
 * @returns A testimonial card with avatar, comment, name, and role.
 */
export const Testimonial = ({ name, position, comment, url, stars }: TestimonialProps) => {
  return (
    <div
      className={clsx(
        'bg-primary border-warmgray/30 vertical w-full items-start gap-y-5 rounded-3xl border p-5 shadow-md',
        'm1x:p-5.25',
        'm4x:p-5.5'
      )}
    >
      <div className={clsx('horizontal w-full justify-start gap-x-3')}>
        <LeadAvatar url={url} />
        <div className={clsx('vertical items-start')}>
          <TestimonialName name={name} />
          <CardDescription description={position} changeColor={true} />
        </div>
      </div>
      <CardDescription description={comment} addPadding={true} />
      <RatingStars stars={stars} changePosition={true} changeSize={true} />
    </div>
  )
}
