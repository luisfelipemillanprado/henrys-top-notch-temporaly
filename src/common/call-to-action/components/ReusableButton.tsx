import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { ReusableButtonProps } from '@/common/call-to-action/types'
import { ArrowRightCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Renders a Reusable call-to-action component as a styled Next.js Link.
 * @public
 * @interface ReusableButtonProps
 * @param {object} props - Component properties.
 * @param {ReusableButtonProps['text']} props.text - Button label text, also used to generate the aria-label.
 * @param {ReusableButtonProps['href']} props.href - Destination URL or route.
 * @param {ReusableButtonProps['startIcon']} props.startIcon - Optional icon identifier rendered before the text.
 * @param {ReusableButtonProps['endIcon']} props.endIcon - Optional icon identifier rendered after the text.
 * @param {ReusableButtonProps['float']} props.float - Enables floating behavior via the ButtonPulse wrapper.
 * @param {ReusableButtonProps['secondColor']} props.secondColor - Optional flag to change the button color on interaction.
 * @param {ReusableButtonProps['noAnimation']} props.noAnimation - Disables the pulse animation when set to true.
 * @param {ReusableButtonProps['newTab']} props.newTab - Optional flag to open the link in a new tab when true.
 * @returns A rendering a styled, accessible call-to-action link.
 */
export const ReusableButton = ({
  text,
  href,
  startIcon = false,
  endIcon = false,
  float = true,
  secondColor = true,
  noAnimation = false,
  newTab = false,
}: ReusableButtonProps) => {
  return (
    <ButtonPulse type={'soft'} rounded float={float} secondColor={secondColor} noAnimation={noAnimation}>
      <Link
        className={clsx(
          'horizontal z-30 h-9.5 rounded-full shadow-lg',
          startIcon ? 'pr-4 pl-3' : 'px-4',
          secondColor ? 'bg-strong-blue' : 'bg-irongray',
          'm1x:h-10',
          'm3x:h-10.5',
          'md:h-11',
          '1xl:px-4.5',
          '2xl:h-11.5',
          '3xl:h-12.5 3xl:px-5',
          '5xl:h-13'
        )}
        href={href}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={`${text} button`}
      >
        <div className={clsx('horizontal gap-x-2')}>
          {startIcon && (
            <span className={clsx('horizontal')}>
              <PlayCircleIcon
                aria-hidden={'true'}
                role={'img'}
                className={clsx(
                  'fill-electric-blue size-6',
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
              'text-primary text-base',
              'm1x:text-[1.0625rem]',
              '1xl:text-lg',
              '3xl:text-[1.1875rem]',
              '5xl:text-[1.375rem]'
            )}
          >
            {text}
          </span>
          {endIcon && (
            <span className={clsx('horizontal')}>
              <ArrowRightCircleIcon
                aria-hidden={'true'}
                role={'img'}
                className={clsx('fill-primary size-6.5', '2xl:size-6.75', '3xl:size-7.25', '5xl:size-7.5')}
              />
            </span>
          )}
        </div>
      </Link>
    </ButtonPulse>
  )
}
