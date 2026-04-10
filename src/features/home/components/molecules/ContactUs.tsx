import { ContactForm } from '@/common/contact-us/email/components/organisms/ContactForm'
import { LeadVisual } from '@/common/lead-visual/components/LeadVisual'
import { SectionHeader } from '@/common/section-header/components/SectionHeader'
import { CircularDecoration } from '@/features/home/components/atoms/CircularDecoration'
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
  contactForm,
}: {
  title: string
  description: string
  eyebrow: string
  image: string
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
    <div className={clsx('vertical w-full items-center gap-y-8.5', 'm1x:gap-y-9')}>
      <div className={clsx('vertical w-full items-start gap-y-8', 'm3x:gap-y-8.75')}>
        <LeadVisual image={image} changeBackground />
        <SectionHeader title={title} description={description} eyebrow={eyebrow} />
      </div>
      <div className={clsx('horizontal relative w-full overflow-hidden rounded-3xl')}>
        <CircularDecoration rings={3} changeColor />
        <ContactForm contactForm={contactForm} />
      </div>
    </div>
  )
}
