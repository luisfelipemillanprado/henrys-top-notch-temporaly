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
 * @param {Array} props.features[].href - The URL that the feature links to for more details.
 * @param {Array} props.features[].text - The text displayed for the feature's call-to-action.
 * @param {Array} props.features[].id - A unique identifier for the feature.
 * @returns A JSX element representing the booking features.
 */
export const BookingFeatures = ({
  features,
}: {
  features: { icon: string; title: string; description: string; href: string; text: string; id: number }[]
}) => {
  return (
    <div
      className={clsx(
        'grid w-full grid-cols-1 grid-rows-3 gap-y-8',
        'm3x:gap-y-7.75',
        'md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-11',
        'lg:gap-x-9 lg:gap-y-12',
        'xl:grid-cols-1 xl:grid-rows-3 xl:gap-x-0'
      )}
    >
      {features.map((item) => (
        <BookingFeature
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          text={item.text}
        />
      ))}
    </div>
  )
}
