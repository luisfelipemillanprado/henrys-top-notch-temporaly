import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { CircularDecoration } from '@/common/circular-decoration/components/CircularDecoration'
import { ContactForm } from '@/common/contact-us/email/components/organisms/ContactForm'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import clsx from 'clsx'

/**
 * @description Renders the contact section composition with header content, lead visual, and form.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - Section heading text.
 * @param {string} props.description - Section description text.
 * @param {string} props.eyebrow - Eyebrow/overline label text.
 * @param {string} props.titleId - Deterministic heading id used by accessibility attributes.
 * @param {string} props.image - Lead visual image URL.
 * @param {object} props.primaryCta - Primary action configuration.
 * @param {string} props.primaryCta.text - Primary button text label.
 * @param {string} props.primaryCta.href - Primary button destination URL.
 * @param {object} props.contactForm - Contact form configuration payload.
 * @param {object} props.contactForm.name - Name field settings (label, placeholder, type, icon).
 * @param {string} props.contactForm.name.label - Field label.
 * @param {string} props.contactForm.name.placeholder - Field placeholder.
 * @param {string} props.contactForm.name.type - Field input type.
 * @param {string} props.contactForm.name.icon - Field icon.
 * @param {object} props.contactForm.email - Email field settings (label, placeholder, type, icon).
 * @param {string} props.contactForm.email.label - Field label.
 * @param {string} props.contactForm.email.placeholder - Field placeholder.
 * @param {string} props.contactForm.email.type - Field input type.
 * @param {string} props.contactForm.email.icon - Field icon.
 * @param {object} props.contactForm.phone - Phone field settings (label, placeholder, type, icon).
 * @param {string} props.contactForm.phone.label - Field label.
 * @param {string} props.contactForm.phone.placeholder - Field placeholder.
 * @param {string} props.contactForm.phone.type - Field input type.
 * @param {string} props.contactForm.phone.icon - Field icon.
 * @param {object} props.contactForm.problemDescription - Message field settings and limits.
 * @param {string} props.contactForm.problemDescription.label - Textarea label.
 * @param {string} props.contactForm.problemDescription.placeholder - Textarea placeholder.
 * @param {number} props.contactForm.problemDescription.charactersLimit - Character limit.
 * @param {string} props.contactForm.primaryCta - Submission button text.
 * @param {object} props.contactForm.notifications - Success and error notification content.
 * @param {object} props.contactForm.notifications.success - Success notification object.
 * @param {string} props.contactForm.notifications.success.description - Success message.
 * @param {object} props.contactForm.notifications.error - Error notification object.
 * @param {string} props.contactForm.notifications.error.description - Error message.
 * @param {object} props.contactForm.notifications.rateLimit - Rate limit notification object.
 * @param {string} props.contactForm.notifications.rateLimit.description - Rate limit message.
 * @returns A responsive contact section layout with visual, header, and form.
 */
export const ContactUs = ({
  title,
  description,
  eyebrow,
  titleId,
  image,
  primaryCta,
  contactForm,
}: {
  title: string
  description: string
  eyebrow: string
  titleId: string
  image: string
  primaryCta: { text: string; href: string }
  contactForm: {
    name: { label: string; placeholder: string; type: string; icon: string }
    email: { label: string; placeholder: string; type: string; icon: string }
    phone: { label: string; placeholder: string; type: string; icon: string }
    problemDescription: {
      label: string
      placeholder: string
      charactersLimit: number
    }
    primaryCta: string
    notifications: {
      success: { description: string }
      error: { description: string }
      rateLimit: { description: string }
    }
  }
}) => {
  return (
    <div
      className={clsx(
        'vertical',
        'w-full',
        'items-center',
        'gap-y-8.5',
        'm1x:gap-y-9',
        'md:gap-y-18',
        'lg:gap-y-22'
      )}
    >
      <div
        className={clsx(
          'vertical',
          'w-full',
          'items-start',
          'gap-y-8',
          'm3x:gap-y-9',
          'md:gap-y-11',
          'lg:gap-y-12'
        )}
      >
        <LeadVisual image={image} changeBackground={true} />
        <div
          className={clsx(
            'vertical',
            'w-full',
            'items-center',
            'gap-y-7',
            'px-2',
            'm1x:gap-y-8',
            'md:items-start',
            'md:bg-off-white',
            'md:border',
            'md:border-electric-blue/30',
            'md:rounded-3xl',
            'md:shadow-md',
            'md:p-8',
            'lg:p-10'
          )}
        >
          <SectionHeader title={title} description={description} eyebrow={eyebrow} titleId={titleId} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
        </div>
      </div>
      <div
        className={clsx(
          'horizontal',
          'relative',
          'w-full',
          'overflow-hidden',
          'rounded-3xl',
          'md:max-w-140',
          'lg:max-w-170'
        )}
      >
        <CircularDecoration rings={4} />
        <ContactForm contactForm={contactForm} />
      </div>
    </div>
  )
}
