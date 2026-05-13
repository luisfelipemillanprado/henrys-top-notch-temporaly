import { CardActionButton } from '@/common/call-action/components/CardActionButton'
import { CardDescription } from '@/common/card-description/components/CardDescription'
import { ServiceImage } from '@/common/service/components/atoms/ServiceImage'
import { ServiceBenefits } from '@/common/service/components/molecules/ServiceBenefits'
import type { ServiceProps } from '@/common/service/types'
import { Stars } from '@/common/stars/components/Stars'
import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import clsx from 'clsx'

/**
 * @description Render a service component.
 * @component
 * @param {ServiceProps} props - Component properties with url, title, stars, description, benefits and secondaryCta.
 * @param {string} props.url - The url value for the service image.
 * @param {string} props.title - The title value for the service.
 * @param {object[]} props.stars - The stars value with id for each star.
 * @param {string} props.stars[].id - The id value for each star.
 * @param {string} props.description - The description value for the service.
 * @param {object[]} props.benefits - The benefits value with text and id for each benefit.
 * @param {string} props.benefits[].text - The text value for each benefit.
 * @param {string} props.benefits[].id - The id value for each benefit.
 * @param {object} props.secondaryCta - The secondary cta value with text and href.
 * @param {string} props.secondaryCta.text - The text value for the secondary cta.
 * @param {string} props.secondaryCta.href - The href value for the secondary cta.
 * @returns Render a service component.
 */
export const Service = ({ url, title, stars, description, benefits, secondaryCta }: ServiceProps) => {
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'grid-rows-[auto_1fr]',
        'items-start',
        'w-full',
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
        'md:grid-cols-2',
        'md:grid-rows-1',
        'md:gap-x-7',
        'md:p-2',
        'lg:gap-x-8',
        'lg:p-2.5',
        'xl:gap-x-6',
        'xl:px-2',
        'xl:py-2',
        'xl:pr-5'
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
          'md:py-2',
          'lg:gap-y-5'
        )}
      >
        <Stars stars={stars} />
        <div
          className={clsx(
            'vertical',
            'w-full',
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
