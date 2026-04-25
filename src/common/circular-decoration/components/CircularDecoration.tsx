import type { CircularDecorationProps } from '@/common/circular-decoration/types'
import clsx from 'clsx'

/**
 * @description Configuration for the CircularDecoration component, defining positions and sizes for 2 or 3 rings.
 * @private
 * @type {object}
 */
const CONFIG = {
  2: {
    position: 'top-12/25 m1x:top-49/100 m2x:top-12/25 m3x:top-23/50 md:top-14/25',
    rings: [
      {
        size: 'h-217 w-217 m1x:h-230 m1x:w-230 md:h-200 md:w-200 lg:h-240 lg:w-240 1xl:h-270 1xl:w-270 2xl:h-300 2xl:w-300 3xl:h-320 3xl:w-320',
        opacity: 'opacity-12',
      },
      {
        size: 'h-160 w-160 m1x:h-180 m1x:w-180 md:h-140 md:w-140 lg:h-160 lg:w-160 1xl:h-180 1xl:w-180 2xl:h-200 2xl:w-200 3xl:h-220 3xl:w-220',
        opacity: 'opacity-12',
      },
    ],
  },
  3: {
    position:
      'top-[114%] m1x:top-[112%] md:top-[114%] lg:top-[122%] 1xl:top-5/4 2xl:top-33/25 3xl:top-69/50',
    rings: [
      {
        size: 'h-230 w-230 md:w-245 md:h-245 lg:w-300 lg:h-300 1xl:w-350 1xl:h-350 2xl:w-390 2xl:h-390 3xl:w-430 3xl:h-430',
        opacity: 'opacity-10',
      },
      {
        size: 'h-180 w-180 md:w-195 md:h-195 lg:w-250 lg:h-250 1xl:w-290 1xl:h-290 2xl:w-330 2xl:h-330 3xl:w-370 3xl:h-370',
        opacity: 'opacity-20',
      },
      {
        size: 'h-130 w-130 md:w-145 md:h-145 lg:w-190 lg:h-190 1xl:w-230 1xl:h-230 2xl:w-260 2xl:h-260 3xl:w-300 3xl:h-300',
        opacity: 'opacity-30',
      },
      {
        size: 'h-80 w-80 md:w-95 md:h-95 lg:w-130 lg:h-130 1xl:w-160 1xl:h-160 2xl:w-190 2xl:h-190 3xl:w-230 3xl:h-230',
        opacity: 'opacity-40',
      },
    ],
  },
}

/**
 * @description Renders circular decorative rings positioned absolutely at the top of the screen.
 * @public
 * @param {object} props - Component properties.
 * @param {CircularDecorationProps['rings']} [props.rings=2] - Number of rings to display (default is 2).
 * @param {CircularDecorationProps['changeColor']} [props.changeColor=false] - Whether to change the color of the rings.
 * @returns Containing the absolute-positioned rings.
 */
export const CircularDecoration = ({ rings = 2, changeColor = false }: CircularDecorationProps) => {
  const config = CONFIG[rings]
  return (
    <div className={clsx('absolute z-0 h-full w-full overflow-clip')}>
      <div className={clsx('relative h-full w-full')}>
        {config.rings.map((ring, i) => (
          <div
            key={`${rings}-${i}`}
            className={clsx(
              'absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border',
              changeColor ? 'border-warmgray/45' : 'border-pale-yellow/45',
              config.position,
              ring.size,
              ring.opacity
            )}
          />
        ))}
      </div>
    </div>
  )
}
