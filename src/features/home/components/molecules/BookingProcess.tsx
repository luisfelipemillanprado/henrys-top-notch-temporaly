import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { LeadVisual } from '@/features/home/components/atoms/LeadVisual'
import { Features } from '@/features/home/components/molecules/Features'
import { Steps } from '@/features/home/components/molecules/Steps'
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
 * @param {Array} props.features.id - A unique identifier for the feature.
 * @param {Array} props.steps - An array of step objects, each containing a url, title, description, and id.
 * @param {Array} props.steps.url - The URL of the step icon.
 * @param {Array} props.steps.title - The title of the step.
 * @param {Array} props.steps.description - A brief description of the step.
 * @param {Array} props.steps.id - A unique identifier for the step.
 * @returns {JSX.Element} A semantic element rendering the simple booking process content.
 */
export const BookingProcess = ({
  title,
  description,
  eyebrow,
  image,
  features,
  steps,
}: {
  title: string
  description: string
  eyebrow: string
  image: string
  features: {
    icon: string
    title: string
    description: string
    id: number
  }[]
  steps: {
    url: string
    title: string
    description: string
    id: number
  }[]
}) => {
  return (
    <div className={clsx('vertical w-full items-center gap-y-8.5', 'm1x:gap-y-9')}>
      <div className={clsx('vertical w-full gap-y-8.5', 'm1x:gap-y-9')}>
        <div className={clsx('vertical w-full items-start gap-y-8', 'm3x:gap-y-8.75')}>
          <LeadVisual image={image} />
          <SectionHeader title={title} description={description} eyebrow={eyebrow} />
        </div>
        <Features features={features} />
      </div>
      <Steps steps={steps} />
    </div>
  )
}
