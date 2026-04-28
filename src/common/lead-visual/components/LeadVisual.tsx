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
 * @param {LeadVisualProps['changeBackground']} props.changeBackground - A boolean indicating whether to change the background.
 * @returns {JSX.Element} The rendered lead visual component.
 */
export const LeadVisual = ({ image, changeBackground = false }: LeadVisualProps) => {
  return (
    <div
      className={clsx(
        'horizontal border-warmgray/30 w-full rounded-3xl border p-1 shadow-md',
        changeBackground ? 'bg-electric-blue/20' : 'bg-primary'
      )}
    >
      <div
        className={clsx(
          'relative w-full overflow-hidden rounded-3xl shadow-md',
          'h-[clamp(17.25rem,76vw,20.625rem)]',
          'md:h-[clamp(32.1875rem,65vw,40rem)]',
          'lg:h-[clamp(39rem,44rem-3.9vw,40rem)]',
          'xl:h-156'
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
    </div>
  )
}
