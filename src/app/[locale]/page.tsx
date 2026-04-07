import { Hero } from '@/features/home/components/organisms/Hero'
import { OurBookingProcess } from '@/features/home/components/organisms/OurBookingProcess'
import { OurCustomerTestimonials } from '@/features/home/components/organisms/OurCustomerTestimonials'
import { OurProfessionalServices } from '@/features/home/components/organisms/OurProfessionalServices'
import { OurSummaryOfWhoWeAre } from '@/features/home/components/organisms/OurSummaryOfWhoWeAre'
import { OurTrustedAndCertified } from '@/features/home/components/organisms/OurTrustedAndCertified'
import { OurWhyChooseUs } from '@/features/home/components/organisms/OurWhyChooseUs'
import { homeData } from '@/utils/data/static/en-US/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('home')

  return (
    <>
      <header className={clsx('bg-secondary horizontal relative w-full', '9xl:justify-center')}>
        <Hero
          title={homeData.hero.title}
          description={t('Metadata.description')}
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
          primaryCta={homeData.bookingProcess.primaryCta}
        />
        <OurProfessionalServices
          title={homeData.professionalServices.title}
          description={homeData.professionalServices.description}
          eyebrow={homeData.professionalServices.eyebrow}
          primaryCta={homeData.professionalServices.primaryCta}
          services={homeData.professionalServices.services}
        />
        <OurWhyChooseUs
          title={homeData.whyChooseUs.title}
          description={homeData.whyChooseUs.description}
          eyebrow={homeData.whyChooseUs.eyebrow}
          image={homeData.whyChooseUs.image}
          primaryCta={homeData.whyChooseUs.primaryCta}
          reasons={homeData.whyChooseUs.reasons}
        />
        <OurCustomerTestimonials
          title={homeData.customerTestimonials.title}
          description={homeData.customerTestimonials.description}
          eyebrow={homeData.customerTestimonials.eyebrow}
          primaryCta={homeData.customerTestimonials.primaryCta}
          image={homeData.customerTestimonials.image}
          testimonials={homeData.customerTestimonials.testimonials}
        />
      </main>
    </>
  )
}
