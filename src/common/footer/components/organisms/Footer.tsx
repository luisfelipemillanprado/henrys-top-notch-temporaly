import { OurCompanyContactInformation } from '@/common/footer/components/organisms/OurCompanyContactInformation'
import { OurLegalInformation } from '@/common/footer/components/organisms/OurLegalInformation'
import { layoutAssets } from '@/utils/data/static/global/layout'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const footer = layoutAssets.footer

/**
 * @description Renders the footer component, which includes company information, legal statements, and social network links.
 * @public
 * @property {object} footer - An object containing all the necessary information to render the footer component.
 * @property {object} footer.logo - The properties for the company logo displayed in the footer.
 * @property {string} footer.logo.url - The URL for the company logo image.
 * @property {object} footer.copyright - The copyright information to be displayed in the footer.
 * @property {Array<object>} footer.contactInformation - An array of contact information items to be displayed.
 * @property {string} footer.contactInformation.text - The display text for the company.
 * @property {string} footer.contactInformation.type - The type of contact information.
 * @property {string} footer.contactInformation.icon - The icon associated with the company.
 * @property {number} footer.contactInformation.id - The unique identifier for the company.
 * @property {Array<object>} footer.links - An array of footer link items to be displayed in the footer.
 * @property {string} footer.links.text - The display text for the footer link.
 * @property {string} footer.links.href - The URL the footer link points to.
 * @property {number} footer.links.id - The unique identifier for the footer link item.
 * @property {Array<string>} footer.highlight - An array of strings representing highlighted text or keywords.
 * @property {object} footer.certifiedExperts - The properties for the certified experts section in the footer.
 * @property {string} footer.certifiedExperts.title - The title for the certified experts section.
 * @property {string} footer.certifiedExperts.description - A brief description of the certified.
 * @property {Array<object>} footer.certifiedExperts.license - An array of objects containing the text and ID.
 * @property {string} footer.certifiedExperts.license.text - The text representing the license.
 * @property {number} footer.certifiedExperts.license.id - The unique identifier for the license.
 * @property {Array<object>} footer.certifiedExperts.imagesUrl - An array of objects containing the URL and ID.
 * @property {string} footer.certifiedExperts.imagesUrl.url - The URL for the image to be displayed.
 * @property {number} footer.certifiedExperts.imagesUrl.id - The unique identifier for the image.
 * @property {string} footer.certifiedExperts.mapsUrl - The URL for the Google Maps location.
 * @property {Array<object>} footer.socialNetworks - An array of social network items to be displayed in the footer.
 * @property {string} footer.socialNetworks.href - The URL the social network item points to.
 * @property {string} footer.socialNetworks.icon - The icon associated with the social network.
 * @property {string} footer.socialNetworks.name - The name of the social network.
 * @property {number} footer.socialNetworks.id - The unique identifier for the social network item.
 * @returns {JSX.Element} A footer element with company about info and legal info sections.
 */
export const Footer = () => {
  const t = useTranslations('footer')
  const highlight = [t('highlight.quickLinks'), t('highlight.ourServices')]
  const copyright = t('copyright', { year: new Date().getFullYear().toString() })
  const certifiedExperts = {
    title: t('certifiedExperts.title'),
    description: t('certifiedExperts.description'),
    license: [
      { id: footer.certifiedExperts.license[0].id, text: t('certifiedExperts.license.label') },
      { id: footer.certifiedExperts.license[1].id, text: t('certifiedExperts.license.number') },
    ],
    imagesUrl: [...footer.certifiedExperts.imagesUrl],
    mapsUrl: footer.certifiedExperts.mapsUrl,
  }
  const socialNetworks = [...footer.socialNetworks]
  const contactInformation = [
    {
      text: t('contactInformation.address'),
      ...footer.contactInformation[0],
    },
    {
      text: t('contactInformation.phone'),
      ...footer.contactInformation[1],
    },
    {
      text: t('contactInformation.schedule'),
      ...footer.contactInformation[2],
    },
    {
      text: t('contactInformation.email'),
      ...footer.contactInformation[3],
    },
  ]
  const links = [
    { ...footer.links[0], text: t('links.quickLinks') },
    { ...footer.links[1], text: t('links.allAboutUs') },
    { ...footer.links[2], text: t('links.home') },
    { ...footer.links[3], text: t('links.allAreas') },
    { ...footer.links[4], text: t('links.ourBlogs') },
    { ...footer.links[5], text: t('links.allReviews') },
    { ...footer.links[6], text: t('links.ourProcess') },
    { ...footer.links[7], text: t('links.specialOffers') },
    { ...footer.links[8], text: t('links.ourServices') },
    { ...footer.links[9], text: t('links.hvacSystemMaintenance') },
    { ...footer.links[10], text: t('links.hvacSystemInstallation') },
    { ...footer.links[11], text: t('links.hvacSystemRepair') },
    { ...footer.links[12], text: t('links.airQualitySolutions') },
    { ...footer.links[13], text: t('links.acInstallation') },
    { ...footer.links[14], text: t('links.breatheEasyBundle') },
    { ...footer.links[15], text: t('links.coolComfortDeal') },
  ]
  return (
    <footer
      id={'footer'}
      role={'region'}
      className={clsx(
        'bg-secondary vertical w-full px-6 pt-12',
        'm3x:px-7',
        'md:px-13 md:pt-13',
        'lg:pt-15',
        '1xl:px-27.5',
        '2xl:px-28',
        '3xl:px-32'
      )}
    >
      <OurCompanyContactInformation
        logo={footer.logo}
        contactInformation={contactInformation}
        links={links}
        highlight={highlight}
        certifiedExperts={certifiedExperts}
      />
      <OurLegalInformation copyright={copyright} socialNetworks={socialNetworks} />
    </footer>
  )
}
