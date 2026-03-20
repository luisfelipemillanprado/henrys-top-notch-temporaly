import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a responsive image gallery component that displays exactly 6 images.
 * @public
 * @param {object} props - Component properties.
 * @param {Array} gallery - Array of exactly 6 image objects.
 * @param {string} gallery[].url - URL string of the image.
 * @param {number} gallery[].id - Unique id for rendering list items.
 * @returns {JSX.Element} Rendering the styled responsive image gallery.
 */
export const MainGallery = (props: { gallery: { url: string; id: number }[] }) => {
  const { gallery } = props
  const imageContainerClasses = {
    base: 'relative h-55 w-40',
    breakPoints:
      'm1x:w-42 m1x:h-56 m2x:w-44.5 m2x:h-59 m3x:w-46.5 m3x:h-61 m4x:w-48 m4x:h-63 md:w-55.25 md:h-75.75 1xl:w-71.5 1xl:h-98 3xl:w-80 3xl:h-105 4xl:w-84 4xl:h-109 5xl:w-95 5xl:h-122',
    extras: [
      'col-start-1 row-start-1 md:translate-y-1',
      'md:translate-y-1 md:mask-t-from-100% z-30 col-start-1 row-start-2 translate-y-6 transform mask-t-from-60%',
      'col-start-1 row-start-3 translate-y-6 transform md:translate-y-1',
      'col-start-2 row-start-1 -translate-y-8 transform',
      'col-start-2 row-start-2 -translate-y-2 transform mask-t-from-50% md:-translate-y-8 md:mask-t-from-100%',
      'col-start-2 row-start-3 -translate-y-2 transform md:-translate-y-8',
    ],
  }
  const imageClasses = {
    base: 'size-full rounded-3xl object-cover',
    breakPoints: [
      'opacity-40 md:opacity-15 lg:opacity-40',
      'opacity-100',
      null,
      'opacity-50 md:opacity-15 lg:opacity-40',
      'opacity-70 md:opacity-100',
      null,
    ],
  }
  return (
    <div
      className={clsx(
        'absolute -bottom-19.5 left-1/2 z-10 grid w-83 -translate-x-1/2 grid-cols-2 grid-rows-3 gap-x-3 gap-y-3',
        'm1x:w-87',
        'm2x:w-92',
        'm3x:w-96',
        'm4x:w-99',
        'md:right-0 md:w-113.5 md:translate-x-13/50',
        'lg:translate-x-1/5',
        '1xl:w-146 1xl:-bottom-26 1xl:translate-x-3/25',
        '2xl:translate-x-1/6',
        '3xl:w-163 3xl:-bottom-34 3xl:translate-x-4/25',
        '4xl:w-171 4xl:translate-x-3/20',
        '5xl:w-193 5xl:translate-x-3/25'
      )}
    >
      {gallery.map((item, index) => (
        <div
          key={item.id}
          className={clsx(
            imageContainerClasses.base,
            imageContainerClasses.breakPoints,
            imageContainerClasses.extras[index]
          )}
        >
          <Image
            priority={index === 0 || index === 3}
            className={clsx(imageClasses.base, imageClasses.breakPoints[index])}
            fill
            sizes={
              '(max-width: 640px) 157px, (max-width: 1024px) 182px, (max-width: 1536px) 220px, (max-width: 1920px) 286px, 380px'
            }
            src={item.url}
            alt={`Gallery image ${index + 1}`}
            placeholder={'blur'}
            blurDataURL={blurDataUrlGallery}
          />
        </div>
      ))}
    </div>
  )
}
