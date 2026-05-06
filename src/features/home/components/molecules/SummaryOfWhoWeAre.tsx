import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { BookingBenefits } from '@/features/home/components/molecules/BookingBenefits'
import clsx from 'clsx'

/**
 * @description Renders the "who we are" summary block with header, benefits, and CTA.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id used by accessibility attributes.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Primary button text label.
 * @param {string} props.primaryCta.href - Primary button destination URL.
 * @param {string} props.image - Lead visual image URL.
 * @param {array} props.benefits - Benefit entries rendered below the header.
 * @param {string} props.benefits[].text - Benefit description label.
 * @param {number} props.benefits[].id - Benefit unique identifier.
 * @returns A responsive summary layout combining visual, benefits, and CTA content.
 */
export const SummaryOfWhoWeAre = ({
  title,
  description,
  eyebrow,
  titleId,
  primaryCta,
  image,
  benefits,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
  primaryCta: {
    text: string
    href: string
  }
  image: string
  benefits: { text: string; id: number }[]
}) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-center',
        'gap-y-8.5',
        'm1x:gap-y-9',
        'md:gap-y-11',
        'lg:gap-y-12',
        'xl:horizontal',
        'xl:gap-y-0',
        'xl:items-start',
        'xl:gap-x-8'
      )}
    >
      <LeadVisual image={image} changeBackground={true} />
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-center',
          'gap-y-6.5',
          'px-5',
          'py-6',
          'bg-primary',
          'border',
          'border-electric-blue/30',
          'rounded-3xl',
          'shadow-md',
          'm1x:gap-y-7.5',
          'md:items-start',
          'md:p-8',
          'lg:p-10',
          'xl:gap-y-8'
        )}
      >
        <SectionHeader
          title={title}
          description={description}
          eyebrow={eyebrow}
          changeWidth={true}
          titleId={titleId}
        />
        <BookingBenefits benefits={benefits} />
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
      </div>
    </div>
  )
}
