'use client'
import { TrustedAndCertification } from '@/features/home/components/atoms/TrustedAndCertification'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Render a looping Swiper carousel with responsive spacing, sizing, and accessible ARIA roles.
 * @component
 * @param {object} props - Component properties with trustedAndCertified list value with url and id for each badge.
 * @param {object[]} props.trustedAndCertified - The trustedAndCertified list value with url and id for each badge.
 * @param {string} props.trustedAndCertified[].url - The url value for each badge.
 * @param {number} props.trustedAndCertified[].id - The id value for each badge.
 * @returns Render a looping Swiper carousel list item component with responsive spacing, sizing, and accessible ARIA roles.
 */
export const TrustedAndCertified = ({
  trustedAndCertified,
}: {
  trustedAndCertified: { url: string; id: number }[]
}) => {
  return (
    <Swiper
      aria-label={'Trusted and certified carousel'}
      aria-roledescription={'carousel'}
      slidesPerView={'auto'}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={clsx(
        'w-full',
        'h-auto',
        'mx-[clamp(1.375rem,6.16vw,1.75rem)]!',
        'md:max-w-94',
        'md:ml-13!',
        'lg:max-w-102',
        'lg:ml-15!',
        'xl:max-w-lg',
        'xl:ml-13!'
      )}
    >
      {trustedAndCertified.map((item) => (
        <SwiperSlide
          key={item.id}
          className={clsx('size-auto!', 'mr-[clamp(1.375rem,5.8vw,1.625rem)]', 'md:mr-7', 'lg:mr-7.5')}
        >
          <TrustedAndCertification url={item.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
