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

/**
 * @description A utility function that maps a given icon identifier to its corresponding React component.
 * @private
 * @param {NavigationBarLinkItem['icon']} icon - A string identifier, icon enum.
 * @returns The resolved icon component or a fallback placeholder.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case NavigationLinkIcon.HOME:
      return (
        <HomeIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    case NavigationLinkIcon.ABOUT_US:
      return (
        <InformationCircleIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    case NavigationLinkIcon.SERVICES:
      return (
        <WrenchScrewdriverIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    case NavigationLinkIcon.PROCESS:
      return (
        <ClipboardDocumentListIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    case NavigationLinkIcon.AREAS:
      return (
        <MapIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    case NavigationLinkIcon.REVIEWS:
      return (
        <StarIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    case NavigationLinkIcon.OFFERS:
      return (
        <GiftIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    case NavigationLinkIcon.BLOGS:
      return (
        <NewspaperIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx('fill-vivid-orange size-7', 'm1x:size-7.25', 'm3x:size-7.75', 'md:size-8.25')}
        />
      )
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a single navigation link item within the navigation bar.
 * @public
 * @interface NavigationBarLinkItem
 * @param {object} props Component properties.
 * @param {NavigationBarLinkItem['text']} props.text - The display text for the navigation link.
 * @param {NavigationBarLinkItem['href']} props.href - The URL the navigation link points to.
 * @param {NavigationBarLinkItem['icon']} props.icon - The icon associated with the navigation link.
 * @param {NavigationBarLinkItem['id']} props.id - The unique identifier for the navigation link item.
 * @param {NavigationBarLinkItem['handleCloseOptions']} [props.handleCloseOptions] - Optional function to handle closing.
 * @returns The rendered navigation link component.
 */
export const NavigationLink = ({ text, href, icon, handleCloseOptions }: NavigationBarLinkItem) => {
  return (
    <li className={clsx('horizontal w-full', 'lg:w-auto')}>
      <Link
        className={clsx('horizontal w-full justify-center')}
        href={href}
        title={text}
        onClick={handleCloseOptions}
      >
        <div
          className={clsx(
            'bg-irongray vertical w-full items-center gap-y-2 rounded-2xl p-3.5',
            'm3x:gap-y-2.75',
            'md:gap-y-2.5 md:px-4 md:py-4.5',
            'lg:horizontal lg:bg-transparent lg:p-0'
          )}
        >
          <span className={clsx('horizontal', 'lg:hidden')}>{iconSwitch(icon)}</span>
          <span
            className={clsx(
              'text-primary w-full truncate overflow-hidden text-center text-[0.9375rem]',
              'm1x:text-base',
              'md:text-lg',
              'lg:text-[1.0625rem]',
              '2xl:text-lg',
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
