import { BookingStep } from '@/features/home/components/atoms/BookingStep'
import clsx from 'clsx'

/**
 * @description Renders the booking process steps as a responsive grid of cards.
 * @component
 * @param {object} props - Component properties.
 * @param {array} props.steps - Array of objects representing the booking steps.
 * @param {string} props.steps[].url - Image URL for the specific step image or icon.
 * @param {string} props.steps[].title - Title text for the booking step.
 * @param {string} props.steps[].description - Explanatory text for the booking step.
 * @param {number} props.steps[].id - Unique identifier for React list rendering.
 * @returns A grid of booking step cards with mobile-first layout behavior.
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
        'grid',
        'grid-cols-1',
        'grid-rows-4',
        'w-full',
        'mt-2',
        'gap-y-8.5',
        'm1x:gap-y-9',
        'md:grid-cols-2',
        'md:grid-rows-2',
        'md:gap-x-8',
        'md:gap-y-11',
        'lg:gap-x-24',
        'lg:gap-y-12',
        'xl:grid-cols-4',
        'xl:grid-rows-1',
        'xl:gap-x-11',
        'xl:gap-y-0',
        'xl:mt-4'
      )}
    >
      {steps.map((item) => (
        <BookingStep key={item.id} url={item.url} title={item.title} description={item.description} />
      ))}
    </div>
  )
}
