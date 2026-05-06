import { NavigationLink } from '@/common/navigation-bar/components/atoms/NavigationLink'
import { NavigationBarLinksProps } from '@/common/navigation-bar/types'
import clsx from 'clsx'

/**
 * @description Renders a navigation links list item component.
 * @component
 * @param {NavigationBarLinksProps} props - Component properties with links array and id optional.
 * @param {object[]} props.links - The links value with text, href, icon and id for each link.
 * @param {string} props.links[].text - The text value for each link.
 * @param {string} props.links[].href - The href value for each link.
 * @param {string} props.links[].icon - The icon identifier for each link enum.
 * @param {number} [props.links[].id] - Optional id value for each link.
 * @returns A rendered navigation links list component.
 */
export const NavigationLinks = ({ links }: NavigationBarLinksProps) => {
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
        <NavigationLink
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
