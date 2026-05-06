'use client'
import { Testimonial } from '@/common/testimonial/components/organisms/Testimonial'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Renders testimonial cards inside an autoplay carousel with responsive slide behavior.
 * @component
 * @param {object} props - Component properties.
 * @param {array} props.testimonials - Array of testimonial entries.
 * @param {string} props.testimonials[].name - Customer name label.
 * @param {string} props.testimonials[].position - Customer position label.
 * @param {string} props.testimonials[].comment - Customer feedback text.
 * @param {string} props.testimonials[].url - Customer avatar image source.
 * @param {array} props.testimonials[].stars - Star rating identifier array.
 * @param {number} props.testimonials[].stars[].id - Individual star unique ID.
 * @param {number} props.testimonials[].id - Testimonial unique identifier.
 * @returns A looping testimonial carousel with automatic playback and accessible roles.
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
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={clsx('w-full', 'h-auto')}
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id} className={clsx('mr-6', 'pb-2', 'md:w-auto!', 'md:pl-px')}>
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
