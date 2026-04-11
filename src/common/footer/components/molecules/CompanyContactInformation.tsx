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
        'vertical bg-midnightgreen w-full items-center gap-y-10 rounded-4xl p-6.5',
        'm3x:gap-y-12'
      )}
    >
      <LogoCompany url={url} footer />
      <div className={clsx('vertical w-full items-start gap-y-7.5')}>
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
