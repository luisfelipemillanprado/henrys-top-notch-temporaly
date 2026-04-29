import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { BookingFeatures } from '@/features/home/components/molecules/BookingFeatures'
import { BookingSteps } from '@/features/home/components/molecules/BookingSteps'
import clsx from 'clsx'

/**
 * @description Renders a component that presents the simple booking process.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the simple booking process section.
 * @param {string} props.description - A brief description of the simple booking process.
 * @param {string} props.eyebrow - An eyebrow text to provide additional context or emphasis.
 * @param {string} props.image - The URL of the image to be displayed in the section.
 * @param {Array} props.features - An array of feature objects, each containing an icon, title, description, and id.
 * @param {Array} props.features.icon - The URL of the feature icon.
 * @param {Array} props.features.title - The title of the feature.
 * @param {Array} props.features.description - A brief description of the feature.
 * @param {Array} props.features.href - The URL that the feature links to for more details.
 * @param {Array} props.features.text - The text displayed for the feature's call-to-action.
 * @param {Array} props.features.id - A unique identifier for the feature.
 * @param {Array} props.steps - An array of step objects, each containing a url, title, description, and id.
 * @param {Array} props.steps.url - The URL of the step icon.
 * @param {Array} props.steps.title - The title of the step.
 * @param {Array} props.steps.description - A brief description of the step.
 * @param {Array} props.steps.id - A unique identifier for the step.
 * @param {object} props.primaryCta - An object containing the text and href for the primary call-to-action button.
 * @param {string} props.primaryCta.text - The text to display on the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL to navigate to when the primary call-to-action button is clicked.
 * @returns A semantic element rendering the simple booking process content.
 */
export const BookingProcess = ({
  title,
  description,
  eyebrow,
  image,
  features,
  steps,
  primaryCta,
}: {
  title: string
  description: string
  eyebrow: string
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
        'vertical w-full items-center gap-y-8.5',
        'm1x:gap-y-9',
        'md:gap-y-11',
        'lg:gap-y-12'
      )}
    >
      <div
        className={clsx(
          'vertical w-full gap-y-8.5',
          'm1x:gap-y-9',
          'md:gap-y-11',
          'lg:gap-y-12',
          'xl:horizontal xl:items-start xl:gap-x-8 xl:gap-y-0'
        )}
      >
        <div
          className={clsx(
            'vertical w-full items-start gap-y-8',
            'm3x:gap-y-8.75',
            'md:gap-y-11',
            'lg:gap-y-12',
            'xl:flex-col-reverse'
          )}
        >
          <LeadVisual image={image} changeBackground={true} />
          <div
            className={clsx(
              'vertical w-full items-center gap-y-8',
              'm1x:gap-y-8.75',
              'm3x:gap-y-9.5',
              'md:bg-off-white md:border-electric-blue/30 md:items-start md:rounded-3xl md:border md:p-8 md:shadow-md',
              'lg:p-10',
              'xl:p-9'
            )}
          >
            <SectionHeader
              title={title}
              description={description}
              eyebrow={eyebrow}
              titleId={'home-process-title'}
            />
            <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
          </div>
        </div>
        <BookingFeatures features={features} />
      </div>
      <BookingSteps steps={steps} />
    </div>
  )
}
