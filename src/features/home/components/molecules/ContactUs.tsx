import { ReusableButton } from '@/common/call-to-action/components/ReusableButton'
import { CircularDecoration } from '@/common/circular-decoration/components/CircularDecoration'
import { ContactForm } from '@/common/contact-us/email/components/organisms/ContactForm'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import clsx from 'clsx'

/**
 * @description Renders the "Contact Us" component, including a lead visual and a contact form.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the contact section.
 * @param {string} props.description - A brief description for the contact section.
 * @param {string} props.eyebrow - An eyebrow text to provide additional context.
 * @param {string} props.image - The URL of the lead visual image.
 * @param {object} props.contactForm - Configuration for the contact form.
 * @param {string} props.contactForm.name.label - The label for the name field.
 * @param {string} props.contactForm.name.placeholder - The placeholder for the name field.
 * @param {string} props.contactForm.name.type - The input type for the name field.
 * @param {string} props.contactForm.name.icon - The icon for the name field.
 * @param {string} props.contactForm.email.label - The label for the email field.
 * @param {string} props.contactForm.email.placeholder - The placeholder for the email field.
 * @param {string} props.contactForm.email.type - The input type for the email field.
 * @param {string} props.contactForm.email.icon - The icon for the email field.
 * @param {string} props.contactForm.phone.label - The label for the phone field.
 * @param {string} props.contactForm.phone.placeholder - The placeholder for the phone field.
 * @param {string} props.contactForm.phone.type - The input type for the phone field.
 * @param {string} props.contactForm.phone.icon - The icon for the phone field.
 * @param {object} props.contactForm.problemDescription - Configuration for the problem description field.
 * @param {string} props.contactForm.problemDescription.label - The label for the problem description field.
 * @param {string} props.contactForm.problemDescription.placeholder - The placeholder for the problem description field.
 * @param {number} props.contactForm.problemDescription.charactersLimit - The character limit for the problem description field.
 * @param {string} props.contactForm.primaryCta - The primary call-to-action text.
 * @param {object} props.contactForm.notifications - Configuration for form notifications.
 * @param {object} props.contactForm.notifications.success - Configuration for success notifications.
 * @param {string} props.contactForm.notifications.success.description - The description for success notifications.
 * @param {object} props.contactForm.notifications.error - Configuration for error notifications.
 * @param {string} props.contactForm.notifications.error.description - The description for error notifications.
 * @returns {JSX.Element} The rendered "Contact Us" component.
 */
export const ContactUs = ({
  title,
  description,
  eyebrow,
  image,
  primaryCta,
  contactForm,
}: {
  title: string
  description: string
  eyebrow: string
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
    }
  }
}) => {
  return (
    <div
      className={clsx(
        'vertical w-full items-center gap-y-8.5',
        'm1x:gap-y-9',
        'md:gap-y-18',
        'lg:gap-y-22'
      )}
    >
      <div
        className={clsx(
          'vertical w-full items-start gap-y-8',
          'm3x:gap-y-8.75',
          'md:gap-y-11',
          'lg:gap-y-12'
        )}
      >
        <LeadVisual image={image} changeBackground={true} />
        <div
          className={clsx(
            'vertical w-full items-center gap-y-8 px-2',
            'm1x:gap-y-8.75',
            'm3x:gap-y-9.5',
            'md:bg-off-white md:border-electric-blue/30 md:items-start md:rounded-3xl md:border md:p-8 md:shadow-md',
            'lg:p-10'
          )}
        >
          <SectionHeader title={title} description={description} eyebrow={eyebrow} />
          <ReusableButton text={primaryCta.text} href={primaryCta.href} endIcon={true} />
        </div>
      </div>
      <div
        className={clsx('horizontal relative w-full overflow-hidden rounded-3xl', 'md:w-140', 'lg:w-170')}
      >
        <CircularDecoration rings={4} />
        <ContactForm contactForm={contactForm} />
      </div>
    </div>
  )
}
