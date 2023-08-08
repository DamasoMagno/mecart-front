import { FC, ReactNode } from "react";

import { Container } from "./styles";

interface HeaderProps {
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <Container>
      <div className="content">{children}</div>
    </Container>
  );
};
