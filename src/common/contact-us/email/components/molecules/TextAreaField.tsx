import { validateMessage } from '@/utils/validators/forms/contact-us/ContactUsValidator'
import { Label, TextArea, TextField } from '@heroui/react'

/**
 * @description Renders a reusable textarea form field with label and validation, rendered inside a TextField wrapper.
 * @public
 * @param {object} props - Component properties.
 * @param {string} props.name - Field name used by the form controller.
 * @param {string} props.label - Visible label text displayed above the textarea.
 * @param {string} props.placeholder - Placeholder text displayed inside the textarea.
 * @param {number} props.charactersLimit - Maximum allowed characters for the textarea input, used in validation.
 * @param {string} props.value - Current value of the textarea.
 * @param {function} props.onChange - Callback function to handle changes to the textarea value.
 * @returns {JSX.Element} A labeled, validated textarea form field.
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
    <TextField name={name} validate={validateMessage(charactersLimit)} onChange={(value) => onChange(value)}>
      <Label>{label}</Label>
      <TextArea placeholder={placeholder} rows={6} value={value} />
    </TextField>
  )
}
