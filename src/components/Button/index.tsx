import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { VariantProps as VariantsProps } from '@stitches/react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: VariantsProps<typeof Container>
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Container ref={ref} {...props.variant} {...props}>
        {props.children}
      </Container>
    )
  },
)

Button.displayName = 'Button'
