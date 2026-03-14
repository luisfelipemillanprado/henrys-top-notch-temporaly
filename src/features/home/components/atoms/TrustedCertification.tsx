import { blurDataUrlCertified } from '@/utils/data/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

/**
 * @description Renders a trusted certification icon that links to a specified URL.
 * @public
 * @param {object} props - Component properties.
 * @param {string} url - A string identifier that determines which icon is rendered.
 * @param {string} href - The URL that the trusted and certified item points to when clicked.
 * @returns {JSX.Element} A centered icon element wrapped in semantic containers.
 */
export const TrustedCertification = (props: { url: string; href: string }) => {
  const { url, href } = props
  return (
    <Link
      href={href}
      className={clsx(
        'horizontal relative size-16 items-center',
        'm1x:size-17',
        'm2x:size-18',
        'm3x:size-18.75',
        'm4x:size-19.25'
      )}
      target={'_blank'}
      rel={'noopener noreferrer'}
      aria-label={'Link to trusted or certified item'}
    >
      <Image
        className={clsx('size-full object-contain')}
        fill
        sizes={''}
        src={url}
        placeholder={'blur'}
        blurDataURL={blurDataUrlCertified}
        alt={'Trusted certification'}
      />
    </Link>
  )
}
