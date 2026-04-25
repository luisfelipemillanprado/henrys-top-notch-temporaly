import clsx from 'clsx'

/**
 * @description Renders a component used to render short descriptive content within cards.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.description - Text content rendered inside the description.
 * @param {boolean} [props.changePosition] - An optional boolean that, when true, changes the text alignment to center.
 * @param {boolean} [props.changeWidth] - An optional boolean that, when true, adjusts the width of the description.
 * @returns A rendering a responsive description paragraph.
 */
export const CardDescription = ({
  description,
  changePosition = false,
  changeWidth = false,
}: {
  description: string
  changePosition?: boolean
  changeWidth?: boolean
}) => {
  return (
    <div
      className={clsx(
        'horizontal w-full',
        changePosition ? 'justify-center' : 'justify-start',
        'lg:justify-start'
      )}
    >
      <p
        className={clsx(
          'text-dimgray text-[0.9375rem] leading-6.75',
          changePosition && 'text-center',
          changeWidth && ['w-74', 'm1x:w-79', 'lg:w-auto'],
          'm1x:text-base m1x:leading-7',
          'md:leading-7.5',
          'lg:text-start',
          '1xl:text-[1.0625rem] 1xl:leading-7.5',
          '2xl:leading-8',
          '3xl:text-lg 3xl:leading-8.5',
          '5xl:text-[1.3125rem] 5xl:leading-9.5'
        )}
      >
        {description}
      </p>
    </div>
  )
}
