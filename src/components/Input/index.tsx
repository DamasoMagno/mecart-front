import { ComponentProps, FC, forwardRef } from "react";
import { Icon } from "@phosphor-icons/react";

import { Container } from "./styles";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  icon?: Icon;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, ...props }, ref) => (
    <Container>
      {label && <label htmlFor={props.id}>{label}</label>}

      <div className="field">
        {Icon && <Icon size={16} />}
        <input ref={ref} {...props} />
      </div>
    </Container>
  )
);
