import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import clsx from 'clsx'

export const ProfessionalServices = ({
  title,
  description,
  eyebrow,
}: {
  title: string
  description: string
  eyebrow: string
}) => {
  return (
    <div className={clsx('vertical w-full items-center gap-y-8.5', 'm1x:gap-y-9')}>
      <SectionHeader title={title} description={description} eyebrow={eyebrow} />
    </div>
  )
}
