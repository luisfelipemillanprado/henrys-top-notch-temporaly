import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { Testimonials } from '@/features/home/components/molecules/Testimonials'
import clsx from 'clsx'

/**
 * @description Renders the testimonials section content with lead visual, header CTA, and carousel.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id used by accessibility attributes.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Button label text.
 * @param {string} props.primaryCta.href - Button destination URL.
 * @param {string} props.image - Lead visual image URL.
 * @param {array} props.testimonials - Testimonials rendered in the carousel.
 * @param {string} props.testimonials[].name - Customer name.
 * @param {string} props.testimonials[].position - Customer position.
 * @param {string} props.testimonials[].comment - Customer feedback.
 * @param {string} props.testimonials[].url - Avatar URL.
 * @param {array} props.testimonials[].stars - Star rating array.
 * @param {number} props.testimonials[].stars[].id - Star unique ID.
 * @param {number} props.testimonials[].id - Testimonial unique ID.
 * @returns A responsive testimonials layout with CTA and carousel content.
 */
export const CustomerTestimonials = ({
  title,
  description,
  eyebrow,
  titleId,
  primaryCta,
  image,
  testimonials,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
  primaryCta: { text: string; href: string }
  image: string
  testimonials: {
    name: string
    position: string
    comment: string
    url: string
    stars: { id: number }[]
    id: number
  }[]
}) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-start',
        'gap-y-8',
        'm3x:gap-y-9',
        'md:gap-y-11',
        'lg:gap-y-12'
      )}
    >
      <LeadVisual image={image} changeBackground={true} />
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-center',
          'gap-y-8.5',
          'm1x:gap-y-9',
          'md:gap-y-11',
          'lg:gap-y-12'
        )}
      >
        <div
          className={clsx(
            'vertical',
            'w-full',
            'items-center',
            'gap-y-7',
            'm1x:gap-y-8',
            'md:items-start',
            'md:bg-primary',
            'md:border',
            'md:border-electric-blue/30',
            'md:rounded-3xl',
            'md:shadow-md',
            'md:p-8',
            'lg:p-10'
          )}
        >
          <SectionHeader title={title} description={description} eyebrow={eyebrow} titleId={titleId} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} newTab={true} />
        </div>
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  )
}
