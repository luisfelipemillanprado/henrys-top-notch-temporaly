import type { CopyrightProps } from '@/common/footer/types'
import clsx from 'clsx'

/**
 * @description Renders the copyright information in the footer.
 * @public
 * @interface CopyrightProps
 * @param {object} props - Component properties.
 * @param {CopyrightProps['copyright']} props.copyright - Text representing the copyright information.
 * @returns {JSX.Element} A container with responsive and aligned copyright text.
 */
export const Copyright = ({ copyright }: CopyrightProps) => {
  return (
    <div className={clsx('horizontal w-full', 'lg:justify-start')}>
      <p
        className={clsx(
          'text-primary text-center text-[1.0625rem] leading-7.5',
          'm1x:text-lg leading-8',
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
