import type { LeadAvatarProps } from '@/common/lead-avatar/types'
import { blurDataUrlAvatar } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a component that displays a lead avatar image in a circular frame.
 * @component
 * @param {LeadAvatarProps} props - Component properties.
 * @param {string} props.url - The url value.
 * @param {string} [props.background] - Optional flag to determine if a background color.
 * @returns A rendered LeadAvatar component.
 */
export const LeadAvatar = ({ url, background = false }: LeadAvatarProps) => {
  return (
    <div
      className={clsx(
        'relative',
        'overflow-hidden',
        'rounded-full',
        'border',
        'border-strong-blue/40',
        'shadow-sm',
        background && 'bg-off-white',
        'size-[clamp(3rem,12vw,3.375rem)]',
        '1xl:size-14.5',
        '2xl:size-15',
        '3xl:size-15.5'
      )}
    >
      <Image
        className={clsx('size-full', 'object-cover')}
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
