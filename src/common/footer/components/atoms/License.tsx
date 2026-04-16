import type { LicenseProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the license information in the footer.
 * @public
 * @interface LicenseProps
 * @param {object} props - Component properties.
 * @param {LicenseProps['license'][number]['text']} props.license.text - The text for the license information to be displayed.
 * @param {LicenseProps['license'][number]['id']} props.license.id - The unique identifier for the license information item.
 * @param {LicenseProps['license']} props.license - An array of objects containing the text and ID for the licenses.
 * @returns The rendered license information section in the footer.
 */
export const License = ({ license }: LicenseProps) => {
  return (
    <div
      className={clsx(
        'vertical mt-4 w-full items-center gap-y-2',
        'm1x:mt4.5',
        'md:horizontal md:justify-start md:gap-x-2'
      )}
    >
      {license.map((item) => (
        <span
          key={item.id}
          className={clsx(
            'text-primary text-[1.0625rem] font-medium',
            'm1x:text-lg',
            'md:text-[1.1875rem]',
            '3xl:text-xl',
            '5xl:text-[1.375rem]'
          )}
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}
