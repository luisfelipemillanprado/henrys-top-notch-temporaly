import { GetStartedButton } from '@/common/call-action/components/GetStartedButton'
import { Logo } from '@/common/logo/components/Logo'
import { Links } from '@/common/navbar/components/molecules/Links'
import { Menu } from '@/common/navbar/components/molecules/Menu'
import { layoutAssets } from '@/utils/data/static/global/layout'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { logo, getStartedButtonHref, links, menuId } = layoutAssets.navigationBar

/**
 * @description Renders the main navigation bar component.
 * @component
 * @param {object} props - Component properties derived from internal translations and static assets.
 * @param {string} props.logo.url - The URL of the logo image.
 * @param {string} props.getStartedButtonHref.href - The URL of the get started button.
 * @param {object[]} props.links - The links of the navigation bar.
 * @param {number} props.links[].id - The ID of the link.
 * @param {string} props.links[].text - The text of the link.
 * @param {string} props.links[].href - The URL of the link.
 * @param {string} props.links[].icon - The icon of the link.
 * @param {string} props.menuId - The ID of the menu.
 * @param {object} props.getStartedButton - The get started button.
 * @param {string} props.getStartedButton.text - The text of the get started button.
 * @param {string} props.getStartedButton.href - The URL of the get started button.
 * @returns Returns navigation bar component.
 */
export const Navbar = () => {
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
        'md:px-11',
        'md:py-6.25',
        'lg:px-13',
        '1xl:px-20',
        '2xl:h-25',
        '3xl:h-26.5',
        '5xl:h-27'
      )}
    >
      <div className={clsx('horizontal')}>
        <Logo url={logo.url} />
      </div>
      <div className={clsx('hidden', 'lg:horizontal', 'lg:w-12/25', 'xl:w-55/100', '1xl:w-auto')}>
        <Links links={navigationLinks} />
      </div>
      <div className={clsx('horizontal')}>
        <Menu links={navigationLinks} menuId={menuId} />
        <GetStartedButton text={getStartedButton.text} href={getStartedButton.href} />
      </div>
    </nav>
  )
}
