import { SocialNetwork } from '@/common/footer/components/atoms/SocialNetwork'
import type { SocialNetworksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the social networks section in the footer.
 * @public
 * @interface SocialNetworksProps
 * @param {object} props - Component properties.
 * @param {SocialNetworksProps['socialNetworks'][number]['href']} props.href - The URL the social network item points to.
 * @param {SocialNetworksProps['socialNetworks'][number]['icon']} props.icon - The icon associated with the social network item.
 * @param {SocialNetworksProps['socialNetworks'][number]['name']} props.name - The name of the social network.
 * @param {SocialNetworksProps['socialNetworks'][number]['id']} props.id - The unique identifier for the social network item.
 * @param {SocialNetworksProps['socialNetworks']} props.socialNetworks - Array of social network items to be displayed.
 * @returns {JSX.Element} The rendered social networks section.
 */
export const SocialNetworks = ({ socialNetworks }: SocialNetworksProps) => {
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
