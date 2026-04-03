import clsx from 'clsx'

/**
 * @description Render a component that displays the full name of the person providing the testimonial.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.name - The full name of the person providing the testimonial.
 * @returns {JSX.Element} The rendered TestimonialName component.
 */
export const TestimonialName = ({ name }: { name: string }) => {
  return (
    <div className={clsx('horizontal w-full justify-start')}>
      <span
        className={clsx(
          'text-secondary text-[1.0625rem] font-semibold',
          'm1x:text-lg',
          'md:text-[1.1875rem]',
          '3xl:text-xl',
          '5xl:text-[1.375rem]'
        )}
      >
        {name}
      </span>
    </div>
  )
}
