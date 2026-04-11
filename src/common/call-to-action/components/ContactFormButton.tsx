import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { Spinner } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description Renders a pulsing submit button for the contact form.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.text - Text displayed inside the button.
 * @param {boolean} props.isLoading - Whether the form is currently submitting.
 * @returns {JSX.Element} A pulsing submit button with icon/spinner and text.
 */
export const ContactFormButton = ({
  text,
  float = false,
  firstColor = true,
  noAnimation = false,
  isLoading,
}: {
  text: string
  float?: boolean
  firstColor?: boolean
  noAnimation?: boolean
  isLoading: boolean
}) => {
  return (
    <ButtonPulse type={'soft'} rounded float={float} firstColor={firstColor} noAnimation={noAnimation}>
      <button
        className={clsx(
          'horizontal bg-strong-blue z-40 h-9.25 gap-x-2.5 rounded-full px-4 font-normal shadow-lg',
          'm1x:h-9.75',
          'm3x:h-10',
          'md:h-10.5 md:px-4.5',
          '1xl:px-4.5',
          '2xl:h-11 2xl:px-5',
          '3xl:h-12 3xl:px-6',
          '5xl:h-12.5'
        )}
        type={'submit'}
        disabled={isLoading}
        aria-label={`${text} button`}
      >
        <span
          className={clsx(
            'text-primary text-base',
            'm1x:text-[1.0625rem]',
            '1xl:text-lg',
            '3xl:text-[1.1875rem]',
            '5xl:text-[1.375rem]'
          )}
        >
          {isLoading ? 'Sending...' : text}
        </span>
        <span className={clsx('horizontal')}>
          {isLoading ? (
            <Spinner />
          ) : (
            <span className={clsx('horizontal')}>
              <PaperAirplaneIcon
                aria-hidden={'true'}
                role={'img'}
                className={clsx('fill-primary size-6.5', '2xl:size-6.75', '3xl:size-7.25', '5xl:size-7.5')}
              />
            </span>
          )}
        </span>
      </button>
    </ButtonPulse>
  )
}
