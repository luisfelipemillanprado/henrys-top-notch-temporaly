/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines the properties for the ActionHighlight component.
 * @export
 * @interface ActionHighlightProps
 * @property {string} firstText - The primary (first) text line to display in the ActionHighlight component.
 * @property {string} secondText - The secondary (second) text line to display in the ActionHighlight component.
 * @property {boolean} [firstChangePosition] - Applies styles for the first positioning variant.
 */
export interface ActionHighlightProps {
  firstText: string
  secondText: string
  firstChangePosition?: boolean
}
