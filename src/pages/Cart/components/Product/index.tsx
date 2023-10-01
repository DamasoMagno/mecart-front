import { Basket, CurrencyDollar, Pencil, Trash } from '@phosphor-icons/react'

import { useProductStorage } from '@store/productsStorage'

import { ConfirmCartRemove } from '@components/ModalConfirm'

import { IProduct } from '../../../../types'
import { formatPrice } from '@utils/format-price'

import { Container } from './styles'

interface ProductProps {
  product: IProduct
}

export const Product = ({ product }: ProductProps) => {
  const { setProduct, removeProduct, toggleProductModal } = useProductStorage(
    (state) => ({
      setProduct: state.setProduct,
      products: state.products,
      removeProduct: state.removeProduct,
      toggleProductModal: state.toggleProductModal,
    }),
  )

  const handleRemoveProductCart = () => removeProduct(product)

  const totalPriceProduct = product.quantity * product.pricePerUnity

  function openProductModal() {
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
        <button onClick={openProductModal}>
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
