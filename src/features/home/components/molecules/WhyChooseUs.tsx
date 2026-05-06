import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { Reasons } from '@/features/home/components/atoms/Reasons'
import clsx from 'clsx'

/**
 * @description Renders the "Why Choose Us" section content with lead visual, header, reasons list, and CTA.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id.
 * @param {string} props.image - Lead visual image URL.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Primary button label text.
 * @param {string} props.primaryCta.href - Primary button destination URL.
 * @param {array} props.reasons - Reason entries rendered in the reasons list.
 * @param {string} props.reasons[].affirmation - Benefit highlight text.
 * @param {string} props.reasons[].resume - Benefit descriptive text.
 * @param {number} props.reasons[].id - Reason unique identifier.
 * @returns A responsive layout with section header, reasons grid, and CTA.
 */
export const WhyChooseUs = ({
  title,
  description,
  eyebrow,
  titleId,
  image,
  primaryCta,
  reasons,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
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
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-center',
        'gap-y-8',
        'm3x:gap-y-9',
        'md:gap-y-11',
        'lg:gap-y-12'
      )}
    >
      <LeadVisual image={image} changeBackground={true} />
      <div className={clsx('vertical', 'w-full', 'gap-y-8.5', 'm1x:gap-y-9', 'md:gap-y-11', 'lg:gap-y-12')}>
        <div
          className={clsx(
            'vertical',
            'w-full',
            'items-center',
            'gap-y-7',
            'm1x:gap-y-8',
            'md:items-start',
            'md:bg-off-white',
            'md:border',
            'md:border-electric-blue/30',
            'md:rounded-3xl',
            'md:shadow-md',
            'md:p-8',
            'lg:p-10'
          )}
        >
          <SectionHeader title={title} description={description} eyebrow={eyebrow} titleId={titleId} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
        </div>
        <Reasons reasons={reasons} />
      </div>
    </div>
  )
}
