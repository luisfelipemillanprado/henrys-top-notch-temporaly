/**
 * @description Represents the properties required to render a main title component.
 * @export
 * @interface MainTitleProps
 * @property {string} title - The text content rendered as the main heading.
 * @property {boolean} [changeColor] - Optional flag to indicate if the title color should change.
 * @property {boolean} [firstChangeTextPosition] - Optional flag to adjust text position.
 * @property {boolean} [secondChangeTextPosition] - Optional flag to further adjust text position.
 * @property {boolean} [truncateText] - Optional flag to enable text truncation with ellipsis for long titles.
 */
export interface MainTitleProps {
  title: string
  changeColor?: boolean
  firstChangeTextPosition?: boolean
  secondChangeTextPosition?: boolean
  truncateText?: boolean
}
