import { BookingStep } from '@/features/home/components/atoms/BookingStep'
import clsx from 'clsx'

/**
 * @description Renders a component that presents the booking steps.
 * @public
 * @param {object} props - Component properties.
 * @param {Array} props.steps - An array of step objects, each containing a url, title, description, and id.
 * @param {Array} props.steps[].url - The URL of the image representing a specific step in the booking process section.
 * @param {Array} props.steps[].title - The title describing a specific step in the booking process section.
 * @param {Array} props.steps[].description - A brief description of a specific step in the booking process section.
 * @param {Array} props.steps[].id - A unique identifier for the step in the booking process section.
 * @returns A semantic element rendering the booking steps content.
 */
export const BookingSteps = ({
  steps,
}: {
  steps: {
    url: string
    title: string
    description: string
    id: number
  }[]
}) => {
  return (
    <div
      className={clsx(
        'mt-2 grid grid-cols-1 grid-rows-4 gap-y-8.5',
        'm1x:gap-y-9',
        'm3x:gap-y-9.5',
        'md:grid-cols-2 md:grid-rows-3 md:gap-7',
        'lg:gap-7.5',
        '1xl:grid-cols-3 1xl:grid-rows-2',
        '2xl:gap-8',
        '3xl:gap-8.75',
        '5xl:gap-9.5'
      )}
    >
      {steps.map((item) => (
        <BookingStep key={item.id} url={item.url} title={item.title} description={item.description} />
      ))}
    </div>
  )
}
