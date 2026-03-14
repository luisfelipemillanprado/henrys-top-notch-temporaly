import { Certified } from '@/common/footer/components/atoms/Certified'
import { License } from '@/common/footer/components/atoms/License'
import type { CompanyCertifiedExpertsProps } from '@/common/footer/types'
import { FooterDescription } from '@/common/section-description/components/FooterDescription'
import { QuinaryTitle } from '@/common/titles/components/QuinaryTitle'
import clsx from 'clsx'

/**
 * @description Renders the company certified experts section in the footer.
 * @public
 * @interface CompanyCertifiedExpertsProps
 * @param {object} props - Component properties.
 * @param {CompanyCertifiedExpertsProps['title']} title - The title for the certified experts section.
 * @param {CompanyCertifiedExpertsProps['description']} description - The description text for the certified experts section.
 * @param {CompanyCertifiedExpertsProps['license'][number]['text']} license.text - The text for the license information to be displayed.
 * @param {CompanyCertifiedExpertsProps['license'][number]['id']} license.id - The unique identifier for the license information item.
 * @param {CompanyCertifiedExpertsProps['license']} license - The license information in the certified experts section.
 * @param {CompanyCertifiedExpertsProps['imagesUrl'][number]['url']} imagesUrl.url - The URL for the certificate.
 * @param {CompanyCertifiedExpertsProps['imagesUrl'][number]['id']} imagesUrl.id - The unique identifier for the certificate.
 * @param {CompanyCertifiedExpertsProps['imagesUrl']} imagesUrl - The URL for the license image or link in the certified experts.
 * @param {CompanyCertifiedExpertsProps['mapsUrl']} mapsUrl - The URL for the embedded Google Maps location to be displayed.
 * @returns {JSX.Element} The rendered company certified experts section.
 */
export const CompanyCertifiedExperts = (props: CompanyCertifiedExpertsProps) => {
  const { title, description, license, imagesUrl, mapsUrl } = props
  return (
    <div className={clsx('vertical w-full gap-y-14')}>
      <div className={clsx('vertical w-full items-center gap-y-4.5')}>
        <QuinaryTitle title={title} />
        <FooterDescription description={description} />
        <Certified imagesUrl={imagesUrl} />
        <License license={license} />
      </div>
      <div className={clsx('horizontal w-full')}>
        <iframe
          src={mapsUrl}
          className={clsx('h-50 w-full rounded-2xl border-0')}
          allowFullScreen
          loading={'lazy'}
          referrerPolicy={'no-referrer-when-downgrade'}
        />
      </div>
    </div>
  )
}
