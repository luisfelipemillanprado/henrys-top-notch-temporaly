import { Certified } from '@/common/footer/components/atoms/Certified'
import { License } from '@/common/footer/components/atoms/License'
import type { CompanyCertifiedExpertsProps } from '@/common/footer/types'
import { FooterDescription } from '@/common/section-description/components/FooterDescription'
import { QuinaryTitle } from '@/common/titles/components/QuinaryTitle'
import clsx from 'clsx'

/**
 * @description Renders the company certified experts section in the footer.
 * @component
 * @param {CompanyCertifiedExpertsProps} props - Component properties.
 * @param {string} props.title - The title value.
 * @param {string} props.description - The description value.
 * @param {string} props.license[].text - The text value for each license.
 * @param {number} props.license[].id - The id value for each license.
 * @param {object[]} props.license - The license value with text and id.
 * @param {string} props.imagesUrl[].url - The url value for each image.
 * @param {number} props.imagesUrl[].id - The id value for each image.
 * @param {object[]} props.imagesUrl - The images url value with url and id.
 * @param {string} props.mapsUrl - The maps embed url value for the Google Maps location.
 * @returns A rendered company certified experts section.
 */
export const CompanyCertifiedExperts = ({
  title,
  description,
  license,
  imagesUrl,
  mapsUrl,
}: CompanyCertifiedExpertsProps) => {
  return (
    <div className={clsx('vertical', 'w-full', 'gap-y-14', 'md:max-w-95', 'md:gap-y-10', 'lg:max-w-127')}>
      <div className={clsx('vertical', 'w-full', 'gap-y-5', 'md:gap-y-6', 'lg:max-w-110', 'lg:gap-y-6.5')}>
        <QuinaryTitle title={title} />
        <FooterDescription description={description} />
        <Certified imagesUrl={imagesUrl} />
        <License license={license} />
      </div>
      <div className={clsx('horizontal', 'w-full')}>
        <iframe
          src={mapsUrl}
          title={'google-maps-location'}
          sandbox={'allow-scripts allow-same-origin'}
          className={clsx(
            'relative',
            'w-full',
            'overflow-hidden',
            'rounded-3xl',
            'shadow-lg',
            'h-[clamp(16rem,78vw,20.25rem)]',
            'md:h-[clamp(22rem,35vw,25.25rem)]',
            'lg:h-101'
          )}
          allowFullScreen
          loading={'lazy'}
          referrerPolicy={'no-referrer-when-downgrade'}
        />
      </div>
    </div>
  )
}
