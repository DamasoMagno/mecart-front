import { FC, InputHTMLAttributes } from "react";
import { Ref, UseFormRegisterReturn } from "react-hook-form";
import { Icon } from "@phosphor-icons/react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: Icon;
  register?: UseFormRegisterReturn;
}

export const Input: FC<InputProps> = ({
  icon: Icon,
  label,
  register,
  ...props
}) => (
  <Container>
    {label && <label htmlFor={props.id}>{label}</label>}
    <div className="field">
      {Icon && <Icon size={16} />}
      <input {...register} {...props} />
    </div>
  </Container>
);
