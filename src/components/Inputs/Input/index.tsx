import { ComponentProps, forwardRef } from 'react'

import { Field } from './styles'
import { BaseInput } from '../styles'

interface InputProps extends ComponentProps<'input'> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <BaseInput>
      {label && <label htmlFor={props.id}>{label}</label>}

      <Field>
        <input ref={ref} {...props} />
      </Field>
    </BaseInput>
  ),
)

Input.displayName = 'Input'
