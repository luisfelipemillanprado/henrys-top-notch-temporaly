import clsx from 'clsx'

/**
 * @description Renders a component used to render short descriptive content within cards.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.description - Text content rendered inside the description.
 * @returns {JSX.Element} A rendering a responsive description paragraph.
 */
export const CardDescription = ({ description }: { description: string }) => {
  return (
    <div className={clsx('horizontal w-full justify-center', 'm1x:mb-3')}>
      <p
        className={clsx(
          'text-dimgray w-67 text-center text-[0.9375rem] leading-6.75',
          'm1x:text-base m1x:leading-7 m1x:w-71',
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
