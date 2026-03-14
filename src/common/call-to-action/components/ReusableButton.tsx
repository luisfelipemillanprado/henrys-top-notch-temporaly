import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { ReusableButtonProps } from '@/common/call-to-action/types'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Renders a Reusable call-to-action component as a styled Next.js Link.
 * @public
 * @interface ReusableButtonProps
 * @param {object} props - Component properties.
 * @param {ReusableButtonProps['text']} text - Button label text, also used to generate the aria-label.
 * @param {ReusableButtonProps['href']} href - Destination URL or route.
 * @param {ReusableButtonProps['icon']} icon - Optional icon identifier rendered before the text.
 * @param {ReusableButtonProps['float']} float - Enables floating behavior via the ButtonPulse wrapper.
 * @param {ReusableButtonProps['colorChange']} colorChange - Enables the alternate color variant.
 * @param {ReusableButtonProps['noAnimation']} noAnimation - Disables the pulse animation when set to true.
 * @returns {JSX.Element} A rendering a styled, accessible call-to-action link.
 */
export const ReusableButton = (props: ReusableButtonProps) => {
  const { text, href, icon, float, colorChange, noAnimation } = props
  return (
    <ButtonPulse type={'soft'} rounded float={float} noAnimation={noAnimation}>
      <Link
        className={clsx(
          'horizontal z-30 h-9.5 rounded-full shadow-lg',
          icon ? 'pr-4 pl-3' : 'px-4',
          colorChange ? 'bg-mintgreen' : 'bg-irongray',
          'm1x:h-10',
          'm3x:h-10.5',
          'md:h-11',
          '1xl:px-4.5',
          '2xl:h-11.5',
          '3xl:h-12.5 3xl:px-5',
          '5xl:h-13'
        )}
        href={href}
        aria-label={`${text} button`}
      >
        <div className={clsx('horizontal gap-x-2')}>
          {icon && (
            <span className={clsx('horizontal')}>
              <PlayCircleIcon
                aria-hidden={'true'}
                role={'img'}
                className={clsx(
                  'fill-mintgreen size-6',
                  '1xl:size-6.25',
                  '2xl:size-6.75',
                  '3xl:size-7.25',
                  '5xl:size-7.5'
                )}
              />
            </span>
          )}
          <span
            className={clsx(
              'text-base',
              colorChange ? 'text-secondary' : 'text-primary',
              'm1x:text-[1.0625rem]',
              '1xl:text-lg',
              '3xl:text-[1.1875rem]',
              '5xl:text-[1.375rem]'
            )}
          >
            {text}
          </span>
        </div>
      </Link>
    </ButtonPulse>
  )
}
