import { Hero } from '@/features/home/components/organisms/Hero'
import { OurBookingProcess } from '@/features/home/components/organisms/OurBookingProcess'
import { OurCustomerTestimonials } from '@/features/home/components/organisms/OurCustomerTestimonials'
import { OurProfessionalServices } from '@/features/home/components/organisms/OurProfessionalServices'
import { OurSummaryOfWhoWeAre } from '@/features/home/components/organisms/OurSummaryOfWhoWeAre'
import { OurTrustedAndCertified } from '@/features/home/components/organisms/OurTrustedAndCertified'
import { OurWhyChooseUs } from '@/features/home/components/organisms/OurWhyChooseUs'
import clsx from 'clsx'

export default function Home() {
  return (
    <>
      <header className={clsx('bg-secondary horizontal relative w-full', '9xl:justify-center')}>
        <Hero />
      </header>
      <main className={clsx('vertical w-full')}>
        <OurTrustedAndCertified />
        <OurSummaryOfWhoWeAre />
        <OurBookingProcess />
        <OurProfessionalServices />
        <OurWhyChooseUs />
        <OurCustomerTestimonials />
      </main>
    </>
  )
}
