import { Check, Plus, X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../components/Button";

import { NavBar } from "./styles";

export const Navigation = () => {
  const navigate = useNavigate();
  const redirect = () => navigate("/product");

  return (
    <NavBar>
      <button className="actions">
        <Check /> Finalizar
      </button>

      <Button float className="newCart" onClick={redirect}>
        <Plus />
      </Button>

      <button className="actions" id="remove">
        <X /> Remover
      </button>
    </NavBar>
  );
};
