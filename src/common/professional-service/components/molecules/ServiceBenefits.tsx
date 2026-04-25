import { Benefit } from '@/common/benefit/components/Benefit'
import type { ServiceBenefitsProps } from '@/common/professional-service/types'
import clsx from 'clsx'

/**
 * @description Renders a component that displays key benefits in a grid format.
 * @public
 * @interface ServiceBenefitsProps
 * @param {object} props - Component properties.
 * @param {ServiceBenefitsProps['benefits']} props.benefits - An array of key benefit objects to be displayed.
 * @param {ServiceBenefitsProps['benefits'][number]['text']} props.benefits.text - The text description of the key benefit item.
 * @param {ServiceBenefitsProps['benefits'][number]['id']} props.benefits.id - A unique identifier for each key benefit item.
 * @returns The rendered key benefits component.
 */
export const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <div
      className={clsx(
        'mb-2.5 grid w-full grid-cols-2 grid-rows-1 gap-x-2.5',
        '[&>*:nth-child(n+3)]:hidden',
        'm1x:gap-x-3 m1x:mb-3.25',
        'm2x:gap-x-3.5',
        'm3x:gap-x-4',
        'm4x:gap-x-4.5',
        'lg:grid-cols-2 lg:grid-rows-3 lg:gap-y-4.5 lg:[&>*:nth-child(n+3)]:flex'
      )}
    >
      {benefits.map((item) => (
        <Benefit key={item.id} text={item.text} id={item.id} />
      ))}
    </div>
  )
}
