import { CardActionButton } from '@/common/call-to-action/components/CardActionButton'
import { CardDescription } from '@/common/professional-service/components/atoms/CardDescription'
import { ServiceBenefits } from '@/common/professional-service/components/molecules/ServiceBenefits'
import { ServiceStars } from '@/common/professional-service/components/molecules/ServiceStars'
import type { ProfessionalServiceProps } from '@/common/professional-service/types'
import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Render a professional service component.
 * @public
 * @interface ProfessionalServiceProps
 * @param {object} props - Component properties.
 * @param {ProfessionalServiceProps['url']} props.url - The URL of the image representing a specific service.
 * @param {ProfessionalServiceProps['title']} props.title - The title describing a specific service.
 * @param {ProfessionalServiceProps['stars']} props.stars - An array of objects representing the star rating.
 * @param {ProfessionalServiceProps['description']} props.description - A brief description of a specific service.
 * @param {ProfessionalServiceProps['benefits']} props.benefits - An array of benefit objects, each containing text.
 * @param {ProfessionalServiceProps['benefits'][number]['text']} props.services.benefits.text - The text description of a key benefit.
 * @param {ProfessionalServiceProps['benefits'][number]['id']} props.services.benefits.id - A unique identifier for each key benefit.
 * @param {ProfessionalServiceProps['secondaryCta']} props.secondaryCta - An object containing the text and href.
 * @param {ProfessionalServiceProps['secondaryCta']['text']} props.secondaryCta.text - The text of the secondary call-to-action button.
 * @param {ProfessionalServiceProps['secondaryCta']['href']} props.secondaryCta.href - The URL of the secondary call-to-action button.
 * @returns {JSX.Element} A React component that renders the professional service.
 */
export const ProfessionalService = ({
  url,
  title,
  stars,
  description,
  benefits,
  secondaryCta,
}: ProfessionalServiceProps) => {
  return (
    <div
      className={clsx(
        'vertical bg-primary border-warmgray/30 w-full items-center gap-y-5 rounded-3xl border px-3 pt-3 pb-6 shadow-md',
        'm1x:gap-y-5.25 m1x:pb-6.25',
        'm3x:pb-6.5 m3x:px-3.25 m3x:pt-3.25'
      )}
    >
      <div
        className={clsx(
          'relative h-63 w-full overflow-hidden rounded-3xl shadow-lg',
          'm1x:h-72',
          'm3x:h-78',
          'm4x:h-80'
        )}
      >
        <Image
          className={clsx('size-full object-cover')}
          fill
          sizes={''}
          src={url}
          alt={title}
          placeholder={'blur'}
          blurDataURL={blurDataUrlGallery}
        />
      </div>
      <div className={clsx('vertical items-center gap-y-4.25', 'm1x:gap-y-4.5')}>
        <ServiceStars stars={stars} />
        <div className={clsx('vertical items-center gap-y-3', 'm1x:gap-y-3.25', 'm3x:gap-y-3.5')}>
          <TertiaryTitle title={title} changePosition={true} />
          <CardDescription description={description} />
          <ServiceBenefits benefits={benefits} />
          <CardActionButton text={secondaryCta.text} href={secondaryCta.href} float={false} />
        </div>
      </div>
    </div>
  )
}
