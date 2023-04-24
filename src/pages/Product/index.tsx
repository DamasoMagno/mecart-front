import { CaretLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Content, Header } from "./styles";

export function Product() {
  return (
    <>
      <Header>
        <Link to="/history">
          <CaretLeft />
        </Link>
        <h3>Produto</h3>
        <div />
      </Header>

      <Content>
        <Input placeholder="Nome" />
        <Input placeholder="Quantitade" />
        <Input placeholder="Valor Unidade" />

        <Button>Salvar produto</Button>
      </Content>
    </>
  );
}
