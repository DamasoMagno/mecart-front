import { useEffect, useState } from "react";
import { Cookie, CurrencyDollar, ShoppingBagOpen } from "@phosphor-icons/react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { ICart, IProduct } from "../../interfaces";
import { formatPrice } from "../../utils/format-price";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Content } from "./styles";

export function Product() {
  const navigate = useNavigate();
  const { cartId } = useParams();
  const [queryParams] = useSearchParams();
  const { register, handleSubmit, setValue, setError, watch } =
    useForm<IProduct>();

  const [cart, setCart] = useState(() => {
    const carts: ICart[] = JSON.parse(localStorage.getItem("@carts") as string);
    const findCartById = carts.find((cart) => cart.id === cartId);

    if (!findCartById) {
      return navigate("/history");
    }

    return findCartById;
  });
  const [productName, setProductName] = useState(() => {
    const t = JSON.parse(localStorage.getItem("@productName") as string);
    return t;
  });

  let productsStoraged: IProduct[] =
    JSON.parse(localStorage.getItem("@products") as string) || [];

  let productId = queryParams.get("productId");

  function registerProduct(data: IProduct) {
    if (data.pricePerUnity === 0) {
      toast.error("Insira um valor minimo");
      return;
    }

    const product: IProduct = {
      ...data,
      id: productId ? productId : uuidv4(),
      cartId: String(cartId),
    };

    let totalValue = product.quantity * product.pricePerUnity;

    if (totalValue > Number(cart?.totalPrice)) {
      toast.error("Carrinho cheio!", {
        icon: null,
        style: {
          background: "#FC4C4C",
          color: "#FFF",
        },
      });

      return;
    }

    if (productId) {
      let productOnCart = productsStoraged.findIndex(
        (product) => product.id === productId
      );
      productsStoraged[productOnCart] = product;
    } else {
      productsStoraged.push(product);
    }

    localStorage.setItem("@products", JSON.stringify(productsStoraged));
    navigate(`/cart/${cartId}`);
  }

  useEffect(() => {
    if (!productId) {
      setValue("quantity", Number(1));
      setValue("pricePerUnity", Number(0));
      return;
    }

    let productOnCart = productsStoraged.find(
      (product) => product.id === productId
    );

    if (productOnCart) {
      setValue("quantity", Number(productOnCart?.quantity));
      setValue("productName", String(productOnCart?.productName));
      setValue("pricePerUnity", Number(productOnCart?.pricePerUnity));
    }
  }, []);

  let total = watch("pricePerUnity") * watch("quantity");

  return (
    <>
      <Header title="Produto" route={`/cart/${cartId}`} />

      <Content onSubmit={handleSubmit(registerProduct)}>
        <div className="fields">
          <label htmlFor="name">Nome do produto</label>
          <Input
            id="name"
            list="products"
            icon={Cookie}
            register={{ ...register("productName", { required: true }) }}
          />
        </div>

        <datalist id="products">
          {productName.map((product: any) => {
            return <option key={product.id}>{product.productName}</option>;
          })}
        </datalist>

        <div className="fields">
          <label htmlFor="quantity">Quantidade de produtos</label>
          <Input
            id="quantity"
            type="number"
            icon={ShoppingBagOpen}
            register={{ ...register("quantity", { required: true }) }}
          />
        </div>

        <div className="fields">
          <label htmlFor="total">Total</label>
          <Input
            id="total"
            disabled
            icon={CurrencyDollar}
            value={formatPrice(total)}
          />
        </div>

        <div className="fields">
          <label htmlFor="price">Preço por produto</label>
          <Input
            id="price"
            type="number"
            step="0.01"
            icon={CurrencyDollar}
            register={{ ...register("pricePerUnity", { required: true }) }}
          />
        </div>

        <footer>
          <Button type="submit">Salvar produto</Button>
        </footer>
      </Content>
    </>
  );
}
