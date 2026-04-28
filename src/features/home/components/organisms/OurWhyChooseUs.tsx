import { WhyChooseUs } from '@/features/home/components/molecules/WhyChooseUs'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { image, primaryCtaHref, reasons: reasonAssets } = homeAssets.whyChooseUs

/**
 * @description Renders the "Why Choose Us" section of the homepage.
 * @public
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 * @property {string} eyebrow - The eyebrow text of the section.
 * @property {string} image - The URL of the image representing the section.
 * @property {object} primaryCta - Configuration for the primary call-to-action button.
 * @property {string} primaryCta.text - The text displayed on the primary call-to-action button.
 * @property {string} primaryCta.href - The URL that the primary call-to-action button links to.
 * @property {array} reasons - An array of objects representing reasons to choose us.
 * @property {number} reasons[].id - The unique identifier for the reason.
 * @property {string} reasons[].affirmation - The affirmation text for the reason.
 * @property {string} reasons[].resume - The resume text for the reason.
 * @returns {JSX.Element} The rendered "OurWhyChooseUs" component.
 */
export const OurWhyChooseUs = () => {
  const t = useTranslations('home.why-choose-us')
  const title = t('title')
  const description = t('description')
  const eyebrow = t('eyebrow')
  const primaryCta = {
    text: t('primaryCta.text'),
    href: primaryCtaHref,
  }
  const reasons = [
    {
      affirmation: t('reasons.trustedIndustryExperts.affirmation'),
      resume: t('reasons.trustedIndustryExperts.resume'),
      id: reasonAssets[0].id,
    },
    {
      affirmation: t('reasons.fastReliableService.affirmation'),
      resume: t('reasons.fastReliableService.resume'),
      id: reasonAssets[1].id,
    },
    {
      affirmation: t('reasons.fairTransparentPricing.affirmation'),
      resume: t('reasons.fairTransparentPricing.resume'),
      id: reasonAssets[2].id,
    },
    {
      affirmation: t('reasons.satisfactionYouCanTrust.affirmation'),
      resume: t('reasons.satisfactionYouCanTrust.resume'),
      id: reasonAssets[3].id,
    },
  ]
  return (
    <section
      id={'why-choose-us'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-primary w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:py-20',
        'lg:py-24',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <WhyChooseUs
        title={title}
        description={description}
        eyebrow={eyebrow}
        image={image}
        primaryCta={primaryCta}
        reasons={reasons}
      />
    </section>
  )
}
