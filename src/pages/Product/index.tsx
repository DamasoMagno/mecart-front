import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { IProduct } from "../../interfaces";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Content } from "./styles";

export function Product() {
  const navigate = useNavigate();
  const { cartId } = useParams();
  const [queryParams] = useSearchParams();
  const { register, handleSubmit } = useForm<IProduct>();

  console.log(cartId, queryParams.get("productId"));

  function registerProduct(data: IProduct) {
    const productsStoraged: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    const product: IProduct = {
      id: Math.random(),
      productName: data.productName,
      quantity: data.quantity,
      unity: data.unity,
      cartId: String(cartId),
    };

    productsStoraged.push(product);

    localStorage.setItem("@products", JSON.stringify(productsStoraged));

    navigate(`/cart/${cartId}`);
  }

  return (
    <>
      <Header title="Produto" route={`/cart/${cartId}`} />

      <Content onSubmit={handleSubmit(registerProduct)}>
        <Input
          placeholder="Nome"
          register={{ ...register("productName", { required: true }) }}
        />
        <Input
          placeholder="Quantitade"
          type="number"
          register={{ ...register("quantity", { required: true }) }}
        />
        <Input
          placeholder="Valor Unidade"
          type="number"
          register={{ ...register("unity", { required: true }) }}
        />

        <footer>
          <Button type="submit">Salvar produto</Button>
        </footer>
      </Content>
    </>
  );
}
