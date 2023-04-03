import { FC, InputHTMLAttributes } from "react"

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

import { Container } from "./styles"

export const Input: FC<InputProps> =
  ({ ...props }) => (
    <Container>
      <input {...props} />
    </Container>
  )