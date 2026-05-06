import type { LeadVisualProps } from '@/common/lead-visual/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a lead visual component that displays a prominent image.
 * @component
 * @param {LeadVisualProps} props - Component properties.
 * @param {string} props.image - The image value.
 * @param {boolean | undefined} props.changeBackground - The change background value.
 * @param {boolean | undefined} props.changeWidth - The change width value.
 * @returns A The rendered lead visual component.
 */
export const LeadVisual = ({ image, changeBackground = false, changeWidth = false }: LeadVisualProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'rounded-3xl',
        'border',
        'border-warmgray/30',
        'p-1',
        'shadow-md',
        changeBackground ? 'bg-electric-blue/20' : 'bg-primary'
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
          'md:h-[clamp(32.1875rem,65vw,40rem)]',
          'lg:h-[clamp(39rem,44rem-3.9vw,40rem)]',
          changeWidth && ['xl:h-187.5'],
          'xl:h-158.5'
        )}
      >
        <Image
          className={clsx('size-full', 'object-cover')}
          src={image}
          fill
          sizes={'(max-width: 768px) 95vw, (max-width: 1440px) 90vw, 85vw'}
          alt={'Lead Visual Image'}
          placeholder={'blur'}
          blurDataURL={blurDataUrlGallery}
        />
      </div>
    </div>
  )
}
