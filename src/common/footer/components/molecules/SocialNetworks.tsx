import { SocialNetwork } from '@/common/footer/components/atoms/SocialNetwork'
import type { SocialNetworksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders a social networks list item component.
 * @component
 * @param {SocialNetworksProps} props - Component properties with socialNetworks array.
 * @param {object[]} props.socialNetworks - The social networks value with href, icon, name and id for each social network.
 * @param {string} props.socialNetworks[].href - The href value for each social network.
 * @param {string} props.socialNetworks[].icon - The icon identifier for each social network enum.
 * @param {string} props.socialNetworks[].name - The name value for each social network.
 * @param {number} props.socialNetworks[].id - The id value for each social network.
 * @returns A rendered social networks list item component.
 */
export const SocialNetworks = ({ socialNetworks }: SocialNetworksProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'justify-center',
        'gap-x-4',
        'md:max-w-52',
        'md:justify-end',
        'md:gap-x-7',
        'lg:max-w-55',
        'lg:gap-x-10'
      )}
    >
      {socialNetworks.map((item) => (
        <SocialNetwork key={item.id} href={item.href} icon={item.icon} name={item.name} id={item.id} />
      ))}
    </div>
  )
}
