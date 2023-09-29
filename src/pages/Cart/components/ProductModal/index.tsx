import { useEffect, useState } from 'react'
import { Check, WarningCircle } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { IProduct, IProductName } from '../../../../types'
import { formatPrice } from '../../../../utils/format-price'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { Select } from '../../../../components/Select'

import { ModalContainer } from '../../../../components/ModalBase'
import { useCartsStorage } from '../../../../store/cartsStorage'
import { useModalStorage } from '../../../../store/modalStorage'
import { useProductStorage } from '../../../../store/productStorage'

import { ProductNameContainer, Total, Form } from './styles'

const productSchemaBody = z.object({
  name: z.string().min(1, 'Nome exigido'),
  quantity: z.coerce.number().min(1, 'Quantidade minima exigida'),
  pricePerUnity: z.coerce.number().min(0.01, 'Valor minimo de 0.01 exigido'),
})

type Product = z.infer<typeof productSchemaBody>

type CustomOptionType = {
  label: string
  value: string
}

interface ProductModalProps {
  setProducts: (prducts: IProduct[]) => void
}

export function ProductModal({ setProducts }: ProductModalProps) {
  const cart = useCartsStorage(({ cart }) => cart)
  const { product, clearProduct } = useProductStorage(
    ({ product, clearProduct }) => ({
      product,
      clearProduct,
    }),
  )
  const { toggleProductModal, modalProductIsOpen } = useModalStorage(
    ({ toggleProductModal, modalProductIsOpen }) => ({
      toggleProductModal,
      modalProductIsOpen,
    }),
  )

  const { handleSubmit, setValue, watch, control, reset } = useForm<IProduct>({
    resolver: zodResolver(productSchemaBody),
  })

  const [productsName, setProductsName] = useState<IProductName[]>(() => {
    const namesOfProduct = JSON.parse(
      localStorage.getItem('@productName') as string,
    )

    return namesOfProduct || []
  })

  const total = watch('pricePerUnity') * watch('quantity')
  const formattedTotal = total || 0

  function selectProduct(name: string) {
    const products: IProductName[] = [...productsName]
    const product = {
      id: uuidv4(),
      name,
    }

    products.push(product)
    setProductsName(products)
    setValue('name', product.name)

    localStorage.setItem('@productName', JSON.stringify(products))
  }

  function handleCreateProduct(data: Product) {
    const newProduct: IProduct = {
      id: product?.id || uuidv4(),
      ...data,
      cartId: String(cart?.id),
    }

    const totalValueProduct = newProduct.quantity * newProduct.pricePerUnity

    if (totalValueProduct > Number(cart?.limit)) {
      return toast.error('Sacola cheia!', {
        icon: <WarningCircle />,
        className: 'alertError',
      })
    }

    let products: IProduct[] =
      JSON.parse(localStorage.getItem('@products') as string) || []

    if (product) {
      products = products.map((currentProduct) => {
        return currentProduct.id === product.id
          ? {
              ...currentProduct,
              ...product,
            }
          : currentProduct
      })
    } else {
      products.push(newProduct)
    }

    localStorage.setItem('@products', JSON.stringify(products))
    setProducts(products)

    closeModal()
  }

  useEffect(() => {
    reset()

    if (product) {
      setValue('name', product.name)
      setValue('pricePerUnity', product.pricePerUnity)
      setValue('quantity', product.quantity)
    }
  }, [product])

  const options: CustomOptionType[] = productsName.map((product) => {
    return {
      value: product.name,
      label: product.name,
    }
  })

  function closeModal() {
    clearProduct()
    toggleProductModal()
  }

  const title = product ? 'Editar produto' : 'Novo produto'

  return (
    <ModalContainer
      title={title}
      open={modalProductIsOpen}
      onOpenChange={closeModal}
    >
      <Form onSubmit={handleSubmit(handleCreateProduct)}>
        <ProductNameContainer>
          <label htmlFor="productName">Nome do produto</label>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => {
              return (
                <Select
                  options={options}
                  placeholder={!value && 'Selecione produto'}
                  value={options.find((option) => option.value === value)}
                  onChange={(option) => onChange(option?.value)}
                  onCreateOption={selectProduct}
                />
              )
            }}
          />
        </ProductNameContainer>

        <Controller
          control={control}
          name="quantity"
          render={({ field }) => (
            <Input id="quantity" label="Quantidade" type="number" {...field} />
          )}
        />

        <Controller
          control={control}
          name="pricePerUnity"
          render={({ field }) => (
            <Input
              id="price"
              label="Preço"
              type="number"
              step="0.01"
              {...field}
            />
          )}
        />

        <Total>
          <span>{formatPrice(formattedTotal)}</span>

          <footer>
            <Button type="submit">
              <Check /> Salvar produto
            </Button>
          </footer>
        </Total>
      </Form>
    </ModalContainer>
  )
}
