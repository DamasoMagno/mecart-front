import { FC, ReactNode } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface HeaderProps {
  title: string;
  route: string;
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ title, route, children }) => {
  return (
    <Container>
      <div className="content">
        <div>
          <Link to={route}>
            <CaretLeft />
          </Link>
          <h3>{title}</h3>
        </div>

        {children}
      </div>
    </Container>
  );
};
