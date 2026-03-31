import { QuaternaryTitle } from '@/common/titles/components/QuaternaryTitle'
import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Accordion } from '@heroui/react'
import clsx from 'clsx'

export const Reasons = ({
  reasons,
}: {
  reasons: {
    affirmation: string
    resume: string
    id: number
  }[]
}) => {
  return (
    <Accordion>
      {reasons.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger>
              <span className={'horizontal'}>
                <EllipsisVerticalIcon
                  aria-hidden={true}
                  role={'img'}
                  className={clsx(
                    'fill-bright-orange size-6.25',
                    'm1x:size-6.5',
                    'md:size-6.75',
                    '2xl:size-7',
                    '3xl:size-7.5',
                    '5xl:size-8.5'
                  )}
                />
              </span>
              <QuaternaryTitle title={item.affirmation} truncate={false} />
              <Accordion.Indicator>
                <span className={clsx('horizontal')}>
                  <ChevronDownIcon
                    aria-hidden={true}
                    role={'img'}
                    className={clsx(
                      'fill-bright-orange size-4.5',
                      'm1x:size-5',
                      '1xl:size-5.25',
                      '2xl:size-5.5',
                      '3xl:size-6',
                      '5xl:size-7'
                    )}
                  />
                </span>
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>
              <p
                className={clsx(
                  'text-dimgray text-[0.9375rem] leading-7',
                  'm1x:text-base m1x:leading-7.5',
                  '1xl:text-[1.0625rem] 1xl:leading-7.75',
                  '2xl:leading-8',
                  '3xl:text-lg 3xl:leading-8.5',
                  '5xl:text-[1.3125rem] 5xl:leading-9.5'
                )}
              >
                {item.resume}
              </p>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
