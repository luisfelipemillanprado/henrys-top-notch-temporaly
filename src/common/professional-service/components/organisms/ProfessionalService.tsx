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
 * @component
 * @param {ProfessionalServiceProps} props - Component properties with url, title, stars, description, benefits and secondaryCta.
 * @param {string} props.url - The url value for the professional service image.
 * @param {string} props.title - The title value for the professional service.
 * @param {object[]} props.stars - The stars value with id for each star.
 * @param {string} props.stars[].id - The id value for each star.
 * @param {string} props.description - The description value for the professional service.
 * @param {object[]} props.benefits - The benefits value with text and id for each benefit.
 * @param {string} props.benefits[].text - The text value for each benefit.
 * @param {string} props.benefits[].id - The id value for each benefit.
 * @param {object} props.secondaryCta - The secondary cta value with text and href.
 * @param {string} props.secondaryCta.text - The text value for the secondary cta.
 * @param {string} props.secondaryCta.href - The href value for the secondary cta.
 * @returns Render a professional service component.
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
        'vertical',
        'w-full',
        'items-center',
        'rounded-3xl',
        'border',
        'border-electric-blue/30',
        'shadow-md',
        'bg-primary',
        'gap-y-5',
        'px-2',
        'pt-2',
        'pb-6',
        'm1x:gap-y-5.5',
        'm1x:pb-6.5',
        'm3x:px-2.25',
        'm3x:pt-2.25',
        'm3x:pb-6.5',
        'md:horizontal',
        'md:gap-x-6',
        'md:p-3',
        'lg:py-3.5',
        'lg:pl-3.5',
        'lg:pr-0',
        'xl:gap-x-6',
        'xl:py-2.5',
        'xl:pl-2.5'
      )}
    >
      <ServiceImage url={url} />
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-center',
          'gap-y-4',
          'm1x:gap-y-4.5',
          'md:items-start',
          'lg:gap-y-5.5',
          'lg:pr-6',
          'xl:pr-4'
        )}
      >
        <RatingStars stars={stars} />
        <div
          className={clsx(
            'vertical',
            'items-center',
            'gap-y-3.5',
            'm3x:gap-y-4',
            'md:items-start',
            'lg:gap-y-4.5'
          )}
        >
          <TertiaryTitle title={title} changePosition={true} truncate={true} changeWidth={true} />
          <CardDescription
            description={description}
            changePosition={true}
            changeMargin={true}
            changeWidth={'narrow'}
          />
          <ServiceBenefits benefits={benefits} />
          <CardActionButton text={secondaryCta.text} href={secondaryCta.href} float={false} />
        </div>
      </div>
    </div>
  )
}
