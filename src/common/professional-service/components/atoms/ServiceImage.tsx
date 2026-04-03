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
 * @returns {JSX.Element} A React component that renders the professional service image.
 */
export const ServiceImage = ({ url }: ServiceImageProps) => {
  return (
    <div
      className={clsx(
        'relative h-63 w-full overflow-hidden rounded-3xl shadow-lg',
        'm1x:h-72',
        'm3x:h-78',
        'm4x:h-80'
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
