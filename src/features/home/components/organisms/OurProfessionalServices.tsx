import { ProfessionalServices } from '@/features/home/components/molecules/ProfessionalServices'
import clsx from 'clsx'

export const OurProfessionalServices = ({
  title,
  description,
  eyebrow,
}: {
  title: string
  description: string
  eyebrow: string
}) => {
  return (
    <section
      id={'professional-services'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical bg-off-white w-full px-5.5 pt-12 pb-15 shadow-2xs',
        'm3x:pb-16.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <ProfessionalServices title={title} description={description} eyebrow={eyebrow} />
    </section>
  )
}
