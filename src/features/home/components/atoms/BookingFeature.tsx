import { CardDescription } from '@/common/card-description/components/CardDescription'
import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
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

const iconStyles = clsx(
  'size-7.25',
  'm1x:size-7.5',
  'm3x:size-7.75',
  'md:size-8.25',
  'lg:size-8.75',
  '1xl:size-9.25',
  '2xl:size-9.5'
)

/**
 * @description Maps a feature identifier to its corresponding Heroicon component.
 * @private
 * @param {string} icon - The string identifier from BookingFeaturesIcon.
 * @returns A rendered icon component or a fallback symbol.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case BookingFeaturesIcon.EMERGENCY:
      return (
        <BoltIcon aria-hidden={'true'} role={'img'} className={clsx(iconStyles, 'fill-bright-orange')} />
      )
    case BookingFeaturesIcon.EXPERTS:
      return (
        <CheckBadgeIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(iconStyles, 'fill-bright-orange')}
        />
      )
    case BookingFeaturesIcon.COMFORT:
      return (
        <BuildingOffice2Icon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(iconStyles, 'fill-bright-orange')}
        />
      )
    case BookingFeaturesIcon.CUSTOMER:
      return (
        <ShieldCheckIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(iconStyles, 'fill-bright-orange')}
        />
      )
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a service feature card with an icon, title, description, and action link.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.icon - The icon identifier.
 * @param {string} props.title - The feature's title.
 * @param {string} props.description - The feature's description.
 * @param {string} props.href - The link destination.
 * @param {string} props.text - The link text label.
 * @param {boolean} [props.isActive=false] - Indicates if the card should render with the active/highlighted theme.
 * @returns Returns a styled booking feature card with icon, text content, and action link.
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
        'vertical',
        'w-full',
        'border',
        'border-electric-blue/30',
        'rounded-3xl',
        'shadow-md',
        isActive ? 'bg-secondary' : 'bg-off-white',
        isActive && '-rotate-2',
        'gap-y-3',
        'p-5',
        'm1x:gap-y-3.5',
        'm3x:gap-y-4',
        'm4x:p-5.5',
        'md:pr-6',
        'md:rotate-0',
        'lg:gap-y-4',
        'lg:py-7',
        'lg:pl-7',
        'lg:pr-13',
        'xl:gap-y-4.5',
        'xl:px-8'
      )}
    >
      <div className={clsx('vertical', 'w-full', 'items-start', 'gap-y-4.5', 'lg:gap-y-5', 'xl:gap-y-5.5')}>
        <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
        <TertiaryTitle title={title} isActive={isActive} />
      </div>
      <CardDescription description={description} isActive={isActive} />
      <MoreInformation href={href} text={text} isActive={isActive} />
    </div>
  )
}
