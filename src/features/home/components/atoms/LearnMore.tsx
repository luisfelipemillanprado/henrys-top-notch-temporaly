import { ChevronRightIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Renders an inline "Learn More" link with a text label and an animated chevron icon.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.href - Destination URL for the link.
 * @param {string} props.text - Visible text label for the link.
 * @param {boolean} [props.isActive=false] - Toggles the active color theme for the label and icon.
 * @returns Returns an inline link with a text label and chevron icon.
 */
export const LearnMore = ({ href, text, isActive }: { href: string; text: string; isActive?: boolean }) => {
  return (
    <Link href={href} className={clsx('horizontal', 'gap-x-1.5')}>
      <span
        className={clsx(
          'font-medium',
          'text-base',
          'leading-7.5',
          isActive ? 'text-primary' : 'text-secondary',
          'm1x:text-[1.0625rem]',
          'm1x:leading-8',
          'md:text-lg',
          'md:leading-8.5'
        )}
      >
        {text}
      </span>
      <span className={clsx('horizontal')}>
        <ChevronRightIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'size-5',
            isActive ? 'fill-primary' : 'fill-secondary',
            'animate-wiggle',
            'm1x:size-5.5',
            'md:size-6'
          )}
        />
      </span>
    </Link>
  )
}
