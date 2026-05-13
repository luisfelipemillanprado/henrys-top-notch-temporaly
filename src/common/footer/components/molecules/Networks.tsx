import { Network } from '@/common/footer/components/atoms/Network'
import type { NetworksProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders a social networks list item component.
 * @component
 * @param {NetworksProps} props - Component properties with socialNetworks array.
 * @param {object[]} props.networks - The social networks value with href, icon, name and id for each social network.
 * @param {string} props.networks[].href - The href value for each social network.
 * @param {string} props.networks[].icon - The icon identifier for each social network enum.
 * @param {string} props.networks[].name - The name value for each social network.
 * @param {number} props.networks[].id - The id value for each social network.
 * @returns A rendered social networks list item component.
 */
export const Networks = ({ networks }: NetworksProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'w-full',
        'justify-center',
        'gap-x-4',
        'md:justify-end',
        'md:gap-x-7',
        'lg:gap-x-10'
      )}
    >
      {networks.map((item) => (
        <Network key={item.id} href={item.href} icon={item.icon} name={item.name} id={item.id} />
      ))}
    </div>
  )
}
