import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a responsive image gallery component that displays exactly 6 images.
 * @public
 * @param {object} props - Component properties.
 * @param {Array} props.gallery - Array of exactly 6 image objects.
 * @param {string} props.gallery[].url - URL string of the image.
 * @param {number} props.gallery[].id - Unique id for rendering list items.
 * @returns Rendering the styled responsive image gallery.
 */
export const MainGallery = ({ gallery }: { gallery: { url: string; id: number }[] }) => {
  const imageContainerClasses = {
    base: 'relative w-full h-58 m1x:h-59 m2x:h-60 m3x:h-61 m4x:h-62 md:h-80 xl:h-90 1xl:h-100 3xl:h-110 rounded-3xl overflow-hidden',
    extras: [
      'col-start-1 row-start-1 md:translate-y-1',
      'md:translate-y-1 md:mask-t-from-100% z-30 col-start-1 row-start-2 translate-y-6 transform mask-t-from-60%',
      'col-start-1 row-start-3 translate-y-6 transform md:translate-y-1',
      'col-start-2 row-start-1 -translate-y-8 transform',
      'col-start-2 row-start-2 -translate-y-2 transform mask-t-from-40% md:-translate-y-8 md:mask-t-from-100%',
      'col-start-2 row-start-3 -translate-y-2 transform md:-translate-y-8',
    ],
  }
  const imageClasses = {
    base: 'size-full object-cover',
    breakPoints: [
      'brightness-50 md:brightness-40',
      'brightness-90 md:brightness-70',
      'md:brightness-70',
      'brightness-50',
      'brightness-90 md:brightness-70',
      'md:brightness-70',
    ],
  }
  return (
    <div
      className={clsx(
        'absolute -bottom-19.5 left-1/2 z-10 grid -translate-x-1/2 grid-cols-2 grid-rows-3 gap-x-3 gap-y-3',
        'w-[clamp(20.75rem,90.5vw,24.75rem)]',
        'md:right-0 md:-bottom-28 md:w-114 md:translate-x-[clamp(18%,38%-1.95vw,23%)]',
        'lg:-bottom-29 lg:w-121 lg:translate-x-[clamp(8%,42%-2.73vw,12%)]',
        'xl:-bottom-30 xl:w-135 xl:translate-x-[clamp(8%,1.875vw-15%,12%)]',
        '1xl:-bottom-32 1xl:translate-x-[8%] 1xl:w-147',
        '3xl:-bottom-34 3xl:translate-x-4/25',
        '4xl:translate-x-3/20',
        '5xl:translate-x-3/25'
      )}
    >
      {gallery.map((item, index) => (
        <div
          key={item.id}
          className={clsx(imageContainerClasses.base, imageContainerClasses.extras[index])}
        >
          <Image
            priority={index === 0 || index === 3}
            className={clsx(imageClasses.base, imageClasses.breakPoints[index])}
            fill
            sizes={'(max-width: 768px) 45vw, (max-width: 1280px) 30vw, 25vw'}
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
