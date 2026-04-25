import type { ServiceImageProps } from '@/common/professional-service/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Render a professional service image component.
 * @public
 * @interface ServiceImageProps
 * @param {object} props - Component properties.
 * @param {ServiceImageProps['url']} props.url - The URL of the image representing a specific service.
 * @returns A React component that renders the professional service image.
 */
export const ServiceImage = ({ url }: ServiceImageProps) => {
  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden rounded-3xl shadow-lg',
        'h-[clamp(16rem,calc(16rem+(100vw-23.4375rem)*1.046),20.25rem)]',
        'md:h-[clamp(18.5rem,calc(18.5rem+(100vw-48rem)*0.406),25rem)]',
        'lg:w-12/25'
      )}
    >
      <Image
        className={clsx('size-full object-cover')}
        fill
        sizes={''}
        src={url}
        alt={'Image representing service'}
        placeholder={'blur'}
        blurDataURL={blurDataUrlGallery}
      />
    </div>
  )
}
