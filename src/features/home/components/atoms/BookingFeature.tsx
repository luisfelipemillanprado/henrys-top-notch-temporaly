import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import { CardDescription } from '@/features/home/components/atoms/CardDescription'
import { BoltIcon, BuildingOffice2Icon, CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { MoreInformation } from './MoreInformation'

/**
 * @description Enum representing the different service icons used in the booking features section.
 * @private
 * @property {string} EMERGENCY  -Icon for emergency services, such as urgent repairs or critical issues.
 * @property {string} EXPERTS    -Icon for expert services, indicating professional and specialized assistance.
 * @property {string} COMFORT    -Icon for comfort services, providing convenience and ease for users.
 * @property {string} CUSTOMER   -Icon for personalized customer care, representing attentive and customized support.
 */
enum BookingFeaturesIcon {
  EMERGENCY = 'emergency',
  EXPERTS = 'experts',
  COMFORT = 'comfort',
  CUSTOMER = 'customer',
}

const iconStyles = `size-7.25 m1x:size-7.5 m3x:size-7.75 md:size-8.25 lg:size-8.75 1xl:size-9.25 2xl:size-9.5`

/**
 * @description Maps a given icon identifier to its corresponding icon component for each booking feature.
 * @private
 * @param {string} icon - The BookingFeaturesIcon string identifier, icon enum.
 * @returns A rendering the icon, or a fallback span if unknown.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case BookingFeaturesIcon.EMERGENCY:
      return <BoltIcon aria-hidden={'true'} role={'img'} className={clsx('fill-primary', iconStyles)} />
    case BookingFeaturesIcon.EXPERTS:
      return (
        <CheckBadgeIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-bright-orange', iconStyles)}
        />
      )
    case BookingFeaturesIcon.COMFORT:
      return (
        <BuildingOffice2Icon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-bright-orange', iconStyles)}
        />
      )
    case BookingFeaturesIcon.CUSTOMER:
      return (
        <ShieldCheckIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-bright-orange', iconStyles)}
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
 * @param {string} props.href - The URL that the feature links to for more details.
 * @param {string} props.text - The text displayed for the feature's call-to-action.
 * @param {boolean} props.isActive - A boolean that indicates whether to change the background color of the feature.
 * @returns A JSX element representing the booking feature.
 */
export const BookingFeature = ({
  icon,
  title,
  description,
  href,
  text,
  isActive = false,
}: {
  icon: string
  title: string
  description: string
  href: string
  text: string
  isActive: boolean
}) => {
  return (
    <div
      className={clsx(
        'border-electric-blue/30 vertical w-full gap-y-3.5 rounded-3xl border p-5 shadow-md',
        isActive ? 'bg-secondary -rotate-2' : 'bg-off-white',
        'm1x:p-5.25',
        'm4x:p-5.5',
        'md:pr-6.25',
        'lg:gap-y-4 lg:py-7 lg:pr-13 lg:pl-7',
        'xl:gap-y-4.5 xl:py-8 xl:pl-8'
      )}
    >
      <div className={clsx('vertical w-full items-start gap-y-4.5', 'lg:gap-y-5', 'xl:gap-y-5.5')}>
        <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
        <TertiaryTitle title={title} isActive={isActive} />
      </div>
      <CardDescription description={description} isActive={isActive} />
      <MoreInformation href={href} text={text} isActive={isActive} />
    </div>
  )
}
