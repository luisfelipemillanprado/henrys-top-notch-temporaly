import { SocialNetwork } from '@/common/footer/components/atoms/SocialNetwork'
import type { SocialNetworksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the social networks section in the footer.
 * @public
 * @interface SocialNetworksProps
 * @param {object} props - Component properties.
 * @param {SocialNetworksProps['socialNetworks'][number]['href']} href - The URL the social network item points to.
 * @param {SocialNetworksProps['socialNetworks'][number]['icon']} icon - The icon associated with the social network item.
 * @param {SocialNetworksProps['socialNetworks'][number]['name']} name - The name of the social network.
 * @param {SocialNetworksProps['socialNetworks'][number]['id']} id - The unique identifier for the social network item.
 * @param {SocialNetworksProps['socialNetworks']} socialNetworks - Array of social network items to be displayed.
 * @returns {JSX.Element} The rendered social networks section.
 */
export const SocialNetworks = (props: SocialNetworksProps) => {
  const { socialNetworks } = props
  return (
    <div
      className={clsx(
        'horizontal w-full justify-center gap-x-3',
        'md:gap-x-3.5',
        'lg:gap-x-4',
        '1xl:justify-start 1xl:gap-x-3'
      )}
    >
      {socialNetworks.map((item) => (
        <SocialNetwork key={item.id} href={item.href} icon={item.icon} name={item.name} id={item.id} />
      ))}
    </div>
  )
}
