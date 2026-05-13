import { Step } from '@/features/home/components/atoms/Step'
import clsx from 'clsx'

/**
 * @description Renders the steps as a responsive grid of cards.
 * @component
 * @param {object} props - Component properties.
 * @param {array} props.steps - Array of objects representing the steps.
 * @param {string} props.steps[].url - Image URL for the specific step image or icon.
 * @param {string} props.steps[].title - Title text for the step.
 * @param {string} props.steps[].description - Explanatory text for the step.
 * @param {number} props.steps[].id - Unique identifier for React list rendering.
 * @returns A grid of step cards with mobile-first layout behavior.
 */
export const Steps = ({
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
        'gap-y-8.5',
        'm1x:gap-y-9',
        'md:grid-cols-2',
        'md:grid-rows-2',
        'md:gap-x-8',
        'md:gap-y-11',
        'lg:gap-x-9',
        'lg:gap-y-12',
        'xl:grid-cols-4',
        'xl:grid-rows-1',
        'xl:gap-x-11',
        'xl:gap-y-0'
      )}
    >
      {steps.map((item) => (
        <Step key={item.id} url={item.url} title={item.title} description={item.description} />
      ))}
    </div>
  )
}
