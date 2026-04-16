import { ContactUs } from '@/features/home/components/molecules/ContactUs'
import { layoutAssets } from '@/utils/data/static/global/layout'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { image } = homeAssets.contactUs
const { contactForm: contactFormAssets } = layoutAssets

/**
 * @description Renders the "Contact Us" section of the homepage, including a lead visual and a contact form.
 * @public
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 * @property {string} eyebrow - The eyebrow text of the section.
 * @property {string} image - The URL of the image representing the contact us section.
 * @property {object} contactForm - Configuration object for the contact form fields and notifications.
 * @property {object} contactForm.name - Configuration for the name field.
 * @property {string} contactForm.name.label - Label text for the name input.
 * @property {string} contactForm.name.placeholder - Placeholder text for the name input.
 * @property {string} contactForm.name.type - Input type for the name field (e.g. "text").
 * @property {boolean} contactForm.name.icon - Icon identifier rendered in the name input suffix.
 * @property {object} contactForm.email - Configuration for the email field.
 * @property {string} contactForm.email.label - Label text for the email input.
 * @property {string} contactForm.email.placeholder - Placeholder text for the email input.
 * @property {string} contactForm.email.type - Input type for the email field (e.g. "email").
 * @property {boolean} contactForm.email.icon - Icon identifier rendered in the email input suffix.
 * @property {object} contactForm.phone - Configuration for the phone field.
 * @property {string} contactForm.phone.label - Label text for the phone input.
 * @property {string} contactForm.phone.placeholder - Placeholder text for the phone input.
 * @property {string} contactForm.phone.type - Input type for the phone field (e.g. "tel").
 * @property {boolean} contactForm.phone.icon - Icon identifier rendered in the phone input suffix.
 * @property {object} contactForm.problemDescription - Configuration for the message / problem description textarea.
 * @property {string} contactForm.problemDescription.label - Label text for the textarea.
 * @property {string} contactForm.problemDescription.placeholder - Placeholder text for the textarea.
 * @property {number} contactForm.problemDescription.charactersLimit - Character limit for the textarea input.
 * @property {string} contactForm.confirmButton - Text shown on the confirm/submit button.
 * @property {object} contactForm.notifications - Notification payloads for success and error outcomes.
 * @property {object} contactForm.notifications.success - Success notification content.
 * @property {string} contactForm.notifications.success.description - Description for the success notification.
 * @property {object} contactForm.notifications.error - Error notification content.
 * @property {string} contactForm.notifications.error.description - Description for the error notification.
 * @returns {JSX.Element} The rendered "OurContactUs" component.
 */
export const OurContactUs = () => {
  const tContact = useTranslations('home.our-contact-us')
  const tForm = useTranslations('contact-form')
  const title = tContact('title')
  const description = tContact('description')
  const eyebrow = tContact('eyebrow')
  const contactForm = {
    name: {
      label: tForm('name.label'),
      placeholder: tForm('name.placeholder'),
      type: contactFormAssets.fields[0].type,
      icon: contactFormAssets.fields[0].icon,
    },
    email: {
      label: tForm('email.label'),
      placeholder: tForm('email.placeholder'),
      type: contactFormAssets.fields[1].type,
      icon: contactFormAssets.fields[1].icon,
    },
    phone: {
      label: tForm('phone.label'),
      placeholder: tForm('phone.placeholder'),
      type: contactFormAssets.fields[2].type,
      icon: contactFormAssets.fields[2].icon,
    },
    problemDescription: {
      label: tForm('problemDescription.label'),
      placeholder: tForm('problemDescription.placeholder'),
      charactersLimit: contactFormAssets.problemDescription.charactersLimit,
    },
    primaryCta: tForm('primaryCta'),
    notifications: {
      success: { description: tForm('notifications.success.description') },
      error: { description: tForm('notifications.error.description') },
    },
  }
  return (
    <section
      id={'contact-us'}
      aria-labelledby={title}
      role={'region'}
      className={clsx(
        'vertical w-full px-5.5 pt-12 pb-11 shadow-2xs',
        'm3x:pb-12.5 m3x:px-5.75',
        'm4x:px-6',
        'md:px-13 md:py-20',
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
