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
import { useProductStorage } from '@store/productsStorage'

export function Products() {
  const { products: items, updateProducts } = useProductStorage(
    ({ products, updateProducts }) => ({
      products,
      updateProducts,
    }),
  )

  const [products, setProducts] = useState<IProductName[]>(() => {
    const products = JSON.parse(localStorage.getItem('@products') as string)

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

  function handleDeleteProduct(product: IProductName) {
    const filterProducts = products.filter(
      (currentProduct) => currentProduct.id !== product.id,
    )

    const findItems = items.filter((item) => {
      return item.name !== product.name
    })

    updateProducts(findItems)
    localStorage.setItem('@products', JSON.stringify(filterProducts))
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
              onRemoveProduct={() => handleDeleteProduct(product)}
            />
          ))}
        </ul>
      </Content>
    </>
  )
}
