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

/**
 * @description A utility function that maps a given icon identifier to its corresponding React component.
 * @private
 * @param {ContactInformationItem['icon']} icon - A string identifier, icon enum.
 * @returns The resolved icon component or a fallback placeholder.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case ContactInformationIcon.LOCATION:
      return (
        <MapIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-vivid-orange size-6.25',
            'm1x:size-6.5',
            'm3x:size-6.75',
            'md:size-7.75',
            '1xl:size-8.5',
            '2xl:size-8.75',
            '3xl:size-9.25',
            '5xl:size-10.75'
          )}
        />
      )
    case ContactInformationIcon.EMAIL:
      return (
        <EnvelopeIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-vivid-orange size-6.25',
            'm1x:size-6.5',
            'm3x:size-6.75',
            'md:size-7.75',
            '1xl:size-8.5',
            '2xl:size-8.75',
            '3xl:size-9.25',
            '5xl:size-10.75'
          )}
        />
      )
    case ContactInformationIcon.PHONE:
      return (
        <PhoneIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-vivid-orange size-6.25',
            'm1x:size-6.5',
            'm3x:size-6.75',
            'md:size-7.75',
            '1xl:size-8.5',
            '2xl:size-8.75',
            '3xl:size-9.25',
            '5xl:size-10.75'
          )}
        />
      )
    case ContactInformationIcon.CLOCK:
      return (
        <CalendarDaysIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-vivid-orange size-6.25',
            'm1x:size-6.5',
            'm3x:size-6.75',
            'md:size-7.75',
            '1xl:size-8.5',
            '2xl:size-8.75',
            '3xl:size-9.25',
            '5xl:size-10.75'
          )}
        />
      )
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a contact information item with an associated icon, text, and link.
 * @public
 * @interface ContactInformationItem
 * @param {object} props - Component properties.
 * @param {ContactInformationItem['text']} props.text - The text to display for the contact information.
 * @param {ContactInformationItem['href']} props.href - The URL to link to when the contact information is clicked.
 * @param {ContactInformationItem['type']} props.type - The type of contact information (e.g., "email", "phone").
 * @param {ContactInformationItem['icon']} props.icon - The icon identifier for the contact information.
 * @param {ContactInformationItem['id']} props.id - The unique identifier for the contact information item.
 * @returns A link element containing the contact information.
 */
export const ContactInformation = ({ text, href, type, icon }: ContactInformationItem) => {
  const content = (
    <>
      <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
      <div className={clsx('vertical gap-y-0.5')}>
        <span
          className={clsx(
            'text-primary text-[1.0625rem] font-medium',
            'm1x:text-lg',
            'md:text-[1.1875rem]',
            '3xl:text-xl',
            '5xl:text-[1.375rem]'
          )}
        >
          {text}
        </span>
        <span
          className={clsx(
            'text-warmgray truncate text-[0.9375rem]',
            '2xl:overflow-visible 2xl:text-clip 2xl:whitespace-nowrap',
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
      className={clsx('horizontal justify-center gap-x-3')}
      aria-label={`contact information ${type.toLowerCase()}`}
    >
      {content}
    </Link>
  ) : (
    <div className={clsx('horizontal justify-center gap-x-3')}>{content}</div>
  )
}
