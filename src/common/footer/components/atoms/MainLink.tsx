import type { MainLinkProps } from '@/common/footer/types'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Represents a single navigation link in the footer.
 * @component
 * @param {MainLinkProps} props - Component properties with text, href, id and highlight array.
 * @param {string} props.text - The text value for the link label.
 * @param {string} props.href - The href value for the link link.
 * @param {number} [props.id] - Optional id value for the link.
 * @param {string[]} props.highlight - The highlight value for each link.
 * @returns A rendered main link link component.
 */
export const MainLink = ({ text, href, highlight }: MainLinkProps) => {
  return (
    <Link
      className={clsx(
        'horizontal',
        'justify-center',
        'w-39',
        'm1x:w-42',
        'm2x:w-45',
        'm3x:w-46',
        'm4x:w-47',
        'md:w-full',
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
                'm1x:text-lg',
                'md:text-[1.1875rem]',
                '3xl:text-xl',
                '5xl:text-[1.375rem]',
              ]
            : [
                'truncate',
                'text-warmgray',
                'text-[0.9375rem]',
                'm1x:text-base',
                '1xl:text-[1.0625rem]',
                '2xl:overflow-visible',
                '2xl:text-clip',
                '2xl:whitespace-nowrap',
                '3xl:text-lg',
                '5xl:text-[1.3125rem]',
              ]
        )}
      >
        {text}
      </span>
    </Link>
  )
}
