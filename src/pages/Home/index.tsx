import { Basket, Cube, Plus, SignOut } from "@phosphor-icons/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useModalStorage } from "../../store/modalStorage";

import { Button } from "../../components/Button";

import { Header, Navigation } from "./styles";

export function Home() {
  const { openCartModal, openProductModal } = useModalStorage((state) => ({
    openCartModal: state.openCartModal,
    openProductModal: state.openProductModal,
  }));

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  const navigateTo = (route: string) => navigate(route);
  const currentPage = (route: string) => pathname === `/${route}` && "current";

  function openModal() {
    return pathname === "/products"
      ? openProductModal(true)
      : openCartModal(true);
  }

  return (
    <div>
      <Header>
        <div className="content">
          <div className="logo">
            <Basket weight="bold" />
            <strong>
              Me<span>Cart</span>
            </strong>
          </div>

          <button onClick={logout}>
            <SignOut />
          </button>
        </div>
      </Header>

      <Outlet />

      <Navigation>
        <button
          className={`${currentPage("history")}`}
          onClick={() => navigateTo("/history")}
        >
          <Basket /> Carrinho
        </button>
        <Button className="action" onClick={openModal}>
          <Plus />
        </Button>
        <button
          className={`${currentPage("products")}`}
          onClick={() => navigateTo("/products")}
        >
          <Cube /> Produtos
        </button>
      </Navigation>
    </div>
  );
}
