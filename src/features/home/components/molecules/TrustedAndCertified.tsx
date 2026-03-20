'use client'
import { TrustedCertification } from '@/features/home/components/atoms/TrustedCertification'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Renders a responsive carousel component that displays a rotating hub of trusted and certified items.
 * @public
 * @param {object} props - Component properties.
 * @param {Array} props.trusted - Array of trusted and certified item objects.
 * @param {string} props.trusted[].url - URL of the icon or image for each item.
 * @param {string} props.trusted[].href - The URL that the trusted and certified item points to when clicked.
 * @param {number} props.trusted[].id - Unique numeric key for React list rendering.
 * @returns {JSX.Element} A Swiper carousel rendering the trusted and certified items in a horizontal scrolling format.
 */

export const TrustedAndCertified = (props: { trusted: { url: string; href: string; id: number }[] }) => {
  const { trusted } = props
  return (
    <Swiper
      aria-label={'Trusted and Certified Carousel'}
      aria-roledescription={'carousel'}
      slidesPerView={'auto'}
      loop={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={clsx(
        'mx-6! h-auto w-full',
        'md:mr-15! md:ml-12.5! md:w-27/50',
        'lg:ml-17! lg:w-12/25',
        '1xl:w-21/50 1xl:ml-29!',
        '2xl:ml-32! 2xl:w-41/100',
        '3xl:w-2/5',
        '5xl:w-39/100'
      )}
    >
      {trusted.map((item) => (
        <SwiperSlide
          key={item.id}
          className={clsx('mr-5.75 size-auto!', 'm1x:mr-6', 'm2x:mr-6.25', 'm3x:mr-6.5', 'm4x:mr-6.75')}
        >
          <TrustedCertification url={item.url} href={item.href} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
