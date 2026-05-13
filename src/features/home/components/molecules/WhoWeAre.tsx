import { ReusableButton } from '@/common/call-action/components/ReusableButton'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { Visual } from '@/common/visual/components/Visual'
import { Benefits } from '@/features/home/components/molecules/Benefits'
import clsx from 'clsx'

/**
 * @description Renders the "who we are" summary block with header, benefits, and CTA.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id used by accessibility attributes.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Primary button text label.
 * @param {string} props.primaryCta.href - Primary button destination URL.
 * @param {string} props.image - Visual image URL.
 * @param {array} props.benefits - Benefit entries rendered below the header.
 * @param {string} props.benefits[].text - Benefit description label.
 * @param {number} props.benefits[].id - Benefit unique identifier.
 * @returns Returns a responsive summary layout combining visual, benefits, and CTA content.
 */
export const WhoWeAre = ({
  title,
  description,
  eyebrow,
  titleId,
  primaryCta,
  image,
  benefits,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
  primaryCta: {
    text: string
    href: string
  }
  image: string
  benefits: { text: string; id: number }[]
}) => {
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-1',
        'grid-rows-[auto_1fr]',
        'items-start',
        'w-full',
        'gap-y-8.5',
        'm1x:gap-y-9',
        'md:gap-y-11',
        'lg:gap-y-12',
        'xl:grid-cols-2',
        'xl:grid-rows-1',
        'xl:gap-y-0',
        'xl:gap-x-8'
      )}
    >
      <Visual image={image} />
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-center',
          'gap-y-6.5',
          'px-5',
          'pb-6',
          'pt-5.5',
          'bg-primary',
          'border',
          'border-electric-blue/30',
          'rounded-3xl',
          'shadow-md',
          'm1x:gap-y-7.5',
          'md:items-start',
          'md:px-8',
          'md:pb-8',
          'md:pt-7',
          'lg:p-10',
          'xl:p-9',
          'xl:gap-y-8'
        )}
      >
        <SectionHeader
          title={title}
          description={description}
          eyebrow={eyebrow}
          changeWidth={true}
          titleId={titleId}
        />
        <Benefits benefits={benefits} />
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
      </div>
    </div>
  )
}
