import { blurDataUrlCertified } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

/**
 * @description Renders a trusted certification icon that links to a specified URL.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.url - A string identifier that determines which icon is rendered.
 * @param {string} props.href - The URL that the trusted and certified item points to when clicked.
 * @returns A centered icon element wrapped in semantic containers.
 */
export const TrustedAndCertification = (props: { url: string; href: string }) => {
  const { url, href } = props
  return (
    <Link
      href={href}
      className={clsx(
        'horizontal relative size-16.5 items-center',
        'm1x:size-17.5',
        'm2x:size-18.5',
        'm3x:size-19',
        'm4x:size-19.5'
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
