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
    <div
      className={clsx(
        'horizontal mt-3 w-full justify-center gap-x-7',
        'm4x:gap-x-8',
        'md:mt-1 md:justify-start md:gap-x-9'
      )}
    >
      {imagesUrl.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'horizontal relative items-center',
            'size-[clamp(5.25rem,23vw,5.625rem)]',
            'md:size-[clamp(5.25rem,11vw,5.5rem)]',
            'lg:size-22'
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
