import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import { CardDescription } from '@/features/home/components/atoms/CardDescription'
import { blurDataUrlSteps } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Renders a component that presents the booking steps.
 * @public
 * @param {object} props - Component properties.
 * @param {Array} props.steps - An array of step objects, each containing a url, title, description, and id.
 * @param {Array} props.steps.url - The URL of the image representing a specific step in the booking process section.
 * @param {Array} props.steps.title - The title describing a specific step in the booking process section.
 * @param {Array} props.steps.description - A brief description of a specific step in the booking process section.
 * @param {Array} props.steps.id - A unique identifier for the step in the booking process section.
 * @returns {JSX.Element} A semantic element rendering the booking steps content.
 */
export const Steps = ({
  steps,
}: {
  steps: {
    url: string
    title: string
    description: string
    id: number
  }[]
}) => {
  return (
    <div
      className={clsx(
        'mt-2 grid grid-cols-1 grid-rows-3 gap-y-8.5',
        'm1x:gap-y-9',
        'm3x:gap-y-9.5',
        'md:grid-cols-2 md:grid-rows-3 md:gap-7',
        'lg:gap-7.5',
        '1xl:grid-cols-3 1xl:grid-rows-2',
        '2xl:gap-8',
        '3xl:gap-8.75',
        '5xl:gap-9.5'
      )}
    >
      {steps.map((item) => (
        <div key={item.id} className={clsx('vertical w-full gap-y-3.5 rounded-3xl')}>
          <div className={clsx('vertical w-full items-center gap-y-4.5', '1xl:gap-y-5', '3xl:gap-y-5.25')}>
            <div
              className={clsx(
                'bg-off-white border-warmgray/30 relative size-11 overflow-hidden rounded-full border shadow-sm',
                'm1x:size-12',
                'm3x:size-12.5'
              )}
            >
              <Image
                className={clsx('size-full object-cover')}
                fill
                sizes={''}
                src={item.url}
                alt={item.title}
                placeholder={'blur'}
                blurDataURL={blurDataUrlSteps}
              />
            </div>
            <TertiaryTitle title={item.title} changePosition={true} />
          </div>
          <div className={clsx('horizontal w-full justify-start')}>
            <CardDescription description={item.description} changePosition={true} changeWidth={true} />
          </div>
        </div>
      ))}
    </div>
  )
}
