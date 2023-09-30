import {
  CaretLeft,
  MagnifyingGlass,
  WarningCircle,
} from '@phosphor-icons/react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Inputs/Input'
import { Header } from '../../components/Header'

import { Content, Navigation } from './styles'
import { Product } from './components/Product'
import { useState } from 'react'
import { IProductName } from 'src/types'
import toast from 'react-hot-toast'

export function Products() {
  const [products, setProducts] = useState<IProductName[]>(() => {
    const products = JSON.parse(localStorage.getItem('@product') as string)

    return products || []
  })

  const [filter, setFilter] = useState<string>('')

  function handleFilterItems() {
    const productsFiltered = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    )

    if (!productsFiltered.length) {
      toast.error('Carrinhos não encontrados', {
        icon: <WarningCircle />,
        className: 'alertError',
      })

      return
    }

    setProducts(productsFiltered)
    setFilter('')
  }

  function handleDeleteProduct(productId: string) {
    const filterProducts = products.filter(
      (product) => product.id !== productId,
    )
    setProducts(filterProducts)
    localStorage.setItem('@product', JSON.stringify(filterProducts))
  }

  return (
    <>
      <Header>
        <Navigation to="/">
          <CaretLeft />
          <strong>Produtos</strong>
        </Navigation>
      </Header>

      <Content>
        <strong>Produtos</strong>

        <div className="filter">
          <Input
            placeholder="Buscar produto"
            onChange={(e) => setFilter(e.target.value)}
          />
          <Button variant={{ outline: true }} onClick={handleFilterItems}>
            <MagnifyingGlass />
          </Button>
        </div>

        <ul>
          {products.map((product) => (
            <Product
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
              }}
              onRemoveProduct={() => handleDeleteProduct(product.id)}
            />
          ))}
        </ul>
      </Content>
    </>
  )
}
