'use client'
import { ContactFormButton } from '@/common/call-to-action/components/ContactFormButton'
import { TextAreaField } from '@/common/contact-us/email/components/molecules/TextAreaField'
import { TextInputField } from '@/common/contact-us/email/components/molecules/TextInputField'
import { useContactEmail } from '@/utils/hooks/emails/contact-us/useContactEmail'
import clsx from 'clsx'
import { SyntheticEvent, useState } from 'react'

/**
 * @description Renders a contact form with configurable fields for name, email and a message/description.
 * @public
 * @param {object} props - Component properties.
 * @param {object} props.contactForm - Configuration object for the contact form fields and notifications.
 * @param {object} props.contactForm.name - Configuration for the name field.
 * @param {string} props.contactForm.name.label - Label text for the name input.
 * @param {string} props.contactForm.name.placeholder - Placeholder text for the name input.
 * @param {string} props.contactForm.name.type - Input type for the name field (e.g. "text").
 * @param {string} props.contactForm.name.icon - Icon identifier rendered in the name input suffix.
 * @param {object} props.contactForm.email - Configuration for the email field.
 * @param {string} props.contactForm.email.label - Label text for the email input.
 * @param {string} props.contactForm.email.placeholder - Placeholder text for the email input.
 * @param {string} props.contactForm.email.type - Input type for the email field (e.g. "email").
 * @param {string} props.contactForm.email.icon - Icon identifier rendered in the email input suffix.
 * @param {object} props.contactForm.phone - Configuration for the phone field.
 * @param {string} props.contactForm.phone.label - Label text for the phone input.
 * @param {string} props.contactForm.phone.placeholder - Placeholder text for the phone input.
 * @param {string} props.contactForm.phone.type - Input type for the phone field (e.g. "tel").
 * @param {string} props.contactForm.phone.icon - Icon identifier rendered in the phone input suffix.
 * @param {object} props.contactForm.problemDescription - Configuration for the message / problem description textarea.
 * @param {string} props.contactForm.problemDescription.label - Label text for the textarea.
 * @param {string} props.contactForm.problemDescription.placeholder - Placeholder text for the textarea.
 * @param {number} props.contactForm.problemDescription.charactersLimit - Character limit for the textarea input.
 * @param {string} props.contactForm.primaryCta - Text shown on the primary call-to-action button.
 * @param {object} props.contactForm.notifications - Notification payloads for success and error outcomes.
 * @param {object} props.contactForm.notifications.success - Success notification content.
 * @param {string} props.contactForm.notifications.success.description - Description for the success notification.
 * @param {object} props.contactForm.notifications.error - Error notification content.
 * @param {string} props.contactForm.notifications.error.description - Description for the error notification.
 * @returns {JSX.Element} The rendered contact form component.
 */
export const ContactForm = ({
  contactForm,
}: {
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
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  })
  const send = useContactEmail(() => {
    setForm({ name: '', email: '', phone: '', description: '' })
  })
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    {
      send({
        name: form.name,
        email: form.email,
        phone: form.phone,
        description: form.description,
        notifications: contactForm.notifications,
      }).finally(() => setIsLoading(false))
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        'vertical bg-off-white border-warmgray/30 w-full gap-y-6.25 rounded-3xl border p-5.5 shadow-md',
        'm1x:p-6',
        'm3x:gap-y-6.75',
        'md:gap-y-8 md:px-10.5',
        'lg:px-11.75',
        '1xl:px-13 1xl:gap-y-9',
        '2xl:px-16.5',
        '3xl:px-16 3xl:gap-y-10.5'
      )}
    >
      <TextInputField
        name={contactForm.name.label}
        label={contactForm.name.label}
        placeholder={contactForm.name.placeholder}
        type={contactForm.name.type}
        icon={contactForm.name.icon}
        value={form.name}
        onChange={(value: string) =>
          setForm((prev) => ({
            ...prev,
            name: value,
          }))
        }
      />
      <TextInputField
        name={contactForm.email.label}
        label={contactForm.email.label}
        placeholder={contactForm.email.placeholder}
        type={contactForm.email.type}
        icon={contactForm.email.icon}
        value={form.email}
        onChange={(value: string) =>
          setForm((prev) => ({
            ...prev,
            email: value,
          }))
        }
      />
      <TextInputField
        name={contactForm.phone.label}
        label={contactForm.phone.label}
        placeholder={contactForm.phone.placeholder}
        type={contactForm.phone.type}
        icon={contactForm.phone.icon}
        value={form.phone}
        onChange={(value: string) =>
          setForm((prev) => ({
            ...prev,
            phone: value,
          }))
        }
      />
      <TextAreaField
        name={contactForm.problemDescription.label}
        label={contactForm.problemDescription.label}
        placeholder={contactForm.problemDescription.placeholder}
        charactersLimit={contactForm.problemDescription.charactersLimit}
        value={form.description}
        onChange={(value: string) =>
          setForm((prev) => ({
            ...prev,
            description: value,
          }))
        }
      />
      <div
        className={clsx(
          'horizontal mt-4.5 w-full justify-center',
          'md:mt-5',
          'lg:mt-5.5',
          '1xl:mt-6',
          '3xl:mt-7'
        )}
      >
        <ContactFormButton text={contactForm.primaryCta} isLoading={isLoading} />
      </div>
    </form>
  )
}
