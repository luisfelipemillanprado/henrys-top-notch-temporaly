import { ProfessionalServices } from '@/features/home/components/molecules/ProfessionalServices'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { primaryCtaHref, services: serviceAssets } = homeAssets.professionalServices
const stars = serviceAssets[0].stars.map((star) => ({ ...star }))

/**
 * @description Renders the "Our Professional Services" section of the homepage.
 * @public
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 * @property {string} eyebrow - The eyebrow text of the section.
 * @property {string} image - The URL of the image representing the section.
 * @property {object} primaryCta - Configuration for the primary call-to-action button.
 * @property {string} primaryCta.text - The text displayed on the primary call-to-action button.
 * @property {string} primaryCta.href - The URL that the primary call-to-action button links to.
 * @property {array} services - An array of objects representing professional services offered.
 * @property {number} services[].id - The unique identifier for the service.
 * @property {string} services[].url - The URL of the service image.
 * @property {string} services[].title - The title of the service.
 * @property {string} services[].description - The description of the service.
 * @property {array} services[].benefits - An array of benefit objects for the service, each containing text and an ID.
 * @property {string} services[].benefits[].text - The text describing the benefit.
 * @property {number} services[].benefits[].id - The unique identifier for the benefit.
 * @property {object} services[].secondaryCta - Configuration for the secondary call-to-action button for the service.
 * @property {string} services[].secondaryCta.text - The text displayed on the secondary call-to-action button.
 * @property {string} services[].secondaryCta.href - The URL that the secondary call-to-action button links to.
 * @returns {JSX.Element} The rendered "OurProfessionalServices" component.
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
      id={'professional-services'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-off-white w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:py-20',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <ProfessionalServices
        title={title}
        description={description}
        eyebrow={eyebrow}
        primaryCta={primaryCta}
        services={services}
      />
    </section>
  )
}
