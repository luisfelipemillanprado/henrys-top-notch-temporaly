import { CheckIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

/**
 * @description Renders a component that displays an individual benefit item, typically used within a list of key benefits.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.text - The text description of the key benefit item.
 * @param {boolean} [props.changeSize=false] - An optional boolean that determines whether to apply a different size styling.
 * @param {number} props.id - The unique identifier of the key benefit item.
 * @returns {JSX.Element} The rendered key benefit component.
 */
export const Benefit = ({
  text,
  changeSize = false,
  id,
}: {
  text: string
  changeSize?: boolean
  id?: number
}) => {
  return (
    <div id={`${id}`} className={clsx('horizontal justify-start gap-x-2')}>
      <span
        className={clsx('horizontal bg-off-white border-strong-blue/40 rounded-full border p-1 shadow-sm')}
      >
        <CheckIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-bright-orange',
            changeSize ? ['size-2.5', 'm1x:size-2.75'] : ['size-2.75', 'm1x:size-3']
          )}
        />
      </span>
      <span
        className={clsx(
          'text-secondary truncate leading-6.75 font-medium',
          changeSize ? ['text-[0.9375rem]', 'm1x:text-base'] : ['text-base', 'm1x:text-[1.0625rem]'],
          'm1x:leading-7'
        )}
      >
        {text}
      </span>
    </div>
  )
}
