import { Copyright } from '@/common/footer/components/atoms/Copyright'
import { Networks } from '@/common/footer/components/molecules/Networks'
import type { OurBottomProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders a bottom component.
 * @component
 * @param {OurBottomProps} props - Component properties with copyright and networks array.
 * @param {string} props.copyright - The copyright value.
 * @param {object[]} props.networks - The social networks value with href, icon, name and id for each social network.
 * @param {string} props.networks[].href - The href value for each social network.
 * @param {string} props.networks[].icon - The icon identifier for each social network enum.
 * @param {string} props.networks[].name - The name value for each social network.
 * @param {number} props.networks[].id - The id value for each social network.
 * @returns A rendered bottom component.
 */
export const OurBottom = ({ copyright, networks }: OurBottomProps) => {
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'grid-rows-[1fr_auto]',
        'items-start',
        'w-full',
        'gap-y-7',
        'border-t',
        'border-pale-yellow/20',
        'py-7',
        'md:grid-cols-2',
        'md:grid-rows-1'
      )}
    >
      <Copyright copyright={copyright} />
      <Networks networks={networks} />
    </div>
  )
}
