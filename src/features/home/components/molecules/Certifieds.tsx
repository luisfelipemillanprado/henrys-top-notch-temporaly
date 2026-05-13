'use client'
import { Certified } from '@/features/home/components/atoms/Certified'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Renders a looping swiper carousel with responsive spacing, sizing, and accessible ARIA attributes.
 * @component
 * @param {object} props - Component properties with certifieds list value with url and id for each badge.
 * @param {object[]} props.certifieds - The certifieds list value with url and id for each badge.
 * @param {string} props.certifieds[].url - The url value for each badge.
 * @param {number} props.certifieds[].id - The id value for each badge.
 * @returns Returns a looping swiper carousel with responsive spacing, sizing.
 */
export const Certifieds = ({ certifieds }: { certifieds: { url: string; id: number }[] }) => {
  return (
    <Swiper
      aria-label={'certified carousel'}
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
      {certifieds.map((item) => (
        <SwiperSlide
          key={item.id}
          className={clsx('size-auto!', 'mr-[clamp(1.375rem,5.8vw,1.625rem)]', 'md:mr-7', 'lg:mr-7.5')}
        >
          <Certified url={item.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
