import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { GetStartedButtonProps } from '@/common/call-to-action/types'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Renders a "Get Started" button with pulsing animation and customizable appearance.
 * @public
 * @interface GetStartedButtonProps
 * @param {object} props - Component properties.
 * @param {GetStartedButtonProps['text']} text - The text to display inside the button.
 * @param {GetStartedButtonProps['href']} href - The URL to navigate to on button click.
 * @param {GetStartedButtonProps['hidden']} hidden - Whether to hide the button.
 * @param {GetStartedButtonProps['float']} [float] - Optional flag to render the button as a floating element.
 * @returns {JSX.Element} A pulsing animated button linking to the provided URL.
 */
export const GetStartedButton = (props: GetStartedButtonProps) => {
  const { text, href, hidden, float } = props
  return (
    <>
      <ButtonPulse type={'soft'} rounded hidden={hidden} float={float}>
        <Link
          className={clsx(
            'horizontal bg-mintgreen z-40 h-9.25 rounded-full px-4 font-normal shadow-lg',
            'm1x:h-9.75',
            'm3x:h-10',
            'md:h-10.5',
            '1xl:px-4.5',
            '2xl:h-11 2xl:px-5',
            '3xl:h-12 3xl:px-6',
            '5xl:h-12.5'
          )}
          href={href}
          aria-label={`${text} link`}
        >
          <span
            className={clsx(
              'text-secondary text-base',
              'm1x:text-[1.0625rem]',
              '1xl:text-lg',
              '3xl:text-[1.1875rem]',
              '5xl:text-[1.375rem]'
            )}
          >
            {text}
          </span>
        </Link>
      </ButtonPulse>
    </>
  )
}
