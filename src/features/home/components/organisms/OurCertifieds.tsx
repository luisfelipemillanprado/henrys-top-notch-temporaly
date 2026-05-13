import { Certifieds } from '@/features/home/components/molecules/Certifieds'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const certifieds = homeAssets.certifieds.map((item) => ({ ...item }))

/**
 * @description Renders the "Certified" section, showcasing industry certifications
 * and partner badges to establish brand authority and trust.
 * @component
 * @param {object} props - Component properties derived from internal static assets and translations.
 * @param {object[]} props.certifieds - A list of certification and badge objects.
 * @param {number} props.certifieds[].id - Unique identifier for the badge.
 * @param {string} props.certifieds[].url - URL of the certification or partner logo.
 * @param {string} props.certifieds[].href - Destination URL for the badge's external link.
 * @returns Returns a themed section containing the certified badge carousel.
 */
export const OurCertifieds = () => {
  const t = useTranslations('home.our-certifieds')
  return (
    <section
      id={'certified'}
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
      <Certifieds certifieds={certifieds} />
    </section>
  )
}
