import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { Container } from "./styles";
import { VariantProps } from "@stitches/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: VariantProps<typeof Container>;
}

export const Button: FC<ButtonProps> = ({ children, variant, ...props }) => {
  return (
    <Container {...variant} {...props}>
      {children}
    </Container>
  );
};
