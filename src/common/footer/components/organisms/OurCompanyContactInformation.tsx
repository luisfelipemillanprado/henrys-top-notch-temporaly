import { CompanyCertifiedExperts } from '@/common/footer/components/molecules/CompanyCertifiedExperts'
import { CompanyContactInformation } from '@/common/footer/components/molecules/CompanyContactInformation'
import { MainLinks } from '@/common/footer/components/molecules/MainLinks'
import type { OurCompanyContactInformationProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the company about information section in the footer.
 * @component
 * @param {OurCompanyContactInformationProps} props - Component properties with logo, contactInformation, links, highlight and certifiedExperts.
 * @param {object} props.logo - The logo value with url.
 * @param {string} props.logo.url - The url value for the logo component.
 * @param {object[]} props.contactInformation - The contact information value with text, type, icon and id for each contact.
 * @param {object[]} props.links - The links value with text, href and id for each link.
 * @param {string[]} props.highlight - The highlight value for each link.
 * @param {object} props.certifiedExperts - The certified experts value with title, description, license, imagesUrl and mapsUrl.
 * @param {string} props.certifiedExperts.title - The title value for the certified experts section.
 * @param {string} props.certifiedExperts.description - The description value for the certified experts section.
 * @param {object[]} props.certifiedExperts.license - The license value with text and id for each license.
 * @param {string} props.certifiedExperts.license[].text - The text value for each license.
 * @param {number} props.certifiedExperts.license[].id - The id value for each license.
 * @param {object[]} props.certifiedExperts.imagesUrl - The imagesUrl value with url and id for each image.
 * @param {string} props.certifiedExperts.imagesUrl[].url - The url value for each image.
 * @param {number} props.certifiedExperts.imagesUrl[].id - The id value for each image.
 * @param {string} props.certifiedExperts.mapsUrl - The mapsUrl value for the certified experts section.
 * @returns A rendered our company contact information list item component.
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
      aria-label={'company-contact-information'}
      role={'region'}
      className={clsx(
        'vertical',
        'gap-y-14',
        'pb-14',
        'md:gap-y-19',
        'md:pb-19',
        'lg:gap-y-22',
        'lg:pb-22'
      )}
    >
      <CompanyContactInformation url={logo.url} contactInformation={contactInformation} />
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-start',
          'gap-y-14',
          'md:horizontal',
          'md:items-start',
          'md:justify-between',
          'md:gap-y-0'
        )}
      >
        <MainLinks links={links} highlight={highlight} />
        <CompanyCertifiedExperts
          title={certifiedExperts.title}
          description={certifiedExperts.description}
          license={certifiedExperts.license}
          imagesUrl={certifiedExperts.imagesUrl}
          mapsUrl={certifiedExperts.mapsUrl}
        />
      </div>
    </section>
  )
}
