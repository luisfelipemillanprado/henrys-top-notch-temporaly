import { Reviews } from '@/features/home/components/molecules/Reviews'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { sectionId, headingId, image, primaryCtaHref, comments: commentAssets } = homeAssets.reviews
const stars = commentAssets[0].stars.map((star) => ({ ...star }))

/**
 * @description Renders the reviews section, managing the display of localized
 * social proof, star ratings, and lead visuals.
 * @component
 * @param {object} props - Component properties derived from internal translations and static assets.
 * @param {string} props.title - The localized main title for the reviews section.
 * @param {string} props.description - A localized summary or invitation to read reviews.
 * @param {string} props.eyebrow - A short localized accent label displayed above the title.
 * @param {string} props.image - The URL of the lead visual image for the section.
 * @param {object} props.primaryCta - Configuration for the primary call-to-action button.
 * @param {string} props.primaryCta.text - Localized text for the CTA button.
 * @param {string} props.primaryCta.href - Target URL for the CTA.
 * @param {object[]} props.comments - A list of localized customer feedback objects.
 * @param {number} props.comments[].id - Unique identifier for the comment.
 * @param {string} props.comments[].name - Localized name of the customer.
 * @param {string} props.comments[].position - Localized job title or location of the customer.
 * @param {string} props.comments[].comment - The localized feedback or quote.
 * @param {string} props.comments[].url - Image URL of the customer's avatar.
 * @param {object[]} props.comments[].stars - Configuration for the visual star rating.
 * @returns Returns a reviews section with localized reviews, ratings, image, and CTA.
 */
export const OurReviews = () => {
  const t = useTranslations('home.our-reviews')
  const title = t('title')
  const description = t('description')
  const eyebrow = t('eyebrow')
  const primaryCta = {
    text: t('primaryCta.text'),
    href: primaryCtaHref,
  }
  const comments = [
    {
      name: t('testimonials.willBurnett.name'),
      position: t('testimonials.willBurnett.position'),
      comment: t('testimonials.willBurnett.comment'),
      url: commentAssets[0].url,
      stars,
      id: commentAssets[0].id,
    },
    {
      name: t('testimonials.ginCowan.name'),
      position: t('testimonials.ginCowan.position'),
      comment: t('testimonials.ginCowan.comment'),
      url: commentAssets[1].url,
      stars,
      id: commentAssets[1].id,
    },
    {
      name: t('testimonials.judyBarbour.name'),
      position: t('testimonials.judyBarbour.position'),
      comment: t('testimonials.judyBarbour.comment'),
      url: commentAssets[2].url,
      stars,
      id: commentAssets[2].id,
    },
    {
      name: t('testimonials.rosieContreras.name'),
      position: t('testimonials.rosieContreras.position'),
      comment: t('testimonials.rosieContreras.comment'),
      url: commentAssets[3].url,
      stars,
      id: commentAssets[3].id,
    },
    {
      name: t('testimonials.donnaWhite.name'),
      position: t('testimonials.donnaWhite.position'),
      comment: t('testimonials.donnaWhite.comment'),
      url: commentAssets[4].url,
      stars,
      id: commentAssets[4].id,
    },
    {
      name: t('testimonials.marvinReyna.name'),
      position: t('testimonials.marvinReyna.position'),
      comment: t('testimonials.marvinReyna.comment'),
      url: commentAssets[5].url,
      stars,
      id: commentAssets[5].id,
    },
    {
      name: t('testimonials.abbyMarcotte.name'),
      position: t('testimonials.abbyMarcotte.position'),
      comment: t('testimonials.abbyMarcotte.comment'),
      url: commentAssets[6].url,
      stars,
      id: commentAssets[6].id,
    },
    {
      name: t('testimonials.vikkiCruz.name'),
      position: t('testimonials.vikkiCruz.position'),
      comment: t('testimonials.vikkiCruz.comment'),
      url: commentAssets[7].url,
      stars,
      id: commentAssets[7].id,
    },
    {
      name: t('testimonials.sarahAlvarez.name'),
      position: t('testimonials.sarahAlvarez.position'),
      comment: t('testimonials.sarahAlvarez.comment'),
      url: commentAssets[8].url,
      stars,
      id: commentAssets[8].id,
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
        'md:px-11',
        'md:pt-20',
        'md:pb-18',
        'lg:px-13',
        'lg:py-22',
        '1xl:px-29.5',
        '1xl:pt-34',
        '1xl:pb-34',
        '2xl:px-32',
        '2xl:pt-36',
        '2xl:pb-36'
      )}
    >
      <Reviews
        title={title}
        description={description}
        eyebrow={eyebrow}
        titleId={headingId}
        primaryCta={primaryCta}
        image={image}
        comments={comments}
      />
    </section>
  )
}
