import { NavigationLink } from '@/common/navigation-bar/components/atoms/NavigationLink'
import { NavigationBarLinksProps } from '@/common/navigation-bar/types'
import clsx from 'clsx'

/**
 * @description Renders a list of navigation links for the navigation bar.
 * @public
 * @interface NavigationBarLinksProps
 * @param {object} props - Component properties.
 * @param {NavigationBarLinksProps['links'][number]['text']} props.text - The display text for the navigation link.
 * @param {NavigationBarLinksProps['links'][number]['href']} props.href - The URL the navigation link points to.
 * @param {NavigationBarLinksProps['links'][number]['icon']} props.icon - The icon associated with the navigation link.
 * @param {NavigationBarLinksProps['links'][number]['id']} props.id - The unique identifier for the navigation link item.
 * @param {NavigationBarLinksProps['links']} props.links - An array of navigation link items without the close handler..
 * @returns {JSX.Element} The rendered list of navigation links.
 */
export const NavigationLinks = ({ links }: NavigationBarLinksProps) => {
  return (
    <ul
      className={clsx(
        'horizontal w-full',
        'lg:gap-x-8 lg:overflow-x-hidden',
        '1xl:gap-x-6.5',
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
