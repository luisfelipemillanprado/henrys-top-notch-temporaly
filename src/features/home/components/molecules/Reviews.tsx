import { ReusableButton } from '@/common/call-action/components/ReusableButton'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { Visual } from '@/common/visual/components/Visual'
import { SliderReview } from '@/features/home/components/molecules/SliderReview'
import clsx from 'clsx'

/**
 * @description Renders the reviews section content with visual image, header CTA, and carousel.
 * @component
 * @param {object} props - Component properties with title, description, eyebrow, titleId, primaryCta, image, and comments.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id used by accessibility attributes.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Button label text.
 * @param {string} props.primaryCta.href - Button destination URL.
 * @param {string} props.image - Visual image URL.
 * @param {array} props.comments - Comments rendered in the carousel.
 * @param {string} props.comments[].name - Customer name.
 * @param {string} props.comments[].position - Customer position.
 * @param {string} props.comments[].comment - Customer feedback.
 * @param {string} props.comments[].url - Avatar URL.
 * @param {array} props.comments[].stars - Star rating array.
 * @param {number} props.comments[].stars[].id - Star unique ID.
 * @param {number} props.comments[].id - Comment unique ID.
 * @returns Returns a responsive reviews section with CTA and carousel content.
 */
export const Reviews = ({
  title,
  description,
  eyebrow,
  titleId,
  primaryCta,
  image,
  comments,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
  primaryCta: { text: string; href: string }
  image: string
  comments: {
    name: string
    position: string
    comment: string
    url: string
    stars: { id: number }[]
    id: number
  }[]
}) => {
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'grid-rows-[auto_1fr]',
        'items-start',
        'w-full',
        'gap-y-7.5',
        'm3x:gap-y-8.5',
        'md:gap-y-11',
        'lg:gap-y-12',
        'xl:grid-cols-2',
        'xl:grid-rows-1'
      )}
    >
      <Visual image={image} />
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
            'md:px-8',
            'md:pb-8',
            'md:pt-7',
            'lg:p-10'
          )}
        >
          <SectionHeader title={title} description={description} eyebrow={eyebrow} titleId={titleId} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} newTab={true} />
        </div>
        <SliderReview comments={comments} />
      </div>
    </div>
  )
}
