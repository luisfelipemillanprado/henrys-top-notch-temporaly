import { OurCertifieds } from '@/features/home/components/organisms/OurCertifieds'
import { OurContact } from '@/features/home/components/organisms/OurContact'
import { OurHero } from '@/features/home/components/organisms/OurHero'
import { OurProcess } from '@/features/home/components/organisms/OurProcess'
import { OurReviews } from '@/features/home/components/organisms/OurReviews'
import { OurServices } from '@/features/home/components/organisms/OurServices'
import { OurWhoWeAre } from '@/features/home/components/organisms/OurWhoWeAre'
import { OurWhyChooseUs } from '@/features/home/components/organisms/OurWhyChooseUs'
import clsx from 'clsx'

/**
 * @description Renders the home page, including various sections components.
 * @public
 * @property {JSX.Element} header - The header section of the home page, containing the hero component.
 * @property {JSX.Element} hero - The hero component, which serves as the main visual element of the header.
 * @property {JSX.Element} main - The main content of the home page, containing multiple sections.
 * @property {JSX.Element} ourCertifieds - A section showcasing the company's trusted and certified status.
 * @property {JSX.Element} ourWhoWeAre - A section providing a summary of the company's identity and values.
 * @property {JSX.Element} ourProcess - A section outlining the company's booking process.
 * @property {JSX.Element} ourServices - A section highlighting the some services offered by the company.
 * @property {JSX.Element} ourWhyChooseUs - A section explaining why customers should choose the company.
 * @property {JSX.Element} ourReviews - A section featuring testimonials from satisfied customers.
 * @returns {JSX.Element} The rendered home page component.
 */
export default function Home() {
  return (
    <>
      <header className={clsx('bg-secondary horizontal relative w-full', '9xl:justify-center')}>
        <OurHero />
      </header>
      <main className={clsx('vertical w-full')}>
        <OurCertifieds />
        <OurWhoWeAre />
        <OurProcess />
        <OurServices />
        <OurWhyChooseUs />
        <OurReviews />
        <OurContact />
      </main>
    </>
  )
}
