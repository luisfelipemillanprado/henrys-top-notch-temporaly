import { Copyright } from '@/common/footer/components/atoms/Copyright'
import { SocialNetworks } from '@/common/footer/components/molecules/SocialNetworks'
import type { LegalInformationProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders a legal information component.
 * @component
 * @param {LegalInformationProps} props - Component properties with copyright and socialNetworks array.
 * @param {string} props.copyright - The copyright value.
 * @param {object[]} props.socialNetworks - The social networks value with href, icon, name and id for each social network.
 * @param {string} props.socialNetworks[].href - The href value for each social network.
 * @param {string} props.socialNetworks[].icon - The icon identifier for each social network enum.
 * @param {string} props.socialNetworks[].name - The name value for each social network.
 * @param {number} props.socialNetworks[].id - The id value for each social network.
 * @returns A rendered legal information component.
 */
export const OurLegalInformation = ({ copyright, socialNetworks }: LegalInformationProps) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'gap-y-7',
        'border-t',
        'border-pale-yellow/20',
        'py-8',
        'md:horizontal',
        'md:justify-between'
      )}
    >
      <Copyright copyright={copyright} />
      <SocialNetworks socialNetworks={socialNetworks} />
    </div>
  )
}
