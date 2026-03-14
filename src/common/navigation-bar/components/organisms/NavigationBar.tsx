import { GetStartedButton } from '@/common/call-to-action/components/GetStartedButton'
import { LogoCompany } from '@/common/logo-company/components/LogoCompany'
import { MenuOptions } from '@/common/navigation-bar/components/molecules/MenuOptions'
import { NavigationLinks } from '@/common/navigation-bar/components/molecules/NavigationLinks'
import type { NavigationbarProps } from '@/common/navigation-bar/types'
import clsx from 'clsx'

/**
 * @description Renders the main navigation bar component.
 * @public
 * @interface NavigationbarProps
 * @param {object} props - Component properties.
 * @param {NavigationbarProps['navigationBar']['logo']} logo - The properties for the company logo displayed in the navigation bar.
 * @param {NavigationbarProps['navigationBar']['getStartedButton']} getStartedButton - The properties for the "Get Started" button.
 * @param {NavigationbarProps['navigationBar']['links']} links - An array of navigation link items to be displayed.
 * @param {NavigationbarProps['navigationBar']} navigationBar - The configuration for the navigation bar.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export const NavigationBar = (props: NavigationbarProps) => {
  const { navigationBar } = props
  return (
    <nav
      className={clsx(
        'horizontal bg-midnightgreen sticky inset-x-0 top-0 z-50! h-21 w-full justify-between px-6 py-4',
        'md:h-23 md:px-13 md:py-6.25',
        '1xl:px-30',
        '2xl:h-25',
        '3xl:h-26.5',
        '5xl:h-27'
      )}
    >
      <div className={clsx('horizontal')}>
        <LogoCompany url={navigationBar.logo.url} />
      </div>
      <div className={clsx('hidden', 'lg:horizontal lg:w-14/25', '1xl:w-auto')}>
        <NavigationLinks links={navigationBar.links} />
      </div>
      <div className={clsx('horizontal')}>
        <MenuOptions links={navigationBar.links} />
        <GetStartedButton
          text={navigationBar.getStartedButton.text}
          href={navigationBar.getStartedButton.href}
          hidden
        />
      </div>
    </nav>
  )
}
