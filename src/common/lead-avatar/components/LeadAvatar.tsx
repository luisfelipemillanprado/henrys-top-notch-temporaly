import type { LeadAvatarProps } from '@/common/lead-avatar/types'
import { blurDataUrlAvatar } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a component that displays a lead avatar image in a circular frame.
 * @public
 * @interface LeadAvatarProps
 * @param {object} props - Component properties.
 * @param {LeadAvatarProps['url']} props.url - The URL of the lead avatar image to be displayed.
 * @param {LeadAvatarProps['background']} [props.background=false] - Optional flag to determine if a background color.
 * @returns {JSX.Element} The rendered LeadAvatar component.
 */
export const LeadAvatar = ({ url, background = false }: LeadAvatarProps) => {
  return (
    <div
      className={clsx(
        'border-strong-blue/40 relative h-12 w-12 overflow-hidden rounded-full border shadow-sm',
        background && 'bg-off-white',
        'm1x:h-12.5 m1x:w-12.5',
        'm3x:h-13 m3x:w-13',
        'm4x:h-13.5 m4x:w-13.5',
        'md:h-14 md:w-14',
        '1xl:h-14.5 1xl:w-14.5',
        '2xl:h-15 2xl:w-15',
        '3xl:h-15.5 3xl:w-15.5'
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
        alt={'Lead Avatar'}
      />
    </div>
  )
}
