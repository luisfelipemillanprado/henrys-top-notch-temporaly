import { CustomerTestimonials } from '@/features/home/components/molecules/CustomerTestimonials'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { image, primaryCtaHref, testimonials: testimonialAssets } = homeAssets.customerTestimonials
const stars = testimonialAssets[0].stars.map((star) => ({ ...star }))

/**
 * @description Renders the "Customer Testimonials" section of the homepage.
 * @public
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 * @property {string} eyebrow - The eyebrow text of the section.
 * @property {string} image - The URL of the image representing the section.
 * @property {object} primaryCta - Configuration for the primary call-to-action button.
 * @property {string} primaryCta.text - The text displayed on the primary call-to-action button.
 * @property {string} primaryCta.href - The URL that the primary call-to-action button links to.
 * @property {array} testimonials - An array of objects representing customer testimonials.
 * @property {number} testimonials[].id - The unique identifier for the testimonial.
 * @property {string} testimonials[].name - The name of the customer.
 * @property {string} testimonials[].position - The position or title of the customer.
 * @property {string} testimonials[].comment - The comment or feedback from the customer.
 * @property {string} testimonials[].url - The URL of the customer's image.
 * @property {array} testimonials[].stars - An array of objects representing the star ratings for the testimonial.
 * @returns {JSX.Element} The rendered "OurCustomerTestimonials" component.
 */
export const OurCustomerTestimonials = () => {
  const t = useTranslations('home.our-customer-testimonials')
  const title = t('title')
  const description = t('description')
  const eyebrow = t('eyebrow')
  const primaryCta = {
    text: t('primaryCta.text'),
    href: primaryCtaHref,
  }
  const testimonials = [
    {
      name: t('testimonials.willBurnett.name'),
      position: t('testimonials.willBurnett.position'),
      comment: t('testimonials.willBurnett.comment'),
      url: testimonialAssets[0].url,
      stars,
      id: testimonialAssets[0].id,
    },
    {
      name: t('testimonials.ginCowan.name'),
      position: t('testimonials.ginCowan.position'),
      comment: t('testimonials.ginCowan.comment'),
      url: testimonialAssets[1].url,
      stars,
      id: testimonialAssets[1].id,
    },
    {
      name: t('testimonials.judyBarbour.name'),
      position: t('testimonials.judyBarbour.position'),
      comment: t('testimonials.judyBarbour.comment'),
      url: testimonialAssets[2].url,
      stars,
      id: testimonialAssets[2].id,
    },
    {
      name: t('testimonials.rosieContreras.name'),
      position: t('testimonials.rosieContreras.position'),
      comment: t('testimonials.rosieContreras.comment'),
      url: testimonialAssets[3].url,
      stars,
      id: testimonialAssets[3].id,
    },
    {
      name: t('testimonials.donnaWhite.name'),
      position: t('testimonials.donnaWhite.position'),
      comment: t('testimonials.donnaWhite.comment'),
      url: testimonialAssets[4].url,
      stars,
      id: testimonialAssets[4].id,
    },
    {
      name: t('testimonials.marvinReyna.name'),
      position: t('testimonials.marvinReyna.position'),
      comment: t('testimonials.marvinReyna.comment'),
      url: testimonialAssets[5].url,
      stars,
      id: testimonialAssets[5].id,
    },
    {
      name: t('testimonials.abbyMarcotte.name'),
      position: t('testimonials.abbyMarcotte.position'),
      comment: t('testimonials.abbyMarcotte.comment'),
      url: testimonialAssets[6].url,
      stars,
      id: testimonialAssets[6].id,
    },
    {
      name: t('testimonials.vikkiCruz.name'),
      position: t('testimonials.vikkiCruz.position'),
      comment: t('testimonials.vikkiCruz.comment'),
      url: testimonialAssets[7].url,
      stars,
      id: testimonialAssets[7].id,
    },
    {
      name: t('testimonials.sarahAlvarez.name'),
      position: t('testimonials.sarahAlvarez.position'),
      comment: t('testimonials.sarahAlvarez.comment'),
      url: testimonialAssets[8].url,
      stars,
      id: testimonialAssets[8].id,
    },
  ]
  return (
    <section
      id={'testimonials'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-off-white w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-20 md:pb-18',
        'lg:py-22',
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
        testimonials={testimonials}
      />
    </section>
  )
}
