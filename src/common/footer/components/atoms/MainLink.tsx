import type { MainLinkProps } from '@/common/footer/types'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Represents a single navigation link in the footer.
 * @public
 * @interface MainLinkProps
 * @param {object} props Component properties.
 * @param {MainLinkProps['text']} props.text - Visible text for the link.
 * @param {MainLinkProps['href']} props.href - URL the link points to.
 * @param {MainLinkProps['highlight']} props.highlight - Array of text strings to determine if the link text should be highlighted.
 * @returns {JSX.Element} Link component styled according to whether it is highlighted and its column position.
 */
export const MainLink = ({ text, href, highlight }: MainLinkProps) => {
  return (
    <Link
      className={clsx(
        'horizontal w-39 justify-center',
        'm1x:w-42',
        'm2x:w-45',
        'm3x:w-46',
        'm4x:w-47',
        '2xl:w-full'
      )}
      href={href}
      title={text}
    >
      <span
        className={clsx(
          highlight.includes(text)
            ? [
                'text-primary text-[1.0625rem] font-semibold',
                'm1x:text-lg',
                'md:text-[1.1875rem]',
                '3xl:text-xl',
                '5xl:text-[1.375rem]',
              ]
            : [
                'text-warmgray truncate text-[0.9375rem]',
                'm1x:text-base',
                '1xl:text-[1.0625rem]',
                '2xl:overflow-visible 2xl:text-clip 2xl:whitespace-nowrap',
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
