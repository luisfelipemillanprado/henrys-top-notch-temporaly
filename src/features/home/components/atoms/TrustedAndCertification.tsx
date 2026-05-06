import { blurDataUrlCertified } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders an optimized certification badge or partner logo with a blur placeholder.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.url - Source URL for the certification image.
 * @returns Returns a responsive badge container wrapping an optimized certification image.
 */
export const TrustedAndCertification = ({ url }: { url: string }) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'relative',
        'size-[clamp(4.125rem,13.33vw+1rem,4.75rem)]',
        'items-center',
        'md:size-[clamp(4.5rem,7.5vw,4.75rem)]',
        'lg:size-19.5'
      )}
    >
      <Image
        className={clsx('size-full', 'object-contain')}
        fill
        sizes={'80px'}
        src={url}
        placeholder={'blur'}
        blurDataURL={blurDataUrlCertified}
        alt={'Trusted certification'}
      />
    </div>
  )
}
