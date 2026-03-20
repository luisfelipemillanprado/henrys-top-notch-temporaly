import { Copyright } from '@/common/footer/components/atoms/Copyright'
import { SocialNetworks } from '@/common/footer/components/molecules/SocialNetworks'
import type { LegalInformationProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the legal information section in the footer.
 * @public
 * @interface LegalInformationProps
 * @param {object} props - Component properties.
 * @param {LegalInformationProps['copyright']} props.copyright - The copyright information to be displayed in the footer.
 * @param {LegalInformationProps['socialNetworks']} props.socialNetworks - An array of social network items to be displayed in the footer.
 * @param {LegalInformationProps['socialNetworks'][number]['href']} props.socialNetworks.href - The URL the social network item points to.
 * @param {LegalInformationProps['socialNetworks'][number]['icon']} props.socialNetworks.icon - The icon associated with the social network item.
 * @param {LegalInformationProps['socialNetworks'][number]['name']} props.socialNetworks.name - The name of the social network.
 * @param {LegalInformationProps['socialNetworks'][number]['id']} props.socialNetworks.id - The unique identifier for the social network item.
 * @returns {JSX.Element} The rendered legal information section.
 */
export const OurLegalInformation = ({ copyright, socialNetworks }: LegalInformationProps) => {
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
