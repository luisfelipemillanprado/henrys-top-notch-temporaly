import {
  validateEmail,
  validateName,
  validatePhone,
} from '@/utils/validators/forms/contact-us/ContactUsValidator'
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

const iconStyles = clsx(
  'size-6',
  'animate-tada',
  'fill-bright-orange',
  'm1x:size-6.25',
  'm3x:size-6.5',
  'md:size-6.75',
  'lg:size-7',
  '1xl:size-6.75',
  '2xl:size-6.75',
  '3xl:size-7.25',
  '5xl:size-7.5'
)

/**
 * @description Maps a given icon identifier to its corresponding icon component for each text input field.
 * @private
 * @param {string} props.icon - The TextInputFieldIcon string identifier, icon enum.
 * @returns A rendering of the icon, or a fallback span if unknown.
 */
const iconSwitch = (icon: string) => {
  switch (icon) {
    case TextInputFieldIcon.USER:
      return <UserIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case TextInputFieldIcon.EMAIL:
      return <EnvelopeIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    case TextInputFieldIcon.PHONE:
      return <PhoneIcon aria-hidden={'true'} role={'img'} className={iconStyles} />
    default:
      return <span aria-label={'icon-none'}>?</span>
  }
}

/**
 * @description Selects the appropriate validation function based on the type of input field.
 * @private
 * @param {string} props.type - The TextInputFieldIcon string identifier, icon enum.
 * @return {function} The validation function corresponding to the input type, or undefined if unknown.
 */
const validatorSwitch = (type: string) => {
  switch (type) {
    case TextInputFieldIcon.USER:
      return validateName
    case TextInputFieldIcon.EMAIL:
      return validateEmail
    case TextInputFieldIcon.PHONE:
      return validatePhone
  }
}

/**
 * @description Renders a reusable validated text input field with label, suffix icon, and error handling for forms.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.name - The field name attribute.
 * @param {string} props.label - The visible field label.
 * @param {string} props.placeholder - The input placeholder text.
 * @param {string} props.type - The input type identifier.
 * @param {string} props.icon - The icon identifier rendered in the suffix.
 * @param {string} props.value - The current input value.
 * @param {(value: string) => void} props.onChange - Handles value updates from the input field.
 * @returns A labeled, validated text input with a suffix icon.
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
      validate={validatorSwitch(type)}
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
