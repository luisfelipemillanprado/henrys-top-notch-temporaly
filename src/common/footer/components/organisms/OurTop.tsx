import { Certifieds } from '@/common/footer/components/molecules/Certifieds'
import { Contacts } from '@/common/footer/components/molecules/Contacts'
import { Links } from '@/common/footer/components/molecules/Links'
import type { OurTopProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the top component.
 * @component
 * @param {OurTopProps} props - Component properties with logo, contactInformation, links, highlight and certifiedExperts.
 * @param {object} props.logo - The logo value with url.
 * @param {string} props.logo.url - The url value for the logo component.
 * @param {object[]} props.contactInformation - The contact information value with text, href, type, icon and id for each contact.
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
 * @returns A rendered top component.
 */
export const OurTop = ({ logo, contactInformation, links, highlight, certifiedExperts }: OurTopProps) => {
  return (
    <section
      aria-label={'top'}
      role={'region'}
      className={clsx(
        'vertical',
        'gap-y-13',
        'pb-14',
        'md:gap-y-18',
        'md:pb-18',
        'lg:gap-y-21',
        'lg:pb-21'
      )}
    >
      <Contacts url={logo.url} contactInformation={contactInformation} />
      <div
        className={clsx(
          'grid',
          'grid-cols-1',
          'grid-rows-[auto_1fr]',
          'items-start',
          'w-full',
          'gap-y-13',
          'md:grid-cols-[auto_1fr]',
          'md:grid-rows-1',
          'md:gap-y-0',
          'md:gap-x-21',
          'lg:gap-x-45'
        )}
      >
        <Links links={links} highlight={highlight} />
        <Certifieds
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
