import { WhyChooseUs } from '@/features/home/components/molecules/WhyChooseUs'
import clsx from 'clsx'

/**
 * @description Renders the "Why Choose Us" section of the homepage.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - The eyebrow text of the section.
 * @param {string} props.image - The image URL of the section.
 * @param {object} props.primaryCta - The primary call-to-action button properties.
 * @param {string} props.primaryCta.text - The text of the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL of the primary call-to-action button.
 * @param {Array} props.reasons - The reasons for choosing us.
 * @param {string} props.reasons.affirmation - The affirmation text of the reason.
 * @param {string} props.reasons.resume - The resume text of the reason.
 * @param {number} props.reasons.id - The unique identifier of the reason.
 * @returns {JSX.Element} The rendered "Why Choose Us" section.
 */
export const OurWhyChooseUs = ({
  title,
  description,
  eyebrow,
  image,
  primaryCta,
  reasons,
}: {
  title: string
  description: string
  eyebrow: string
  image: string
  primaryCta: {
    text: string
    href: string
  }
  reasons: {
    affirmation: string
    resume: string
    id: number
  }[]
}) => {
  return (
    <section
      id={'why-choose-us'}
      aria-labelledby={'why-choose-us-title'}
      role={'region'}
      className={clsx(
        'vertical w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <WhyChooseUs
        title={title}
        description={description}
        eyebrow={eyebrow}
        image={image}
        primaryCta={primaryCta}
        reasons={reasons}
      />
    </section>
  )
}
