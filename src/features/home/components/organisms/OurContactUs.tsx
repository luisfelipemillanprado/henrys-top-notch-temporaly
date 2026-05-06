import { ContactUs } from '@/features/home/components/molecules/ContactUs'
import { layoutAssets } from '@/utils/data/static/global/layout'
import { homeAssets } from '@/utils/data/static/pages/home'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const { sectionId, headingId, image, primaryCtaHref } = homeAssets.contactUs
const { contactForm: contactFormAssets } = layoutAssets

/**
 * @description Renders the "Contact Us" section, integrating a localized lead visual,
 * descriptive content, and a fully configured contact form.
 * @component
 * @param {object} props - Component properties derived from internal translations and layout assets.
 * @param {string} props.title - The localized main title for the contact section.
 * @param {string} props.description - Localized text inviting users to get in touch.
 * @param {string} props.eyebrow - A short localized accent label above the title.
 * @param {string} props.image - The URL of the lead visual image.
 * @param {object} props.primaryCta - Configuration for the contact action.
 * @param {string} props.primaryCta.text - Localized label for the primary action button.
 * @param {string} props.primaryCta.href - Destination URL or anchor for the action.
 * @param {object} props.contactForm - Form configuration payload.
 * @param {object} props.contactForm.name - Name field settings.
 * @param {string} props.contactForm.name.label - Localized label for the name field.
 * @param {string} props.contactForm.name.placeholder - Localized placeholder for the name field.
 * @param {string} props.contactForm.name.type - Input type for the name field.
 * @param {ElementType} props.contactForm.name.icon - Visual icon rendered for the name field.
 * @param {object} props.contactForm.email - Email field settings.
 * @param {string} props.contactForm.email.label - Localized label for the email field.
 * @param {string} props.contactForm.email.placeholder - Localized placeholder for the email field.
 * @param {string} props.contactForm.email.type - Input type for the email field.
 * @param {ElementType} props.contactForm.email.icon - Visual icon rendered for the email field.
 * @param {object} props.contactForm.phone - Phone field settings.
 * @param {string} props.contactForm.phone.label - Localized label for the phone field.
 * @param {string} props.contactForm.phone.placeholder - Localized placeholder for the phone field.
 * @param {string} props.contactForm.phone.type - Input type for the phone field.
 * @param {ElementType} props.contactForm.phone.icon - Visual icon rendered for the phone field.
 * @param {object} props.contactForm.problemDescription - Problem description field settings.
 * @param {string} props.contactForm.problemDescription.label - Localized label for the message field.
 * @param {string} props.contactForm.problemDescription.placeholder - Localized placeholder for the message field.
 * @param {number} props.contactForm.problemDescription.charactersLimit - Maximum number of allowed characters.
 * @param {string} props.contactForm.primaryCta - Localized text for the form submission button.
 * @param {object} props.contactForm.notifications - Notification messages shown after submission.
 * @param {object} props.contactForm.notifications.success - Success notification payload.
 * @param {string} props.contactForm.notifications.success.description - Localized success message description.
 * @param {object} props.contactForm.notifications.error - Error notification payload.
 * @param {string} props.contactForm.notifications.error.description - Localized error message description.
 * @returns Returns a contact section with localized copy, lead visual, CTA, and configured form.
 */
export const OurContactUs = () => {
  const tContact = useTranslations('home.our-contact-us')
  const tForm = useTranslations('contact-form')
  const title = tContact('title')
  const description = tContact('description')
  const eyebrow = tContact('eyebrow')
  const primaryCta = {
    text: tContact('primaryCta.text'),
    href: primaryCtaHref,
  }
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
      rateLimit: { description: tForm('notifications.rateLimit.description') },
    },
  }
  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      role={'region'}
      className={clsx(
        'vertical',
        'w-full',
        'bg-primary',
        'shadow-2xs',
        'px-5.5',
        'pt-12',
        'pb-11',
        'm3x:px-5.75',
        'm3x:pb-12.5',
        'm4x:px-6',
        'md:px-13',
        'md:py-20',
        'lg:py-24',
        '1xl:px-29.5',
        '1xl:pt-34',
        '1xl:pb-34',
        '2xl:px-32',
        '2xl:pt-36',
        '2xl:pb-36'
      )}
    >
      <ContactUs
        title={title}
        description={description}
        eyebrow={eyebrow}
        titleId={headingId}
        image={image}
        primaryCta={primaryCta}
        contactForm={contactForm}
      />
    </section>
  )
}
