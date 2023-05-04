import { FC, InputHTMLAttributes } from "react";
import { Icon } from "@phosphor-icons/react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: Icon;
}

export const Input: FC<InputProps> = 
  ({ icon: Icon, ...props }) => (
    <Container>
      {Icon && <Icon size={16} />}
      <input required {...props} />
    </Container>
  );
