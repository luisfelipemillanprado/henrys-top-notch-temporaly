import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { WhatsAppProps } from '@/common/contact-us/whatsapp/types'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description A floating WhatsApp button component fixed at the bottom-right corner of the viewport.
 * @public
 * @interface WhatsAppProps
 * @param {object} props - Component properties.
 * @param {WhatsAppProps['href']} props.href - The URL that the WhatsApp contact section points to.
 * @returns {JSX.Element} A rendering a floating WhatsApp button.
 */
export const FloatingWhatsAppButton = (props: WhatsAppProps) => {
  const { href } = props
  return (
    <div
      className={clsx(
        'horizontal fixed right-4.5 bottom-4 z-50 justify-center',
        'md:right-8.5 md:bottom-8',
        'lg:right-9.5 lg:bottom-9',
        '1xl:right-10.5 1xl:bottom-10',
        '3xl:right-11.5 3xl:bottom-11',
        '5xl:right-12.5 5xl:bottom-12'
      )}
    >
      <ButtonPulse type={'soft'} float rounded={false} firstColor={true} overlayMore>
        <Link
          className={clsx(
            'horizontal bg-electric-blue z-50 size-13.25 justify-center rounded-2xl pl-px',
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
          <span className={clsx('horizontal')}>
            <SiWhatsapp
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
          </span>
        </Link>
      </ButtonPulse>
    </div>
  )
}
