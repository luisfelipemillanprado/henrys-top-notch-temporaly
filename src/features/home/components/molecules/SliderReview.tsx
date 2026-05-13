'use client'
import { Review } from '@/common/review/components/Review'
import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

/**
 * @description Renders review cards inside an autoplay carousel with responsive slide behavior.
 * @component
 * @param {object} props - Component properties.
 * @param {array} props.comments - Array of comment entries.
 * @param {string} props.comments[].name - Name label.
 * @param {string} props.comments[].position - Position label.
 * @param {string} props.comments[].comment - Comment text.
 * @param {string} props.comments[].url - Avatar image source.
 * @param {array} props.comments[].stars - Stars identifier array.
 * @param {number} props.comments[].stars[].id - Individual star unique ID.
 * @param {number} props.comments[].id - Review unique identifier.
 * @returns A looping review carousel with automatic playback and accessible roles.
 */
export const SliderReview = ({
  comments,
}: {
  comments: {
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
      aria-label={'customer reviews carousel'}
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
      {comments.map((item) => (
        <SwiperSlide
          key={item.id}
          className={clsx('mr-6', 'pb-2', 'md:w-auto!', 'md:pl-px', 'md:mr-8', 'lg:mr-9')}
        >
          <Review
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
