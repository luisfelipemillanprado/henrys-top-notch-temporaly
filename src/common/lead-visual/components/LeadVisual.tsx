import type { LeadVisualProps } from '@/common/lead-visual/types'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a lead visual component that displays a prominent image.
 * @public
 * @interface LeadVisualProps
 * @param {object} props - Component properties.
 * @param {LeadVisualProps['image']} props.image - The URL of the image to display.
 * @returns {JSX.Element} The rendered lead visual component.
 */
export const LeadVisual = ({ image }: LeadVisualProps) => {
  return (
    <div
      className={clsx(
        'relative h-69 w-full overflow-hidden rounded-3xl shadow-md',
        'm1x:h-73',
        'm2x:h-76',
        'm3x:h-80',
        'm4x:h-82.5'
      )}
    >
      <Image
        className={clsx('size-full object-cover')}
        src={image}
        fill
        sizes={''}
        alt={'Lead Visual Image'}
        placeholder={'blur'}
        blurDataURL={blurDataUrlGallery}
      />
    </div>
  )
}
