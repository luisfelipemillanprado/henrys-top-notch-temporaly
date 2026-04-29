/**
 * @description Represents the properties required to render a section header component.
 * @export
 * @interface SectionHeaderProps
 * @property {string} title - The main heading text displayed for the section.
 * @property {string} description - A short supporting description shown beneath the title.
 * @property {string} eyebrow - A brief text displayed above the title, often used to categorize the section.
 * @property {boolean} [changeWidth] - Optional flag to indicate if the width of the description should be changed.
 * @property {boolean} [hidden] - Optional flag to indicate if the section header should be hidden.
 * @property {string} [titleId] - An optional string to indicate the title id.
 */
export interface SectionHeaderProps {
  title: string
  description: string
  eyebrow: string
  titleId?: string
  changeWidth?: boolean
  hidden?: boolean
}
