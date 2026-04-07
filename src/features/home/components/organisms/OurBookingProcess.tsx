import { BookingProcess } from '@/features/home/components/molecules/BookingProcess'
import { homeAssets } from '@/utils/data/static/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export const OurBookingProcess = () => {
  const t = useTranslations('home.our-booking-process')
  const { features: featureAssets, image, primaryCtaHref, steps: stepAssets } = homeAssets.bookingProcess

  const title = t('title')
  const description = t('description')
  const eyebrow = t('eyebrow')
  const primaryCta = {
    text: t('primaryCta.text'),
    href: primaryCtaHref,
  }
  const features = [
    {
      icon: featureAssets[0].icon,
      title: t('features.energyEfficientSystems.title'),
      description: t('features.energyEfficientSystems.description'),
      id: featureAssets[0].id,
    },
    {
      icon: featureAssets[1].icon,
      title: t('features.expertInstallationRepair.title'),
      description: t('features.expertInstallationRepair.description'),
      id: featureAssets[1].id,
    },
    {
      icon: featureAssets[2].icon,
      title: t('features.comfortForHomesBusinesses.title'),
      description: t('features.comfortForHomesBusinesses.description'),
      id: featureAssets[2].id,
    },
  ]
  const steps = [
    {
      url: stepAssets[0].url,
      title: t('steps.bookYourService.title'),
      description: t('steps.bookYourService.description'),
      id: stepAssets[0].id,
    },
    {
      url: stepAssets[1].url,
      title: t('steps.weArriveOnTime.title'),
      description: t('steps.weArriveOnTime.description'),
      id: stepAssets[1].id,
    },
    {
      url: stepAssets[2].url,
      title: t('steps.affordablePricing.title'),
      description: t('steps.affordablePricing.description'),
      id: stepAssets[2].id,
    },
    {
      url: stepAssets[3].url,
      title: t('steps.satisfactionGuaranteed.title'),
      description: t('steps.satisfactionGuaranteed.description'),
      id: stepAssets[3].id,
    },
  ]

  return (
    <section
      id={'booking-process'}
      aria-labelledby={title}
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
      <BookingProcess
        title={title}
        description={description}
        eyebrow={eyebrow}
        image={image}
        features={features}
        steps={steps}
        primaryCta={primaryCta}
      />
    </section>
  )
}
