import { MainLink } from '@/common/footer/components/atoms/MainLink'
import type { MainLinksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders a main links list item component.
 * @component
 * @param {MainLinksProps} props - Component properties with links array and highlight array.
 * @param {object[]} props.links - The links value with text, href and id for each link.
 * @param {string} props.links[].text - The text value for each link.
 * @param {string} props.links[].href - The href value for each link.
 * @param {number} props.links[].id - The id value for each link.
 * @param {string[]} props.highlight - The highlight value for each link.
 * @returns A rendered main links list component.
 */
export const MainLinks = ({ links, highlight }: MainLinksProps) => {
  const LINKS_PER_COLUMN = 8
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-2',
        'md:grid-cols-1',
        'md:grid-rows-2',
        'md:max-w-60',
        'md:gap-y-10',
        'lg:max-w-90',
        'lg:pl-2'
      )}
    >
      {[0, 1].map((colIndex) => (
        <div
          key={colIndex}
          className={clsx(
            'vertical',
            'items-center',
            'gap-y-5',
            'md:items-start',
            'md:gap-y-6',
            'lg:gap-y-7'
          )}
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
