import type { CertifiedProps } from '@/common/footer/types'
import { blurDataUrlCertified } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a license certification image for the company certified experts section in the footer.
 * @public
 * @interface CertifiedProps
 * @param {object} props - Component properties.
 * @param {CertifiedProps['imagesUrl'][number]['url']} props.imagesUrl.url - The URL for the certificate.
 * @param {CertifiedProps['imagesUrl'][number]['id']} props.imagesUrl.id - The unique identifier for the certificate.
 * @param {CertifiedProps['imagesUrl']} props.imagesUrl - An array of objects containing the URL and ID for the images.
 * @returns The rendered license certification image.
 */
export const Certified = ({ imagesUrl }: CertifiedProps) => {
  return (
    <div className={clsx('horizontal mt-4 w-full justify-center gap-x-7', 'm1x:mt-4.5', 'm4x:gap-x-8')}>
      {imagesUrl.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'horizontal relative size-21 items-center',
            'm1x:size-21.5',
            'm2x:size-22',
            'm4x:size-22.5'
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
