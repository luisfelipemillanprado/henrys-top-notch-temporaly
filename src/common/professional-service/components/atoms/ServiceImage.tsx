import type { ServiceImageProps } from '@/common/professional-service/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Render a professional service image list item component.
 * @component
 * @param {ServiceImageProps} props - Component properties with url for the professional service image.
 * @param {string} props.url - The url value for the professional service image.
 * @returns Renders a professional service image list item component.
 */
export const ServiceImage = ({ url }: ServiceImageProps) => {
  return (
    <div
      className={clsx(
        'relative',
        'w-full',
        'overflow-hidden',
        'rounded-3xl',
        'shadow-lg',
        'h-[clamp(16rem,74vw,20.25rem)]',
        'md:h-102',
        'lg:h-104',
        'xl:h-106'
      )}
    >
      <Image
        className={clsx('size-full', 'object-cover')}
        fill
        sizes={'(max-width: 768px) 100vw, 50vw'}
        src={url}
        alt={'Image representing service'}
        placeholder={'blur'}
        blurDataURL={blurDataUrlGallery}
      />
    </div>
  )
}
