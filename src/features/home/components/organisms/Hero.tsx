import { HeaderDescription } from '@/common/section-description/components/HeaderDescription'
import { MainTitle } from '@/common/titles/components/MainTitle'
import { CircularDecoration } from '@/features/home/components/atoms/CircularDecoration'
import { MainActions } from '@/features/home/components/molecules/MainActions'
import { MainGallery } from '@/features/home/components/molecules/MainGallery'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { gallery: galleryAssets, primaryCtaHref, secondaryCtaHref } = homeAssets.hero
const gallery = galleryAssets.map((item) => ({ ...item }))

/**
 * @description Renders the "Hero" section of the homepage.
 * @public
 * @property {string} title - The title of the hero section.
 * @property {string} description - The description text of the hero section.
 * @property {object} primaryCta - Configuration for the primary call-to-action button.
 * @property {string} primaryCta.text - The text displayed on the primary call-to-action button.
 * @property {string} primaryCta.href - The URL that the primary call-to-action button links to.
 * @property {object} secondaryCta - Configuration for the secondary call-to-action button.
 * @property {string} secondaryCta.text - The text displayed on the secondary call-to-action button.
 * @property {string} secondaryCta.href - The URL that the secondary call-to-action button links to.
 * @property {array} highlight - An array of strings representing highlighted text in the hero section.
 * @returns {JSX.Element} The rendered "Hero" component.
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
      id={'hero'}
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
