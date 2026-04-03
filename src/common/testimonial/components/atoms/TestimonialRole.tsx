import clsx from 'clsx'

/**
 * @description Renders a component that displays the role or position of the person providing the testimonial.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.position - The role or position of the person (displayed below the name).
 * @returns {JSX.Element} The rendered TestimonialRole component.
 */
export const TestimonialRole = ({ position }: { position: string }) => {
  return (
    <div className={clsx('horizontal w-full justify-start')}>
      <span
        className={clsx(
          'text-warmgray text-sm',
          'm1x:text-[0.9375rem]',
          '1xl:text-[1.0625rem]',
          '3xl:text-lg',
          '5xl:text-[1.3125rem]'
        )}
      >
        {position}
      </span>
    </div>
  )
}
