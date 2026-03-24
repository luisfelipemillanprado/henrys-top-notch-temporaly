import { BookingProcess } from '@/features/home/components/molecules/BookingProcess'
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
 * @param {Array} props.steps - An array of step objects, each containing an icon, title, description, and id.
 * @param {Array} props.steps.url - The URL of the step icon.
 * @param {Array} props.steps.title - The title of the step.
 * @param {Array} props.steps.description - A brief description of the step.
 * @param {Array} props.steps.id - A unique identifier for the step.
 * @returns {JSX.Element} A semantic element rendering the simple booking process content.
 */
export const OurBookingProcess = ({
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
    <section
      id={'booking-process'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical w-full px-5.5 pt-12 pb-15 shadow-2xs',
        'm3x:pb-16.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <BookingProcess
        title={title}
        description={description}
        eyebrow={eyebrow}
        image={image}
        features={features}
        steps={steps}
      />
    </section>
  )
}
