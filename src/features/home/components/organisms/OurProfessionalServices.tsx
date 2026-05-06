import { ProfessionalServices } from '@/features/home/components/molecules/ProfessionalServices'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { sectionId, headingId, primaryCtaHref, services: serviceAssets } = homeAssets.professionalServices
const stars = serviceAssets[0].stars.map((star) => ({ ...star }))

/**
 * @description Renders the "Our Professional Services" section, managing localized service catalogs,
 * benefit lists, and multi-level call-to-action configurations.
 * @component
 * @param {object} props - Component properties derived from internal translations and static assets.
 * @param {string} props.title - The localized main title for the services section.
 * @param {string} props.description - A localized summary of the professional services offered.
 * @param {string} props.eyebrow - A short localized accent label displayed above the title.
 * @param {object} props.primaryCta - Configuration for the main section call-to-action.
 * @param {string} props.primaryCta.text - Localized text for the primary button.
 * @param {string} props.primaryCta.href - Target URL for the primary button.
 * @param {object[]} props.services - A list of localized service objects.
 * @param {number} props.services[].id - Unique identifier for the service.
 * @param {string} props.services[].url - Image URL representing the service.
 * @param {string} props.services[].title - Localized title of the service.
 * @param {string} props.services[].description - Localized description of the service.
 * @param {object[]} props.services[].stars - Visual rating configuration for the service.
 * @param {object[]} props.services[].benefits - List of specific benefits for the service.
 * @param {string} props.services[].benefits[].text - Localized benefit description.
 * @param {number} props.services[].benefits[].id - Unique identifier for the benefit.
 * @param {object} props.services[].secondaryCta - Specific action for the individual service.
 * @param {string} props.services[].secondaryCta.text - Localized label for the service button.
 * @param {string} props.services[].secondaryCta.href - Destination URL for the service button.
 * @returns Returns a professional-services section with localized cards, benefits, ratings, and CTA.
 */
export const OurProfessionalServices = () => {
  const t = useTranslations('home.our-professional-services')
  const title = t('title')
  const description = t('description')
  const eyebrow = t('eyebrow')
  const primaryCta = {
    text: t('primaryCta.text'),
    href: primaryCtaHref,
  }
  const services = [
    {
      url: serviceAssets[0].url,
      title: t('services.maintenance.title'),
      stars,
      description: t('services.maintenance.description'),
      benefits: [
        { text: t('services.maintenance.benefits.freeEstimate'), id: serviceAssets[0].benefits[0].id },
        { text: t('services.maintenance.benefits.allWarranty'), id: serviceAssets[0].benefits[1].id },
        { text: t('services.maintenance.benefits.seasonalTuneUp'), id: serviceAssets[0].benefits[2].id },
        { text: t('services.maintenance.benefits.filterChange'), id: serviceAssets[0].benefits[3].id },
        { text: t('services.maintenance.benefits.energySavings'), id: serviceAssets[0].benefits[4].id },
      ],
      secondaryCta: {
        text: t('services.maintenance.secondaryCta.text'),
        href: serviceAssets[0].secondaryCtaHref,
      },
      id: serviceAssets[0].id,
    },
    {
      url: serviceAssets[1].url,
      title: t('services.repair.title'),
      stars,
      description: t('services.repair.description'),
      benefits: [
        { text: t('services.repair.benefits.freeEstimate'), id: serviceAssets[1].benefits[0].id },
        { text: t('services.repair.benefits.allWarranty'), id: serviceAssets[1].benefits[1].id },
        { text: t('services.repair.benefits.sameDayRepair'), id: serviceAssets[1].benefits[2].id },
        { text: t('services.repair.benefits.emergencyService'), id: serviceAssets[1].benefits[3].id },
        { text: t('services.repair.benefits.quickDiagnosis'), id: serviceAssets[1].benefits[4].id },
      ],
      secondaryCta: {
        text: t('services.repair.secondaryCta.text'),
        href: serviceAssets[1].secondaryCtaHref,
      },
      id: serviceAssets[1].id,
    },
    {
      url: serviceAssets[2].url,
      title: t('services.installation.title'),
      stars,
      description: t('services.installation.description'),
      benefits: [
        { text: t('services.installation.benefits.freeEstimate'), id: serviceAssets[2].benefits[0].id },
        { text: t('services.installation.benefits.allWarranty'), id: serviceAssets[2].benefits[1].id },
        { text: t('services.installation.benefits.properSizing'), id: serviceAssets[2].benefits[2].id },
        { text: t('services.installation.benefits.efficientUnits'), id: serviceAssets[2].benefits[3].id },
        { text: t('services.installation.benefits.expertInstall'), id: serviceAssets[2].benefits[4].id },
      ],
      secondaryCta: {
        text: t('services.installation.secondaryCta.text'),
        href: serviceAssets[2].secondaryCtaHref,
      },
      id: serviceAssets[2].id,
    },
    {
      url: serviceAssets[3].url,
      title: t('services.acInstallation.title'),
      stars,
      description: t('services.acInstallation.description'),
      benefits: [
        { text: t('services.acInstallation.benefits.freeEstimate'), id: serviceAssets[3].benefits[0].id },
        { text: t('services.acInstallation.benefits.allWarranty'), id: serviceAssets[3].benefits[1].id },
        { text: t('services.acInstallation.benefits.highEfficiency'), id: serviceAssets[3].benefits[2].id },
        { text: t('services.acInstallation.benefits.smartSetup'), id: serviceAssets[3].benefits[3].id },
        { text: t('services.acInstallation.benefits.betterAirflow'), id: serviceAssets[3].benefits[4].id },
      ],
      secondaryCta: {
        text: t('services.acInstallation.secondaryCta.text'),
        href: serviceAssets[3].secondaryCtaHref,
      },
      id: serviceAssets[3].id,
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
        'bg-off-white',
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
      <ProfessionalServices
        title={title}
        description={description}
        eyebrow={eyebrow}
        titleId={headingId}
        primaryCta={primaryCta}
        services={services}
      />
    </section>
  )
}
