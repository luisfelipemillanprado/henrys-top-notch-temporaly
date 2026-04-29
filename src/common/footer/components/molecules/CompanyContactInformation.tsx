import { ContactInformation } from '@/common/footer/components/atoms/ContactInformation'
import type { CompanyContactInformationProps } from '@/common/footer/types'
import { LogoCompany } from '@/common/logo-company/components/LogoCompany'
import clsx from 'clsx'

/**
 * @description Renders the company contact information section in the footer.
 * @public
 * @interface CompanyContactInformationProps
 * @param {object} props - Component properties.
 * @param {CompanyContactInformationProps['url']} props.url - The URL for the company logo image.
 * @param {CompanyContactInformationProps['contactInformation'][number]['text']} props.text - The display text for the contact.
 * @param {CompanyContactInformationProps['contactInformation'][number]['href']} props.href - The URL the contact information item.
 * @param {CompanyContactInformationProps['contactInformation'][number]['type']} props.type - The type of contact.
 * @param {CompanyContactInformationProps['contactInformation'][number]['icon']} props.icon - The icon associated with the contact.
 * @param {CompanyContactInformationProps['contactInformation'][number]['id']} props.id - The unique identifier for the contact.
 * @param {CompanyContactInformationProps['contactInformation']} props.contactInformation - An array of contact information items.
 * @returns The rendered company contact information section.
 */
export const CompanyContactInformation = ({ url, contactInformation }: CompanyContactInformationProps) => {
  return (
    <div
      className={clsx(
        'vertical bg-midnightgreen w-full items-center gap-y-10 rounded-4xl p-7',
        'm3x:gap-y-11',
        'md:gap-y-12 md:p-9',
        'lg:gap-y-13 lg:p-10'
      )}
    >
      <LogoCompany url={url} footer />
      <div
        className={clsx(
          'grid w-full grid-cols-1 items-start gap-y-7',
          'md:grid-cols-2 md:grid-rows-2 md:gap-y-10',
          'lg:grid-cols-3 lg:gap-13'
        )}
      >
        {contactInformation.map((item) => (
          <ContactInformation
            key={item.id}
            text={item.text}
            href={item.href}
            type={item.type}
            icon={item.icon}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}
