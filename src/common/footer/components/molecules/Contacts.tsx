import { ContactInformation } from '@/common/footer/components/atoms/Contact'
import type { ContactsProps } from '@/common/footer/types'
import { Logo } from '@/common/logo/components/Logo'
import clsx from 'clsx'

/**
 * @description Renders a contacts section component.
 * @component
 * @param {ContactsProps} props - Component properties with url and contactInformation array.
 * @param {string} props.url - The url value for the logo.
 * @param {object[]} props.contactInformation - The contact information value with text, href, type, icon and id.
 * @param {string} props.contactInformation[].text - The text value for each contact information.
 * @param {string} props.contactInformation[].href - The href value for each contact information.
 * @param {string} props.contactInformation[].type - The type value for each contact information.
 * @param {string} props.contactInformation[].icon - The icon identifier for each contact information enum.
 * @param {number} props.contactInformation[].id - Stable key for each contact row.
 * @returns A rendered company contact information component.
 */
export const Contacts = ({ url, contactInformation }: ContactsProps) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-center',
        'gap-y-10',
        'rounded-4xl',
        'bg-midnightgreen',
        'p-7',
        'm3x:gap-y-11',
        'md:gap-y-12',
        'md:p-9',
        'lg:gap-y-13',
        'lg:p-10'
      )}
    >
      <Logo url={url} footer />
      <div
        className={clsx(
          'grid',
          'grid-cols-1',
          'w-full',
          'items-start',
          'gap-y-7',
          'md:grid-cols-2',
          'md:grid-rows-2',
          'md:gap-y-10',
          'lg:grid-cols-3',
          'lg:gap-13'
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
