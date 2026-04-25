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
        'horizontal relative w-50',
        'h-[clamp(2.5rem,calc(2.5rem+(100vw-23.4375rem)*0.0461),2.6875rem)]',
        footer
          ? [
              'md:h-[clamp(2.75rem,calc(2.75rem+(100vw-48rem)*0.016),3rem)]!',
              'md:w-[clamp(13rem,calc(13rem+(100vw-48rem)*0.0781),14.25rem)]!',
            ]
          : [
              'md:h-[clamp(2.5rem,calc(2.75rem-(100vw-48rem)*0.016),2.75rem)]!',
              'md:w-[clamp(12.5rem,calc(13rem-(100vw-48rem)*0.0312),13rem)]!',
              '1xl:h-12 3xl:h-13 5xl:h-13.5 2xl:h-12.25',
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
