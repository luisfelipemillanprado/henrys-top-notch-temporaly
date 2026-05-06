import { CustomerTestimonials } from '@/features/home/components/molecules/CustomerTestimonials'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const {
  sectionId,
  headingId,
  image,
  primaryCtaHref,
  testimonials: testimonialAssets,
} = homeAssets.customerTestimonials
const stars = testimonialAssets[0].stars.map((star) => ({ ...star }))

/**
 * @description Renders the "Customer Testimonials" section, managing the display of localized
 * social proof, star ratings, and lead visuals.
 * @component
 * @param {object} props - Component properties derived from internal translations and static assets.
 * @param {string} props.title - The localized main title for the testimonials section.
 * @param {string} props.description - A localized summary or invitation to read reviews.
 * @param {string} props.eyebrow - A short localized accent label displayed above the title.
 * @param {string} props.image - The URL of the lead visual image for the section.
 * @param {object} props.primaryCta - Configuration for the primary call-to-action button.
 * @param {string} props.primaryCta.text - Localized text for the CTA button.
 * @param {string} props.primaryCta.href - Target URL for the CTA.
 * @param {object[]} props.testimonials - A list of localized customer feedback objects.
 * @param {number} props.testimonials[].id - Unique identifier for the testimonial.
 * @param {string} props.testimonials[].name - Localized name of the customer.
 * @param {string} props.testimonials[].position - Localized job title or location of the customer.
 * @param {string} props.testimonials[].comment - The localized feedback or quote.
 * @param {string} props.testimonials[].url - Image URL of the customer's avatar.
 * @param {object[]} props.testimonials[].stars - Configuration for the visual star rating.
 * @returns Returns a testimonials section with localized reviews, ratings, image, and CTA.
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
      id={sectionId}
      aria-labelledby={headingId}
      role={'region'}
      className={clsx(
        'vertical',
        'w-full',
        'bg-off-white',
        'shadow-2xs',
        'px-5.5',
        'pt-12',
        'pb-11',
        'm3x:px-5.75',
        'm3x:pb-12.5',
        'm4x:px-6',
        'md:px-13',
        'md:pt-20',
        'md:pb-18',
        'lg:py-22',
        '1xl:px-29.5',
        '1xl:pt-34',
        '1xl:pb-34',
        '2xl:px-32',
        '2xl:pt-36',
        '2xl:pb-36'
      )}
    >
      <CustomerTestimonials
        title={title}
        description={description}
        eyebrow={eyebrow}
        titleId={headingId}
        primaryCta={primaryCta}
        image={image}
        testimonials={testimonials}
      />
    </section>
  )
}
