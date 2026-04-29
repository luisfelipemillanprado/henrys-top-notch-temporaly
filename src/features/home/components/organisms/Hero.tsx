import { CircularDecoration } from '@/common/circular-decoration/components/CircularDecoration'
import { HeaderDescription } from '@/common/section-description/components/HeaderDescription'
import { MainTitle } from '@/common/titles/components/MainTitle'
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
      aria-labelledby={'home-hero-title'}
      role={'region'}
      className={clsx(
        'relative h-236.75 w-full max-w-480 overflow-x-clip',
        'm1x:h-244.5',
        'm2x:h-249',
        'm3x:h-253.25',
        'm4x:h-256',
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
      <div className={clsx('vertical size-full justify-start', 'md:justify-start')}>
        <div
          className={clsx(
            'vertical bg-secondary/95 relative z-30 gap-y-4.5',
            'm2x:mt-13.75 mt-14 w-full',
            'md:mt-11 md:ml-12.5 md:w-full md:bg-transparent',
            'md:max-w-154',
            'lg:mt-12 lg:ml-13 lg:max-w-166',
            'xl:mt-13 xl:ml-16 xl:max-w-167',
            '1xl:ml-22 1xl:max-w-184 1xl:mt-14',
            '2xl:mt-15 2xl:max-w-[57%]',
            '3xl:max-w-[60%]',
            '5xl:max-w-[56%] 5xl:mt-19'
          )}
        >
          <MainTitle title={title} headingId={'home-hero-title'} />
          <HeaderDescription description={description} />
          <MainActions primaryCta={primaryCta} secondaryCta={secondaryCta} highlight={highlight} />
        </div>
      </div>
      <MainGallery gallery={gallery} />
    </section>
  )
}
