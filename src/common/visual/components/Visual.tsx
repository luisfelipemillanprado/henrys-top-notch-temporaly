import type { VisualProps } from '@/common/visual/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a visual image component.
 * @component
 * @param {VisualProps} props - Component properties.
 * @param {string} props.image - The image value for the visual image.
 * @returns Returns a visual image component.
 */
export const Visual = ({ image }: VisualProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'rounded-3xl',
        'border',
        'bg-electric-blue/30',
        'border-warmgray/30',
        'p-1',
        'shadow-md',
        'xl:h-full'
      )}
    >
      <div
        className={clsx(
          'relative',
          'w-full',
          'overflow-hidden',
          'rounded-3xl',
          'shadow-md',
          'h-[clamp(17.25rem,76vw,20.625rem)]',
          'md:h-128',
          'lg:h-160',
          'xl:h-full'
        )}
      >
        <Image
          className={clsx('size-full', 'object-cover')}
          src={image}
          fill
          sizes={'(max-width: 768px) 95vw, (max-width: 1440px) 90vw, 85vw'}
          alt={'visual image'}
          placeholder={'blur'}
          blurDataURL={blurDataUrlGallery}
        />
      </div>
    </div>
  )
}
