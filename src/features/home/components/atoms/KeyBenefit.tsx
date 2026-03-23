import { CheckIcon } from '@heroicons/react/24/solid'
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
export const KeyBenefit = ({ benefits }: { benefits: { text: string; id: number }[] }) => {
  return (
    <div
      className={clsx(
        'mb-3 grid grid-cols-2 grid-rows-2 items-center gap-x-2.5 gap-y-5',
        'm1x:gap-x-3 m1x:gap-y-5.5',
        'm2x:gap-x-4 m2x:gap-y-5.75',
        'm3x:gap-x-4.5 m3x:gap-y-6',
        'm4x:gap-x-5'
      )}
    >
      {benefits.map((item, index) => (
        <div
          key={item.id}
          className={clsx(
            'horizontal gap-x-2',
            index === 2 && ['col-span-2 justify-center', 'md:col-auto md:justify-start'],
            index > 2 && 'hidden md:flex'
          )}
        >
          <span
            className={clsx('horizontal bg-off-white border-warmgray/30 rounded-full border p-1 shadow-sm')}
          >
            <CheckIcon
              aria-hidden={'true'}
              role={'img'}
              className={clsx('fill-bright-orange size-2.75', 'm1x:size-3')}
            />
          </span>
          <span
            className={clsx(
              'text-secondary truncate text-base leading-6.75 font-medium',
              'm1x:text-[1.0625rem] m1x:leading-7'
            )}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  )
}
