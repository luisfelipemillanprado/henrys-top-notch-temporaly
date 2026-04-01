import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import clsx from 'clsx'

export const CustomerTestimonials = ({
  title,
  description,
  eyebrow,
  primaryCta,
}: {
  title: string
  description: string
  eyebrow: string
  primaryCta: { text: string; href: string }
}) => {
  return (
    <div className={clsx('vertical w-full items-center gap-y-8.5', 'm1x:gap-y-9')}>
      <div className={clsx('vertical w-full items-center gap-y-8', 'm1x:gap-y-8.75', 'm3x:gap-y-9.5')}>
        <SectionHeader title={title} description={description} eyebrow={eyebrow} />
        <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
      </div>
    </div>
  )
}
