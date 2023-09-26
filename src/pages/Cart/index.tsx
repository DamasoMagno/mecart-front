import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CaretLeft, List, Package, Plus } from '@phosphor-icons/react'

import { useModalStorage } from '../../store/modalStorage'
import { useCartsStorage } from '../../store/cartsStorage'

import { Product } from './components/Product'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Resumes } from './components/Resumes'
import { Drawer } from './components/Drawer'

import { IProduct } from '../../types'

import { Actions, Container, Navigation } from './styles'

import 'swiper/css'

type ParamsProps = {
  cartId: string
}

export function Cart() {
  const navigate = useNavigate()
  const { cartId } = useParams<ParamsProps>()

  const { openCartModal, toggleModalCart } = useModalStorage((state: any) => ({
    toggleModalCart: state.toggleCartModal,
    openCartModal: state.openCartWithData,
  }))
  const { cart, setCart, carts } = useCartsStorage((state: any) => ({
    carts: state.carts,
    cart: state.cart,
    setCart: state.setCart,
  }))

  const [products, setProducts] = useState<IProduct[]>([])

  const totalPriceInCart = products.reduce(
    (accumulator: number, currentValue: IProduct) => {
      const { quantity, pricePerUnity } = currentValue
      const totalCartPrice = quantity * pricePerUnity + accumulator

      return totalCartPrice
    },
    0,
  )

  useEffect(() => {
    const checkCartExists = carts.find((cart: any) => cart.id === cartId)

    if (!checkCartExists) {
      navigate('/')
      return
    }

    setCart(cartId as string)

    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem('@products') as string) || []

    const filterProductsByCartId = productsStoragedByCartId.filter(
      (product) => product.cartId === cartId,
    )

    setProducts(filterProductsByCartId)
  }, [])

  function redirect() {
    toggleModalCart()
    navigate('/')
  }

  return (
    <>
      <Header>
        <Navigation onClick={redirect}>
          <CaretLeft />
          <strong>Carrinho</strong>
        </Navigation>

        <Actions>
          <Button onClick={() => navigate(`/cart/${cartId}/product`)}>
            <Plus />
            <span>Inserir item</span>
          </Button>

          <button className="logout" onClick={() => openCartModal(cart)}>
            <List />
          </button>
        </Actions>
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
                )
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

      <Drawer />
    </>
  )
}
