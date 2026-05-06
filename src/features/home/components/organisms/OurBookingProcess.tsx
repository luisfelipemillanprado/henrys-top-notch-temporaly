import { BookingProcess } from '@/features/home/components/molecules/BookingProcess'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const {
  sectionId,
  headingId,
  features: featureAssets,
  image,
  primaryCtaHref,
  steps: stepAssets,
} = homeAssets.bookingProcess

/**
 * @description Renders the "Booking Process" section, managing the integration of localized content,
 * feature highlights, and step-by-step instructions.
 * @component
 * @param {object} props - Component properties derived from internal translations and static assets.
 * @param {string} props.title - The main localized title for the section.
 * @param {string} props.description - A localized summary of the booking process.
 * @param {string} props.eyebrow - A short localized label or "eyebrow" text above the main title.
 * @param {string} props.image - The static image URL representing the booking section.
 * @param {object} props.primaryCta - Configuration for the main call-to-action button.
 * @param {string} props.primaryCta.text - Localized text for the CTA button.
 * @param {string} props.primaryCta.href - Target URL for the CTA.
 * @param {object[]} props.features - Localized list of key service features.
 * @param {number} props.features[].id - Unique identifier for the feature.
 * @param {string} props.features[].icon - Icon identifier or path for the feature.
 * @param {string} props.features[].title - Localized title of the feature.
 * @param {string} props.features[].description - Localized description of the feature.
 * @param {string} props.features[].href - Detail link for the feature.
 * @param {string} props.features[].text - Label for the feature's link.
 * @param {object[]} props.steps - Localized list of steps in the booking workflow.
 * @param {number} props.steps[].id - Unique identifier for the step.
 * @param {string} props.steps[].url - Image URL for the specific step.
 * @param {string} props.steps[].title - Localized title of the step.
 * @param {string} props.steps[].description - Localized description of the step.
 * @returns Returns a booking-process section with localized overview, features, steps, and CTA.
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
    {
      icon: featureAssets[3].icon,
      title: t('features.personalizedCustomerCare.title'),
      description: t('features.personalizedCustomerCare.description'),
      href: featureAssets[3].href,
      text: t('features.personalizedCustomerCare.moreDetails'),
      id: featureAssets[3].id,
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
      <BookingProcess
        title={title}
        description={description}
        eyebrow={eyebrow}
        titleId={headingId}
        image={image}
        features={features}
        steps={steps}
        primaryCta={primaryCta}
      />
    </section>
  )
}
