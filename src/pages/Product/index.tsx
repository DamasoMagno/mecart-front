import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Content } from "./styles";

export function Product() {
  return (
    <>
      <Header title="Produto" route="/history" />

      <Content>
        <Input placeholder="Nome" />
        <Input placeholder="Quantitade" type="number" />
        <Input placeholder="Valor Unidade" type="number" />

        <footer>
          <Button>Salvar produto</Button>
        </footer>
      </Content>
    </>
  );
}
