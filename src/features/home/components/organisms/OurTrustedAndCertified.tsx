import { TrustedAndCertified } from '@/features/home/components/molecules/TrustedAndCertified'
import clsx from 'clsx'

/**
 * @description Renders a section displaying a carousel of trusted and certified items with their images.
 * @public
 * @param {object} props - Component properties.
 * @param {object[]} trustedAndCertified - An array of trusted and certified item objects.
 * @param {string} trustedAndCertified[].url - The URL of the icon or image for each item.
 * @param {string} trustedAndCertified[].href - The URL that the trusted and certified item points to when clicked.
 * @param {number} trustedAndCertified[].id - A unique numeric identifier for each item.
 * @returns {JSX.Element} A section element containing the MiniToolsHub component.
 */
export const OurTrustedAndCertified = (props: {
  trustedAndCertified: { url: string; href: string; id: number }[]
}) => {
  const { trustedAndCertified } = props
  return (
    <section
      id={'trusted-and-certified'}
      aria-label={'our-trusted-and-certified'}
      role={'region'}
      className={clsx(
        'horizontal relative w-full justify-center pt-36',
        'md:justify-start md:pt-8',
        '1xl:pt-8.5',
        '3xl:pt-12'
      )}
    >
      <TrustedAndCertified trustedAndCertified={trustedAndCertified} />
    </section>
  )
}
