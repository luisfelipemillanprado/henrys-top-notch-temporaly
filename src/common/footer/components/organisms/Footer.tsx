import { OurBottom } from '@/common/footer/components/organisms/OurBottom'
import { OurTop } from '@/common/footer/components/organisms/OurTop'
import { layoutAssets } from '@/utils/data/static/global/layout'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const footer = layoutAssets.footer

/**
 * @description Renders the footer region with localized copy, static assets from layout, and child sections OurTop and OurBottom.
 * @component
 * @param {object} props - Component properties with footer data.
 * @param {string} props.sectionId - The id value for the root footer element.
 * @param {object} props.logo - The logo value for the contact card.
 * @param {string} props.logo.url - The url value for the footer logo image.
 * @param {object} props.copyright - The copyright value with key and year from layout.
 * @param {string} props.copyright.key - The key value for the copyright string.
 * @param {number} props.copyright.year - The year value in layout.
 * @param {object[]} props.contacts - The contacts value with rows merged with the key value for display text.
 * @param {string} props.contacts[].key - The key value for each contact row (address, phone, schedule, email).
 * @param {string} props.contacts[].href - The href value for each contact row.
 * @param {string} props.contacts[].type - The type value for each contact row.
 * @param {string} props.contacts[].icon - The icon identifier for each contact row.
 * @param {number} props.contacts[].id - The id value for each contact row.
 * @param {object[]} props.links - The links value with key, href and id for each footer link.
 * @param {string} props.links[].key - The key value for each link label.
 * @param {string} props.links[].href - The href value for each link.
 * @param {number} props.links[].id - The id value for each link.
 * @param {string[]} props.highlight - The highlight value with link keys from layout.
 * @param {object} props.certifieds - The certifieds value with title, description, license, imagesUrl and mapsUrl.
 * @param {object} props.certifieds.title - The title value.
 * @param {string} props.certifieds.title.key - The key value for the title.
 * @param {object} props.certifieds.description - The description value.
 * @param {string} props.certifieds.description.key - The key value for the description.
 * @param {object[]} props.certifieds.license - The license value with key and id for each row.
 * @param {string} props.certifieds.license[].key - The key value for each license row.
 * @param {number} props.certifieds.license[].id - The id value for each license row.
 * @param {object[]} props.certifieds.imagesUrl - The imagesUrl value with url and id for each badge image.
 * @param {string} props.certifieds.imagesUrl[].url - The url value for each image.
 * @param {number} props.certifieds.imagesUrl[].id - The id value for each image.
 * @param {string} props.certifieds.mapsUrl - The mapsUrl value for the Google Maps embed iframe.
 * @param {object[]} props.networks - The networks value with href, icon, name and id for each social network.
 * @param {string} props.networks[].href - The href value for each social network.
 * @param {string} props.networks[].icon - The icon identifier for each social network.
 * @param {string} props.networks[].name - The name value for each social network.
 * @param {number} props.networks[].id - The id value for each social network.
 * @returns A rendered footer component.
 */
export const Footer = () => {
  const t = useTranslations('footer')
  const highlight = [t('highlight.quickLinks'), t('highlight.ourServices')]
  const copyright = t('copyright', { year: new Date().getFullYear().toString() })
  const certifiedExperts = {
    title: t('certifieds.title'),
    description: t('certifieds.description'),
    license: [
      { id: footer.certifieds.license[0].id, text: t('certifieds.license.label') },
      { id: footer.certifieds.license[1].id, text: t('certifieds.license.number') },
    ],
    imagesUrl: [...footer.certifieds.imagesUrl],
    mapsUrl: footer.certifieds.mapsUrl,
  }
  const networks = [...footer.networks]
  const contactInformation = [
    {
      text: t('contacts.address'),
      ...footer.contacts[0],
    },
    {
      text: t('contacts.phone'),
      ...footer.contacts[1],
    },
    {
      text: t('contacts.schedule'),
      ...footer.contacts[2],
    },
    {
      text: t('contacts.email'),
      ...footer.contacts[3],
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
      id={footer.sectionId}
      role={'region'}
      className={clsx(
        'vertical',
        'w-full',
        'bg-secondary',
        'px-6',
        'pt-12',
        'm3x:px-7',
        'md:px-11',
        'md:pt-16',
        'lg:px-13',
        'lg:pt-20',
        '1xl:px-27.5',
        '2xl:px-28',
        '3xl:px-32'
      )}
    >
      <OurTop
        logo={footer.logo}
        contactInformation={contactInformation}
        links={links}
        highlight={highlight}
        certifiedExperts={certifiedExperts}
      />
      <OurBottom copyright={copyright} networks={networks} />
    </footer>
  )
}
