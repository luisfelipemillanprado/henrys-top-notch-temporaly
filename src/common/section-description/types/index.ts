/**
 * @description Represents the properties for the header description components.
 * @export
 * @interface HeaderDescriptionProps
 * @property {string} description - The text content to be displayed in the header description.
 * @property {boolean} [firstChangeTextPosition] - Optional flag to change text position for the first breakpoint.
 * @property {boolean} [secondChangeTextPosition] - Optional flag to change text position for the second breakpoint.
 * @property {boolean} [widthAuto] - Optional flag to set width to auto for medium breakpoint.
 */
export interface HeaderDescriptionProps {
  description: string
  firstChangeTextPosition?: boolean
  secondChangeTextPosition?: boolean
  widthAuto?: boolean
}
