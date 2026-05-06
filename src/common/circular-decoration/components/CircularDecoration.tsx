import type { CircularDecorationProps } from '@/common/circular-decoration/types'
import clsx from 'clsx'

/**
 * @description Configuration for the CircularDecoration component, defining positions and sizes for 2 or 4 rings.
 * @private
 * @type {object}
 */
const CONFIG = {
  2: {
    position: 'top-47/100 m1x:top-48/100 m2x:top-47/100 m3x:top-46/100 m4x:top-45/100 md:top-54/100',
    rings: [
      {
        size: 'h-217 w-217 m1x:h-230 m1x:w-230 md:h-200 md:w-200 lg:h-240 lg:w-240 xl:h-260 xl:w-260 1xl:h-280 1xl:w-280 2xl:h-300 2xl:w-300 3xl:h-320 3xl:w-320',
        opacity: 'opacity-12 md:opacity-6 xl:opacity-7',
      },
      {
        size: 'h-160 w-160 m1x:h-180 m1x:w-180 md:h-140 md:w-140 lg:h-160 lg:w-160 xl:h-170 xl:w-170 1xl:h-190 1xl:w-190 2xl:h-200 2xl:w-200 3xl:h-220 3xl:w-220',
        opacity: 'opacity-12 md:opacity-6 xl:opacity-7',
      },
    ],
  },
  4: {
    position:
      'top-114/100 m1x:top-112/100 md:top-114/100 lg:top-122/100 1xl:top-5/4 2xl:top-33/25 3xl:top-69/50',
    rings: [
      {
        size: 'h-230 w-230 md:w-245 md:h-245 lg:w-300 lg:h-300 1xl:w-350 1xl:h-350 2xl:w-390 2xl:h-390 3xl:w-430 3xl:h-430',
        opacity: 'opacity-10',
      },
      {
        size: 'h-180 w-180 md:w-195 md:h-195 lg:w-250 lg:h-250 1xl:w-290 1xl:h-290 2xl:w-330 2xl:h-330 3xl:w-370 3xl:h-370',
        opacity: 'opacity-10',
      },
      {
        size: 'h-130 w-130 md:w-145 md:h-145 lg:w-190 lg:h-190 1xl:w-230 1xl:h-230 2xl:w-260 2xl:h-260 3xl:w-300 3xl:h-300',
        opacity: 'opacity-15',
      },
      {
        size: 'h-80 w-80 md:w-95 md:h-95 lg:w-130 lg:h-130 1xl:w-160 1xl:h-160 2xl:w-190 2xl:h-190 3xl:w-230 3xl:h-230',
        opacity: 'opacity-20',
      },
    ],
  },
}

/**
 * @description Render circular decorative rings positioned absolutely at the top of the screen.
 * @component
 * @param {CircularDecorationProps} props - Component properties with rings and changeColor optional.
 * @param {2 | 4} [props.rings] - Optional number of rings to display (default is 2).
 * @param {boolean} [props.changeColor] - Optional flag to change the color of the rings.
 * @returns Renders a circular decoration component containing the absolute-positioned rings.
 */
export const CircularDecoration = ({ rings = 2, changeColor = false }: CircularDecorationProps) => {
  const config = CONFIG[rings]
  return (
    <div className={clsx('absolute', 'z-0', 'h-full', 'w-full', 'overflow-clip')}>
      <div className={clsx('relative', 'h-full', 'w-full')}>
        {config.rings.map((ring, i) => (
          <div
            key={`${rings}-${i}`}
            className={clsx(
              'absolute',
              'left-1/2',
              '-translate-x-1/2',
              '-translate-y-1/2',
              'rounded-full',
              'border',
              changeColor ? 'border-warmgray' : 'border-pale-yellow',
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
