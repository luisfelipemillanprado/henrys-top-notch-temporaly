import { SummaryOfWhoWeAre } from '@/features/home/components/molecules/SummaryOfWhoWeAre'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { sectionId, headingId, benefits: benefitAssets, image, primaryCtaHref } = homeAssets.whoWeAre

/**
 * @description Renders the "Summary of Who We Are" section, presenting the company identity
 * through localized text, a core value proposition, and a list of key benefits.
 * @component
 * @param {object} props - Component properties derived from internal translations and static assets.
 * @param {string} props.title - The localized main title of the about section.
 * @param {string} props.description - Localized text providing an overview of the company.
 * @param {string} props.eyebrow - A short localized accent label displayed above the title.
 * @param {string} props.image - The URL of the visual asset representing the brand.
 * @param {object} props.primaryCta - Configuration for the primary call-to-action button.
 * @param {string} props.primaryCta.text - Localized label for the CTA button.
 * @param {string} props.primaryCta.href - Target URL for the CTA.
 * @param {object[]} props.benefits - A list of localized benefit objects.
 * @param {string} props.benefits[].text - Localized description of the specific benefit.
 * @param {number} props.benefits[].id - Unique identifier for the benefit.
 * @returns Returns an about-us section with localized copy, image, CTA, and benefit list.
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
      id={sectionId}
      aria-labelledby={headingId}
      role={'region'}
      className={clsx(
        'vertical',
        'w-full',
        'bg-off-white',
        'shadow-2xs',
        'px-5.5',
        'py-11',
        'm3x:px-5.75',
        'm3x:pb-12.5',
        'm4x:px-6',
        'md:px-13',
        'md:pt-23',
        'md:pb-20',
        'lg:pt-26',
        'lg:pb-24',
        '1xl:px-29.5',
        '1xl:pt-34',
        '1xl:pb-34',
        '2xl:px-32',
        '2xl:pt-36',
        '2xl:pb-36'
      )}
    >
      <SummaryOfWhoWeAre
        title={title}
        description={description}
        eyebrow={eyebrow}
        titleId={headingId}
        primaryCta={primaryCta}
        image={image}
        benefits={benefits}
      />
    </section>
  )
}
