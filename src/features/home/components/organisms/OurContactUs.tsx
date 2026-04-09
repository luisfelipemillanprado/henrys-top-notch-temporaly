import clsx from 'clsx'
import { ContactUs } from '../molecules/ContactUs'

/**
 * @description Renders the "Contact Us" section of the homepage, including a lead visual and a contact form.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the section.
 * @param {string} props.description - The description of the section.
 * @param {string} props.eyebrow - The eyebrow text of the section.
 * @param {string} props.image - The URL of the image representing the contact us section.
 * @param {object} props.contactForm - Configuration object for the contact form fields and notifications.
 * @param {object} props.contactForm.name - Configuration for the name field.
 * @param {string} props.contactForm.name.label - Label text for the name input.
 * @param {string} props.contactForm.name.placeholder - Placeholder text for the name input.
 * @param {string} props.contactForm.name.type - Input type for the name field (e.g. "text").
 * @param {boolean} props.contactForm.name.icon - Icon identifier rendered in the name input suffix.
 * @param {object} props.contactForm.email - Configuration for the email field.
 * @param {string} props.contactForm.email.label - Label text for the email input.
 * @param {string} props.contactForm.email.placeholder - Placeholder text for the email input.
 * @param {string} props.contactForm.email.type - Input type for the email field (e.g. "email").
 * @param {boolean} props.contactForm.email.icon - Icon identifier rendered in the email input suffix.
 * @param {object} props.contactForm.phone - Configuration for the phone field.
 * @param {string} props.contactForm.phone.label - Label text for the phone input.
 * @param {string} props.contactForm.phone.placeholder - Placeholder text for the phone input.
 * @param {string} props.contactForm.phone.type - Input type for the phone field (e.g. "tel").
 * @param {boolean} props.contactForm.phone.icon - Icon identifier rendered in the phone input suffix.
 * @param {object} props.contactForm.problemDescription - Configuration for the message / problem description textarea.
 * @param {string} props.contactForm.problemDescription.label - Label text for the textarea.
 * @param {string} props.contactForm.problemDescription.placeholder - Placeholder text for the textarea.
 * @param {number} props.contactForm.problemDescription.charactersLimit - Character limit for the textarea input.
 * @param {string} props.contactForm.confirmButton - Text shown on the confirm/submit button.
 * @param {object} props.contactForm.notifications - Notification payloads for success and error outcomes.
 * @param {object} props.contactForm.notifications.success - Success notification content.
 * @param {string} props.contactForm.notifications.success.description - Description for the success notification.
 * @param {object} props.contactForm.notifications.error - Error notification content.
 * @param {string} props.contactForm.notifications.error.description - Description for the error notification.
 * @returns {JSX.Element} The rendered "OurContactUs" component.
 */
export const OurContactUs = ({
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
    <section
      id={'contact-us'}
      aria-labelledby={'title'}
      role={'region'}
      className={clsx(
        'vertical w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:pt-24 md:pb-24',
        'lg:px-18 lg:pt-28 lg:pb-28',
        '1xl:px-29.5 1xl:pt-34 1xl:pb-34',
        '2xl:px-32 2xl:pt-36 2xl:pb-36'
      )}
    >
      <ContactUs
        title={title}
        description={description}
        eyebrow={eyebrow}
        image={image}
        contactForm={contactForm}
      />
    </section>
  )
}
