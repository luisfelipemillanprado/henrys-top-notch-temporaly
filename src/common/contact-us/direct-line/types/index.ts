/* ------------------------------------------------ INTERFACES-PROPS -------------------------------------------------------- */

/**
 * @description Represents the properties for the Direct Line contact section.
 * @export
 * @interface DirectLineProps
 * @property {{ href: string; icon: string }[]} directLine - An array of objects, each containing a URL and an icon.
 * @property {string} directLine[].href - The URL that the Direct Line contact section points to.
 * @property {string} directLine[].icon - The icon identifier for the Direct Line contact section.
 */
export interface DirectLineProps {
  directLine: { href: string; icon: string }[]
}

/**
 * @description Represents the properties for an individual Line contact section.
 * @export
 * @interface LineProps
 * @property {string} href - The URL that the Line contact section points to.
 * @property {string} icon - The icon identifier for the Line contact section.
 * @property {boolean} [firstColor] - An optional flag to apply the first color scheme.
 * @property {boolean} [forthColor] - An optional flag to apply the fourth color scheme.
 * @property {boolean} [changeBackground] - An optional flag to toggle background color change.
 */
export interface LineProps {
  href: string
  icon: string
  firstColor?: boolean
  forthColor?: boolean
  changeBackground?: boolean
}
