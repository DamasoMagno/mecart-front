import { Link, useParams } from 'react-router-dom'
import { Basket, CurrencyDollar, Pencil, Trash } from '@phosphor-icons/react'

import { ConfirmCartRemove } from '../../../../components/ModalConfirm'

import { IProduct } from '../../../../types'
import { Container } from './styles'
import { formatPrice } from '../../../../utils/format-price'

interface ProductProps {
  product: IProduct
  setProducts: (products: IProduct[]) => void
}

export const Product = ({ product, setProducts }: ProductProps) => {
  const params = useParams()

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
  const productUrl = `/cart/${params.cartId}/product?productId=${product.id}`

  return (
    <Container>
      <div className="productData">
        <strong>{product.productName}</strong>

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
        <Link to={productUrl}>
          <Pencil />
        </Link>

        <ConfirmCartRemove
          onRemove={handleRemoveProductCart}
          description="Confirmar a remoção, não terá como reverter"
        >
          <button>
            <Trash />
          </button>
        </ConfirmCartRemove>
      </div>
    </Container>
  )
}
