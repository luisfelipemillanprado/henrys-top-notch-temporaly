/* ------------------------------------------------ INTERFACES-PROPS -------------------------------------------------------- */

/**
 * @description Defines the floating direct contact links payload.
 * @interface DirectLineProps
 * @property {{ href: string; icon: string }[]} directLine - Ordered list of direct contact actions.
 * @property {string} directLine[].href - Destination URL for each action (tel, whatsapp, etc.).
 * @property {string} directLine[].icon - Icon key used by the direct-line icon switch.
 */
export interface DirectLineProps {
  directLine: { href: string; icon: string }[]
}

/**
 * @description Defines props for a single floating contact action.
 * @interface LineProps
 * @property {string} href - Destination URL for the action.
 * @property {string} icon - Icon key rendered in the action button.
 * @property {boolean} [firstColor] - Enables the first color variant.
 * @property {boolean} [forthColor] - Enables the fourth color variant.
 * @property {boolean} [changeBackground] - Enables alternate background styles.
 */
export interface LineProps {
  href: string
  icon: string
  firstColor?: boolean
  forthColor?: boolean
  changeBackground?: boolean
}
