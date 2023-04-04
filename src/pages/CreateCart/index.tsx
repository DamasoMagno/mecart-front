import { 
  Basket, 
  Calendar, 
  CaretDoubleLeft, 
  CurrencyDollar, 
  ShoppingCart 
} from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Container } from "./styles"

export function CreateCart() {
  return (
    <Container>
      <header>
        <Basket
          className="logoIcon"
          size={50}
          color="rgba(0, 135, 95, 0.85)"
          weight="bold"
        />
        <strong>
          Me<span>Cart</span>
        </strong>
      </header>

      <form>
        <h3>Iniciar novo carrinho</h3>

        <Input 
          icon={ShoppingCart}
          placeholder="Nome do carrinho" 
          type="text"
        />
        <Input
          icon={Calendar}
          placeholder="Selecionar data"
          type="date"
        />
        <Input 
          icon={CurrencyDollar}
          placeholder="Limite de crédito" 
          type="number"
        />
        <Button>Gerar novo carrinho</Button>

        <Link to="/">
          <CaretDoubleLeft color="#00875F"/>
          Voltar para o ínicio
        </Link>
      </form>
    </Container>
  )
}