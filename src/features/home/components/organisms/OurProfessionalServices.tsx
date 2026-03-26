import { ProfessionalServices } from '@/features/home/components/molecules/ProfessionalServices'
import clsx from 'clsx'

/**
 * @description Renders a component that presents our professional services.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - The eyebrow text of the section.
 * @param {object} props.primaryCta - The primary call-to-action button properties.
 * @param {string} props.primaryCta.text - The text of the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL of the primary call-to-action button.
 * @param {Array} props.services - An array of service objects, each containing a url, title, description, secondaryCta, and id.
 * @param {string} props.services.url - The URL of the image representing a specific service in the professional services section.
 * @param {string} props.services.title - The title describing a specific service in the professional services section.
 * @param {string} props.services.description - A brief description of a specific service in the professional services section.
 * @param {object} props.services.secondaryCta - An object containing the text and href for the secondary call-to-action button.
 * @param {string} props.services.secondaryCta.text - The text of the secondary call-to-action button related to a specific service.
 * @param {string} props.services.secondaryCta.href - The URL of the secondary call-to-action button related to a specific service.
 * @param {number} props.services.id - A unique identifier for the service in the professional services section.
 * @returns {JSX.Element} The OurProfessionalServices component JSX tree.
 */
export const OurProfessionalServices = ({
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
    description: string
    secondaryCta: {
      text: string
      href: string
    }
    id: number
  }[]
}) => {
  return (
    <section
      id={'professional-services'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-off-white w-full px-5.5 pt-12 pb-15 shadow-2xs',
        'm3x:pb-16.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <ProfessionalServices
        title={title}
        description={description}
        eyebrow={eyebrow}
        primaryCta={primaryCta}
        services={services}
      />
    </section>
  )
}
