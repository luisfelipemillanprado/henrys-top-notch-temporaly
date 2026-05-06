import { Line } from '@/common/contact-us/direct-line/components/molecules/Line'
import type { DirectLineProps } from '@/common/contact-us/direct-line/types'
import clsx from 'clsx'

/**
 * @description Render a floating Direct Line button list items.
 * @component
 * @param {DirectLineProps} props - Component properties with directLine value with href and icon for each direct line.
 * @param {object[]} props.directLine - The direct line value with href and icon for each direct line.
 * @param {string} props.directLine[].href - The href value for each direct line.
 * @param {string} props.directLine[].icon - The icon identifier for each direct line.
 * @returns Renders a floating Direct Line button list item.
 */
export const DirectLine = ({ directLine }: DirectLineProps) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'fixed',
        'right-4.5',
        'bottom-4',
        'z-50',
        'justify-center',
        'md:right-8.5',
        'md:bottom-8',
        'lg:right-9.5',
        'lg:bottom-9',
        '1xl:right-10.5',
        '1xl:bottom-10',
        '3xl:right-11.5',
        '3xl:bottom-11',
        '5xl:right-12.5',
        '5xl:bottom-12'
      )}
    >
      <div className={clsx('vertical', 'gap-y-5')}>
        <Line href={directLine[1].href} icon={directLine[1].icon} firstColor changeBackground />
        <Line href={directLine[0].href} icon={directLine[0].icon} forthColor />
      </div>
    </div>
  )
}
