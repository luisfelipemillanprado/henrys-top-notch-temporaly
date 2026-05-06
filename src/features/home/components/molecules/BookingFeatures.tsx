import { BookingFeature } from '@/features/home/components/atoms/BookingFeature'
import clsx from 'clsx'

/**
 * @description Renders a responsive grid of booking feature cards with adaptive layouts across breakpoints.
 * @component
 * @param {object} props - Component properties.
 * @param {object[]} props.features - Array of feature entry objects.
 * @param {string} props.features[].icon - Icon identifier.
 * @param {string} props.features[].title - Feature title.
 * @param {string} props.features[].description - Feature description.
 * @param {string} props.features[].href - Feature link destination.
 * @param {string} props.features[].text - Feature link text label.
 * @param {number} props.features[].id - Unique numeric key.
 * @returns A responsive grid container with mapped BookingFeature components.
 */
export const BookingFeatures = ({
  features,
}: {
  features: { icon: string; title: string; description: string; href: string; text: string; id: number }[]
}) => {
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'grid-rows-3',
        'w-full',
        'gap-y-8.5',
        'm1x:gap-y-9',
        'md:grid-cols-2',
        'md:grid-rows-2',
        'md:gap-x-8',
        'md:gap-y-11',
        'lg:gap-x-9',
        'lg:gap-y-12',
        'xl:grid-cols-1',
        'xl:grid-rows-3',
        'xl:gap-x-0',
        'xl:gap-y-8'
      )}
    >
      {features.map((item, index) => (
        <BookingFeature
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
          href={item.href}
          text={item.text}
          isActive={index === 0 && true}
        />
      ))}
    </div>
  )
}
