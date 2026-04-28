import { GetStartedButton } from '@/common/call-to-action/components/GetStartedButton'
import { LogoCompany } from '@/common/logo-company/components/LogoCompany'
import { MenuOptions } from '@/common/navigation-bar/components/molecules/MenuOptions'
import { NavigationLinks } from '@/common/navigation-bar/components/molecules/NavigationLinks'
import { layoutAssets } from '@/utils/data/static/global/layout'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { logo, getStartedButtonHref, links } = layoutAssets.navigationBar

/**
 * @description Renders the main navigation bar component.
 * @public
 * @param {string} props.logo - The properties for the company logo displayed in the navigation bar.
 * @param {object} props.getStartedButton - The properties for the "Get Started" button.
 * @param {string} props.getStartedButton.text - The text displayed on the "Get Started" button.
 * @param {string} props.getStartedButton.href - The URL that the "Get Started" button links to.
 * @param {Array} props.links - An array of navigation link items to be displayed.
 * @param {string} props.links.text - The display text for the navigation link.
 * @param {string} props.links.href - The URL the navigation link points to.
 * @param {string} props.links.icon - The icon associated with the navigation link.
 * @param {string} props.links.id - The unique identifier for the navigation link item.
 * @returns The rendered navigation bar component.
 */
export const NavigationBar = () => {
  const t = useTranslations('navigation-bar')
  const navigationLinks = [
    { ...links[0], text: t('links.home') },
    { ...links[1], text: t('links.aboutUs') },
    { ...links[2], text: t('links.services') },
    { ...links[3], text: t('links.areas') },
    { ...links[4], text: t('links.process') },
    { ...links[5], text: t('links.reviews') },
    { ...links[6], text: t('links.offers') },
    { ...links[7], text: t('links.blogs') },
  ]
  const getStartedButton = {
    text: t('getStartedButton.text'),
    href: getStartedButtonHref.href,
  }
  return (
    <nav
      className={clsx(
        'horizontal bg-secondary sticky inset-x-0 top-0 z-50! h-21 w-full justify-between px-6 py-4',
        'md:h-23 md:px-13 md:py-6.25',
        '1xl:px-20',
        '2xl:h-25',
        '3xl:h-26.5',
        '5xl:h-27'
      )}
    >
      <div className={clsx('horizontal')}>
        <LogoCompany url={logo.url} />
      </div>
      <div className={clsx('hidden', 'lg:horizontal lg:w-12/25', 'xl:w-55/100', '1xl:w-auto')}>
        <NavigationLinks links={navigationLinks} />
      </div>
      <div className={clsx('horizontal')}>
        <MenuOptions links={navigationLinks} />
        <GetStartedButton text={getStartedButton.text} href={getStartedButton.href} />
      </div>
    </nav>
  )
}
