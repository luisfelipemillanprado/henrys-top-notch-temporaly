import { SummaryOfWhoWeAre } from '@/features/home/components/molecules/SummaryOfWhoWeAre'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { benefits: benefitAssets, image, primaryCtaHref } = homeAssets.whoWeAre

/**
 * @description Renders the "Summary of Who We Are" section of the homepage.
 * @public
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 * @property {string} eyebrow - The eyebrow text of the section.
 * @property {string} image - The URL of the image representing the section.
 * @property {object} primaryCta - Configuration for the primary call-to-action button.
 * @property {string} primaryCta.text - The text displayed on the primary call-to-action button.
 * @property {string} primaryCta.href - The URL that the primary call-to-action button links to.
 * @property {array} benefits - An array of benefit objects, each containing text and an ID.
 * @property {string} benefits[].text - The text describing the benefit.
 * @property {number} benefits[].id - The unique identifier for the benefit.
 * @returns {JSX.Element} The rendered "OurSummaryOfWhoWeAre" component.
 */
export const OurSummaryOfWhoWeAre = () => {
  const t = useTranslations('home.who-we-are')
  const title = t('title')
  const description = t('description')
  const eyebrow = t('eyebrow')
  const primaryCta = {
    text: t('primaryCta.text'),
    href: primaryCtaHref,
  }
  const benefits = [
    { text: t('benefits.justOnTime'), id: benefitAssets[0].id },
    { text: t('benefits.support247'), id: benefitAssets[1].id },
    { text: t('benefits.affordableHvacSolutions'), id: benefitAssets[2].id },
    { text: t('benefits.energyEfficientSystems'), id: benefitAssets[3].id },
    { text: t('benefits.expertInstallationRepair'), id: benefitAssets[4].id },
    { text: t('benefits.comfortForHomesBusinesses'), id: benefitAssets[5].id },
  ]
  return (
    <section
      id={'who-we-are'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-off-white w-full px-5.5 pt-11 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-20',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <SummaryOfWhoWeAre
        title={title}
        description={description}
        eyebrow={eyebrow}
        primaryCta={primaryCta}
        image={image}
        benefits={benefits}
      />
    </section>
  )
}
