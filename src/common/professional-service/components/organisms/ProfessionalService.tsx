import { CardActionButton } from '@/common/call-to-action/components/CardActionButton'
import { CardDescription } from '@/common/professional-service/components/atoms/CardDescription'
import { TertiaryTitle } from '@/common/titles/components/TertiaryTitle'
import { blurDataUrlGallery } from '@/utils/blurs/BlurDataUrl'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * @description Render a professional service component.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.url - The URL of the image representing a specific service in the professional services section.
 * @param {string} props.title - The title describing a specific service in the professional services section.
 * @param {string} props.description - A brief description of a specific service in the professional services section.
 * @param {object} props.secondaryCta - An object containing the text and href for the secondary call-to-action button.
 * @param {string} props.secondaryCta.text - The text of the secondary call-to-action button related to a specific service.
 * @param {string} props.secondaryCta.href - The URL of the secondary call-to-action button related to a specific service.
 * @returns {JSX.Element} A React component that renders the professional service.
 */
export const ProfessionalService = ({
  url,
  title,
  description,
  secondaryCta,
}: {
  url: string
  title: string
  description: string
  secondaryCta: { text: string; href: string }
}) => {
  return (
    <div
      className={clsx(
        'vertical bg-primary border-warmgray/30 w-full items-center gap-y-6 rounded-3xl border px-3 pt-3 pb-6 shadow-md'
      )}
    >
      <div className={clsx('relative h-63 w-full overflow-hidden rounded-3xl shadow-lg', 'm1x:h-72')}>
        <Image
          className={clsx('size-full object-cover')}
          fill
          sizes={''}
          src={url}
          alt={title}
          placeholder={'blur'}
          blurDataURL={blurDataUrlGallery}
        />
      </div>
      <div className={clsx('vertical items-center gap-y-3', 'm1x:gap-y-3.5')}>
        <TertiaryTitle title={title} changePosition={true} />
        <CardDescription description={description} />
        <CardActionButton text={secondaryCta.text} href={secondaryCta.href} float={false} />
      </div>
    </div>
  )
}
