import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Check,
  Package,
  PencilLine,
  Plus,
  WarningCircle,
  X,
} from "@phosphor-icons/react";

import { IProduct } from "../../interfaces";

import { Product } from "./components/Product";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Resumes } from "./components/Resumes";
import { EditCartModal } from "../../components/EditCartModal";

import { useModalStorage } from "../../store/modalStorage";
import { useCartsStorage } from "../../store/cartsStorage";

import { Container, Navigation } from "./styles";

import "swiper/css";
import toast from "react-hot-toast";
import { ConfirmCartRemove } from "../../components/ConfirmActionModal";

export function Cart() {
  const navigate = useNavigate();
  const params = useParams();

  const openCartModal = useModalStorage((state) => state.openCartModal);
  const { cart, setCart, removeCart, updateCart, finishCart } = useCartsStorage(
    (state) => ({
      cart: state.cart,
      setCart: state.setCart,
      removeCart: state.removeCart,
      finishCart: state.finishCart,
      updateCart: state.updateCart,
    })
  );
  const [products, setProducts] = useState<IProduct[]>([]);
  let totalPriceInCart = products.reduce(
    (accumulator: number, currentValue: IProduct) => {
      let productPriceOnCart =
        currentValue.quantity * currentValue.pricePerUnity;
      let totalCartPrice = productPriceOnCart + accumulator;

      return totalCartPrice;
    },
    0
  );

  useEffect(() => {
    if (!params.cartId) {
      navigate("/history");
      return;
    }

    setCart(String(params.cartId));

    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    let filterProductsByCartId = productsStoragedByCartId.filter(
      (product) => product.cartId === params.cartId
    );

    setProducts(filterProductsByCartId);
  }, []);

  const redirect = () => navigate(`/cart/${params.cartId}/product`);

  function removeCartFromStorage() {
    removeCart(String(params.cartId));
    navigate("/history");
  }

  function finishCartAndRedirect() {
    if (!cart) return;

    if (!(totalPriceInCart > 0)) {
      toast.error("Sem produtos cadastrado", {
        icon: <WarningCircle />,
        style: {
          background: "#FC4C4C",
          color: "#FFF",
          display: "flex",
          gap: "4px",
          alignItems: "center",
        },
      });

      return;
    }

    if (cart?.status === "pendent") {
      finishCart(String(params.cartId));
      return;
    }

    updateCart({ ...cart, status: "pendent" });
  }

  let cartLimited = totalPriceInCart >= Number(cart?.totalPrice);

  return (
    <>
      <Header title="Carrinho" route="/history">
        {cart?.status === "pendent" && (
          <Button
            style={{
              width: "30px",
              height: "30px",
            }}
            variant={{ outline: true }}
            onClick={() => openCartModal(true, cart)}
          >
            <PencilLine />
          </Button>
        )}
      </Header>

      <Container>
        <Resumes
          limitCreditOnCart={Number(cart?.totalPrice)}
          totalPriceOnCart={totalPriceInCart}
        />

        <section className="products">
          <strong className="quantityProducts">
            Produtos
            <span>{products?.length ?? 0}</span>
          </strong>

          <ul>
            {products.length > 0 ? (
              products?.map((product) => {
                return (
                  <Product
                    key={product.id}
                    setProducts={setProducts}
                    product={product}
                  />
                );
              })
            ) : (
              <div className="no-content">
                <Package weight="bold" size={50} />
                <p>Nenhum produto inserido ao carrinho</p>
              </div>
            )}
          </ul>
        </section>
      </Container>

      <Navigation>
        <button className="finish" onClick={finishCartAndRedirect}>
          {cart?.status === "finished" ? (
            <>
              <PencilLine /> Editar
            </>
          ) : (
            <>
              <Check /> Finalizar
            </>
          )}
        </button>
        <Button
          className="newCart"
          onClick={redirect}
          disabled={cartLimited || cart?.status === "finished"}
        >
          <Plus />
        </Button>
        <ConfirmCartRemove
          onRemove={removeCartFromStorage}
          description="Esta ação removerá esse carrinho definitivamente"
        >
          <button className="remove">
            <X /> Remover
          </button>
        </ConfirmCartRemove>
      </Navigation>

      <EditCartModal />
    </>
  );
}
