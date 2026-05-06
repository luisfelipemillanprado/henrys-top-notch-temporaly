import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { ReusableButtonProps } from '@/common/call-to-action/types'
import { ArrowRightCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Renders a Reusable call-to-action component as a styled Next.js Link.
 * @component
 * @param {ReusableButtonProps} props - Component properties.
 * @param {string} props.text - The text value.
 * @param {string} props.href - The href value.
 * @param {boolean | undefined} props.startIcon - The start icon value.
 * @param {boolean | undefined} props.endIcon - The end icon value.
 * @param {boolean | undefined} props.float - The float value.
 * @param {boolean | undefined} props.secondColor - The second color value.
 * @param {boolean | undefined} props.noAnimation - The no animation value.
 * @param {boolean | undefined} props.newTab - The new tab value.
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
          'horizontal',
          'z-30',
          'h-9.5',
          'rounded-full',
          'shadow-lg',
          startIcon ? 'pr-4 pl-3' : 'px-4',
          secondColor ? 'bg-strong-blue' : 'bg-irongray',
          'm1x:h-10',
          'm3x:h-10.5',
          'md:h-11',
          '1xl:h-11.5',
          '1xl:px-4.5',
          '3xl:h-12.5',
          '3xl:px-5',
          '5xl:h-13'
        )}
        href={href}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={`${text} button`}
      >
        <div className={clsx('horizontal', 'gap-x-2')}>
          {startIcon && (
            <span className={clsx('horizontal')}>
              <PlayCircleIcon
                aria-hidden={'true'}
                role={'img'}
                className={clsx(
                  'size-6',
                  'fill-electric-blue',
                  'm1x:size-6.25',
                  'm3x:size-6.5',
                  'lg:size-6.75'
                )}
              />
            </span>
          )}
          <span
            className={clsx(
              'text-base',
              'text-primary',
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
                className={clsx(
                  'size-6.25',
                  'fill-primary',
                  'm1x:size-6.5',
                  'm3x:size-6.75',
                  'md:size-7.5'
                )}
              />
            </span>
          )}
        </div>
      </Link>
    </ButtonPulse>
  )
}
