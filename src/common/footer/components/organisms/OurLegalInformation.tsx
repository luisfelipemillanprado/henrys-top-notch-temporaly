import { Copyright } from '@/common/footer/components/atoms/Copyright'
import { SocialNetworks } from '@/common/footer/components/molecules/SocialNetworks'
import type { LegalInformationProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the legal information section in the footer.
 * @public
 * @interface LegalInformationProps
 * @param {object} props - Component properties.
 * @param {LegalInformationProps['copyright']} copyright - The copyright information to be displayed.
 * @param {SocialNetworksProps['socialNetworks'][number]['href']} socialNetworks.href - The URL the social network item points to.
 * @param {SocialNetworksProps['socialNetworks'][number]['icon']} socialNetworks.icon - The icon associated with the social network item.
 * @param {SocialNetworksProps['socialNetworks'][number]['name']} socialNetworks.name - The name of the social network.
 * @param {SocialNetworksProps['socialNetworks'][number]['id']} socialNetworks.id - The unique identifier for the social network item.
 * @param {LegalInformationProps['socialNetworks']} socialNetworks - Array of social network items to be displayed.
 * @returns {JSX.Element} The rendered legal information section.
 */
export const OurLegalInformation = (props: LegalInformationProps) => {
  const { copyright, socialNetworks } = props
  return (
    <div
      className={clsx(
        'border-linen/29 vertical w-full gap-y-6.5 border-t py-7.5',
        'md:horizontal md:justify-between'
      )}
    >
      <Copyright copyright={copyright} />
      <SocialNetworks socialNetworks={socialNetworks} />
    </div>
  )
}
