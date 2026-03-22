import { EyeBrow } from '@/common/eye-brow/components/EyeBrow'
import { MainDescription } from '@/common/section-description/components/MainDescription'
import type { SectionHeaderProps } from '@/common/section-header/types'
import { SecondaryTitle } from '@/common/titles/components/SecondaryTitle'
import clsx from 'clsx'

/**
 * @description Renders a section header with a title and description.
 * @public
 * @interface SectionHeaderProps
 * @param {object} props - Component properties.
 * @param {SectionHeaderProps['title']} props.title - The main heading text displayed for the section.
 * @param {SectionHeaderProps['description']} props.description - A short supporting description shown beneath the title.
 * @param {SectionHeaderProps['eyebrow']} props.eyebrow - A brief text displayed above the title, often used to categorize the section.
 * @param {SectionHeaderProps['changeWidth']} [props.changeWidth] - An optional boolean that, when true, adjusts the width.
 * @param {SectionHeaderProps['hidden']} [props.hidden] - An optional boolean that, when true, hides the section header component.
 * @returns {JSX.Element} A rendering the composed section header.
 */
export const SectionHeader = ({
  title,
  description,
  eyebrow,
  changeWidth = false,
  hidden,
}: SectionHeaderProps) => {
  return (
    <div
      className={clsx(
        'vertical w-full items-center gap-y-4.25',
        'm1x:gap-y-5',
        'm3x:gap-y-5.25',
        'm4x:gap-y-5'
      )}
    >
      <EyeBrow text={eyebrow} hidden={hidden} />
      <div
        className={clsx(
          'vertical gap-y-5',
          'md:w-31/50',
          'lg:w-27/50',
          '1xl:w-12/25 1xl:gap-y-6',
          '5xl:w-9/20'
        )}
      >
        <SecondaryTitle title={title} />
        <MainDescription description={description} changeWidth={changeWidth} />
      </div>
    </div>
  )
}
