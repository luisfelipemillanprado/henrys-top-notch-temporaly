import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { BookingFeatures } from '@/features/home/components/molecules/BookingFeatures'
import { BookingSteps } from '@/features/home/components/molecules/BookingSteps'
import clsx from 'clsx'

/**
 * @description Renders the booking-process molecule with section header, feature cards, and ordered steps.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id used by accessibility attributes.
 * @param {string} props.image - Lead visual image URL.
 * @param {array} props.features - Array of objects representing feature cards.
 * @param {string} props.features[].icon - Identifier for the feature icon.
 * @param {string} props.features[].title - Title of the feature card.
 * @param {string} props.features[].description - Description of the feature card.
 * @param {string} props.features[].href - Destination URL for the feature link.
 * @param {string} props.features[].text - Visible text for the feature link.
 * @param {number} props.features[].id - Unique identifier for the feature.
 * @param {array} props.steps - Array of objects representing the booking steps.
 * @param {string} props.steps[].url - Image URL for the specific step.
 * @param {string} props.steps[].title - Title of the step.
 * @param {string} props.steps[].description - Description of the step.
 * @param {number} props.steps[].id - Unique identifier for the step.
 * @param {object} props.primaryCta - Configuration for the primary call-to-action button.
 * @param {string} props.primaryCta.text - The text displayed on the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL that the primary call-to-action button links to.
 * @returns A responsive booking-process layout with feature grid and step grid.
 */
export const BookingProcess = ({
  title,
  description,
  eyebrow,
  titleId,
  image,
  features,
  steps,
  primaryCta,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
  image: string
  features: {
    icon: string
    title: string
    description: string
    href: string
    text: string
    id: number
  }[]
  steps: {
    url: string
    title: string
    description: string
    id: number
  }[]
  primaryCta: {
    text: string
    href: string
  }
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
        'lg:gap-y-12'
      )}
    >
      <div
        className={clsx(
          'vertical',
          'w-full',
          'gap-y-8.5',
          'm1x:gap-y-9',
          'md:gap-y-11',
          'lg:gap-y-12',
          'xl:horizontal',
          'xl:items-start',
          'xl:gap-x-8',
          'xl:gap-y-0'
        )}
      >
        <div
          className={clsx(
            'vertical',
            'w-full',
            'items-start',
            'gap-y-8',
            'm3x:gap-y-9',
            'md:gap-y-11',
            'lg:gap-y-12',
            'xl:flex-col-reverse'
          )}
        >
          <LeadVisual image={image} changeBackground={true} changeWidth={true} />
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
              'lg:p-10',
              'xl:p-9'
            )}
          >
            <SectionHeader title={title} description={description} eyebrow={eyebrow} titleId={titleId} />
            <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
          </div>
        </div>
        <BookingFeatures features={features} />
      </div>
      <BookingSteps steps={steps} />
    </div>
  )
}
