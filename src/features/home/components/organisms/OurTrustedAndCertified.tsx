import { TrustedAndCertified } from '@/features/home/components/molecules/TrustedAndCertified'
import { homeAssets } from '@/utils/data/static/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const trustedAndCertified = homeAssets.trustedAndCertified.map((item) => ({ ...item }))

/**
 * @description Renders the "Trusted and Certified" section of the homepage.
 * @public
 * @property {array} trustedAndCertified - An array of objects representing trusted and certified badges.
 * @property {number} trustedAndCertified[].id - The unique identifier for the badge.
 * @property {string} trustedAndCertified[].imageUrl - The URL of the badge image.
 * @property {string} trustedAndCertified[].href - The URL that the badge links to.
 * @returns {JSX.Element} The rendered "OurTrustedAndCertified" component.
 */
export const OurTrustedAndCertified = () => {
  const t = useTranslations('home.trusted-and-certified')
  return (
    <section
      id={'trusted-and-certified'}
      aria-label={t('ariaLabel')}
      role={'region'}
      className={clsx(
        'horizontal bg-off-white relative w-full justify-center pt-36',
        'md:justify-start md:pt-8',
        '1xl:pt-8.5',
        '3xl:pt-12'
      )}
    >
      <TrustedAndCertified trustedAndCertified={trustedAndCertified} />
    </section>
  )
}
