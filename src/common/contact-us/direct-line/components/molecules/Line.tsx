import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { LineProps } from '@/common/contact-us/direct-line/types'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description An enumeration of Direct Line contact section.
 * @private
 * @property {string} PHONE      - Phone section navigation identifier.
 * @property {string} WHATSAPP   - WhatsApp section navigation identifier.
 */
enum LineIcon {
  PHONE = 'phone',
  WHATSAPP = 'whatsapp',
}

/**
 * @description A utility function that maps a given icon identifier to its corresponding React component.
 * @private
 * @param {string} icon - A string identifier, icon enum.
 * @returns The resolved icon component or a fallback placeholder.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case LineIcon.PHONE:
      return (
        <PhoneIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-secondary animate-tada size-8.75',
            'm1x:size-9',
            'md:size-9.5',
            'lg:size-10',
            '1xl:size-10.25',
            '2xl:size-10.5',
            '3xl:size-11',
            '5xl:size-11.75'
          )}
        />
      )
    case LineIcon.WHATSAPP:
      return (
        <SiWhatsapp
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-primary animate-tada size-8.75',
            'm1x:size-9',
            'md:size-9.5',
            'lg:size-10',
            '1xl:size-10.25',
            '2xl:size-10.5',
            '3xl:size-11',
            '5xl:size-11.75'
          )}
        />
      )
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders an individual Line contact section with a pulsating button effect.
 * @public
 * @interface DirectLineProps
 * @param {object} props - Component properties.
 * @param {DirectLineProps['directLine']} props.directLine - An array of objects, each containing a URL and an icon.
 * @param {DirectLineProps['directLine'][number]['href']} directLine[].href - The URL that the Direct Line contact.
 * @param {DirectLineProps['directLine'][number]['icon']} directLine[].icon - The icon identifier for the Direct Line.
 * @returns {JSX.Element} A rendering a floating Direct Line button.
 */
export const Line = ({
  href,
  icon,
  firstColor = false,
  forthColor = false,
  changeBackground = false,
}: LineProps) => {
  return (
    <ButtonPulse
      type={'soft'}
      float
      rounded={false}
      firstColor={firstColor}
      forthColor={forthColor}
      overlayMore
    >
      <Link
        className={clsx(
          'horizontal z-50 size-13.25 justify-center rounded-2xl pl-px',
          changeBackground ? 'bg-electric-blue' : 'bg-light-green',
          'm1x:size-13.75',
          'md:size-14.5',
          'lg:size-15.25',
          '1xl:size-15.5',
          '2xl:size-16',
          '3xl:size-17',
          '5xl:size-17.25'
        )}
        target={'_blank'}
        rel={'noopener noreferrer'}
        href={href}
      >
        <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
      </Link>
    </ButtonPulse>
  )
}
