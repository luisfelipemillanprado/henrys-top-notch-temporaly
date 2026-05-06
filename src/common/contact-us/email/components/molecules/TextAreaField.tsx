import { validateMessage } from '@/utils/validators/forms/contact-us/ContactUsValidator'
import { FieldError, Label, TextArea, TextField } from '@heroui/react'

/**
 * @description Renders a reusable textarea form field with label and validation, rendered inside a TextField wrapper.
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.name - The field name attribute.
 * @param {string} props.label - The visible field label.
 * @param {string} props.placeholder - The textarea placeholder text.
 * @param {number} props.charactersLimit - The max character count used for validation.
 * @param {string} props.value - The current textarea value.
 * @param {(value: string) => void} props.onChange - Handles value updates from the textarea field.
 * @returns A labeled, validated textarea form field.
 */
export const TextAreaField = (props: {
  name: string
  label: string
  placeholder: string
  charactersLimit: number
  value: string
  onChange: (value: string) => void
}) => {
  const { name, label, placeholder, charactersLimit, value, onChange } = props
  return (
    <TextField
      name={name}
      isRequired
      validate={validateMessage(charactersLimit)}
      onChange={(value) => onChange(value)}
    >
      <Label>{label}</Label>
      <TextArea placeholder={placeholder} rows={6} value={value} />
      <FieldError />
    </TextField>
  )
}
