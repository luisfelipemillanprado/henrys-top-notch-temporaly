import { EyeBrow } from '@/common/eye-brow/components/EyeBrow'
import { MainDescription } from '@/common/section-description/components/MainDescription'
import type { SectionHeaderProps } from '@/common/section-header/types'
import { SecondaryTitle } from '@/common/titles/components/SecondaryTitle'
import clsx from 'clsx'

/**
 * @description Render a section header list item component composed of a title and description.
 * @component
 * @param {SectionHeaderProps} props - Component properties with title, description, eyebrow, titleId, changeWidth and hidden optional.
 * @param {string} props.title - The title value for the section header.
 * @param {string} props.description - The description value for the section header.
 * @param {string} props.eyebrow - The eyebrow value for the section header.
 * @param {string} props.titleId - Stable DOM id forwarded to the inner H2 for `aria-labelledby`/anchor links.
 * @param {boolean} [props.changeWidth] - Optional flag to change text position.
 * @param {boolean} [props.hidden] - Optional flag to hide the eyebrow label.
 * @returns Renders a section header list item component composed of a title and description.
 */
export const SectionHeader = ({
  title,
  description,
  eyebrow,
  titleId,
  changeWidth = false,
  hidden,
}: SectionHeaderProps) => {
  return (
    <div
      className={clsx('vertical', 'w-full', 'items-center', 'gap-y-3.5', 'm1x:gap-y-4', 'md:items-start')}
    >
      <EyeBrow text={eyebrow} hidden={hidden} />
      <div
        className={clsx(
          'vertical',
          'gap-y-4.5',
          'md:max-w-129.25',
          'md:gap-y-5',
          'lg:max-w-133',
          'lg:gap-y-6',
          'xl:max-w-123'
        )}
      >
        <SecondaryTitle title={title} headingId={titleId} />
        <MainDescription description={description} changeWidth={changeWidth} />
      </div>
    </div>
  )
}
