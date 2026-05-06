import { CardDescription } from '@/common/card-description/components/CardDescription'
import { LeadAvatar } from '@/common/lead-avatar/components/LeadAvatar'
import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import clsx from 'clsx'

/**
 * @description Renders a single booking step with an avatar, title, and supporting description.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.url - Image URL for the booking step.
 * @param {string} props.title - Step title text.
 * @param {string} props.description - Step description text.
 * @returns Returns a booking step block with image, heading, and description.
 */
export const BookingStep = ({
  url,
  title,
  description,
}: {
  url: string
  title: string
  description: string
}) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'rounded-3xl',
        'gap-y-3',
        'm1x:gap-y-3.5',
        'm3x:gap-y-4',
        'lg:gap-y-4.5'
      )}
    >
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-center',
          'gap-y-4.5',
          'lg:items-start',
          'lg:gap-y-5.5'
        )}
      >
        <LeadAvatar url={url} background={true} />
        <TertiaryTitle title={title} changePosition={true} />
      </div>
      <div className={clsx('horizontal', 'w-full', 'justify-start')}>
        <CardDescription description={description} changePosition={true} changeWidth={'wide'} />
      </div>
    </div>
  )
}
