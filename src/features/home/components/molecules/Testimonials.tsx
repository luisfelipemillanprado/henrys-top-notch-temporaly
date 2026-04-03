import { Testimonial } from '@/common/testimonial/components/organisms/Testimonial'

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
    <Testimonial
      name={testimonials[0].name}
      position={testimonials[0].position}
      comment={testimonials[0].comment}
      url={testimonials[0].url}
      stars={testimonials[0].stars}
    />
  )
}
