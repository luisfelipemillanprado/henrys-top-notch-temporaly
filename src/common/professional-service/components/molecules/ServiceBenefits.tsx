import { Benefit } from '@/common/benefit/components/Benefit'
import type { ServiceBenefitsProps } from '@/common/professional-service/types'
import clsx from 'clsx'

/**
 * @description Renders a component that displays service benefits in a grid format.
 * @component
 * @param {ServiceBenefitsProps} props - Component properties with benefits array and id optional.
 * @param {object[]} props.benefits - The benefits value with text and id.
 * @param {string} props.benefits[].text - The text value for each benefit.
 * @param {number} [props.benefits[].id] - Optional id value for each benefit.
 * @returns A rendered service benefits list component.
 */
export const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <div
      className={clsx(
        'grid',
        'grid-cols-2',
        'grid-rows-1',
        'w-full',
        'gap-x-2.5',
        '[&>*:nth-child(n+3)]:hidden',
        'mb-2.5',
        'm1x:mb-3.5',
        'm1x:gap-x-3',
        'm2x:gap-x-3.5',
        'm3x:gap-x-4',
        'm4x:gap-x-4.5',
        'md:grid-cols-1',
        'md:grid-rows-3',
        'md:gap-y-4.5',
        'md:mb-3',
        'md:[&>*:nth-child(n+3)]:flex',
        'md:[&>*:nth-child(n+4)]:hidden',
        'xl:grid-cols-1',
        'xl:grid-rows-3'
      )}
    >
      {benefits.map((item) => (
        <Benefit key={item.id} text={item.text} id={item.id} />
      ))}
    </div>
  )
}
