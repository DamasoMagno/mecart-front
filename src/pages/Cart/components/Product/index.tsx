import { Basket, CurrencyDollar, Pencil, Trash } from '@phosphor-icons/react'

import { useModalStorage } from '../../../../store/modalStorage'
import { useProductStorage } from '../../../../store/productStorage'

import { ConfirmCartRemove } from '../../../../components/ModalConfirm'

import { IProduct } from '../../../../types'
import { formatPrice } from '../../../../utils/format-price'

import { Container } from './styles'

interface ProductProps {
  product: IProduct
  setProducts: (products: IProduct[]) => void
}

export const Product = ({ product, setProducts }: ProductProps) => {
  const toggleProductModal = useModalStorage(
    ({ toggleProductModal }) => toggleProductModal,
  )
  const setProduct = useProductStorage(({ setProduct }) => setProduct)

  function handleRemoveProductCart() {
    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem('@products') as string) || []

    const removeProductByID = productsStoragedByCartId.filter(
      (currentProduct) => currentProduct.id !== product.id,
    )

    localStorage.setItem('@products', JSON.stringify(removeProductByID))
    setProducts(removeProductByID)
  }

  const totalPriceProduct = product.quantity * product.pricePerUnity

  function openProductModalWithContent() {
    setProduct(product)
    toggleProductModal()
  }

  return (
    <Container>
      <div className="productData">
        <strong>{product.name}</strong>

        <div>
          <span>
            <CurrencyDollar />
            {formatPrice(totalPriceProduct)}
          </span>
          <span>
            <Basket />
            {product.quantity}
          </span>
        </div>
      </div>

      <div className="productEdit">
        <button onClick={openProductModalWithContent}>
          <Pencil />
        </button>

        <ConfirmCartRemove onRemove={handleRemoveProductCart}>
          <button>
            <Trash />
          </button>
        </ConfirmCartRemove>
      </div>
    </Container>
  )
}
