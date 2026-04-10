import { Hero } from '@/features/home/components/organisms/Hero'
import { OurBookingProcess } from '@/features/home/components/organisms/OurBookingProcess'
import { OurContactUs } from '@/features/home/components/organisms/OurContactUs'
import { OurCustomerTestimonials } from '@/features/home/components/organisms/OurCustomerTestimonials'
import { OurProfessionalServices } from '@/features/home/components/organisms/OurProfessionalServices'
import { OurSummaryOfWhoWeAre } from '@/features/home/components/organisms/OurSummaryOfWhoWeAre'
import { OurTrustedAndCertified } from '@/features/home/components/organisms/OurTrustedAndCertified'
import { OurWhyChooseUs } from '@/features/home/components/organisms/OurWhyChooseUs'
import clsx from 'clsx'

/**
 * @description Renders the home page, including various sections.
 * @public
 * @property {JSX.Element} header - The header section of the home page, containing the hero component.
 * @property {JSX.Element} hero - The hero component, which serves as the main visual element of the header.
 * @property {JSX.Element} main - The main content of the home page, containing multiple sections.
 * @property {JSX.Element} ourTrustedAndCertified - A section showcasing the company's trusted and certified status.
 * @property {JSX.Element} ourSummaryOfWhoWeAre - A section providing a summary of the company's identity and values.
 * @property {JSX.Element} ourBookingProcess - A section outlining the company's booking process.
 * @property {JSX.Element} ourProfessionalServices - A section highlighting the professional services offered by the company.
 * @property {JSX.Element} ourWhyChooseUs - A section explaining why customers should choose the company.
 * @property {JSX.Element} ourCustomerTestimonials - A section featuring testimonials from satisfied customers.
 * @returns {JSX.Element} The rendered home page component.
 */
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
        <OurContactUs />
      </main>
    </>
  )
}
