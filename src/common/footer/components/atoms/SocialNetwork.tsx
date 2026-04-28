import type { SocialNetworkItem } from '@/common/footer/types'
import { SiFacebook, SiInstagram, SiX, SiYoutube } from '@icons-pack/react-simple-icons'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Enum representing supported social network icons.
 * @public
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

const iconStyles = clsx('fill-bright-orange size-6', 'm1x:size-6.25', 'm3x:size-6.5', 'md:size-6.75')

/**
 * @description A utility function that maps a given icon identifier to its corresponding React component.
 * @private
 * @param {SocialNetworkItem['icon']} icon - A string identifier, icon enum.
 * @returns The resolved icon component or a fallback placeholder.
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
 * @public
 * @interface SocialNetworkItem
 * @param {object} props - Component properties.
 * @param {SocialNetworkItem['href']} props.href - The URL to navigate to when the icon is clicked.
 * @param {SocialNetworkItem['icon']} props.icon - The social network name, must match a value from the `SocialIcon` enum.
 * @param {SocialNetworkItem['name']} props.name - The name of the social network, used for accessibility.
 * @param {SocialNetworkItem['id']} props.id - A unique identifier for the social network item.
 * @returns A styled link wrapping the social network icon.
 */
export const SocialNetwork = ({ href, icon }: SocialNetworkItem) => {
  return (
    <Link
      className={clsx(
        'horizontal justify-center rounded-full',
        'size-[clamp(2.25rem,calc(2.25rem+(100vw-23.4375rem)*0.0307),2.375rem)]',
        'md:size-[clamp(2.5rem,calc(2.5rem+(100vw-48rem)*0.0078),2.625rem)]',
        '1xl:size-9.5',
        '5xl:size-10.5'
      )}
      target={'_blank'}
      rel={'noopener noreferrer'}
      aria-label={`social-network-${icon}`}
      href={href}
    >
      <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
    </Link>
  )
}
