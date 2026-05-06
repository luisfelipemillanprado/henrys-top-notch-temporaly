import { CardDescription } from '@/common/card-description/components/CardDescription'
import { LeadAvatar } from '@/common/lead-avatar/components/LeadAvatar'
import { RatingStars } from '@/common/rating-stars/components/RatingStars'
import { TestimonialName } from '@/common/testimonial/components/atoms/TestimonialName'
import type { TestimonialProps } from '@/common/testimonial/types/index'
import clsx from 'clsx'

/**
 * @description Renders a testimonial card item component.
 * @component
 * @param {TestimonialProps} props - Component properties with name, position, comment, url and stars.
 * @param {string} props.name - The name value for the testimonial.
 * @param {string} props.position - The position value for the testimonial.
 * @param {string} props.comment - The comment value for the testimonial.
 * @param {string} props.url - The url value for the avatar image.
 * @param {object[]} props.stars - The stars value with id for each star.
 * @param {number} props.stars[].id - The id value for each star.
 * @param {number} props.id - The id value for the testimonial.
 * @returns A rendered testimonial card item component.
 */
export const Testimonial = ({ name, position, comment, url, stars }: TestimonialProps) => {
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
        <LeadAvatar url={url} />
        <div className={clsx('vertical', 'items-start')}>
          <TestimonialName name={name} />
          <CardDescription description={position} changeColor={true} />
        </div>
      </div>
      <CardDescription description={comment} addPadding={true} />
      <RatingStars stars={stars} changePosition={true} />
    </div>
  )
}
