import type { AvatarProps } from '@/common/avatar/types'
import { blurDataUrlAvatar } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a component that displays an avatar image in a circular frame.
 * @component
 * @param {AvatarProps} props - Component properties.
 * @param {string} props.url - The url value.
 * @param {string} [props.background] - Optional flag to determine if a background color.
 * @returns A rendered Avatar component.
 */
export const Avatar = ({ url, background = false }: AvatarProps) => {
  return (
    <div
      className={clsx(
        'relative',
        'overflow-hidden',
        'rounded-full',
        'border',
        'border-strong-blue/30',
        'shadow-md',
        background && 'bg-off-white',
        'size-[clamp(3rem,12vw,3.375rem)]',
        'md:size-13',
        'lg:size-13.5'
      )}
    >
      <Image
        className={clsx('size-full', 'object-cover')}
        src={url}
        fill
        sizes={'(max-width: 768px) 60px, 80px'}
        placeholder={'blur'}
        blurDataURL={blurDataUrlAvatar}
        alt={'avatar image'}
      />
    </div>
  )
}
