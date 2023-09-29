import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CaretLeft, List, Package, Plus } from '@phosphor-icons/react'

import { useCartsStorage } from '../../store/cartsStorage'

import { Product } from './components/Product'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Resumes } from './components/Resumes'
import { EditCartModal } from './components/EditCartModal'
import { ProductModal } from './components/ProductModal'

import { IProduct } from '../../types'

import { Actions, Container, Navigation } from './styles'
import { useModalStorage } from '../../store/modalStorage'

import 'swiper/css'

type ParamsProps = {
  cartId: string
}

export function Cart() {
  const { cartId } = useParams<ParamsProps>()

  const { toggleCartModal, toggleProductModal } = useModalStorage((state) => ({
    toggleCartModal: state.toggleCartModal,
    toggleProductModal: state.toggleProductModal,
  }))
  const { cart, setCart } = useCartsStorage((state) => ({
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
    setCart(cartId as string)

    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem('@products') as string) || []

    const filterProductsByCartId = productsStoragedByCartId.filter(
      (product) => product.cartId === cartId,
    )

    setProducts(filterProductsByCartId)
  }, [cartId, setCart])

  return (
    <>
      <Header>
        <Navigation to="/">
          <CaretLeft />
          <strong>Carrinho</strong>
        </Navigation>

        <Actions>
          <Button onClick={toggleProductModal}>
            <Plus />
            <span>Inserir item</span>
          </Button>

          <button className="logout" onClick={toggleCartModal}>
            <List />
          </button>
        </Actions>
      </Header>

      <Container>
        <Resumes
          limit={Number(cart?.limit || 0)}
          totalPrice={totalPriceInCart}
        />

        <section className="products">
          <strong className="quantityProducts">Produtos</strong>

          <ul>
            {products.length > 0 ? (
              products.map((product) => {
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

      <EditCartModal />
      <ProductModal setProducts={setProducts} />
    </>
  )
}
