import { FC, InputHTMLAttributes } from "react";
import { Icon } from "@phosphor-icons/react";

import { Container } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: Icon;
  register?: UseFormRegisterReturn;
}

export const Input: FC<InputProps> = ({ icon: Icon, register, ...props }) => (
  <Container>
    {Icon && <Icon size={16} />}
    <input {...register} {...props} />
  </Container>
);
