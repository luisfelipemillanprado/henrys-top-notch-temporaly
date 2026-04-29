import { MainLink } from '@/common/footer/components/atoms/MainLink'
import type { MainLinksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the main links section in the footer, displaying a grid of links organized into columns.
 * @public
 * @interface MainLinksProps
 * @param {object} props - Component properties.
 * @param {MainLinksProps['links'][number]['text']} props.links.text - The display text for the footer link.
 * @param {MainLinksProps['links'][number]['href']} props.links.href - The URL the footer link points to.
 * @param {MainLinksProps['links'][number]['id']} props.links.id - The unique identifier for the footer link item.
 * @param {MainLinksProps['links']} props.links - An array of footer link items to be displayed.
 * @param {MainLinksProps['highlight']} props.highlight - An array of strings representing links that should be highlighted.
 * @returns The rendered main links section.
 */
export const MainLinks = ({ links, highlight }: MainLinksProps) => {
  const LINKS_PER_COLUMN = 8
  return (
    <div
      className={clsx(
        'grid grid-cols-2',
        'md:max-w-60 md:grid-cols-1 md:grid-rows-2 md:gap-y-10',
        'lg:max-w-90 lg:pl-2'
      )}
    >
      {[0, 1].map((colIndex) => (
        <div
          key={colIndex}
          className={clsx('vertical items-center gap-y-5', 'md:items-start md:gap-y-6', 'lg:gap-y-7')}
        >
          {links
            .slice(colIndex * LINKS_PER_COLUMN, colIndex * LINKS_PER_COLUMN + LINKS_PER_COLUMN)
            .map((link) => (
              <MainLink
                key={link.id}
                text={link.text}
                href={link.href}
                id={link.id}
                highlight={highlight}
              />
            ))}
        </div>
      ))}
    </div>
  )
}
