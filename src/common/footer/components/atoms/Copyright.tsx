import type { CopyrightProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the copyright information in the footer.
 * @component
 * @param {CopyrightProps} props - Component properties.
 * @param {string} props.copyright - The copyright value.
 * @returns A container with responsive and aligned copyright text.
 */
export const Copyright = ({ copyright }: CopyrightProps) => {
  return (
    <div className={clsx('horizontal', 'w-full', 'md:max-w-68', 'md:justify-start', 'lg:max-w-94')}>
      <p
        className={clsx(
          'text-center',
          'text-primary',
          'text-[1.0625rem]',
          'leading-7.5',
          'm1x:text-lg leading-8',
          'md:text-start',
          '1xl:text-[1.0625rem]',
          '3xl:text-lg',
          '5xl:text-[1.3125rem]'
        )}
      >
        {copyright}
      </p>
    </div>
  )
}
