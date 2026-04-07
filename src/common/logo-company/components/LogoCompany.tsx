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
          ? ['h-10 w-50', 'm1x:h-10.25', 'm2x:h-10.5', 'm3x:h-10.75']
          : [
              'h-10 w-50',
              'm1x:h-10.25',
              'm2x:h-10.5',
              'm3x:h-10.75',
              'md:h-11',
              'lg:h-11.5',
              '1xl:h-12',
              '2xl:h-12.25',
              '3xl:h-13',
              '5xl:h-13.5',
            ]
      )}
    >
      <Image
        className={clsx('size-full object-cover')}
        src={url}
        fill
        alt={`Logo's company`}
        sizes={''}
        placeholder={'blur'}
        blurDataURL={blurDataUrlLogo}
      />
    </div>
  )
}
