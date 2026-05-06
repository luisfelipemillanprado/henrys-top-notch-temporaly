'use client'
import { QuaternaryTitle } from '@/common/titles/components/QuaternaryTitle'
import { ChevronDownIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Accordion } from '@heroui/react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

/**
 * @description Renders the "Why Choose Us" reasons as an accordion list.
 * @component
 * @param {object} props - Component properties.
 * @param {object[]} props.reasons - Accordion items rendered as reasons.
 * @param {string} props.reasons[].affirmation - Heading text for the accordion trigger.
 * @param {string} props.reasons[].resume - Body text displayed inside the accordion panel.
 * @param {number} props.reasons[].id - Unique key for each reason.
 * @returns Returns a client-rendered accordion with the provided reason entries.
 */
const ReasonsWithoutSSR = ({
  reasons,
}: {
  reasons: {
    affirmation: string
    resume: string
    id: number
  }[]
}) => {
  return (
    <Accordion
      hideSeparator={true}
      className={clsx('gap-y-6', 'm1x:gap-y-6.5', 'md:gap-y-7', 'lg:gap-y-8')}
    >
      {reasons.map((item) => (
        <Accordion.Item key={item.id} id={String(item.id)}>
          <Accordion.Heading>
            <Accordion.Trigger>
              <span className={'horizontal'}>
                <EllipsisVerticalIcon
                  aria-hidden={true}
                  className={clsx('size-6.5', 'fill-bright-orange', 'md:size-7')}
                />
              </span>
              <QuaternaryTitle title={item.affirmation} truncate={false} />
              <Accordion.Indicator>
                <span className={clsx('horizontal')}>
                  <ChevronDownIcon
                    aria-hidden={true}
                    role={'img'}
                    className={clsx('size-5', 'fill-bright-orange', 'md:size-6')}
                  />
                </span>
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>
              <p
                className={clsx(
                  'text-dimgray',
                  'text-[0.9375rem]',
                  'leading-7',
                  'm1x:text-base',
                  'm1x:leading-7.5',
                  '1xl:text-[1.0625rem]',
                  '1xl:leading-7.75',
                  '2xl:leading-8',
                  '3xl:text-lg',
                  '3xl:leading-8.5',
                  '5xl:text-[1.3125rem]',
                  '5xl:leading-9.5'
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
export const Reasons = dynamic(() => Promise.resolve(ReasonsWithoutSSR), { ssr: false })
