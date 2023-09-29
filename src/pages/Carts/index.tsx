import { useEffect, useState } from 'react'
import {
  Bag,
  MagnifyingGlass,
  Plus,
  WarningCircle,
} from '@phosphor-icons/react'
import { toast } from 'react-hot-toast'

import { useCartsStorage, ICart } from '../../store/cartsStorage'
import { useModalStorage } from '../../store/modalStorage'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Cart } from './components/Cart'
import { Header } from '../../components/Header'
import { CreateCartModal } from './components/CreateCartModal'

import { Content, Logo, Actions } from './styles'

export function Home() {
  const { carts, loadCarts } = useCartsStorage(({ carts, loadCarts }) => ({
    carts,
    loadCarts,
  }))
  const toggleNewCartModal = useModalStorage(
    ({ toggleNewCartModal }) => toggleNewCartModal,
  )

  const [cartsFiltered, setCartsFiltered] = useState<ICart[]>(carts)
  const [filter, setFilter] = useState<string>('')

  function handleFilterItems() {
    const productsFiltered = carts.filter((cart) =>
      cart.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    )

    if (!productsFiltered.length) {
      toast.error('Carrinhos não encontrados', {
        icon: <WarningCircle />,
        className: 'alertError',
      })

      return
    }

    setCartsFiltered(productsFiltered)
    setFilter('')
  }

  useEffect(() => loadCarts(), [loadCarts])

  useEffect(() => {
    setCartsFiltered(carts)
  }, [carts])

  return (
    <>
      <Header>
        <Logo>
          <Bag weight="bold" />
          <strong>
            Me<span>Cart</span>
          </strong>
        </Logo>

        <Actions>
          <Button onClick={toggleNewCartModal}>
            <Plus />
            <span>Novo carrinho</span>
          </Button>
        </Actions>
      </Header>

      <Content>
        <strong>Carrinhos</strong>

        <div className="filter">
          <Input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Buscar carrinho"
          />
          <Button variant={{ outline: true }} onClick={handleFilterItems}>
            <MagnifyingGlass />
          </Button>
        </div>

        <ul>
          {cartsFiltered.length > 0 ? (
            cartsFiltered.map((cart) => {
              return <Cart key={cart.id} cart={cart} />
            })
          ) : (
            <div className="no-content">
              <Bag weight="bold" size={50} />
              <p>Você não possui carrinhos cadastrados</p>
            </div>
          )}
        </ul>
      </Content>

      <CreateCartModal />
    </>
  )
}
