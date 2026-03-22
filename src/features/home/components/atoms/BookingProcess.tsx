import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { LeadVisual } from '@/features/home/components/atoms/LeadVisual'
import clsx from 'clsx'

/**
 * @description Renders a component that presents the booking process.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the simple booking process section.
 * @param {string} props.description - A brief description of the simple booking process.
 * @param {string} props.eyebrow - An eyebrow text to provide additional context or emphasis.
 * @param {string} props.image - The URL of the image to be displayed in the section.
 * @returns {JSX.Element} A semantic element rendering the booking process content.
 */
export const BookingProcess = ({
  image,
  title,
  description,
  eyebrow,
}: {
  image: string
  title: string
  description: string
  eyebrow: string
}) => {
  return (
    <div className={clsx('vertical w-full items-start gap-y-8', 'm3x:gap-y-8.75')}>
      <LeadVisual image={image} />
      <SectionHeader title={title} description={description} eyebrow={eyebrow} />
    </div>
  )
}
