import { Hero } from '@/features/home/components/organisms/Hero'
import { OurBookingProcess } from '@/features/home/components/organisms/OurBookingProcess'
import { OurProfessionalServices } from '@/features/home/components/organisms/OurProfessionalServices'
import { OurSummaryOfWhoWeAre } from '@/features/home/components/organisms/OurSummaryOfWhoWeAre'
import { OurTrustedAndCertified } from '@/features/home/components/organisms/OurTrustedAndCertified'
import { homeData } from '@/utils/data/static/en-US/home'
import clsx from 'clsx'

/**
 * @description Renders the Home page.
 * @public
 * @param {object} props - Component properties.
 * @returns {JSX.Element} The Home page JSX tree.
 */
export default function Home() {
  return (
    <>
      <header className={clsx('bg-secondary horizontal relative w-full', '9xl:justify-center')}>
        <Hero
          title={homeData.hero.title}
          description={homeData.hero.description}
          primaryCta={homeData.hero.primaryCta}
          secondaryCta={homeData.hero.secondaryCta}
          highlight={homeData.hero.highlight}
          gallery={homeData.hero.gallery}
        />
      </header>
      <main className={clsx('vertical w-full')}>
        <OurTrustedAndCertified trustedAndCertified={homeData.trustedAndCertified} />
        <OurSummaryOfWhoWeAre
          title={homeData.whoWeAre.title}
          description={homeData.whoWeAre.description}
          eyebrow={homeData.whoWeAre.eyebrow}
          primaryCta={homeData.whoWeAre.primaryCta}
          image={homeData.whoWeAre.image}
          benefits={homeData.whoWeAre.benefits}
        />
        <OurBookingProcess
          title={homeData.bookingProcess.title}
          description={homeData.bookingProcess.description}
          eyebrow={homeData.bookingProcess.eyebrow}
          image={homeData.bookingProcess.image}
          features={homeData.bookingProcess.features}
          steps={homeData.bookingProcess.steps}
        />
        <OurProfessionalServices
          title={homeData.professionalServices.title}
          description={homeData.professionalServices.description}
          eyebrow={homeData.professionalServices.eyebrow}
          primaryCta={homeData.professionalServices.primaryCta}
          services={homeData.professionalServices.services}
        />
      </main>
    </>
  )
}
