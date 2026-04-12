import { ActionHighlight } from '@/common/action-highlight/components/ActionHighlight'
import { GetStartedButton } from '@/common/call-to-action/components/GetStartedButton'
import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import clsx from 'clsx'

/**
 * @description Renders the main action buttons and highlight for the hero section of the home page.
 * @public
 * @param {object} props - Component properties.
 * @param {object} props.primaryCta - Configuration for the primary call-to-action button with text and href.
 * @param {string} props.primaryCta.text - Text for the primary call-to-action button.
 * @param {string} props.primaryCta.href - URL for the primary call-to-action button.
 * @param {object} props.secondaryCta - Configuration for the secondary call-to-action button with text and href.
 * @param {string} props.secondaryCta.text - Text for the secondary call-to-action button.
 * @param {string} props.secondaryCta.href - URL for the secondary call-to-action button.
 * @param {string[]} props.highlight - Array of strings for the highlighted action text.
 * @returns Rendering the call-to-action buttons and highlight.
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
        'horizontal relative mt-5 justify-center gap-x-4 pb-4.5',
        'm1x:gap-x-5',
        'm3x:gap-x-6',
        'md:ml-7 md:justify-start'
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
