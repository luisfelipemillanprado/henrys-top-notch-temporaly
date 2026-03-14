import { ActionHighlight } from '@/common/action-highlight/components/ActionHighlight'
import { GetStartedButton } from '@/common/call-to-action/components/GetStartedButton'
import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import clsx from 'clsx'

/**
 * @description Renders the main call-to-action section featuring a primary "Get Started" button.
 * @public
 * @param {object} props - Component properties.
 * @param {object} callToAction.reusableButton - Config for the reusable button.
 * @param {string[]} callToAction.reusableButton.text - Array of texts; first element used.
 * @param {string[]} callToAction.reusableButton.href - Array of URLs; first element used.
 * @param {object} callToAction.getStartedButton - Config for the "Get Started" button.
 * @param {string[]} callToAction.getStartedButton.text - Array of texts; first element used.
 * @param {string[]} callToAction.getStartedButton.href - Array of URLs; first element used.
 * @param {object} callToAction.actionHighlight - Config for the highlighted action text.
 * @param {string} callToAction.actionHighlight.firstText - The first part of the highlighted text.
 * @param {string} callToAction.actionHighlight.secondText - The second part of the highlighted text.
 * @returns {JSX.Element} Rendering the call-to-action buttons and highlight.
 */
export const MainActions = (props: {
  callToAction: {
    reusableButton: { text: string[]; href: string[] }
    getStartedButton: { text: string[]; href: string[] }
    actionHighlight: { firstText: string; secondText: string }
  }
}) => {
  const { callToAction } = props
  return (
    <div
      className={clsx(
        'horizontal relative mt-6 justify-center gap-x-4 pb-4',
        'm1x:gap-x-5',
        'md:ml-7 md:justify-start'
      )}
    >
      <GetStartedButton
        text={callToAction.getStartedButton.text[0]}
        href={callToAction.getStartedButton.href[0]}
        hidden={false}
      />
      <ReusableButton
        text={callToAction.reusableButton.text[0]}
        href={callToAction.reusableButton.href[0]}
        icon={true}
        colorChange={false}
        noAnimation={true}
      />
      <ActionHighlight
        firstText={callToAction.actionHighlight.firstText}
        secondText={callToAction.actionHighlight.secondText}
        firstChangePosition
      />
    </div>
  )
}
