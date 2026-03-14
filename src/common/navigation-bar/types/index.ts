/* ------------------------------------------------- INTERFACES-ITEMS ---------------------------------------------------------- */

/**
 * @description Represents a navigation link item with optional close handler for menu options.
 * @export
 * @interface NavigationBarLinkItem
 * @property {string} text - The display text for the navigation link.
 * @property {string} href - The URL the navigation link points to.
 * @property {string} icon - The icon associated with the navigation link.
 * @property {number} id - The unique identifier for the navigation link item.
 * @property {() => void} [handleCloseOptions] - Optional function to handle closing of menu options when the link is clicked.
 */
export interface NavigationBarLinkItem {
  text: string
  href: string
  icon: string
  id: number
  handleCloseOptions?: () => void
}

/**
 * @description Represents the properties for the main navigation bar component.
 * @export
 * @interface NavigationBarItem
 * @property {object} logo - The properties for the company logo displayed in the navigation bar.
 * @property {string} logo.url - The URL for the company logo.
 * @property {object} getStartedButton - The properties for the "Get Started" button, including text and href.
 * @property {string} getStartedButton.text - The display text for the "Get Started" button.
 * @property {string} getStartedButton.href - The URL the "Get Started" button points to.
 * @property {NavigationBarLinkItem[]} links - An array of navigation link items to be displayed in the navigation bar.
 */
export interface NavigationBarItem {
  logo: { url: string }
  getStartedButton: { text: string; href: string }
  links: NavigationBarLinkItem[]
}

/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Represents the properties for the menu options component.
 * @export
 * @interface MenuOptionsProps
 * @property {NavigationBarLinkItem[]} links - An array of navigation link items with optional close handlers.
 */
export interface MenuOptionsProps {
  links: NavigationBarLinkItem[]
}

/**
 * @description Represents the properties for the navigation links component.
 * @export
 * @interface NavigationBarLinksProps
 * @property {NavigationBarLinkItem[]} links - An array of navigation link items without the close handler.
 */
export interface NavigationBarLinksProps {
  links: NavigationBarLinkItem[]
}

/* ------------------------------------------------- INTERFACE-ROOT ---------------------------------------------------------- */

/**
 * @description Represents the properties for the main navigation bar component.
 * @export
 * @interface NavigationbarProps
 * @property {NavigationBarItem} navigationBar - The configuration for the navigation.
 */
export interface NavigationbarProps {
  navigationBar: NavigationBarItem
}
