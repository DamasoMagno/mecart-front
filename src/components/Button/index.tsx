import { ButtonHTMLAttributes, FC, ReactNode, forwardRef } from "react";
import { VariantProps as VariantsProps } from "@stitches/react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: VariantsProps<typeof Container>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...props }, ref) => {
    return (
      <Container ref={ref} {...variant} {...props}>
        {children}
      </Container>
    );
  }
);
