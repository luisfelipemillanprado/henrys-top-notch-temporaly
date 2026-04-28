import type { LogoCompanyProps } from '@/common/logo-company/types'
import { blurDataUrlLogo } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders the company logo composed of an icon image and a textual brand name.
 * @public
 * @interface LogoCompanyProps
 * @param {object} props - Component properties.
 * @param {LogoCompanyProps['url']} props.url - The URL of the company logo image.
 * @param {LogoCompanyProps['footer']} [props.footer] - Optional flag to indicate if the logo is in the footer.
 * @returns A responsive logo composed of an optimized image and brand text.
 */
export const LogoCompany = ({ url, footer }: LogoCompanyProps) => {
  return (
    <div
      className={clsx(
        'horizontal relative',
        footer
          ? ['h-10 w-50', 'm1x:h-10.25', 'm2x:h-10.5', 'm3x:h-10.75', 'md:h-11 md:w-52', 'lg:h-12 lg:w-57']
          : [
              'h-10 w-50',
              'm1x:h-10.25',
              'm2x:h-10.5',
              'm3x:h-10.75',
              'md:h-11 md:w-52',
              '1xl:h-12 1xl:w-57',
              '2xl:h-12.25 2xl:w-61',
              '3xl:h-13 3xl:w-62',
              '5xl:h-13.5 5xl:w-63',
            ]
      )}
    >
      <Image
        className={'size-full object-cover'}
        src={url}
        fill
        alt={'Logo'}
        sizes={'(max-width: 768px) 200px, 250px'}
        placeholder={'blur'}
        blurDataURL={blurDataUrlLogo}
      />
    </div>
  )
}
