import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { LeadVisual } from '@/features/home/components/atoms/LeadVisual'
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
 * @returns {JSX.Element} The rendered CustomerTestimonials component.
 */
export const CustomerTestimonials = ({
  title,
  description,
  eyebrow,
  primaryCta,
  image,
}: {
  title: string
  description: string
  eyebrow: string
  primaryCta: { text: string; href: string }
  image: string
}) => {
  return (
    <div className={clsx('vertical w-full items-start gap-y-8', 'm3x:gap-y-8.75')}>
      <LeadVisual image={image} />
      <div className={clsx('vertical w-full items-center gap-y-8.5', 'm1x:gap-y-9')}>
        <div className={clsx('vertical w-full items-center gap-y-8', 'm1x:gap-y-8.75', 'm3x:gap-y-9.5')}>
          <SectionHeader title={title} description={description} eyebrow={eyebrow} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} newTab={true} />
        </div>
      </div>
    </div>
  )
}
