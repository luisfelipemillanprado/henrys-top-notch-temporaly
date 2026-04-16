import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { Testimonials } from '@/features/home/components/molecules/Testimonials'
import clsx from 'clsx'

/**
 * @description Renders a component that presents customer testimonials.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - The eyebrow text of the section.
 * @param {object} props.primaryCta - The primary call-to-action button properties.
 * @param {string} props.primaryCta.text - The text of the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL of the primary call-to-action button.
 * @param {string} props.image - The URL of the image representing the customer testimonials section.
 * @param {object[]} props.testimonials - An array of testimonial objects.
 * @param {string} props.testimonials[].name - The full name of the person providing the testimonial.
 * @param {string} props.testimonials[].position - The role or position of the person (displayed below the name).
 * @param {string} props.testimonials[].comment - The testimonial text content.
 * @param {string} props.testimonials[].url - The URL of the avatar image.
 * @param {object[]} props.testimonials[].stars - An array of star objects representing the rating.
 * @param {number} props.testimonials[].stars[].id - The unique identifier of each star.
 */
export const CustomerTestimonials = ({
  title,
  description,
  eyebrow,
  primaryCta,
  image,
  testimonials,
}: {
  title: string
  description: string
  eyebrow: string
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
    <div className={clsx('vertical w-full items-start gap-y-8', 'm3x:gap-y-8.75', 'md:gap-y-9.5')}>
      <div className={clsx('w-full px-2')}>
        <LeadVisual image={image} changeBackground={true} />
      </div>
      <div className={clsx('vertical w-full items-center gap-y-8.5', 'm1x:gap-y-9', 'md:gap-y-9.5')}>
        <div
          className={clsx(
            'vertical w-full items-center gap-y-8 px-2',
            'm1x:gap-y-8.75',
            'm3x:gap-y-9.5',
            'md:items-start md:pr-16.75 md:pl-4'
          )}
        >
          <SectionHeader title={title} description={description} eyebrow={eyebrow} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} newTab={true} />
        </div>
        <Testimonials testimonials={testimonials} />
      </div>
    </div>
  )
}
