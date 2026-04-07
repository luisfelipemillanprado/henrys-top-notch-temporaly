import { WhyChooseUs } from '@/features/home/components/molecules/WhyChooseUs'
import { homeAssets } from '@/utils/data/static/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export const OurWhyChooseUs = () => {
  const t = useTranslations('home.why-choose-us')
  const { image, primaryCtaHref, reasons: reasonAssets } = homeAssets.whyChooseUs

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
      aria-labelledby={'why-choose-us-title'}
      role={'region'}
      className={clsx(
        'vertical w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
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
