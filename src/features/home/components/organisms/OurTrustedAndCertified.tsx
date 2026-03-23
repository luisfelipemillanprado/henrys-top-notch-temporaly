import { TrustedAndCertified } from '@/features/home/components/molecules/TrustedAndCertified'
import clsx from 'clsx'

/**
 * @description Renders a section displaying a carousel of trusted and certified items with their images.
 * @public
 * @param {object} props - Component properties.
 * @param {object[]} props.trusted - An array of trusted and certified item objects.
 * @param {string} props.trusted[].url - The URL of the icon or image for each item.
 * @param {string} props.trusted[].href - The URL that the trusted and certified item points to when clicked.
 * @param {number} props.trusted[].id - A unique numeric identifier for each item.
 * @returns {JSX.Element} A section element containing the TrustedAndCertified component.
 */
export const OurTrustedAndCertified = ({
  trusted,
}: {
  trusted: { url: string; href: string; id: number }[]
}) => {
  return (
    <section
      id={'trusted-and-certified'}
      aria-label={'our-trusted-and-certified'}
      role={'region'}
      className={clsx(
        'horizontal bg-off-white relative w-full justify-center pt-36',
        'md:justify-start md:pt-8',
        '1xl:pt-8.5',
        '3xl:pt-12'
      )}
    >
      <TrustedAndCertified trusted={trusted} />
    </section>
  )
}
