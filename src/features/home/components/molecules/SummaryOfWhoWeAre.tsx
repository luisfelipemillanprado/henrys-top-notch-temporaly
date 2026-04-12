import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { BookingBenefits } from '@/features/home/components/molecules/BookingBenefits'
import clsx from 'clsx'

/**
 * @description Renders a component that presents a summary of who we are.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - A brief text displayed above the title, often used to categorize the section.
 * @param {object} props.primaryCta - An object containing the text and href for the primary call-to-action button.
 * @param {string} props.primaryCta.text - The text to display on the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL to navigate to when the primary call-to-action button is clicked.
 * @param {string} props.image - The URL of the image representing who we are.
 * @param {object[]} props.benefits - An array of key benefits associated with who we are.
 * @param {string} props.benefits[].text - Text describing an individual key benefit.
 * @param {number} props.benefits[].id - Unique identifier for the key benefit item.
 * @returns The rendered summary of who we are component.
 */
export const SummaryOfWhoWeAre = ({
  title,
  description,
  eyebrow,
  primaryCta,
  image,
  benefits,
}: {
  title: string
  description: string
  eyebrow: string
  primaryCta: {
    text: string
    href: string
  }
  image: string
  benefits: { text: string; id: number }[]
}) => {
  return (
    <div className={clsx('vertical w-full items-start gap-y-8', 'm3x:gap-y-8.75')}>
      <LeadVisual image={image} changeBackground={true} />
      <div
        className={clsx(
          'vertical bg-primary border-electric-blue/30 w-full items-center gap-y-6.25 rounded-3xl border px-5 py-6 shadow-md',
          'm1x:gap-y-6.75',
          'm3x:gap-y-7.5'
        )}
      >
        <SectionHeader title={title} description={description} eyebrow={eyebrow} changeWidth={true} />
        <BookingBenefits benefits={benefits} />
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
      </div>
    </div>
  )
}
