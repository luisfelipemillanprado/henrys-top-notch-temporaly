import { OurCompanyContactInformation } from '@/common/footer/components/organisms/OurCompanyContactInformation'
import { OurLegalInformation } from '@/common/footer/components/organisms/OurLegalInformation'
import type { FooterProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the footer component, which includes company information, legal statements, and social network links.
 * @public
 * @interface FooterProps
 * @param {object} props - Component properties.
 * @param {FooterProps['footer']} footer - An object containing all the necessary information to render the footer component.
 * @param {FooterProps['footer']['logo']} footer.logo - The properties for the company logo displayed in the footer.
 * @param {FooterProps['footer']['logo']['url']} footer.logo.url - The URL for the company logo image.
 * @param {FooterProps['footer']['copyright']} footer.copyright - The copyright information to be displayed in the footer.
 * @param {FooterProps['footer']['contactInformation']} footer.contactInformation - An array of contact information items.
 * @param {FooterProps['footer']['links']} footer.links - An array of footer link items to be displayed in the footer.
 * @param {FooterProps['footer']['highlight']} footer.highlight - An array of strings representing highlighted text.
 * @param {FooterProps['footer']['certifiedExperts']} footer.certifiedExperts - The properties for the certified experts section.
 * @param {FooterProps['footer']['socialNetworks']} footer.socialNetworks - An array of social network items to be displayed.
 * @returns {JSX.Element} A footer element with company about info and legal info sections.
 */
export const Footer = (props: FooterProps) => {
  const { footer } = props
  return (
    <footer
      className={clsx(
        'bg-midnightgreen vertical w-full px-6 pt-12',
        'm3x:px-8',
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
