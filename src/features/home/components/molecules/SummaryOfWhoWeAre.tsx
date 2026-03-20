import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { KeyBenefit } from '@/features/home/components/atoms/KeyBenefit'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a component that presents a summary of who we are.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - A brief text displayed above the title, often used to categorize the section.
 * @param {object} props.primaryCta - An object containing the text and href for the primary call-to-action button.
 * @param {string} props.primaryCta.text - The text to display on the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL to navigate to when the primary call-to-action button is clicked.
 * @param {string} props.image - The URL of the image representing who we are.
 * @param {object[]} props.benefits - An array of key benefits associated with who we are.
 * @param {string} props.benefits[].text - Text describing an individual key benefit.
 * @param {number} props.benefits[].id - Unique identifier for the key benefit item.
 * @returns {JSX.Element} The rendered summary of who we are component.
 */
export const SummaryOfWhoWeAre = (props: {
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
    <div className={clsx('vertical w-full items-start gap-y-7.25', 'm1x:gap-y-8', 'm3x:gap-y-8.75')}>
      <div
        className={clsx(
          'relative h-68 w-full overflow-hidden rounded-3xl shadow-md',
          'm1x:h-73',
          'm2x:h-76.5',
          'm3x:h-79'
        )}
      >
        <Image
          className={clsx('size-full object-cover')}
          src={image}
          fill
          sizes={''}
          alt={'Who We Are'}
          placeholder={'blur'}
          blurDataURL={blurDataUrlGallery}
        />
      </div>
      <div
        className={clsx(
          'vertical bg-primary w-full items-center gap-y-7.25 rounded-3xl px-5 py-6 shadow-md',
          'm1x:gap-y-8',
          'm3x:gap-y-8.75'
        )}
      >
        <SectionHeader title={title} description={description} eyebrow={eyebrow} changeWidth={true} />
        <div
          className={clsx(
            'mb-3 grid grid-cols-2 grid-rows-2 items-center gap-x-2.25 gap-y-5',
            'm1x:gap-x-3 m1x:gap-y-5.5',
            'm2x:gap-x-4 m2x:gap-y-5.75',
            'm3x:gap-x-7 m3x:gap-y-6',
            'm4x:gap-x-7.5'
          )}
        >
          {benefits.map((item, index) => (
            <KeyBenefit key={item.id} text={item.text} index={index} />
          ))}
        </div>
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
      </div>
    </div>
  )
}
