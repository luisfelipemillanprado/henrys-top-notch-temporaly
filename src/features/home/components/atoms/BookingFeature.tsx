import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import { CardDescription } from '@/features/home/components/atoms/CardDescription'
import { BoltIcon, BuildingOffice2Icon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Enum representing the different service icons used in the booking features section.
 * @private
 * @property {string} EMERGENCY  -Icon for emergency services, such as urgent repairs or critical issues.
 * @property {string} EXPERTS    -Icon for expert services, indicating professional and specialized assistance.
 * @property {string} COMFORT    -Icon for comfort services, providing convenience and ease for users.
 */
enum BookingFeaturesIcon {
  EMERGENCY = 'emergency',
  EXPERTS = 'experts',
  COMFORT = 'comfort',
}

/**
 * @description Maps a given icon identifier to its corresponding icon component for each booking feature.
 * @private
 * @param {string} icon - The BookingFeaturesIcon string identifier, icon enum.
 * @returns A rendering the icon, or a fallback span if unknown.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case BookingFeaturesIcon.EMERGENCY:
      return (
        <BoltIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-bright-orange h-7.25 w-7.25',
            'm1x:h-7.5 m1x:w-7.5',
            'm3x:h-7.75 m3x:w-7.75',
            'md:h-8.25 md:w-8.25',
            'lg:h-8.75 lg:w-8.75',
            '1xl:h-9.25 1xl:w-9.25',
            '2xl:h-9.5 2xl:w-9.5'
          )}
        />
      )
    case BookingFeaturesIcon.EXPERTS:
      return (
        <CheckBadgeIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-bright-orange h-7.25 w-7.25',
            'm1x:h-7.5 m1x:w-7.5',
            'm3x:h-7.75 m3x:w-7.75',
            'md:h-8.25 md:w-8.25',
            'lg:h-8.75 lg:w-8.75',
            '1xl:h-9.25 1xl:w-9.25',
            '2xl:h-9.5 2xl:w-9.5'
          )}
        />
      )
    case BookingFeaturesIcon.COMFORT:
      return (
        <BuildingOffice2Icon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-bright-orange h-7.25 w-7.25',
            'm1x:h-7.5 m1x:w-7.5',
            'm3x:h-7.75 m3x:w-7.75',
            'md:h-8.25 md:w-8.25',
            'lg:h-8.75 lg:w-8.75',
            '1xl:h-9.25 1xl:w-9.25',
            '2xl:h-9.5 2xl:w-9.5'
          )}
        />
      )
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a component that displays a single booking feature.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.icon - The URL of the feature icon.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - A brief description of the feature.
 * @returns A JSX element representing the booking feature.
 */
export const BookingFeature = ({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) => {
  return (
    <div
      className={clsx(
        'bg-off-white border-electric-blue/30 vertical w-full gap-y-3.5 rounded-3xl border p-5 shadow-md',
        'm1x:p-5.25',
        'm4x:p-5.5',
        'lg:px-6',
        '2xl:px-6.5',
        '3xl:px-6.75'
      )}
    >
      <div className={clsx('vertical w-full items-start gap-y-4.5', '1xl:gap-y-5', '3xl:gap-y-5.25')}>
        <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
        <TertiaryTitle title={title} />
      </div>
      <div className={clsx('horizontal w-full justify-start')}>
        <CardDescription description={description} />
      </div>
    </div>
  )
}
