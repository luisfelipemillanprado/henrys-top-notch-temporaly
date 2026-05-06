/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines props for two-line action highlight labels.
 * @interface ActionHighlightProps
 * @property {string} firstText - Primary text line.
 * @property {string} secondText - Secondary text line.
 * @property {boolean} [firstChangePosition] - Enables alternate positioning styles.
 */
export interface ActionHighlightProps {
  firstText: string
  secondText: string
  firstChangePosition?: boolean
}
