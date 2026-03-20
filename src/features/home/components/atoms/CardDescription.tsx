import clsx from 'clsx'

/**
 * @description Renders a component used to render short descriptive content within cards.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.description - Text content rendered inside the description.
 * @param {boolean} [props.changeMargin] - Applies a small top margin when enabled.
 * @returns {JSX.Element} A rendering a responsive description paragraph.
 */
export const CardDescription = (props: { description: string; changeMargin?: boolean }) => {
  const { description, changeMargin } = props
  return (
    <div className={clsx('horizontal w-full justify-start', changeMargin && 'mt-0.5')}>
      <p
        className={clsx(
          'text-dimgray text-[0.9375rem] leading-6.75',
          'm1x:text-base m1x:leading-7',
          'md:leading-7.5',
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
