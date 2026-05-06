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
        'mt-3',
        'md:horizontal',
        'md:justify-start',
        'md:gap-x-2',
        'md:gap-y-0',
        'lg:mt-2'
      )}
    >
      {license.map((item) => (
        <span
          key={item.id}
          className={clsx(
            'font-medium',
            'text-primary',
            'text-[1.0625rem]',
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
