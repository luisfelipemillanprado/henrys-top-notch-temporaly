import { ActionHighlight } from '@/common/action-highlight/components/ActionHighlight'
import { GetStartedButton } from '@/common/call-to-action/components/GetStartedButton'
import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import clsx from 'clsx'

/**
 * @description Renders the primary action cluster in the hero section, combining CTA buttons and a text highlight.
 * @component
 * @param {object} props - Component properties.
 * @param {object} props.primaryCta - Configuration for the primary CTA button.
 * @param {string} props.primaryCta.text - The text displayed on the primary call-to-action button.
 * @param {string} props.primaryCta.href - The URL that the primary call-to-action button links to.
 * @param {object} props.secondaryCta - Configuration for the secondary CTA button.
 * @param {string} props.secondaryCta.text - The text displayed on the secondary call-to-action button.
 * @param {string} props.secondaryCta.href - The URL that the secondary call-to-action button links to.
 * @param {string[]} props.highlight - An array of localized strings used for the action highlight.
 * @returns A responsive action row with both buttons and the highlight label.
 */
export const MainActions = ({
  primaryCta,
  secondaryCta,
  highlight,
}: {
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
  highlight: string[]
}) => {
  return (
    <div
      className={clsx(
        'horizontal',
        'relative',
        'justify-center',
        'mt-4.5',
        'pb-5',
        'gap-x-4',
        'm1x:gap-x-5',
        'm3x:gap-x-6',
        'md:justify-start',
        '1xl:mt-6'
      )}
    >
      <GetStartedButton text={primaryCta.text} href={primaryCta.href} hidden={false} />
      <ReusableButton
        text={secondaryCta.text}
        href={secondaryCta.href}
        startIcon={true}
        secondColor={false}
        noAnimation={true}
        float={false}
      />
      <ActionHighlight firstText={highlight[0]} secondText={highlight[1]} firstChangePosition />
    </div>
  )
}
