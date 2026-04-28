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

const iconStyles = clsx(
  'animate-tada',
  'size-[clamp(2.1875rem,calc(2.1875rem+(100vw-23.4375rem)*0.0154),2.3125rem)]',
  'md:size-[clamp(2.375rem,calc(2.375rem+(100vw-48rem)*0.0078),2.5rem)]',
  '1xl:size-10.25',
  '2xl:size-10.5',
  '3xl:size-11',
  '5xl:size-11.75'
)

/**
 * @description A utility function that maps a given icon identifier to its corresponding React component.
 * @private
 * @param {string} icon - A string identifier, icon enum.
 * @returns The resolved icon component or a fallback placeholder.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case LineIcon.PHONE:
      return <PhoneIcon aria-hidden={'true'} role={'img'} className={clsx('fill-secondary', iconStyles)} />
    case LineIcon.WHATSAPP:
      return <SiWhatsapp aria-hidden={'true'} role={'img'} className={clsx('fill-primary', iconStyles)} />
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
          'horizontal z-50 justify-center rounded-2xl pl-px',
          changeBackground ? 'bg-electric-blue' : 'bg-light-green',
          'size-[clamp(3.3125rem,calc(3.3125rem+(100vw-23.4375rem)*0.0615),3.5625rem)]',
          'md:size-[clamp(3.625rem,calc(3.625rem+(100vw-48rem)*0.0117),3.8125rem)]',
          '1xl:size-15.5',
          '3xl:size-17',
          '5xl:size-17.25',
          '2xl:size-16'
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
