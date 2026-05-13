import { ReusableButton } from '@/common/call-action/components/ReusableButton'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { Visual } from '@/common/visual/components/Visual'
import { Reasons } from '@/features/home/components/molecules/Reasons'
import clsx from 'clsx'

/**
 * @description Renders the "Why Choose Us" section content with visual image, header, reasons list, and CTA.
 * @component
 * @param {object} props - Component properties with title, description, eyebrow, titleId, image, primaryCta, and reasons.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id.
 * @param {string} props.image - Visual image URL.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Primary button label text.
 * @param {string} props.primaryCta.href - Primary button destination URL.
 * @param {array} props.reasons - Reason entries rendered in the reasons list.
 * @param {string} props.reasons[].affirmation - Benefit highlight text.
 * @param {string} props.reasons[].resume - Benefit descriptive text.
 * @param {number} props.reasons[].id - Reason unique identifier.
 * @returns Returns a responsive layout with section header, reasons grid, and CTA.
 */
export const WyChooseUs = ({
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
        'grid',
        'grid-cols-1',
        'grid-rows-[auto_1fr]',
        'items-start',
        'w-full',
        'gap-y-7.5',
        'm3x:gap-y-8.5',
        'md:gap-y-11',
        'lg:gap-y-12',
        'xl:grid-cols-2',
        'xl:grid-rows-1',
        'xl:gap-x-9',
        'xl:gap-y-0'
      )}
    >
      <Visual image={image} />
      <div
        className={clsx(
          'grid',
          'grid-cols-1',
          'grid-rows-[auto_1fr]',
          'w-full',
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
            'md:bg-off-white',
            'md:border',
            'md:border-electric-blue/30',
            'md:rounded-3xl',
            'md:shadow-md',
            'md:px-8',
            'md:pb-8',
            'md:pt-7',
            'lg:p-10',
            'xl:p-9'
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
