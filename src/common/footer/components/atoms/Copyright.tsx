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
    <div className={clsx('horizontal', 'w-full', 'md:justify-start')}>
      <p
        className={clsx(
          'text-center',
          'text-primary',
          'text-[1.0625rem]',
          'leading-8',
          'm1x:text-lg',
          'm1x:leading-8.5',
          'md:text-[1.1875rem]',
          'md:leading-9',
          'md:text-start'
        )}
      >
        {copyright}
      </p>
    </div>
  )
}
