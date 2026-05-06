import { GetStartedButton } from '@/common/call-to-action/components/GetStartedButton'
import { LogoCompany } from '@/common/logo-company/components/LogoCompany'
import { MenuOptions } from '@/common/navigation-bar/components/molecules/MenuOptions'
import { NavigationLinks } from '@/common/navigation-bar/components/molecules/NavigationLinks'
import { layoutAssets } from '@/utils/data/static/global/layout'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { logo, getStartedButtonHref, links, menuOptionsId } = layoutAssets.navigationBar

/**
 * @description Renders the main navigation bar component.
 * @component
 * @returns A rendered navigation bar component.
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
        'sticky',
        'inset-x-0',
        'top-0',
        'z-50!',
        'horizontal',
        'h-21',
        'w-full',
        'justify-between',
        'bg-secondary',
        'px-6',
        'py-4',
        'md:h-23',
        'md:px-13',
        'md:py-6.25',
        '1xl:px-20',
        '2xl:h-25',
        '3xl:h-26.5',
        '5xl:h-27'
      )}
    >
      <div className={clsx('horizontal')}>
        <LogoCompany url={logo.url} />
      </div>
      <div className={clsx('hidden', 'lg:horizontal', 'lg:w-12/25', 'xl:w-55/100', '1xl:w-auto')}>
        <NavigationLinks links={navigationLinks} />
      </div>
      <div className={clsx('horizontal')}>
        <MenuOptions links={navigationLinks} menuOptionsId={menuOptionsId} />
        <GetStartedButton text={getStartedButton.text} href={getStartedButton.href} />
      </div>
    </nav>
  )
}
