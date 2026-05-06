import type { NavigationBarLinkItem } from '@/common/navigation-bar/types'
import {
  ClipboardDocumentListIcon,
  GiftIcon,
  HomeIcon,
  InformationCircleIcon,
  MapIcon,
  NewspaperIcon,
  StarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'

/**
 * @description Canonical identifiers for primary navigation routes.
 * @private
 * @property {string} HOME           - Home / landing section navigation identifier.
 * @property {string} ABOUT_US       - About Us section navigation identifier.
 * @property {string} SERVICES       - Services section navigation identifier.
 * @property {string} AREAS          - Areas or case studies navigation identifier.
 * @property {string} PROCESS        - Process or workflow section navigation identifier.
 * @property {string} REVIEWS        - Reviews or testimonials section identifier.
 * @property {string} OFFERS         - Offers or promotions section identifier.
 * @property {string} BLOGS          - Blogs or articles section identifier.
 */
enum NavigationLinkIcon {
  HOME = 'home',
  ABOUT_US = 'about-us',
  SERVICES = 'services',
  AREAS = 'areas',
  PROCESS = 'process',
  REVIEWS = 'reviews',
  OFFERS = 'offers',
  BLOGS = 'blogs',
}

const iconStyles = clsx('size-7.25', 'fill-bright-orange', 'm1x:size-7.5', 'm3x:size-7.75', 'md:size-8.25')

/**
 * @description A utility function that maps a given icon identifier to its corresponding React component.
 * @private
 * @param {string} props.icon - A string identifier, icon enum.
 * @returns A resolved icon component or a fallback placeholder.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case NavigationLinkIcon.HOME:
      return <HomeIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case NavigationLinkIcon.ABOUT_US:
      return <InformationCircleIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case NavigationLinkIcon.SERVICES:
      return <WrenchScrewdriverIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case NavigationLinkIcon.PROCESS:
      return <ClipboardDocumentListIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case NavigationLinkIcon.AREAS:
      return <MapIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case NavigationLinkIcon.REVIEWS:
      return <StarIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case NavigationLinkIcon.OFFERS:
      return <GiftIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case NavigationLinkIcon.BLOGS:
      return <NewspaperIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a single navigation link item within the navigation bar.
 * @component
 * @param {NavigationBarLinkItem} props - Component properties.
 * @param {string} props.text - The navigation item label.
 * @param {string} props.href - The navigation item destination URL.
 * @param {string} props.icon - The icon identifier used for the navigation item.
 * @param {number} props.id - The navigation item identifier.
 * @param {() => void} [props.handleCloseOptions] - Optional function to handle closing.
 * @returns A rendered navigation link component.
 */
export const NavigationLink = ({ text, href, icon, handleCloseOptions }: NavigationBarLinkItem) => {
  return (
    <li className={clsx('horizontal', 'w-full', 'lg:w-auto')}>
      <Link
        className={clsx('horizontal', 'w-full', 'justify-center')}
        href={href}
        title={text}
        onClick={handleCloseOptions}
      >
        <div
          className={clsx(
            'vertical',
            'w-full',
            'items-center',
            'rounded-2xl',
            'bg-irongray',
            'gap-y-1',
            'pt-4',
            'pb-2',
            'px-3',
            'm3x:gap-y-1.5',
            'md:gap-y-2.25',
            'md:px-6',
            'md:pt-6',
            'md:pb-4',
            'lg:horizontal',
            'lg:bg-transparent',
            'lg:p-0'
          )}
        >
          <span className={clsx('horizontal', 'lg:hidden')}>{iconSwitch(icon)}</span>
          <span
            className={clsx(
              'w-full',
              'truncate',
              'overflow-hidden',
              'text-center',
              'text-primary',
              'text-[0.9375rem]',
              'leading-7',
              'm1x:text-base',
              'm1x:leading-7.5',
              'md:text-[1.0625rem]',
              'md:leading-8',
              'lg:text-[1.0625rem]',
              '1xl:text-lg',
              '3xl:text-[1.1875rem]',
              '5xl:text-[1.3125rem]'
            )}
          >
            {text}
          </span>
        </div>
      </Link>
    </li>
  )
}
