import { WhyChooseUs } from '@/features/home/components/molecules/WhyChooseUs'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { sectionId, headingId, image, primaryCtaHref, reasons: reasonAssets } = homeAssets.whyChooseUs

/**
 * @description Renders the "Why Choose Us" section, highlighting competitive advantages
 * through localized affirmations and descriptive reason summaries.
 * @component
 * @param {object} props - Component properties derived from internal translations and static assets.
 * @param {string} props.title - The localized main title for the section.
 * @param {string} props.description - Localized text explaining the company's value proposition.
 * @param {string} props.eyebrow - A short localized accent label displayed above the title.
 * @param {string} props.image - The URL of the lead visual image for the section.
 * @param {object} props.primaryCta - Configuration for the main call-to-action button.
 * @param {string} props.primaryCta.text - Localized label for the CTA button.
 * @param {string} props.primaryCta.href - Target URL for the CTA.
 * @param {object[]} props.reasons - A list of localized reason objects.
 * @param {number} props.reasons[].id - Unique identifier for the reason.
 * @param {string} props.reasons[].affirmation - Localized short highlight or core benefit.
 * @param {string} props.reasons[].resume - Localized detailed summary of the reason.
 * @returns Returns a why-choose-us section with localized copy, image, accordion reasons, and CTA.
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
      id={sectionId}
      aria-labelledby={headingId}
      role={'region'}
      className={clsx(
        'vertical',
        'w-full',
        'bg-primary',
        'shadow-2xs',
        'px-5.5',
        'pt-12',
        'pb-11',
        'm3x:px-5.75',
        'm3x:pb-12.5',
        'm4x:px-6',
        'md:px-13',
        'md:py-20',
        'lg:py-24',
        '1xl:px-29.5',
        '1xl:pt-34',
        '1xl:pb-34',
        '2xl:px-32',
        '2xl:pt-36',
        '2xl:pb-36'
      )}
    >
      <WhyChooseUs
        title={title}
        description={description}
        eyebrow={eyebrow}
        titleId={headingId}
        image={image}
        primaryCta={primaryCta}
        reasons={reasons}
      />
    </section>
  )
}
