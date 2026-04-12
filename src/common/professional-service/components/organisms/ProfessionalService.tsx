import { CardActionButton } from '@/common/call-to-action/components/CardActionButton'
import { CardDescription } from '@/common/card-description/components/CardDescription'
import { ServiceImage } from '@/common/professional-service/components/atoms/ServiceImage'
import { ServiceBenefits } from '@/common/professional-service/components/molecules/ServiceBenefits'
import type { ProfessionalServiceProps } from '@/common/professional-service/types'
import { RatingStars } from '@/common/rating-stars/components/RatingStars'
import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import clsx from 'clsx'

/**
 * @description Render a professional service component.
 * @public
 * @interface ProfessionalServiceProps
 * @param {object} props - Component properties.
 * @param {ProfessionalServiceProps['url']} props.url - The URL of the image representing a specific service.
 * @param {ProfessionalServiceProps['title']} props.title - The title describing a specific service.
 * @param {ProfessionalServiceProps['stars']} props.stars - An array of objects representing the star rating.
 * @param {ProfessionalServiceProps['stars'][number]['id']} props.stars.id - A unique identifier for each star in the star rating.
 * @param {ProfessionalServiceProps['description']} props.description - A brief description of a specific service.
 * @param {ProfessionalServiceProps['benefits']} props.benefits - An array of benefit objects, each containing text.
 * @param {ProfessionalServiceProps['benefits'][number]['text']} props.services.benefits.text - The text description of a key benefit.
 * @param {ProfessionalServiceProps['benefits'][number]['id']} props.services.benefits.id - A unique identifier for each key benefit.
 * @param {ProfessionalServiceProps['secondaryCta']} props.secondaryCta - An object containing the text and href.
 * @param {ProfessionalServiceProps['secondaryCta']['text']} props.secondaryCta.text - The text of the secondary call-to-action button.
 * @param {ProfessionalServiceProps['secondaryCta']['href']} props.secondaryCta.href - The URL of the secondary call-to-action button.
 * @returns A React component that renders the professional service.
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
        'vertical bg-primary border-electric-blue/30 w-full items-center gap-y-5 rounded-3xl border px-2 pt-2 pb-6 shadow-md',
        'm1x:gap-y-5.5 m1x:pb-6.5',
        'm3x:pb-6.5 m3x:px-2.25 m3x:pt-2.25'
      )}
    >
      <ServiceImage url={url} />
      <div className={clsx('vertical items-center gap-y-4.25', 'm1x:gap-y-4.5')}>
        <RatingStars stars={stars} />
        <div className={clsx('vertical items-center gap-y-3.25', 'm1x:gap-y-3.5', 'm3x:gap-y-3.75')}>
          <TertiaryTitle title={title} changePosition={true} />
          <CardDescription
            description={description}
            changePosition={true}
            changeMargin={true}
            changeWidth={true}
          />
          <ServiceBenefits benefits={benefits} />
          <CardActionButton text={secondaryCta.text} href={secondaryCta.href} float={false} />
        </div>
      </div>
    </div>
  )
}
