import {
  CaretLeft,
  MagnifyingGlass,
  WarningCircle,
} from '@phosphor-icons/react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { IProductName } from 'src/types'

import { useProductStorage } from '@store/productsStorage'

import { Button } from '@components/Button'
import { Input } from '@components/Inputs/Input'
import { Header } from '@components/Header'
import { Product } from './components/Product'

import { Content, Navigation } from './styles'

export function Products() {
  const { products: items } = useProductStorage((state) => ({
    products: state.products,
    useProductStorage: state.updateProducts,
  }))

  const [products, setProducts] = useState<IProductName[]>(() => {
    const products = JSON.parse(localStorage.getItem('@products') as string)
    return products || []
  })
  const [filter, setFilter] = useState<string>('')

  function handleFilterProducts() {
    const productsFiltered = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    )

    if (!productsFiltered.length) {
      return toast.error('Carrinhos não encontrados', {
        icon: <WarningCircle />,
        className: 'alertError',
      })
    }

    setProducts(productsFiltered)
    setFilter('')
  }

  function handleDeleteProduct(product: IProductName) {
    const hasProductsInUse = items.some((item) => item.name === product.name)
    if (hasProductsInUse) {
      return toast.error('Produto em uso')
    }

    const filterProducts = products.filter(
      (currentProduct) => currentProduct.name !== product.name,
    )

    setProducts(filterProducts)
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
          <Button variant={{ outline: true }} onClick={handleFilterProducts}>
            <MagnifyingGlass />
          </Button>
        </div>

        <ul>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onRemoveProduct={() => handleDeleteProduct(product)}
            />
          ))}
        </ul>
      </Content>
    </>
  )
}
