import { HeaderDescription } from '@/common/section-description/components/HeaderDescription'
import { MainTitle } from '@/common/titles/components/MainTitle'
import { CircularDecoration } from '@/features/home/components/atoms/CircularDecoration'
import { MainActions } from '@/features/home/components/molecules/MainActions'
import { MainGallery } from '@/features/home/components/molecules/MainGallery'
import clsx from 'clsx'

/**
 * @description Renders the header section of the home page.
 * @public
 * @param {object} props - Component properties.
 * @param {string} mainTitle - The main heading text displayed in the header.
 * @param {string} sectionDescription - A description text displayed below the main title.
 * @param {object} callToAction - Object containing call-to-action button configurations.
 * @param {object} callToAction.reusableButton - Configuration for the reusable button with text and href arrays.
 * @param {object} callToAction.getStartedButton - Configuration for the "Get Started" button with text and href arrays.
 * @param {object} callToAction.actionHighlight - Object containing highlight text elements.
 * @param {string} callToAction.actionHighlight.firstText - First highlighted text.
 * @param {string} callToAction.actionHighlight.secondText - Second highlighted text.
 * @param {object[]} gallery - Array of gallery image objects.
 * @param {string} gallery[].url - URL of the gallery image.
 * @param {number} gallery[].id - Unique identifier for the gallery image.
 * @returns {JSX.Element} A responsive header section with circular decoration, main content, and gallery.
 */
export const Header = (props: {
  mainTitle: string
  sectionDescription: string
  callToAction: {
    reusableButton: { text: string[]; href: string[] }
    getStartedButton: { text: string[]; href: string[] }
    actionHighlight: { firstText: string; secondText: string }
  }
  gallery: { url: string; id: number }[]
}) => {
  const { mainTitle, sectionDescription, callToAction, gallery } = props
  return (
    <section
      aria-labelledby={mainTitle}
      role={'region'}
      className={clsx(
        'relative h-231.25 w-full max-w-480 overflow-x-clip',
        'm1x:h-239',
        'm2x:h-247.75',
        'm3x:h-253.75',
        'm4x:h-258.5',
        'md:h-185',
        'lg:h-190',
        '1xl:h-200',
        '2xl:h-206',
        '3xl:h-229',
        '5xl:h-254'
      )}
    >
      <CircularDecoration />
      <div className={clsx('vertical size-full justify-start', 'md:justify-start')}>
        <div
          className={clsx(
            'vertical bg-midnightgreen/95 relative z-30 mt-14 w-full gap-y-4.5',
            'm2x:mt-13.75',
            'md:mt-11 md:ml-9 md:w-17/20 md:bg-transparent',
            'lg:w-69/100',
            '1xl:ml-25.5 1xl:w-29/50 1xl:mt-14',
            '2xl:mt-15 2xl:w-57/100',
            '3xl:w-3/5',
            '5xl:w-14/25 5xl:mt-19'
          )}
        >
          <MainTitle title={mainTitle} />
          <HeaderDescription description={sectionDescription} />
          <MainActions callToAction={callToAction} />
        </div>
      </div>
      <MainGallery gallery={gallery} />
    </section>
  )
}
