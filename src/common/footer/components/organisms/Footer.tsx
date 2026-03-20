import { OurCompanyContactInformation } from '@/common/footer/components/organisms/OurCompanyContactInformation'
import { OurLegalInformation } from '@/common/footer/components/organisms/OurLegalInformation'
import type { FooterProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the footer component, which includes company information, legal statements, and social network links.
 * @public
 * @interface FooterProps
 * @param {object} props - Component properties.
 * @param {FooterProps['footer']} props.footer - An object containing all the necessary information to render the footer component.
 * @param {FooterProps['footer']['logo']} props.footer.logo - The properties for the company logo displayed in the footer.
 * @param {FooterProps['footer']['logo']['url']} props.footer.logo.url - The URL for the company logo image.
 * @param {FooterProps['footer']['copyright']} props.footer.copyright - The copyright information to be displayed in the footer.
 * @param {FooterProps['footer']['contactInformation']} props.footer.contactInformation - An array of contact information items to be displayed in the footer.
 * @param {FooterProps['footer']['contactInformation'][number]['text']} props.footer.contactInformation.text - The display text for the company contact information.
 * @param {FooterProps['footer']['contactInformation'][number]['type']} props.footer.contactInformation.type - The type of contact information (e.g., 'email', 'phone').
 * @param {FooterProps['footer']['contactInformation'][number]['icon']} props.footer.contactInformation.icon - The icon associated with the company contact information item.
 * @param {FooterProps['footer']['contactInformation'][number]['id']} props.footer.contactInformation.id - The unique identifier for the company contact information item.
 * @param {FooterProps['footer']['links']} props.footer.links - An array of footer link items to be displayed in the footer.
 * @param {FooterProps['footer']['links'][number]['text']} props.footer.links.text - The display text for the footer link.
 * @param {FooterProps['footer']['links'][number]['href']} props.footer.links.href - The URL the footer link points to.
 * @param {FooterProps['footer']['links'][number]['id']} props.footer.links.id - The unique identifier for the footer link item.
 * @param {FooterProps['footer']['highlight']} props.footer.highlight - An array of strings representing highlighted text or keywords to be emphasized in the footer.
 * @param {FooterProps['footer']['certifiedExperts']} props.footer.certifiedExperts - The properties for the certified experts section in the footer.
 * @param {FooterProps['footer']['certifiedExperts']['title']} props.footer.certifiedExperts.title - The title for the certified experts section.
 * @param {FooterProps['footer']['certifiedExperts']['description']} props.footer.certifiedExperts.description - A brief description of the certified experts.
 * @param {FooterProps['footer']['certifiedExperts']['license']} props.footer.certifiedExperts.license - An array of objects containing the text and ID for the licenses.
 * @param {FooterProps['footer']['certifiedExperts']['license'][number]['text']} props.footer.certifiedExperts.license.text - The text representing the license information.
 * @param {FooterProps['footer']['certifiedExperts']['license'][number]['id']} props.footer.certifiedExperts.license.id - The unique identifier for the license information.
 * @param {FooterProps['footer']['certifiedExperts']['imagesUrl']} props.footer.certifiedExperts.imagesUrl - An array of objects containing the URL and ID for the images.
 * @param {FooterProps['footer']['certifiedExperts']['imagesUrl'][number]['url']} props.footer.certifiedExperts.imagesUrl.url - The URL for the image to be displayed in the certified.
 * @param {FooterProps['footer']['certifiedExperts']['imagesUrl'][number]['id']} props.footer.certifiedExperts.imagesUrl.id - The unique identifier for the image in the certified.
 * @param {FooterProps['footer']['certifiedExperts']['mapsUrl']} props.footer.certifiedExperts.mapsUrl - The URL for the embedded Google Maps location to be displayed.
 * @param {FooterProps['footer']['socialNetworks']} props.footer.socialNetworks - An array of social network items to be displayed in the footer.
 * @param {FooterProps['footer']['socialNetworks'][number]['href']} props.footer.socialNetworks.href - The URL the social network item points to.
 * @param {FooterProps['footer']['socialNetworks'][number]['icon']} props.footer.socialNetworks.icon - The icon associated with the social network item.
 * @param {FooterProps['footer']['socialNetworks'][number]['name']} props.footer.socialNetworks.name - The name of the social network.
 * @param {FooterProps['footer']['socialNetworks'][number]['id']} props.footer.socialNetworks.id - The unique identifier for the social network item.
 * @returns {JSX.Element} A footer element with company about info and legal info sections.
 */
export const Footer = ({ footer }: FooterProps) => {
  return (
    <footer
      className={clsx(
        'bg-secondary vertical w-full px-6 pt-12',
        'm3x:px-7',
        'md:px-13',
        '1xl:px-27.5',
        '2xl:px-28',
        '3xl:px-32'
      )}
    >
      <OurCompanyContactInformation
        logo={footer.logo}
        contactInformation={footer.contactInformation}
        links={footer.links}
        highlight={footer.highlight}
        certifiedExperts={footer.certifiedExperts}
      />
      <OurLegalInformation copyright={footer.copyright} socialNetworks={footer.socialNetworks} />
    </footer>
  )
}
