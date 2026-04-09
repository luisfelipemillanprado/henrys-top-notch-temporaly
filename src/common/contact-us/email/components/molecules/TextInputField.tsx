import { validateEmail, validateName } from '@/utils/validators/forms/contact-us/ContactUsValidator'
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid'
import { FieldError, InputGroup, Label, TextField } from '@heroui/react'
import clsx from 'clsx'

/**
 * @description Enum representing the different icons used in the text input fields.
 * @private
 * @property {string} USER  -Icon for user input fields, such as name or username.
 * @property {string} EMAIL -Icon for email input fields, indicating email address input.
 * @property {string} PHONE -Icon for phone number input fields, indicating telephone number input.
 */
enum TextInputFieldIcon {
  USER = 'user',
  EMAIL = 'email',
  PHONE = 'phone',
}

/**
 * @description Maps a given icon identifier to its corresponding icon component for each text input field.
 * @private
 * @param {string} icon - The TextInputFieldIcon string identifier, icon enum.
 * @returns {JSX.Element} A rendering the icon, or a fallback span if unknown.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case TextInputFieldIcon.USER:
      return (
        <UserIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-secondary size-6',
            '1xl:size-6.25',
            '2xl:size-6.75',
            '3xl:size-7.25',
            '5xl:size-7.5'
          )}
        />
      )
    case TextInputFieldIcon.EMAIL:
      return (
        <EnvelopeIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-secondary size-6',
            '1xl:size-6.25',
            '2xl:size-6.75',
            '3xl:size-7.25',
            '5xl:size-7.5'
          )}
        />
      )
    case TextInputFieldIcon.PHONE:
      return (
        <PhoneIcon
          aria-hidden={'true'}
          role={'img'}
          className={clsx(
            'fill-secondary size-6',
            '1xl:size-6.25',
            '2xl:size-6.75',
            '3xl:size-7.25',
            '5xl:size-7.5'
          )}
        />
      )
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Renders a reusable validated text input field with label, suffix icon, and error handling for forms.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.name - Field name passed to the form controller.
 * @param {string} props.label - Visible label text displayed above the input.
 * @param {string} props.placeholder - Placeholder text shown inside the input.
 * @param {string} props.type - Input type (`text`, `email`, etc.), controls validation logic.
 * @param {string} props.icon - Icon identifier string, determines which icon to render in the input suffix.
 * @param {string} props.value - Current value of the input field, controlled by parent component.
 * @param {function} props.onChange - Callback function invoked with new value when input changes.
 * @returns {JSX.Element} A labeled, validated text input with a suffix icon.
 */
export const TextInputField = ({
  name,
  label,
  placeholder,
  type,
  icon,
  value,
  onChange,
}: {
  name: string
  label: string
  placeholder: string
  type: string
  icon: string
  value: string
  onChange: (value: string) => void
}) => {
  return (
    <TextField
      name={name}
      type={type}
      isRequired
      validate={type === 'email' ? validateEmail : validateName}
      onChange={(value) => onChange(value)}
    >
      <Label>{label}</Label>
      <InputGroup>
        <InputGroup.Input value={value} placeholder={placeholder} />
        <InputGroup.Suffix>
          <span className={clsx('horizontal')}>{iconSwitch(icon)}</span>
        </InputGroup.Suffix>
      </InputGroup>
      <FieldError />
    </TextField>
  )
}
