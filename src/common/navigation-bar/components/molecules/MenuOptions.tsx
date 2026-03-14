'use client'
import { NavigationLink } from '@/common/navigation-bar/components/atoms/NavigationLink'
import type { MenuOptionsProps } from '@/common/navigation-bar/types'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { MouseEvent, useEffect, useRef, useState } from 'react'

const ANIMATION_MS = 500

/**
 * @description Renders the menu options for the navigation bar, including handling open/close state and animations.
 * @public
 * @interface MenuOptionsProps
 * @param {object} props - Component properties.
 * @param {MenuOptionsProps['links'][number]['text']} text - The display text for the navigation link.
 * @param {MenuOptionsProps['links'][number]['href']} href - The URL the navigation link points to.
 * @param {MenuOptionsProps['links'][number]['icon']} icon - The icon associated with the navigation link.
 * @param {MenuOptionsProps['links'][number]['id']} id - The unique identifier for the navigation link item.
 * @param {MenuOptionsProps['links'][number]['handleCloseOptions']} [handleCloseOptions] - Optional function to handle closing.
 * @param {MenuOptionsProps['links']} links - An array of navigation link items with optional close handlers.
 * @returns {JSX.Element} The rendered menu options component with responsive behavior and animations.
 */
export const MenuOptions = (props: MenuOptionsProps) => {
  const { links } = props
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const handleOpenOptions = () => {
    if (isOpen) return
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsVisible(true)
    requestAnimationFrame(() => {
      setIsOpen(true)
    })
  }
  const handleCloseOptions = () => {
    if (!isOpen) return
    setIsOpen(false)
    closeTimeoutRef.current = setTimeout(() => {
      setIsVisible(false)
      closeTimeoutRef.current = null
    }, ANIMATION_MS)
  }
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
        closeTimeoutRef.current = null
      }
    }
  }, [])
  const handlePropagateOptions = (e: MouseEvent) => e.stopPropagation()
  return (
    <>
      <button
        type={'button'}
        aria-expanded={isOpen}
        aria-controls={'options-menu'}
        aria-label={'options-menu'}
        onClick={isOpen ? handleCloseOptions : handleOpenOptions}
        className={clsx(
          'bg-irongray horizontal size-10 justify-center rounded-full shadow-lg',
          'm2x:size-10.25',
          'm3x:size-10.5',
          'md:size-11',
          'lg:hidden'
        )}
      >
        <span className={clsx('horizontal')}>
          {isOpen ? (
            <XMarkIcon
              aria-hidden={'true'}
              role={'img'}
              className={clsx('fill-primary size-6.75', 'm1x:size-7', 'md:size-8')}
            />
          ) : (
            <Bars3Icon
              aria-hidden={'true'}
              role={'img'}
              className={clsx('fill-primary size-6.75', 'm1x:size-7', 'md:size-8')}
            />
          )}
        </span>
      </button>
      {isVisible && (
        <div
          onClick={handleCloseOptions}
          className={clsx(
            'fixed inset-x-0 top-21 z-50 h-dvh w-full transition-colors duration-150',
            isOpen ? 'bg-midnightgreen/60 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'
          )}
        >
          <div
            role={'dialog'}
            id={'options-menu'}
            onClick={handlePropagateOptions}
            className={clsx(
              'bg-midnightgreen w-full transform transition-all duration-500 ease-in-out',
              'will-change-transform contain-paint',
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
            )}
          >
            <div
              className={clsx(
                'grid w-full grid-cols-3 gap-3.5 px-5.25 pt-7 pb-10',
                'm1x:gap-4 m1x:px-5.75',
                'm3x:gap-4.5',
                'md:gap-6 md:px-28 md:pt-9 md:pb-16',
                'lg:gap-7'
              )}
            >
              {links.map((item) => (
                <NavigationLink {...item} key={item.id} handleCloseOptions={handleCloseOptions} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
