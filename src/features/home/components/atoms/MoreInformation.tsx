import { ChevronRightIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Renders an inline link component used to present a “learn more” action.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.href - Destination URL for the link.
 * @param {string} props.text - Visible text label for the link.
 * @returns {JSX.Element} An inline horizontal flex container with a text label and a right-chevron icon.
 */
export const MoreInformation = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} className={clsx('horizontal gap-x-1.5', 'xl:mt-px')}>
      <span
        className={clsx(
          'text-secondary text-base font-medium',
          'm1x:text-[1.0625rem]',
          '1xl:text-lg',
          '3xl:text-[1.1875rem]',
          '5xl:text-[1.375rem]'
        )}
      >
        {text}
      </span>
      <span className={clsx('horizontal')}>
        <ChevronRightIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'animate-wiggle text-secondary h-5 w-5',
            'm1x:h-5.25 m1x:w-5.25',
            'm2x:h-5.5 m2x:w-5.5',
            'md:h-5.75 md:w-5.75',
            '1xl:h-6 1xl:w-6'
          )}
        />
      </span>
    </Link>
  )
}
