import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import clsx from 'clsx'

export const SimpleBookinProcess = (props: { title: string; description: string; eyebrow: string }) => {
  const { title, description, eyebrow } = props
  return (
    <div className={clsx('vertical w-full items-start')}>
      <div>
        <SectionHeader title={title} description={description} eyebrow={eyebrow} />
      </div>
      <div></div>
    </div>
  )
}
