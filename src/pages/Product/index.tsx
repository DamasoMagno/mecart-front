import { useEffect, useState } from "react";
import {
  Check,
  CurrencyDollar,
  Package,
  ShoppingBagOpen,
  WarningCircle,
} from "@phosphor-icons/react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { ICart, IProduct, IProductName } from "../../interfaces";
import { formatPrice } from "../../utils/format-price";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Content } from "./styles";

export function Product() {
  const navigate = useNavigate();
  const { cartId } = useParams();
  const [queryParams] = useSearchParams();
  const { register, handleSubmit, setValue, watch } = useForm<IProduct>();

  const [cart, setCart] = useState(() => {
    const carts: ICart[] = JSON.parse(localStorage.getItem("@carts") as string);
    const findCartById = carts.find((cart) => cart.id === cartId);
    return findCartById ? findCartById : null;
  });
  const [productsName, setProductsName] = useState<IProductName[]>(() => {
    const namesOfProduct = JSON.parse(
      localStorage.getItem("@productsName") as string
    );
    return namesOfProduct;
  });
  let productId = queryParams.get("productId");
  let total = watch("pricePerUnity") * watch("quantity");

  let productsStoraged: IProduct[] =
    JSON.parse(localStorage.getItem("@products") as string) || [];

  function registerProduct(data: IProduct) {
    const product: IProduct = {
      ...data,
      id: productId ? productId : uuidv4(),
      cartId: String(cartId),
    };

    const totalValueProduct = product.quantity * product.pricePerUnity;

    if (totalValueProduct > Number(cart?.totalPrice)) {
      toast.error("Sacola cheia!", {
        icon: <WarningCircle />,
        className: "alertError",
      });

      return;
    }

    if (productId) {
      let findProductOnCartById = productsStoraged.findIndex(
        (product) => product.id === productId
      );
      productsStoraged[findProductOnCartById] = product;
    } else {
      productsStoraged.push(product);
    }

    localStorage.setItem("@products", JSON.stringify(productsStoraged));

    toast.success("Cadastro com sucesso", {
      icon: <Check />,
      className: "alertSuccess",
    });

    setTimeout(() => {
      navigate(`/cart/${cartId}`);
    }, 500);
  }

  useEffect(() => {
    if (!cart) {
      navigate("/history");
      return;
    }

    if (!productId) {
      setValue("quantity", Number(1));
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

  return (
    <>
      <Header title="Produto" route={`/cart/${cartId}`} />

      <Content onSubmit={handleSubmit(registerProduct)}>
        <div className="productName">
          <Input
            id="name"
            label="Nome do produto"
            list="products"
            icon={Package}
            register={{ ...register("productName", { required: true }) }}
          />
          <datalist id="products">
            {productsName?.map((product: any) => (
              <option key={product.id}>{product.productName}</option>
            ))}
          </datalist>
        </div>
        <Input
          id="quantity"
          label="Quantidade de produtos"
          type="number"
          icon={ShoppingBagOpen}
          register={{ ...register("quantity", { required: true }) }}
        />
        <Input
          id="price"
          label="Preço por produto, Ex: 0.01"
          type="number"
          step="0.01"
          icon={CurrencyDollar}
          register={{
            ...register("pricePerUnity", {
              min: 0.01,
              required: true
            }),
          }}
        />
        <Input
          id="total"
          disabled
          label="Total"
          icon={CurrencyDollar}
          value={formatPrice(total)}
        />
        <footer>
          <Button type="submit">Salvar produto</Button>
        </footer>
      </Content>
    </>
  );
}
