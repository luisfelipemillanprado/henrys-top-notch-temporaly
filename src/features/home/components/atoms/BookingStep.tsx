import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import { CardDescription } from '@/features/home/components/atoms/CardDescription'
import { blurDataUrlSteps } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a component that presents a single booking step.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.url - The URL of the image representing a specific step in the booking process section.
 * @param {string} props.title - The title describing a specific step in the booking process section.
 * @param {string} props.description - A brief description of a specific step in the booking process section.
 * @returns {JSX.Element} A semantic element rendering the single booking step content.
 */
export const BookingStep = ({
  url,
  title,
  description,
}: {
  url: string
  title: string
  description: string
}) => {
  return (
    <div className={clsx('vertical w-full gap-y-3.5 rounded-3xl')}>
      <div className={clsx('vertical w-full items-center gap-y-4.5', '1xl:gap-y-5', '3xl:gap-y-5.25')}>
        <div
          className={clsx(
            'bg-off-white border-strong-blue/40 relative size-11 overflow-hidden rounded-full border shadow-sm',
            'm1x:size-12',
            'm3x:size-12.5'
          )}
        >
          <Image
            className={clsx('size-full object-cover')}
            fill
            sizes={''}
            src={url}
            alt={title}
            placeholder={'blur'}
            blurDataURL={blurDataUrlSteps}
          />
        </div>
        <TertiaryTitle title={title} changePosition={true} />
      </div>
      <div className={clsx('horizontal w-full justify-start')}>
        <CardDescription description={description} changePosition={true} changeWidth={true} />
      </div>
    </div>
  )
}
