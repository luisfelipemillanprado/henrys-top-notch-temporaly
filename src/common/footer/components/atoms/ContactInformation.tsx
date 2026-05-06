import type { ContactInformationItem } from '@/common/footer/types'
import { CalendarDaysIcon, EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Enum of supported tool icon identifiers used by the home feature UI.
 * @private
 * @property {string} LOCATION    - Identifier for the location icon.
 * @property {string} EMAIL       - Identifier for the email icon.
 * @property {string} PHONE       - Identifier for the phone icon.
 * @property {string} CLOCK       - Identifier for the clock icon.
 */
enum ContactInformationIcon {
  LOCATION = 'location',
  EMAIL = 'email',
  PHONE = 'phone',
  CLOCK = 'clock',
}

const iconStyles = clsx(
  'size-6.25',
  'fill-bright-orange',
  'm1x:size-6.5',
  'm3x:size-6.75',
  'md:size-7.5',
  '1xl:size-8.5',
  '2xl:size-8.75',
  '3xl:size-9.25',
  '5xl:size-10.75'
)

/**
 * @description Maps a given icon identifier to its corresponding React component.
 * @private
 * @param {string} icon - The icon identifier, icon enum.
 * @returns A rendered icon component or a fallback span.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case ContactInformationIcon.LOCATION:
      return <MapIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case ContactInformationIcon.EMAIL:
      return <EnvelopeIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case ContactInformationIcon.PHONE:
      return <PhoneIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case ContactInformationIcon.CLOCK:
      return <CalendarDaysIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a contact information item with an associated icon, text, and link.
 * @component
 * @param {ContactInformationItem} props - Component properties with text, href, type, icon and id optional.
 * @param {string} props.text - The text value for the contact information.
 * @param {string} props.href - The href value for the contact information.
 * @param {string} props.type - The type value for the contact information.
 * @param {string} props.icon - The icon identifier for the contact information enum.
 * @param {number} [props.id] - Optional id value for the contact information.
 * @returns A rendered contact information component.
 */
export const ContactInformation = ({ text, href, type, icon }: ContactInformationItem) => {
  const content = (
    <>
      <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
      <div className={clsx('vertical', 'gap-y-1', 'md:gap-y-2')}>
        <span
          className={clsx(
            'font-medium',
            'text-primary',
            'text-[1.0625rem]',
            'm1x:text-lg',
            '3xl:text-xl',
            '5xl:text-[1.375rem]'
          )}
        >
          {text}
        </span>
        <span
          className={clsx(
            'truncate',
            'text-warmgray',
            'text-[0.9375rem]',
            'md:text-base',
            '2xl:overflow-visible',
            '2xl:text-clip',
            '2xl:whitespace-nowrap',
            '3xl:text-lg',
            '5xl:text-[1.3125rem]'
          )}
        >
          {type}
        </span>
      </div>
    </>
  )
  return href !== '#' ? (
    <Link
      href={href}
      target={'_blank'}
      rel={'noopener noreferrer'}
      className={clsx('horizontal', 'w-full', 'justify-start', 'gap-x-3')}
      aria-label={`contact-information-${text}`}
    >
      {content}
    </Link>
  ) : (
    <div className={clsx('horizontal', 'w-full', 'justify-start', 'gap-x-3')}>{content}</div>
  )
}
