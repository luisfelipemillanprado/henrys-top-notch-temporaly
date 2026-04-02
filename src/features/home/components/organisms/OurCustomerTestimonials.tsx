import { CustomerTestimonials } from '@/features/home/components/molecules/CustomerTestimonials'
import clsx from 'clsx'

/**
 * @description Renders a component that presents our customer testimonials.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - The eyebrow text of the section.
 * @param {object} props.primaryCta - The primary call-to-action button properties.
 * @param {string} props.primaryCta.text - The text of the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL of the primary call-to-action button.
 * @param {string} props.image - The URL of the image representing the customer testimonials section.
 * @returns {JSX.Element} The rendered OurCustomerTestimonials component.
 */
export const OurCustomerTestimonials = ({
  title,
  description,
  eyebrow,
  primaryCta,
  image,
}: {
  title: string
  description: string
  eyebrow: string
  primaryCta: { text: string; href: string }
  image: string
}) => {
  return (
    <section
      id={'customer-testimonials'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-off-white w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <CustomerTestimonials
        title={title}
        description={description}
        eyebrow={eyebrow}
        primaryCta={primaryCta}
        image={image}
      />
    </section>
  )
}
