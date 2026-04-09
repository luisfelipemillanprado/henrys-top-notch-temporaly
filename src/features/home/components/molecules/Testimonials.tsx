'use client'
import { Testimonial } from '@/common/testimonial/components/organisms/Testimonial'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Renders a component that presents customer testimonials.
 * @public
 * @param {object} props - Component properties.
 * @param {object[]} props.testimonials - An array of testimonial objects.
 * @param {string} props.testimonials[].name - The full name of the person providing the testimonial.
 * @param {string} props.testimonials[].position - The role or position of the person (displayed below the name).
 * @param {string} props.testimonials[].comment - The testimonial text content.
 * @param {string} props.testimonials[].url - The URL of the avatar image.
 * @param {object[]} props.testimonials[].stars - An array of star objects representing the rating.
 * @param {number} props.testimonials[].stars[].id - The unique identifier of each star.
 * @param {number} props.testimonials[].id - The unique identifier of each testimonial.
 * @returns The rendered Testimonials component.
 */
export const Testimonials = ({
  testimonials,
}: {
  testimonials: {
    name: string
    position: string
    comment: string
    url: string
    stars: { id: number }[]
    id: number
  }[]
}) => {
  return (
    <Swiper
      aria-label={'Customer Testimonials'}
      aria-roledescription={'carousel'}
      slidesPerView={'auto'}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={clsx('h-auto w-full')}
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id} className={clsx('mr-2 px-2 pb-2')}>
          <Testimonial
            name={item.name}
            position={item.position}
            comment={item.comment}
            url={item.url}
            stars={item.stars}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
