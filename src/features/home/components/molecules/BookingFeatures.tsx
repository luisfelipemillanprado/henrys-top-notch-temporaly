import { BookingFeature } from '@/features/home/components/atoms/BookingFeature'
import clsx from 'clsx'

/**
 * @description Renders a component that displays a list of booking features.
 * @public
 * @param {object} props - Component properties.
 * @param {Array} props.features - An array of feature objects, each containing an icon, title, description, and id.
 * @param {Array} props.features[].icon - The URL of the feature icon.
 * @param {Array} props.features[].title - The title of the feature.
 * @param {Array} props.features[].description - A brief description of the feature.
 * @param {Array} props.features[].id - A unique identifier for the feature.
 * @returns A JSX element representing the booking features.
 */
export const BookingFeatures = ({
  features,
}: {
  features: { icon: string; title: string; description: string; id: number }[]
}) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 grid-rows-3 gap-y-7.5',
        'm3x:gap-y-7.75',
        'md:grid-cols-2 md:grid-rows-3 md:gap-7',
        'lg:gap-7.5',
        '1xl:grid-cols-3 1xl:grid-rows-2',
        '2xl:gap-8',
        '3xl:gap-8.75',
        '5xl:gap-9.5'
      )}
    >
      {features.map((item) => (
        <BookingFeature key={item.id} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </div>
  )
}
