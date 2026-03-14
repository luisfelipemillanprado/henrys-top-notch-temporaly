import clsx from 'clsx'

/**
 * @description Renders circular decorative rings positioned absolutely at the top of the screen.
 * @public
 * @param {object} props - Component properties.
 * @param {2 | 3} [rings=2] - Number of rings configuration to render.
 * @returns {JSX.Element} Containing the absolute-positioned rings.
 */
export const CircularDecoration = ({ rings = 2 }: { rings?: 2 | 3 }) => {
  const config =
    rings === 3
      ? {
          position: 'top-28/25 md:top-11/10 lg:top-6/5 1xl:top-5/4 2xl:top-33/25 3xl:top-69/50', // solo se ve la mitad
          rings: [
            {
              size: 'h-230 w-230 md:w-245 md:h-245 lg:w-300 lg:h-300 1xl:w-350 1xl:h-350 2xl:w-390 2xl:h-390 3xl:w-430 3xl:h-430',
              opacity: 'opacity-30',
            },
            {
              size: 'h-180 w-180 md:w-195 md:h-195 lg:w-250 lg:h-250 1xl:w-290 1xl:h-290 2xl:w-330 2xl:h-330 3xl:w-370 3xl:h-370',
              opacity: 'opacity-40',
            },
            {
              size: 'h-130 w-130 md:w-145 md:h-145 lg:w-190 lg:h-190 1xl:w-230 1xl:h-230 2xl:w-260 2xl:h-260 3xl:w-300 3xl:h-300',
              opacity: 'opacity-45',
            },
            {
              size: 'h-80 w-80 md:w-95 md:h-95 lg:w-130 lg:h-130 1xl:w-160 1xl:h-160 2xl:w-190 2xl:h-190 3xl:w-230 3xl:h-230',
              opacity: 'opacity-60',
            },
          ],
        }
      : {
          position: 'top-12/25 m1x:top-49/100 m2x:top-12/25 m3x:top-23/50 md:top-14/25',
          rings: [
            {
              size: 'h-217 w-217 m1x:h-230 m1x:w-230 md:h-200 md:w-200 lg:h-240 lg:w-240 1xl:h-270 1xl:w-270 2xl:h-300 2xl:w-300 3xl:h-320 3xl:w-320',
              opacity: 'opacity-50',
            },
            {
              size: 'h-160 w-160 m1x:h-180 m1x:w-180 md:h-140 md:w-140 lg:h-160 lg:w-160 1xl:h-180 1xl:w-180 2xl:h-200 2xl:w-200 3xl:h-220 3xl:w-220',
              opacity: 'opacity-50',
            },
          ],
        }
  return (
    <div className={clsx('absolute z-0 h-full w-full overflow-clip')}>
      <div className={clsx('relative h-full w-full')}>
        {config.rings.map((ring, i) => (
          <div
            key={i}
            className={clsx(
              'border-warmgray/45 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border',
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
