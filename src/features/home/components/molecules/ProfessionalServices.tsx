import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { ProfessionalService } from '@/common/professional-service/components/organisms/ProfessionalService'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import clsx from 'clsx'

/**
 * @description Renders a component that presents professional services.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - The eyebrow text of the section.
 * @param {object} props.primaryCta - The primary call-to-action button properties.
 * @param {string} props.primaryCta.text - The text of the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL of the primary call-to-action button.
 * @param {Array} props.services - An array of service objects, each containing a url, title, stars, description, secondaryCta, and id.
 * @param {string} props.services.url - The URL of the image representing a specific service in the professional services section.
 * @param {string} props.services.title - The title describing a specific service in the professional services section.
 * @param {{ id: number }[]} props.services.stars - An array of objects representing the star rating for a specific service.
 * @param {number} props.services.stars.id - A unique identifier for each star in the star rating of a specific service.
 * @param {string} props.services.description - A brief description of a specific service in the professional services section.
 * @param {Array} props.services.benefits - An array of benefit objects, each containing text and id, representing the key benefits.
 * @param {string} props.services.benefits.text - The text description of a key benefit item for a specific service.
 * @param {number} props.services.benefits.id - A unique identifier for each key benefit item for a specific service.
 * @param {object} props.services.secondaryCta - An object containing the text and href for the secondary call-to-action button.
 * @param {string} props.services.secondaryCta.text - The text of the secondary call-to-action button related to a specific service.
 * @param {string} props.services.secondaryCta.href - The URL of the secondary call-to-action button related to a specific service.
 * @param {number} props.services.id - A unique identifier for the service in the professional services section.
 * @returns The ProfessionalServices component JSX tree.
 */
export const ProfessionalServices = ({
  title,
  description,
  eyebrow,
  primaryCta,
  services,
}: {
  title: string
  description: string
  eyebrow: string
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
    <div className={clsx('vertical w-full items-center gap-y-8.5', 'm1x:gap-y-9')}>
      <div className={clsx('vertical w-full items-center gap-y-8', 'm1x:gap-y-8.75', 'm3x:gap-y-9.5')}>
        <SectionHeader title={title} description={description} eyebrow={eyebrow} />
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
      </div>
      <div
        className={clsx(
          'grid w-full grid-cols-1 grid-rows-4 gap-y-7.5',
          'm3x:gap-y-7.75',
          'md:grid-cols-2 md:grid-rows-2 md:gap-7',
          'lg:gap-7.5',
          '1xl:grid-cols-2 1xl:grid-rows-2',
          '2xl:gap-8',
          '3xl:gap-8.75',
          '5xl:gap-9.5'
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
