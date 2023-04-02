import { Component, FC, InputHTMLAttributes } from "react"
import { Icon, IconProps } from "@phosphor-icons/react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: Component<Icon>
}

import { Container } from "./styles"

export const Input: FC<InputProps> =
  ({ icon: Icon, ...props }) => (
    <Container>
      {Icon}
      <input {...props} />
    </Container>
  )