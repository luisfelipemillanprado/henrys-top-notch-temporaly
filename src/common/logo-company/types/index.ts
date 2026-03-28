/* ------------------------------------------------- INTERFACES-PROPS ---------------------------------------------------------- */

/**
 * @description Represents the properties for the LogoCompany component.
 * @export
 * @interface LogoCompanyProps
 * @property {string} url - The URL of the company logo image.
 * @property {boolean} [footer] - Optional flag to indicate if the logo is used in the footer.
 */
export interface LogoCompanyProps {
  url: string
  footer?: boolean
}
