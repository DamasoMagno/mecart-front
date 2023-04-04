import { ButtonHTMLAttributes, FC, ReactNode } from "react"

import { Container } from "./styles"

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  ghost?: boolean
  noButton?: boolean
}

export const Button: FC<ButtonProps> =
  ({ children, ...props }) => {
    return (
      <Container {...props}>
        {children}
      </Container>
    )
  }