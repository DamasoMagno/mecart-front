import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { VariantProps } from "@stitches/react";

import { Container } from "./styles";

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
