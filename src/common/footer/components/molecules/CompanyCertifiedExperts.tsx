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
 * @param {CompanyCertifiedExpertsProps['title']} props.title - The title for the certified experts section.
 * @param {CompanyCertifiedExpertsProps['description']} props.description - The description text for the certified experts section.
 * @param {CompanyCertifiedExpertsProps['license'][number]['text']} props.license.text - The text for the license information.
 * @param {CompanyCertifiedExpertsProps['license'][number]['id']} props.license.id - The unique identifier for the license information.
 * @param {CompanyCertifiedExpertsProps['license']} props.license - The license information in the certified experts section.
 * @param {CompanyCertifiedExpertsProps['imagesUrl'][number]['url']} props.imagesUrl.url - The URL for the certificate.
 * @param {CompanyCertifiedExpertsProps['imagesUrl'][number]['id']} props.imagesUrl.id - The unique identifier for the certificate.
 * @param {CompanyCertifiedExpertsProps['imagesUrl']} props.imagesUrl - The URL for the license image or link in the certified experts.
 * @param {CompanyCertifiedExpertsProps['mapsUrl']} props.mapsUrl - The URL for the embedded Google Maps location to be displayed.
 * @returns The rendered company certified experts section.
 */
export const CompanyCertifiedExperts = ({
  title,
  description,
  license,
  imagesUrl,
  mapsUrl,
}: CompanyCertifiedExpertsProps) => {
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
          title={'Google Maps'}
          sandbox={'allow-scripts allow-same-origin'}
          className={clsx(
            'h-55 w-full rounded-3xl border-none',
            'm1x:h-60',
            'm2x:h-65',
            'm3x:h-70',
            'm4x:h-75'
          )}
          allowFullScreen
          loading={'lazy'}
          referrerPolicy={'no-referrer-when-downgrade'}
        />
      </div>
    </div>
  )
}
