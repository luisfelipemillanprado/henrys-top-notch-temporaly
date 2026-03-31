/**
 * @description Represents the properties required to render a main title component.
 * @export
 * @interface MainTitleProps
 * @property {string} title - The text content rendered as the main heading.
 * @property {boolean} [changePosition] - An optional boolean to indicate if the position of the title should be changed.
 * @property {boolean} [truncate] - An optional boolean to indicate if the title text should be truncated.
 */
export interface MainTitleProps {
  title: string
  changePosition?: boolean
  truncate?: boolean
}
