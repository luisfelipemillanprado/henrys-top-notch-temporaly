import { FLink } from '@/common/footer/components/atoms/Link'
import type { LinksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders a main links list item component.
 * @component
 * @param {LinksProps} props - Component properties with links array and highlight array.
 * @param {object[]} props.links - The links value with text, href and id for each link.
 * @param {string} props.links[].text - The text value for each link.
 * @param {string} props.links[].href - The href value for each link.
 * @param {number} props.links[].id - The id value for each link.
 * @param {string[]} props.highlight - The highlight value for each link.
 * @returns A rendered main links list component.
 */
export const Links = ({ links, highlight }: LinksProps) => {
  const LINKS_PER_COLUMN = 8
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-2',
        'grid-rows-1',
        'w-full',
        'md:grid-cols-1',
        'md:grid-rows-2',
        'md:gap-y-10'
      )}
    >
      {[0, 1].map((colIndex) => (
        <div
          key={colIndex}
          className={clsx(
            'vertical',
            'w-full',
            'items-center',
            'gap-y-4',
            'md:items-start',
            'md:gap-y-5',
            'lg:gap-y-6'
          )}
        >
          {links
            .slice(colIndex * LINKS_PER_COLUMN, colIndex * LINKS_PER_COLUMN + LINKS_PER_COLUMN)
            .map((link) => (
              <FLink key={link.id} text={link.text} href={link.href} id={link.id} highlight={highlight} />
            ))}
        </div>
      ))}
    </div>
  )
}
