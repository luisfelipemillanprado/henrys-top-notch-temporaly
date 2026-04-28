import { ButtonPulse } from '@/common/animations/components/ButtonPulse'
import type { CardActionButtonProps } from '@/common/call-to-action/types'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Renders a card action button with customizable properties for text, link, styling, and animation.
 * @public
 * @interface CardActionButtonProps
 * @param {CardActionButtonProps['text']} props.text - The display text for the button.
 * @param {CardActionButtonProps['href']} props.href - The URL the button points to.
 * @param {CardActionButtonProps['float']} [props.float] - Optional flag to render the button as a floating element.
 * @param {CardActionButtonProps['thirdColor']} [props.thirdColor] - Optional flag to change the button color on interaction.
 * @param {CardActionButtonProps['noAnimation']} [props.noAnimation] - Optional flag to disable button animation.
 * @returns The rendered card action button component.
 */
export const CardActionButton = ({
  text,
  href,
  float = true,
  thirdColor = true,
  noAnimation = false,
}: CardActionButtonProps) => {
  return (
    <ButtonPulse type={'soft'} rounded float={float} thirdColor={thirdColor} noAnimation={noAnimation}>
      <Link
        className={clsx(
          'horizontal bg-off-white border-strong-blue/40 z-30 h-9.5 rounded-full border px-4 shadow-lg',
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
          <span className={clsx('horizontal')}>
            <ArrowRightCircleIcon
              aria-hidden={'true'}
              role={'img'}
              className={clsx(
                'fill-strong-blue size-6.25 -rotate-45',
                'm1x:size-6.5',
                'm3x:size-6.75',
                'md:size-7.5'
              )}
            />
          </span>
        </div>
      </Link>
    </ButtonPulse>
  )
}
