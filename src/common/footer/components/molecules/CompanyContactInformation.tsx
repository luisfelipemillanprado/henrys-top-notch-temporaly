import { ContactInformation } from '@/common/footer/components/atoms/ContactInformation'
import type { CompanyContactInformationProps } from '@/common/footer/types'
import { LogoCompany } from '@/common/logo-company/components/LogoCompany'
import clsx from 'clsx'

/**
 * @description Renders the company contact information section in the footer.
 * @public
 * @interface CompanyContactInformationProps
 * @param {object} props - Component properties.
 * @param {CompanyContactInformationProps['url']}url - The URL for the company logo image.
 * @param {CompanyContactInformationProps['contactInformation'][number]['text']} text - The display text for the contact information.
 * @param {CompanyContactInformationProps['contactInformation'][number]['href']} href - The URL the contact information item points to.
 * @param {CompanyContactInformationProps['contactInformation'][number]['type']} type - The type of contact information.
 * @param {CompanyContactInformationProps['contactInformation'][number]['icon']} icon - The icon associated with the contact information.
 * @param {CompanyContactInformationProps['contactInformation'][number]['id']} id - The unique identifier for the contact information.
 * @param {CompanyContactInformationProps['contactInformation']} contactInformation - An array of contact information items.
 * @returns {JSX.Element} The rendered company contact information section.
 */
export const CompanyContactInformation = (props: CompanyContactInformationProps) => {
  const { url, contactInformation } = props
  return (
    <div
      className={clsx('vertical bg-secondary w-full items-center gap-y-10 rounded-4xl p-7', 'm3x:gap-y-12')}
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
