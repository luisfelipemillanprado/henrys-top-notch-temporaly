import { NLink } from '@/common/navbar/components/atoms/Link'
import { LinksProps } from '@/common/navbar/types'
import clsx from 'clsx'

/**
 * @description Renders links component.
 * @component
 * @param {LinksProps} props - Component properties with links array and id optional.
 * @param {object[]} props.links - The links value with text, href, icon and id for each link.
 * @param {string} props.links[].text - The text value for each link.
 * @param {string} props.links[].href - The href value for each link.
 * @param {string} props.links[].icon - The icon identifier for each link enum.
 * @param {number} [props.links[].id] - Optional id value for each link.
 * @returns Returns links component.
 */
export const Links = ({ links }: LinksProps) => {
  return (
    <ul
      className={clsx(
        'horizontal',
        'w-full',
        'lg:gap-x-8',
        'lg:overflow-x-hidden',
        'xl:gap-x-9',
        '1xl:gap-x-8',
        '2xl:gap-x-7.5'
      )}
    >
      {links.map((item) => (
        <NLink
          key={item.id}
          text={item.text}
          href={item.href}
          icon={item.icon}
          id={item.id}
          handleCloseOptions={item.handleCloseOptions}
        />
      ))}
    </ul>
  )
}
