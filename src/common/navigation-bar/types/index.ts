/* ------------------------------------------------- INTERFACES-ITEMS ---------------------------------------------------------- */

/**
 * @description Defines a single navigation entry used in desktop and mobile menus.
 * @interface NavigationBarLinkItem
 * @property {string} text - Visible label for the navigation item.
 * @property {string} href - Destination URL or anchor.
 * @property {string} icon - Icon key used by icon mapping utilities.
 * @property {number} id - Stable key used for rendering lists.
 * @property {() => void} [handleCloseOptions] - Optional callback to close the mobile menu on click.
 */
export interface NavigationBarLinkItem {
  text: string
  href: string
  icon: string
  id: number
  handleCloseOptions?: () => void
}

/**
 * @description Represents the complete navigation bar configuration payload.
 * @interface NavigationBarItem
 * @property {object} logo - Logo configuration object.
 * @property {string} logo.url - Asset URL for the company logo.
 * @property {object} getStartedButton - Primary call-to-action displayed in the navbar.
 * @property {string} getStartedButton.text - Button label.
 * @property {string} getStartedButton.href - Button destination.
 * @property {NavigationBarLinkItem[]} links - Collection of navigation entries.
 */
export interface NavigationBarItem {
  logo: { url: string }
  getStartedButton: { text: string; href: string }
  links: NavigationBarLinkItem[]
}

/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Properties required by the mobile menu container.
 * @interface MenuOptionsProps
 * @property {NavigationBarLinkItem[]} links - Navigation entries rendered in the mobile dialog.
 * @property {string} menuOptionsId - Deterministic DOM id for `aria-controls` and dialog targeting.
 */
export interface MenuOptionsProps {
  links: NavigationBarLinkItem[]
  menuOptionsId: string
}

/**
 * @description Properties for the desktop navigation link list.
 * @interface NavigationBarLinksProps
 * @property {NavigationBarLinkItem[]} links - Navigation entries rendered inline for desktop layouts.
 */
export interface NavigationBarLinksProps {
  links: NavigationBarLinkItem[]
}

/* ------------------------------------------------- INTERFACE-ROOT ---------------------------------------------------------- */

/**
 * @description Root prop contract for composed navigation bar modules.
 * @interface NavigationbarProps
 * @property {NavigationBarItem} navigationBar - Complete navigation configuration object.
 */
export interface NavigationbarProps {
  navigationBar: NavigationBarItem
}
