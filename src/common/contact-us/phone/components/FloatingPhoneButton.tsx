import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { PhoneProps } from '@/common/contact-us/whatsapp/types'
import { PhoneIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description A floating Phone button component fixed at the bottom-right corner of the viewport.
 * @public
 * @interface PhoneProps
 * @param {object} props - Component properties.
 * @param {PhoneProps['href']} props.href - The URL that the Phone contact section points to.
 * @returns {JSX.Element} A rendering a floating Phone button.
 */
export const FloatingPhoneButton = ({ href }: PhoneProps) => {
  return (
    <div
      className={clsx(
        'horizontal fixed right-4.5 bottom-20 z-50 justify-center',
        'md:right-8.5 md:bottom-27',
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
            <PhoneIcon
              aria-hidden={'true'}
              role={'img'}
              className={clsx(
                'fill-primary animate-tada size-8',
                'm1x:size-8',
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
