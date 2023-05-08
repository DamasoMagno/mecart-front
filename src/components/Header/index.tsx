import { FC } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface HeaderProps {
  title: string;
  route: string;
}

export const Header: FC<HeaderProps> = ({ title, route }) => {
  return (
    <Container>
      <div className="content">
        <Link to={route}>
          <CaretLeft />
        </Link>

        <h3>{title}</h3>
      </div>
    </Container>
  );
};
