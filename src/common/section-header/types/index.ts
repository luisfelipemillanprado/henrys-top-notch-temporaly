/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines the content and behavior for a section header block.
 * @interface SectionHeaderProps
 * @property {string} title - Primary heading text for the section.
 * @property {string} description - Supporting description rendered below the heading.
 * @property {string} eyebrow - Short accent label rendered above the heading.
 * @property {string} titleId - Stable DOM id forwarded to the inner H2; required for `aria-labelledby` and deep-links.
 * @property {boolean} [changeWidth] - Enables the alternate max-width behavior for descriptions.
 * @property {boolean} [hidden] - Hides the eyebrow label when enabled.
 */
export interface SectionHeaderProps {
  title: string
  description: string
  eyebrow: string
  titleId: string
  changeWidth?: boolean
  hidden?: boolean
}
