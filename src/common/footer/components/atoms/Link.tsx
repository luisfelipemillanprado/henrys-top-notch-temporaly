import type { LinkProps } from '@/common/footer/types'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Represents a single navigation link in the footer.
 * @component
 * @param {LinkProps} props - Component properties with text, href, id and highlight array.
 * @param {string} props.text - The text value for the link label.
 * @param {string} props.href - The href value for the link link.
 * @param {number} props.id - Stable key for the link (passed from parent lists).
 * @param {string[]} props.highlight - The highlight value for each link.
 * @returns A rendered main link link component.
 */
export const FLink = ({ text, href, highlight }: LinkProps) => {
  return (
    <Link
      className={clsx(
        'horizontal',
        'justify-center',
        'max-w-39',
        'm1x:max-w-42',
        'm2x:max-w-45',
        'm3x:max-w-46',
        'm4x:max-w-47',
        'md:max-w-full',
        'md:justify-start'
      )}
      href={href}
      title={text}
    >
      <span
        className={clsx(
          highlight.includes(text)
            ? [
                'font-semibold',
                'text-primary',
                'text-[1.0625rem]',
                'leading-8',
                'm1x:text-lg',
                'm1x:leading-8.5',
                'md:text-[1.1875rem]',
                'md:leading-9',
              ]
            : [
                'truncate',
                'text-warmgray',
                'text-[0.9375rem]',
                'leading-7',
                'm1x:text-base',
                'm1x:leading-7.5',
              ]
        )}
      >
        {text}
      </span>
    </Link>
  )
}
