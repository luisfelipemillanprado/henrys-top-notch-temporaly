import { CircularDecoration } from '@/common/circular-decoration/components/CircularDecoration'
import { HeaderDescription } from '@/common/section-description/components/HeaderDescription'
import { MainTitle } from '@/common/titles/components/MainTitle'
import { MainActions } from '@/features/home/components/molecules/MainActions'
import { MainGallery } from '@/features/home/components/molecules/MainGallery'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { sectionId, headingId, gallery: galleryAssets, primaryCtaHref, secondaryCtaHref } = homeAssets.hero
const gallery = galleryAssets.map((item) => ({ ...item }))

/**
 * @description Renders the primary Hero section of the homepage with localized content and a media gallery.
 * @component
 * @param {object} props - Component properties derived from localized content and static assets.
 * @param {string} props.title - The main localized heading text.
 * @param {string} props.description - The localized supporting description.
 * @param {object} props.primaryCta - Configuration for the primary action button.
 * @param {string} props.primaryCta.text - The localized label for the primary button.
 * @param {string} props.primaryCta.href - The destination URL for the primary button.
 * @param {object} props.secondaryCta - Configuration for the secondary action button.
 * @param {string} props.secondaryCta.text - The localized label for the secondary button.
 * @param {string} props.secondaryCta.href - The destination URL for the secondary button.
 * @param {string[]} props.highlight - An array of localized strings for feature highlights.
 * @returns Returns a hero section with localized copy, dual CTAs, decorative rings, and media gallery.
 */
export const Hero = () => {
  const t = useTranslations('home.hero')
  const title = t('title')
  const description = t('description')
  const primaryCta = { text: t('primaryCta.text'), href: primaryCtaHref }
  const secondaryCta = { text: t('secondaryCta.text'), href: secondaryCtaHref }
  const highlight = [t('highlight.first'), t('highlight.second')]
  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      role={'region'}
      className={clsx(
        'relative',
        'w-full',
        'max-w-480',
        'h-242',
        'overflow-x-clip',
        'm1x:h-250.5',
        'm2x:h-253.75',
        'm3x:h-257.75',
        'm4x:h-261.25',
        'md:h-187',
        'lg:h-194',
        'xl:h-204',
        '1xl:h-206',
        '2xl:h-206',
        '3xl:h-229',
        '5xl:h-254'
      )}
    >
      <CircularDecoration />
      <div className={clsx('vertical', 'size-full', 'justify-start', 'md:justify-start')}>
        <div
          className={clsx(
            'vertical',
            'relative',
            'z-30',
            'w-full',
            'gap-y-4.5',
            'bg-secondary/95',
            'mt-14',
            'm2x:mt-13.75',
            'md:w-full',
            'md:max-w-154',
            'md:bg-transparent',
            'md:mt-11',
            'md:ml-12.5',
            'lg:max-w-166',
            'lg:mt-12',
            'lg:ml-13',
            'xl:max-w-167',
            'xl:mt-13',
            'xl:ml-16',
            '1xl:max-w-184',
            '1xl:mt-14',
            '1xl:ml-22',
            '2xl:max-w-[57%]',
            '2xl:mt-15',
            '3xl:max-w-[60%]',
            '5xl:max-w-[56%]',
            '5xl:mt-19'
          )}
        >
          <MainTitle title={title} headingId={headingId} />
          <HeaderDescription description={description} />
          <MainActions primaryCta={primaryCta} secondaryCta={secondaryCta} highlight={highlight} />
        </div>
      </div>
      <MainGallery gallery={gallery} />
    </section>
  )
}
