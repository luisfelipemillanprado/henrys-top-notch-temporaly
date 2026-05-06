import type { SocialNetworkItem } from '@/common/footer/types'
import { SiFacebook, SiInstagram, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Enum representing supported social network icons.
 * @component
 * @property {string} FACEBOOK   - Represents the Facebook social network.
 * @property {string} YOUTUBE    - Represents the YouTube social network.
 * @property {string} INSTAGRAM  - Represents the Instagram social network.
 * @property {string} TWITTER    - Represents the Twitter social network.
 */
enum SocialIcon {
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
}

const iconStyles = clsx('size-6.25', 'fill-bright-orange', 'm1x:size-6.5', 'm3x:size-6.75', 'md:size-7.5')

/**
 * @description Maps a given icon identifier to its corresponding React component.
 * @private
 * @param {string} icon - The icon identifier, icon enum.
 * @returns A rendered icon component or a fallback span.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case SocialIcon.FACEBOOK:
      return <SiFacebook aria-hidden={'true'} role={'img'} className={iconStyles} />
    case SocialIcon.YOUTUBE:
      return <SiYoutube aria-hidden={'true'} role={'img'} className={iconStyles} />
    case SocialIcon.INSTAGRAM:
      return <SiInstagram aria-hidden={'true'} role={'img'} className={iconStyles} />
    case SocialIcon.TWITTER:
      return <SiX aria-hidden={'true'} role={'img'} className={iconStyles} />
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a social network icon button that is a clickable link to an external URL.
 * @component
 * @param {SocialNetworkItem} props - Component properties with href, icon, name and id.
 * @param {string} props.href - The href value for the social network.
 * @param {string} props.icon - The icon identifier for the social network enum.
 * @param {string} props.name - The name value for the social network.
 * @param {number} [props.id] - Optional id value for the social network.
 * @returns A rendered social network component.
 */
export const SocialNetwork = ({ href, icon }: SocialNetworkItem) => {
  return (
    <Link
      className={clsx('horizontal', 'justify-center', 'p-1')}
      target={'_blank'}
      rel={'noopener noreferrer'}
      aria-label={`social-network-${icon}`}
      href={href}
    >
      <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
    </Link>
  )
}
