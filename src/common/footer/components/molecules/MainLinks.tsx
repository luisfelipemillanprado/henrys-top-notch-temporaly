import { MainLink } from '@/common/footer/components/atoms/MainLink'
import type { MainLinksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the main links section in the footer, displaying a grid of links organized into columns.
 * @public
 * @interface MainLinksProps
 * @param {object} props - Component properties.
 * @param {MainLinksProps['links'][number]['text']} text - The display text for the footer link.
 * @param {MainLinksProps['links'][number]['href']} href - The URL the footer link points to.
 * @param {MainLinksProps['links'][number]['id']} id - The unique identifier for the footer link item.
 * @param {MainLinksProps['links']} links - An array of footer link items to be displayed.
 * @param {MainLinksProps['highlight']} highlight - An array of strings representing links that should be highlighted.
 * @returns {JSX.Element} The rendered main links section.
 */
export const MainLinks = (props: MainLinksProps) => {
  const { links, highlight } = props
  const LINKS_PER_COLUMN = 8
  return (
    <div
      className={clsx(
        'grid grid-cols-2',
        'md:grid-cols-4 md:grid-rows-1 md:gap-x-15',
        'lg:gap-x-26',
        '1xl:w-33/50',
        '5xl:gap-x-34'
      )}
    >
      {[0, 1].map((colIndex) => (
        <div
          key={colIndex}
          className={clsx(
            'vertical items-center gap-y-5',
            'md:items-start',
            'lg:gap-y-6',
            '1xl:gap-y-7',
            '3xl:gap-y-8',
            '5xl:gap-y-9'
          )}
        >
          {links
            .slice(colIndex * LINKS_PER_COLUMN, colIndex * LINKS_PER_COLUMN + LINKS_PER_COLUMN)
            .map((link) => (
              <MainLink key={link.id} text={link.text} href={link.href} id={link.id} highlight={highlight} />
            ))}
        </div>
      ))}
    </div>
  )
}
