import { BookingProcess } from '@/features/home/components/molecules/BookingProcess'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { features: featureAssets, image, primaryCtaHref, steps: stepAssets } = homeAssets.bookingProcess

/**
 * @description Renders the "Booking Process" section of the homepage.
 * @public
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 * @property {string} eyebrow - The eyebrow text of the section.
 * @property {string} image - The URL of the image representing the section.
 * @property {object} primaryCta - Configuration for the primary call-to-action button.
 * @property {string} primaryCta.text - The text displayed on the primary call-to-action button.
 * @property {string} primaryCta.href - The URL that the primary call-to-action button links to.
 * @property {array} features - An array of objects representing features of the booking process.
 * @property {number} features[].id - The unique identifier for the feature.
 * @property {string} features[].icon - The URL of the feature icon.
 * @property {string} features[].title - The title of the feature.
 * @property {string} features[].description - The description of the feature.
 * @property {string} features[].href - The URL that the feature links to for more details.
 * @property {string} features[].text - The text displayed for the feature's call-to-action.
 * @property {array} steps - An array of objects representing steps in the booking process.
 * @property {number} steps[].id - The unique identifier for the step.
 * @property {string} steps[].url - The URL of the step image.
 * @property {string} steps[].title - The title of the step.
 * @property {string} steps[].description - The description of the step.
 * @returns {JSX.Element} The rendered "OurBookingProcess" component.
 */
export const OurBookingProcess = () => {
  const t = useTranslations('home.our-booking-process')
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
      href: featureAssets[0].href,
      text: t('features.energyEfficientSystems.moreDetails'),
      id: featureAssets[0].id,
    },
    {
      icon: featureAssets[1].icon,
      title: t('features.expertInstallationRepair.title'),
      description: t('features.expertInstallationRepair.description'),
      href: featureAssets[1].href,
      text: t('features.expertInstallationRepair.moreDetails'),
      id: featureAssets[1].id,
    },
    {
      icon: featureAssets[2].icon,
      title: t('features.comfortForHomesBusinesses.title'),
      description: t('features.comfortForHomesBusinesses.description'),
      href: featureAssets[2].href,
      text: t('features.comfortForHomesBusinesses.moreDetails'),
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
      id={'process'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-primary w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:py-20',
        'lg:px-15 lg:py-24',
        'xl:px-13',
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
