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
 * @returns The rendered LeadAvatar component.
 */
export const LeadAvatar = ({ url, background = false }: LeadAvatarProps) => {
  return (
    <div
      className={clsx(
        'border-strong-blue/40 relative overflow-hidden rounded-full border shadow-sm',
        background && 'bg-off-white',
        'size-[clamp(3rem,calc(3rem+(100vw-23.4375rem)*0.0923),3.375rem)]',
        '1xl:size-14.5',
        '2xl:size-15',
        '3xl:size-15.5'
      )}
    >
      <Image
        className={clsx('size-full object-cover')}
        src={url}
        fill
        sizes={'(max-width: 768px) 60px, 80px'}
        placeholder={'blur'}
        blurDataURL={blurDataUrlAvatar}
        alt={'Lead Avatar'}
      />
    </div>
  )
}
