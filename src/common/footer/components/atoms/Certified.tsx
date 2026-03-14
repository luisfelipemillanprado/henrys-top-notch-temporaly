import type { CertifiedProps } from '@/common/footer/types'
import { blurDataUrlCertified } from '@/utils/data/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a license certification image for the company certified experts section in the footer.
 * @public
 * @interface CertifiedProps
 * @param {object} props - Component properties.
 * @param {CertifiedProps['imagesUrl'][number]['url']} imagesUrl.url - The URL for the certificate.
 * @param {CertifiedProps['imagesUrl'][number]['id']} imagesUrl.id - The unique identifier for the certificate.
 * @param {CertifiedProps['imagesUrl']} imagesUrl - An array of objects containing the URL and ID for the images.
 * @returns {JSX.Element} The rendered license certification image.
 */
export const Certified = (props: CertifiedProps) => {
  const { imagesUrl } = props
  return (
    <div
      className={clsx(
        'horizontal mt-2 w-full justify-center gap-x-8',
        'm1x:gap-x-9',
        'm3x:gap-x-9.5',
        'm2x:gap-x-10',
        'm4x:gap-x-11'
      )}
    >
      {imagesUrl.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'horizontal relative size-21 items-center',
            'm1x:size-22',
            'm3x:size-22.5',
            'm2x:size-23',
            'm4x:size-24'
          )}
        >
          <Image
            className={clsx('size-full object-contain')}
            fill
            sizes={''}
            src={item.url}
            placeholder={'blur'}
            blurDataURL={blurDataUrlCertified}
            alt={'Trusted certification'}
          />
        </div>
      ))}
    </div>
  )
}
