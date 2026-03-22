import { HeaderDescription } from '@/common/section-description/components/HeaderDescription'
import { MainTitle } from '@/common/titles/components/MainTitle'
import { CircularDecoration } from '@/features/home/components/atoms/CircularDecoration'
import { MainActions } from '@/features/home/components/molecules/MainActions'
import { MainGallery } from '@/features/home/components/molecules/MainGallery'
import clsx from 'clsx'

/**
 * @description Renders the hero section of the home page.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The main heading text displayed in the hero section.
 * @param {string} props.description - A description text displayed below the main title.
 * @param {object} props.primaryCta - Configuration for the primary call-to-action button with text and href.
 * @param {string} props.primaryCta.text - Text for the primary call-to-action button.
 * @param {string} props.primaryCta.href - URL for the primary call-to-action button.
 * @param {object} props.secondaryCta - Configuration for the secondary call-to-action button with text and href.
 * @param {string} props.secondaryCta.text - Text for the secondary call-to-action button.
 * @param {string} props.secondaryCta.href - URL for the secondary call-to-action button.
 * @param {string[]} props.highlight - Array of strings for the highlighted action text.
 * @param {string} props.gallery[].url - URL of the gallery image.
 * @param {number} props.gallery[].id - Unique identifier for the gallery image.
 * @param {object[]} props.gallery - Array of gallery image objects.
 * @returns {JSX.Element} A responsive hero section with circular decoration, main content, and gallery.
 */
export const Hero = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  highlight,
  gallery,
}: {
  title: string
  description: string
  primaryCta: { text: string; href: string }
  secondaryCta: { text: string; href: string }
  highlight: string[]
  gallery: { url: string; id: number }[]
}) => {
  return (
    <section
      aria-labelledby={title}
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
            'vertical bg-secondary/95 relative z-30 mt-14 w-full gap-y-4.5',
            'm2x:mt-13.75',
            'md:mt-11 md:ml-9 md:w-17/20 md:bg-transparent',
            'lg:w-69/100',
            '1xl:ml-25.5 1xl:w-29/50 1xl:mt-14',
            '2xl:mt-15 2xl:w-57/100',
            '3xl:w-3/5',
            '5xl:w-14/25 5xl:mt-19'
          )}
        >
          <MainTitle title={title} />
          <HeaderDescription description={description} />
          <MainActions primaryCta={primaryCta} secondaryCta={secondaryCta} highlight={highlight} />
        </div>
      </div>
      <MainGallery gallery={gallery} />
    </section>
  )
}
