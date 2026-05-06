import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { ProfessionalService } from '@/common/professional-service/components/organisms/ProfessionalService'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import clsx from 'clsx'

/**
 * @description Renders the professional-services section content with header CTA and service cards.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Primary button label text.
 * @param {string} props.primaryCta.href - Primary button destination URL.
 * @param {array} props.services - Service cards payload.
 * @param {string} props.services[].url - Service image source.
 * @param {string} props.services[].title - Service localized title.
 * @param {array} props.services[].stars - Star rating array.
 * @param {number} props.services[].stars[].id - Star unique ID.
 * @param {string} props.services[].description - Service localized description.
 * @param {array} props.services[].benefits - List of service benefits.
 * @param {string} props.services[].benefits[].text - Benefit text label.
 * @param {number} props.services[].benefits[].id - Benefit unique ID.
 * @param {object} props.services[].secondaryCta - Service-specific action configuration.
 * @param {string} props.services[].secondaryCta.text - Service button label.
 * @param {string} props.services[].secondaryCta.href - Service button URL.
 * @param {number} props.services[].id - Service unique identifier.
 * @returns A responsive services layout with a featured header and service grid.
 */
export const ProfessionalServices = ({
  title,
  description,
  eyebrow,
  titleId,
  primaryCta,
  services,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
  primaryCta: {
    text: string
    href: string
  }
  services: {
    url: string
    title: string
    stars: { id: number }[]
    description: string
    benefits: { text: string; id: number }[]
    secondaryCta: {
      text: string
      href: string
    }
    id: number
  }[]
}) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-center',
        'gap-y-8.5',
        'm1x:gap-y-9',
        'md:gap-y-11',
        'lg:gap-y-12'
      )}
    >
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-center',
          'gap-y-7',
          'm1x:gap-y-8',
          'md:items-start',
          'md:bg-primary',
          'md:border',
          'md:border-electric-blue/30',
          'md:rounded-3xl',
          'md:shadow-md',
          'md:p-8',
          'lg:p-10'
        )}
      >
        <SectionHeader title={title} description={description} eyebrow={eyebrow} titleId={titleId} />
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
      </div>
      <div
        className={clsx(
          'grid',
          'grid-cols-1',
          'grid-rows-4',
          'w-full',
          'gap-y-8.5',
          'm1x:gap-y-9',
          'md:grid-cols-1',
          'md:grid-rows-4',
          'md:gap-x-0',
          'md:gap-y-11',
          'lg:gap-y-12',
          'xl:grid-cols-2',
          'xl:grid-rows-2',
          'xl:gap-x-7'
        )}
      >
        {services.map((item) => (
          <ProfessionalService
            key={item.id}
            url={item.url}
            title={item.title}
            stars={item.stars}
            description={item.description}
            benefits={item.benefits}
            secondaryCta={item.secondaryCta}
          />
        ))}
      </div>
    </div>
  )
}
