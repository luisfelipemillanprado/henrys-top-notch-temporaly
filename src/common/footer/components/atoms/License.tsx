import type { LicenseProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders a license item component.
 * @component
 * @param {LicenseProps} props - Component properties with license array and id optional.
 * @param {object[]} props.license - The license value with text and id for each license.
 * @param {string} props.license[].text - The text value for each license.
 * @param {number} [props.license[].id] - Optional id value for each license.
 * @returns A rendered license item component.
 */
export const License = ({ license }: LicenseProps) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-center',
        'gap-y-2',
        'mt-2.5',
        'md:horizontal',
        'md:justify-start',
        'md:gap-x-2',
        'md:gap-y-0'
      )}
    >
      {license.map((item) => (
        <span
          key={item.id}
          className={clsx(
            'font-medium',
            'text-primary',
            'text-[1.0625rem]',
            'leading-8',
            'm1x:text-lg',
            'm1x:leading-8.5',
            'md:text-[1.1875rem]',
            'md:leading-9'
          )}
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}
