import type { LogocompanyProps } from '@/common/logo-company/types'
import { blurDataUrlLogo } from '@/utils/data/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders the company logo composed of an icon image and a textual brand name.
 * @public
 * @interface LogocompanyProps
 * @param {object} props - Component properties.
 * @param {LogocompanyProps['url']} url - The URL of the company logo image.
 * @returns {JSX.Element} A responsive logo composed of an optimized image and brand text.
 */
export const LogoCompany = (props: LogocompanyProps) => {
  const { url, footer } = props
  return (
    <div
      className={clsx(
        'horizontal relative',
        footer
          ? ['h-10 w-48', 'm2x:h-10.25 m2x:w-49', 'm3x:h-10.75 m3x:w-50']
          : [
              'h-10 w-50',
              'm2x:h-10.25',
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
