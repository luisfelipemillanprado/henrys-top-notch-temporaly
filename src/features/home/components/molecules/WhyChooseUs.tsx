import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { Reasons } from '@/features/home/components/atoms/Reasons'
import clsx from 'clsx'

/**
 * @description Renders the "Why Choose Us" component.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - The eyebrow text of the section.
 * @param {string} props.image - The image URL of the section.
 * @param {object} props.primaryCta - The primary call-to-action button properties.
 * @param {string} props.primaryCta.text - The text of the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL of the primary call-to-action button.
 * @param {Array} props.reasons - The reasons for choosing us.
 * @param {string} props.reasons.affirmation - The affirmation text of the reason.
 * @param {string} props.reasons.resume - The resume text of the reason.
 * @param {number} props.reasons.id - The unique identifier of the reason.
 * @returns {JSX.Element} The rendered "Why Choose Us" component.
 */
export const WhyChooseUs = ({
  title,
  description,
  eyebrow,
  image,
  primaryCta,
  reasons,
}: {
  title: string
  description: string
  eyebrow: string
  image: string
  primaryCta: {
    text: string
    href: string
  }
  reasons: {
    affirmation: string
    resume: string
    id: number
  }[]
}) => {
  return (
    <div className={clsx('vertical w-full items-center gap-y-8', 'm3x:gap-y-8.75')}>
      <LeadVisual image={image} />
      <div className={clsx('vertical w-full gap-y-8.5', 'm1x:gap-y-9')}>
        <div className={clsx('vertical w-full items-center gap-y-8', 'm1x:gap-y-8.75', 'm3x:gap-y-9.5')}>
          <SectionHeader title={title} description={description} eyebrow={eyebrow} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
        </div>
        <Reasons reasons={reasons} />
      </div>
    </div>
  )
}
