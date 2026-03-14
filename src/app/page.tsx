import { Header } from '@/features/home/components/organisms/Header'
import { OurTrustedAndCertified } from '@/features/home/components/organisms/OurTrustedAndCertified'
import { staticData } from '@/utils/data/Static'
import clsx from 'clsx'

/**
 * @description Home page component that composes the landing page sections using site data (sd).
 * @public
 * @param {object} props - Component properties (none for this component).
 * @returns {JSX.Element} The Home page JSX tree.
 */
export default function Home() {
  return (
    <>
      <header className={clsx('bg-midnightgreen horizontal relative w-full', '9xl:justify-center')}>
        <Header
          mainTitle={staticData.titles.main}
          sectionDescription={staticData.sectionDescription.main}
          callToAction={staticData.callToAction}
          gallery={staticData.home.gallery}
        />
      </header>
      <main className={clsx('bg-linen vertical w-full')}>
        <OurTrustedAndCertified trustedAndCertified={staticData.home.trustedAndCertified} />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias est officia, atque animi
        molestiae, commodi sit, consequatur dolore deserunt eum facere delectus velit placeat natus minus! Nam
        cumque molestias fugit.
      </main>
    </>
  )
}
