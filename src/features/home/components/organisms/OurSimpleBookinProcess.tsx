import { SimpleBookinProcess } from '@/features/home/components/molecules/SimpleBookinProcess'
import clsx from 'clsx'

/**
 * @description Renders a component that presents the professional services offering.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - Title displayed in the section header.
 * @param {string} props.description - Supporting description for the section.
 * @param {string} props.overLine - A brief text displayed above the title, often used to categorize the section.
 * @param {object} props.services[].learnMore - Object containing text and href for the "Learn More" link.
 * @param {string} props.services[].learnMore.text - Text for the "Learn More" link.
 * @param {string} props.services[].learnMore.href - URL for the "Learn More" link.
 * @param {number} props.services[].id - Unique identifier for the service item.
 * @returns {JSX.Element} A semantic element rendering the professional services content.
 */
export const OurSimpleBookinProcess = (props: { title: string; description: string; eyebrow: string }) => {
  const { title, description, eyebrow } = props
  return (
    <section
      id={'booking-process'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical w-full items-center gap-y-7 px-6 pb-15',
        'm3x:pb-16.5',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <SimpleBookinProcess title={title} description={description} eyebrow={eyebrow} />
    </section>
  )
}
