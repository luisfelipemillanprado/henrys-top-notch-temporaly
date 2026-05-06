import type { CertifiedProps } from '@/common/footer/types'
import { blurDataUrlCertified } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a certified image list item wrapper component.
 * @component
 * @param {CertifiedProps} props - Component properties with imagesUrl array.
 * @param {string} props.imagesUrl[].url - The url value for each image.
 * @param {number} props.imagesUrl[].id - The id value for each image.
 * @param {object[]} props.imagesUrl - The images url value with url and id for each image.
 * @returns A rendered certified image list item wrapper component.
 */
export const Certified = ({ imagesUrl }: CertifiedProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'justify-center',
        'gap-x-7',
        'mt-3',
        'm4x:gap-x-8',
        'md:mt-1',
        'md:justify-start',
        'md:gap-x-9'
      )}
    >
      {imagesUrl.map((item) => (
        <div
          key={item.id}
          className={clsx(
            'horizontal',
            'relative',
            'items-center',
            'size-[clamp(5.25rem,23vw,5.625rem)]',
            'md:size-[clamp(5.25rem,11vw,5.5rem)]',
            'lg:size-22'
          )}
        >
          <Image
            className={clsx('size-full', 'object-contain')}
            fill
            sizes={'96px'}
            src={item.url}
            placeholder={'blur'}
            blurDataURL={blurDataUrlCertified}
            alt={'Trusted certification'}
          />
        </div>
      ))}
    </div>
  )
}
