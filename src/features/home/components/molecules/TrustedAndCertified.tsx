'use client'
import { TrustedAndCertification } from '@/features/home/components/atoms/TrustedAndCertification'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Renders a responsive carousel component that displays a rotating hub of trusted and certified items.
 * @public
 * @param {object} props - Component properties.
 * @param {Array} props.trustedAndCertified - Array of trusted and certified item objects.
 * @param {string} props.trustedAndCertified[].url - URL of the icon or image for each item.
 * @param {string} props.trustedAndCertified[].href - The URL that the trusted and certified item points to when clicked.
 * @param {number} props.trustedAndCertified[].id - Unique numeric key for React list rendering.
 * @returns A Swiper carousel rendering the trusted and certified items in a horizontal scrolling format.
 */
export const TrustedAndCertified = ({
  trustedAndCertified,
}: {
  trustedAndCertified: { url: string; href: string; id: number }[]
}) => {
  return (
    <Swiper
      aria-label={'Trusted and Certified Carousel'}
      aria-roledescription={'carousel'}
      slidesPerView={'auto'}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={clsx(
        'h-auto w-full',
        'mx-[clamp(1.375rem,calc(1.375rem+(100vw-23.4375rem)*0.0923),1.75rem)]!',
        'md:mr-14! md:ml-13! md:w-51/100',
        'lg:w-12/25',
        'xl:ml-14! xl:w-23/50',
        '1xl:w-21/50 1xl:ml-29!',
        '2xl:ml-32! 2xl:w-41/100',
        '3xl:w-2/5',
        '5xl:w-39/100'
      )}
    >
      {trustedAndCertified.map((item) => (
        <SwiperSlide
          key={item.id}
          className={clsx(
            'size-auto!',
            'mr-[clamp(1.375rem,calc(1.375rem+(100vw-23.4375rem)*0.0615),1.625rem)]'
          )}
        >
          <TrustedAndCertification url={item.url} href={item.href} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
