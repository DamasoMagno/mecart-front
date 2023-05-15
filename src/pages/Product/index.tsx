import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { ICart, IProduct } from "../../interfaces";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Content } from "./styles";

export function Product() {
  const navigate = useNavigate();
  const { cartId } = useParams();
  const [queryParams] = useSearchParams();
  const { register, handleSubmit, setValue } = useForm<IProduct>();

  const [cart, setCart] = useState(() => {
    const carts: ICart[] = JSON.parse(localStorage.getItem("@carts") as string);
    const findCartById = carts.find((cart) => cart.id === Number(cartId));

    if (!findCartById) {
      return navigate("/history");
    }

    return findCartById;
  });

  let productsStoraged: IProduct[] =
    JSON.parse(localStorage.getItem("@products") as string) || [];

  let productId = queryParams.get("productId");

  function registerProduct(data: IProduct) {
    const product: IProduct = {
      ...data,
      id: productId ? Number(productId) : Math.random(),
      cartId: String(cartId),
    };

    let totalValue = product.quantity * product.unity;

    if (totalValue > Number(cart?.totalPrice)) {
      return toast.error("Carrinho cheio!", {
        icon: null,
        style: {
          background: "#FBA94C",
          color: "#FFF",
        },
      });
    }

    if (productId) {
      let productOnCart = productsStoraged.findIndex(
        (product) => product.id === Number(productId)
      );
      productsStoraged[productOnCart] = product;
    } else {
      productsStoraged.push(product);
    }

    localStorage.setItem("@products", JSON.stringify(productsStoraged));

    navigate(`/cart/${cartId}`);
  }

  useEffect(() => {
    if (!productId) return;

    let productOnCart = productsStoraged.find(
      (product) => product.id === Number(productId)
    );

    if (productOnCart) {
      setValue("quantity", Number(productOnCart?.quantity));
      setValue("productName", String(productOnCart?.productName));
      setValue("unity", Number(productOnCart?.unity));
    }
  }, []);

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
