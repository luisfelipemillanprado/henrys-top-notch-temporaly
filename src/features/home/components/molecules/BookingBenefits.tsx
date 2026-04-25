import { Benefit } from '@/common/benefit/components/Benefit'
import clsx from 'clsx'

/**
 * @description Renders a component that displays key benefits in a grid format.
 * @public
 * @param {object} props - Component properties.
 * @param {object[]} props.benefits - An array of key benefit objects to be displayed.
 * @param {string} props.benefits[].text - The text description of the key benefit item.
 * @param {number} props.benefits[].id - A unique identifier for each key benefit item.
 * @returns The rendered key benefits component.
 */
export const BookingBenefits = ({ benefits }: { benefits: { text: string; id: number }[] }) => {
  return (
    <div
      className={clsx(
        'mb-1 grid grid-cols-2 grid-rows-2 gap-x-2.5 gap-y-5',
        '[&>*:nth-child(3)]:col-span-2 [&>*:nth-child(3)]:justify-center [&>*:nth-child(n+4)]:hidden',
        'm1x:gap-x-3 m1x:gap-y-5.5',
        'm2x:gap-x-4 m2x:gap-y-5.75',
        'm3x:gap-x-4.5 m3x:gap-y-6',
        'm4x:gap-x-5',
        'md:mb-2 md:[&>*:nth-child(3)]:col-auto md:[&>*:nth-child(3)]:justify-start md:[&>*:nth-child(n+4)]:flex',
        'xl:gap-x-6.5'
      )}
    >
      {benefits.map((item) => (
        <Benefit key={item.id} text={item.text} />
      ))}
    </div>
  )
}
