import { Benefit } from '@/common/benefit/components/Benefit'
import clsx from 'clsx'

/**
 * @description Renders a component that displays key benefits in a grid format.
 * @public
 * @param {object} props - Component properties.
 * @param {object[]} props.benefits - An array of key benefit objects to be displayed.
 * @param {string} props.benefits[].text - The text description of the key benefit item.
 * @param {number} props.benefits[].id - A unique identifier for each key benefit item.
 * @returns {JSX.Element} The rendered key benefits component.
 */
export const Benefits = ({ benefits }: { benefits: { text: string; id: number }[] }) => {
  return (
    <div className={clsx('mb-2.5 grid w-full grid-cols-2 grid-rows-1 px-2', '[&>*:nth-child(n+3)]:hidden')}>
      {benefits.map((item) => (
        <Benefit key={item.id} text={item.text} id={item.id} changeSize={true} />
      ))}
    </div>
  )
}
