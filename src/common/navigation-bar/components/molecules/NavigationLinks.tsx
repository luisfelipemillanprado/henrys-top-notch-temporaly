import { NavigationLink } from '@/common/navigation-bar/components/atoms/NavigationLink'
import { NavigationBarLinksProps } from '@/common/navigation-bar/types'
import clsx from 'clsx'

/**
 * @description Renders a list of navigation links for the navigation bar.
 * @public
 * @interface NavigationBarLinksProps
 * @param {object} props - Component properties.
 * @param {NavigationBarLinksProps['links'][number]['text']} text - The display text for the navigation link.
 * @param {NavigationBarLinksProps['links'][number]['href']} href - The URL the navigation link points to.
 * @param {NavigationBarLinksProps['links'][number]['icon']} icon - The icon associated with the navigation link.
 * @param {NavigationBarLinksProps['links'][number]['id']} id - The unique identifier for the navigation link item.
 * @param {NavigationBarLinksProps['links']} links - An array of navigation link items without the close handler..
 * @returns {JSX.Element} The rendered list of navigation links.
 */
export const NavigationLinks = (props: NavigationBarLinksProps) => {
  const { links } = props
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
        <NavigationLink {...item} key={item.id} />
      ))}
    </ul>
  )
}
