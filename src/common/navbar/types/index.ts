/* ------------------------------------------------- INTERFACES-ITEMS ---------------------------------------------------------- */

/**
 * @description Properties for a single navigation entry used in desktop and mobile menus.
 * @interface LinkItem
 * @property {string} text - Visible label for the navigation item.
 * @property {string} href - Destination URL or anchor.
 * @property {string} icon - Icon key used by icon mapping utilities.
 * @property {number} id - Stable key used for rendering lists.
 * @property {() => void} [handleCloseOptions] - Optional callback to close the mobile menu on click.
 */
export interface LinkItem {
  text: string
  href: string
  icon: string
  id: number
  handleCloseOptions?: () => void
}

/**
 * @description Properties for the complete navigation bar configuration payload.
 * @interface NavigationBarItem
 * @property {object} logo - Logo configuration object.
 * @property {string} logo.url - Asset URL for the company logo.
 * @property {object} getStartedButton - Primary call-to-action displayed in the navbar.
 * @property {string} getStartedButton.text - Button label.
 * @property {string} getStartedButton.href - Button destination.
 * @property {LinkItem[]} links - Collection of navigation entries.
 */
export interface NavigationBarItem {
  logo: { url: string }
  getStartedButton: { text: string; href: string }
  links: LinkItem[]
}

/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Properties required by the mobile menu container.
 * @interface MenuProps
 * @property {LinkItem[]} links - Navigation entries rendered in the mobile dialog.
 * @property {string} menuId - The ID of the menu.
 */
export interface MenuProps {
  links: LinkItem[]
  menuId: string
}

/**
 * @description Properties for the desktop navigation link list.
 * @interface LinksProps
 * @property {LinkItem[]} links - Navigation entries rendered inline for desktop layouts.
 */
export interface LinksProps {
  links: LinkItem[]
}

/* ------------------------------------------------- INTERFACES-ROOT ---------------------------------------------------------- */

/**
 * @description Properties for the root prop contract for composed navigation bar modules.
 * @interface NavigationbarProps
 * @property {NavigationBarItem} navigationBar - Complete navigation configuration object.
 */
export interface NavigationbarProps {
  navigationBar: NavigationBarItem
}
