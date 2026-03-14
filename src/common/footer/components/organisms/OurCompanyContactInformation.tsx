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
 * @param {OurCompanyContactInformationProps['logo']} logo - The properties for the company logo displayed in the footer.
 * @param {OurCompanyContactInformationProps['logo']['url']} logo.url - The URL for the company logo image.
 * @param {OurCompanyContactInformationProps['contactInformation']} contactInformation - An array of contact information items.
 * @param {OurCompanyContactInformationProps['links']} links - An array of footer link items to be displayed in the footer.
 * @param {OurCompanyContactInformationProps['highlight']} highlight - An array of strings representing highlighted text.
 * @param {OurCompanyContactInformationProps['title']} title - The title for the certified experts section.
 * @param {OurCompanyContactInformationProps['description']} description - The description text for the certified experts section.
 * @param {OurCompanyContactInformationProps['license'][number]['text']} license.text - The text for the license information.
 * @param {OurCompanyContactInformationProps['license'][number]['id']} license.id - The unique identifier for the license information.
 * @param {OurCompanyContactInformationProps['license']} license - The license information in the certified experts section.
 * @param {OurCompanyContactInformationProps['imagesUrl'][number]['url']} imagesUrl.url - The URL for the certificate.
 * @param {OurCompanyContactInformationProps['imagesUrl'][number]['id']} imagesUrl.id - The unique identifier for the certificate.
 * @param {OurCompanyContactInformationProps['imagesUrl']} imagesUrl - The URL for the license image or link in the certified experts.
 * @param {OurCompanyContactInformationProps['certifiedExperts']} certifiedExperts - The properties for the certified experts.
 * @param {OurCompanyContactInformationProps['mapsUrl']} mapsUrl - The URL for the embedded Google Maps location to be displayed.
 * @returns {JSX.Element} A section element containing the company's footer information.
 */
export const OurCompanyContactInformation = (props: OurCompanyContactInformationProps) => {
  const { logo, contactInformation, links, highlight, certifiedExperts } = props
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
