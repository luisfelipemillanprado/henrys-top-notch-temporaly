import { TrustedAndCertified } from '@/features/home/components/molecules/TrustedAndCertified'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const trustedAndCertified = homeAssets.trustedAndCertified.map((item) => ({ ...item }))

/**
 * @description Renders the "Trusted and Certified" section, showcasing industry certifications
 * and partner badges to establish brand authority and trust.
 * @component
 * @param {object} props - Component properties derived from internal static assets and translations.
 * @param {object[]} props.trustedAndCertified - A list of certification and badge objects.
 * @param {number} props.trustedAndCertified[].id - Unique identifier for the badge.
 * @param {string} props.trustedAndCertified[].url - URL of the certification or partner logo.
 * @param {string} props.trustedAndCertified[].href - Destination URL for the badge's external link.
 * @returns Returns a themed section containing the trusted-and-certified badge carousel.
 */
export const OurTrustedAndCertified = () => {
  const t = useTranslations('home.trusted-and-certified')
  return (
    <section
      id={'trusted-and-certified'}
      aria-label={t('ariaLabel')}
      role={'region'}
      className={clsx(
        'horizontal',
        'relative',
        'w-full',
        'justify-center',
        'bg-off-white',
        'pt-36',
        'md:justify-start',
        'md:pt-8',
        '1xl:pt-8.5',
        '3xl:pt-12'
      )}
    >
      <TrustedAndCertified trustedAndCertified={trustedAndCertified} />
    </section>
  )
}
