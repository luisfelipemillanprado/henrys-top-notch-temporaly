/* ------------------------------------------------- INTERFACES-PROPS --------------------------------------------------------- */

/**
 * @description Defines the properties for the primary page heading (H1).
 * @interface MainTitleProps
 * @property {string} title - The core text content to be displayed.
 * @property {string} [headingId] - Custom anchor ID for navigation or screen readers.
 */
export interface MainTitleProps {
  title: string
  headingId?: string
}

/**
 * @description Properties for section-level headings (H2).
 * @interface SecondaryTitleProps
 * @property {string} title - The text content rendered as a secondary heading.
 * @property {string} [headingId] - Custom identifier for the section heading.
 */
export interface SecondaryTitleProps {
  title: string
  headingId?: string
}

/**
 * @description Configuration for sub-section headings (H3).
 * @interface TertiaryTitleProps
 * @property {string} title - The heading text.
 * @property {string} [headingId] - Optional ID for the H3 element.
 * @property {boolean} [changePosition=false] - When true, enables centered alignment for mobile layouts.
 * @property {boolean} [truncate=true] - Prevents text wrapping by adding an ellipsis.
 * @property {boolean} [isActive=false] - Switches the visual theme to the primary color when active.
 */
export interface TertiaryTitleProps {
  title: string
  headingId?: string
  changePosition?: boolean
  truncate?: boolean
  isActive?: boolean
}

/**
 * @description Properties for detailed sub-headings (H4).
 * @interface QuaternaryTitleProps
 * @property {string} title - The descriptive title text.
 * @property {string} [headingId] - Optional unique ID.
 * @property {boolean} [changePosition=false] - Toggles between centered and start alignment.
 * @property {boolean} [truncate=true] - If enabled, ensures the title stays on a single line.
 */
export interface QuaternaryTitleProps {
  title: string
  headingId?: string
  changePosition?: boolean
  truncate?: boolean
}

/**
 * @description Minimal properties for the smallest heading level (H5).
 * @interface QuinaryTitleProps
 * @property {string} title - The label or title text to be displayed.
 */
export interface QuinaryTitleProps {
  title: string
}
