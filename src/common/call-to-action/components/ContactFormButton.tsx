import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { Spinner } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description Renders a pulsing submit button for the contact form.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.text - The submit button label text.
 * @param {boolean} props.isLoading - Indicates whether the form is currently submitting.
 * @returns A pulsing submit button with icon/spinner and text.
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
          'horizontal',
          'z-40',
          'h-9.25',
          'rounded-full',
          'gap-x-2.5',
          'px-4',
          'font-normal',
          'shadow-lg',
          'bg-electric-blue',
          'm1x:h-9.75',
          'm3x:h-10',
          'md:h-10.5',
          '1xl:h-11',
          '1xl:px-4.5',
          '2xl:px-5',
          '3xl:h-12',
          '3xl:px-6',
          '5xl:h-12.5'
        )}
        type={'submit'}
        disabled={isLoading}
        aria-label={`${text} button`}
      >
        <span
          className={clsx(
            'text-base',
            'text-secondary',
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
                className={clsx(
                  'size-6.25',
                  'fill-secondary',
                  'm1x:size-6.5',
                  'm3x:size-6.75',
                  'md:size-7.5'
                )}
              />
            </span>
          )}
        </span>
      </button>
    </ButtonPulse>
  )
}
