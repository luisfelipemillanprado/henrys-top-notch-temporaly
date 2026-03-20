import { SummaryOfWhoWeAre } from '@/features/home/components/molecules/SummaryOfWhoWeAre'
import clsx from 'clsx'

/**
 * @description Renders a component that presents a summary of who the company.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - Title displayed in the section header.
 * @param {string} props.description - Supporting description for the section.
 * @param {string} props.eyebrow - A brief text displayed above the title, often used to categorize the section.
 * @param {object} props.primaryCta - An object containing the text and href for the primary call-to-action button.
 * @param {string} props.primaryCta.text - The text to display on the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL to navigate to when the primary call-to-action button is clicked.
 * @param {string} props.image - The URL of the image representing who we are.
 * @param {object[]} props.benefits - An array of key benefits associated with who we are.
 * @param {string} props.benefits[].text - Text describing an individual key benefit.
 * @param {number} props.benefits[].id - Unique identifier for the key benefit item.
 * @returns {JSX.Element} A semantic element rendering the summary of who the company is.
 */
export const OurSummaryOfWhoWeAre = (props: {
  title: string
  description: string
  eyebrow: string
  primaryCta: {
    text: string
    href: string
  }
  image: string
  benefits: { text: string; id: number }[]
}) => {
  const { title, description, eyebrow, primaryCta, image, benefits } = props
  return (
    <section
      id={'who-we-are'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-off-White w-full gap-y-7 px-5.5 pt-11 pb-15 shadow-2xs',
        'm3x:pb-16.5',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <SummaryOfWhoWeAre
        title={title}
        description={description}
        eyebrow={eyebrow}
        primaryCta={primaryCta}
        image={image}
        benefits={benefits}
      />
    </section>
  )
}
