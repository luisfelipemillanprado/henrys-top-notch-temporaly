import { TrustedAndCertified } from '@/features/home/components/molecules/TrustedAndCertified'
import { homeAssets } from '@/utils/data/static/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export const OurTrustedAndCertified = () => {
  const t = useTranslations('home.trusted-and-certified')
  const trustedAndCertified = homeAssets.trustedAndCertified.map((item) => ({ ...item }))

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
