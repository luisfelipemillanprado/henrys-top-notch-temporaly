import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { LeadVisual } from '@/features/home/components/atoms/LeadVisual'
import { Reasons } from '@/features/home/components/atoms/Reasons'
import clsx from 'clsx'

export const WhyChooseUs = ({
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
    <div className={clsx('vertical w-full items-center gap-y-8', 'm3x:gap-y-8.75')}>
      <LeadVisual image={image} />
      <div className={clsx('vertical w-full items-center gap-y-8', 'm1x:gap-y-8.75', 'm3x:gap-y-9.5')}>
        <SectionHeader title={title} description={description} eyebrow={eyebrow} />
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
        <Reasons reasons={reasons} />
      </div>
    </div>
  )
}
