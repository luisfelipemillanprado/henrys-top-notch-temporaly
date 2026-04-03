import { blurDataUrlAvatar } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a component that displays a testimonial avatar image in a circular frame.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.url - The URL of the avatar image to be displayed.
 * @returns {JSX.Element} The rendered TestimonialAvatar component.
 */
export const TestimonialAvatar = ({ url }: { url: string }) => {
  return (
    <div
      className={clsx(
        'horizontal relative h-12.5 w-12.5 overflow-hidden rounded-full',
        'm1x:h-13 m1x:w-13',
        'm3x:h-13.5 m3x:w-13.5',
        'm4x:h-14 m4x:w-14',
        'md:h-14.5 md:w-14.5',
        '1xl:h-15 1xl:w-15',
        '2xl:h-15.5 2xl:w-15.5',
        '3xl:h-16 3xl:w-16'
      )}
    >
      <Image
        className={clsx('size-full object-cover')}
        src={url}
        fill
        sizes={
          '(max-width: 640px) 157px, (max-width: 1024px) 182px, (max-width: 1536px) 220px, (max-width: 1920px) 286px, 380px'
        }
        placeholder={'blur'}
        blurDataURL={blurDataUrlAvatar}
        alt={'Testimonial Avatar'}
      />
    </div>
  )
}
