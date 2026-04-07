import { CompanyCertifiedExperts } from '@/common/footer/components/molecules/CompanyCertifiedExperts'
import { CompanyContactInformation } from '@/common/footer/components/molecules/CompanyContactInformation'
import { MainLinks } from '@/common/footer/components/molecules/MainLinks'
import type { OurCompanyContactInformationProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the company about information section in the footer.
 * @public
 * @interface OurCompanyContactInformationProps
 * @param {object} props - Component properties.
 * @param {OurCompanyContactInformationProps['logo']} props.logo - The properties for the company logo displayed in the footer.
 * @param {OurCompanyContactInformationProps['logo']['url']} props.logo.url - The URL for the company logo image.
 * @param {OurCompanyContactInformationProps['contactInformation']} props.contactInformation - An array of contact information items to be displayed.
 * @param {OurCompanyContactInformationProps['contactInformation']['text']} props.contactInformation.text - The display text for the company contact information.
 * @param {OurCompanyContactInformationProps['contactInformation']['type']} props.contactInformation.type - The type of contact information (e.g., 'email', 'phone').
 * @param {OurCompanyContactInformationProps['contactInformation']['icon']} props.contactInformation.icon - The icon associated with the company contact.
 * @param {OurCompanyContactInformationProps['contactInformation']['id']} props.contactInformation.id - The unique identifier for the company contact information item.
 * @param {OurCompanyContactInformationProps['links']} props.links - An array of footer link items to be displayed in the footer.
 * @param {OurCompanyContactInformationProps['links']['text']} props.links.text - The display text for the footer link.
 * @param {OurCompanyContactInformationProps['links']['href']} props.links.href - The URL the footer link points to.
 * @param {OurCompanyContactInformationProps['links']['id']} props.links.id - The unique identifier for the footer link item.
 * @param {OurCompanyContactInformationProps['highlight']} props.highlight - An array of strings representing links that should be highlighted.
 * @param {OurCompanyContactInformationProps['certifiedExperts']} props.certifiedExperts - The properties for the certified experts section in the footer.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['title']} props.certifiedExperts.title - The title for the certified experts section.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['description']} props.certifiedExperts.description - A brief description of the certified experts.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['license']} props.certifiedExperts.license - An array of objects containing the text and ID for the licenses.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['license']['text']} props.certifiedExperts.license.text - The text representing the license information.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['license']['id']} props.certifiedExperts.license.id - The unique identifier for the license information.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['imagesUrl']} props.certifiedExperts.imagesUrl - An array of objects containing the URL and ID for the images.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['imagesUrl']['url']} props.certifiedExperts.imagesUrl.url - The URL for the image to be displayed in the certified.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['imagesUrl']['id']} props.certifiedExperts.imagesUrl.id - The unique identifier for the image in the certified.
 * @param {OurCompanyContactInformationProps['certifiedExperts']['mapsUrl']} props.certifiedExperts.mapsUrl - The URL for the embedded Google Maps location to be displayed.
 * @returns A section element containing the company's footer information.
 */
export const OurCompanyContactInformation = ({
  logo,
  contactInformation,
  links,
  highlight,
  certifiedExperts,
}: OurCompanyContactInformationProps) => {
  return (
    <section
      aria-label={'company-about-information'}
      role={'region'}
      className={clsx(
        'vertical gap-y-14 pb-14',
        'md:gap-y-21 md:pb-18',
        'lg:gap-y-22 lg:px-18',
        '1xl:horizontal 1xl:pb-22 1xl:items-start 1xl:justify-between',
        '2xl:pb-23',
        '5xl:py-38'
      )}
    >
      <CompanyContactInformation url={logo.url} contactInformation={contactInformation} />
      <MainLinks links={links} highlight={highlight} />
      <CompanyCertifiedExperts
        title={certifiedExperts.title}
        description={certifiedExperts.description}
        license={certifiedExperts.license}
        imagesUrl={certifiedExperts.imagesUrl}
        mapsUrl={certifiedExperts.mapsUrl}
      />
    </section>
  )
}
