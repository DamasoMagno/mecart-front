import { useEffect, useState } from 'react'
import { Check, Eye } from '@phosphor-icons/react'
import { Controller, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { IProduct, IProductName } from '../../../../types'
import { formatPrice } from '@utils/format-price'

import { Input } from '@components/Inputs/Input'
import { Button } from '@components/Button'
import { Select } from '@components/Inputs/Select'
import { ModalContainer } from '@components/ModalBase'

import { useCartsStorage } from '@store/cartsStorage'
import { useModalStorage } from '@store/modalStorage'
import { useProductStorage } from '@store/productsStorage'

import { Product, Form } from './styles'

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

export function ProductModal() {
  const navigate = useNavigate()

  const cart = useCartsStorage(({ cart }) => cart)

  const { product, setProduct, createProduct, updateProduct } =
    useProductStorage(
      ({ product, createProduct, updateProduct, products, setProduct }) => ({
        product,
        products,
        createProduct,
        updateProduct,
        setProduct,
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
    defaultValues: {
      name: '',
      pricePerUnity: 0,
      quantity: 1,
    },
  })

  const [productsName, setProductsName] = useState<IProductName[]>(() => {
    const namesOfProduct = JSON.parse(
      localStorage.getItem('@products') as string,
    )

    return namesOfProduct || []
  })

  const total = watch('pricePerUnity') * watch('quantity')
  const totalFormatted = total || 0

  function selectProduct(name: string) {
    const products: IProductName[] = [...productsName]
    const product = {
      id: uuidv4(),
      name,
    }

    products.push(product)
    setProductsName(products)
    setValue('name', product.name)

    localStorage.setItem('@products', JSON.stringify(products))
  }

  const actions = {
    handleCreateItem: (data: Product) => {
      createProduct(String(cart?.id), data)
      closeModal()
    },

    handleUpdateItem: (data: Product) => {
      const productFormatted: IProduct = {
        ...data,
        id: String(product?.id),
        cartId: String(cart?.id),
      }

      updateProduct(productFormatted)
      closeModal()
    },
  }

  useEffect(() => {
    reset()

    if (product) {
      setValue('name', product.name)
      setValue('pricePerUnity', product.pricePerUnity)
      setValue('quantity', product.quantity)
    }
  }, [modalProductIsOpen, product, reset, setValue])

  const options: CustomOptionType[] = productsName.map((product) => {
    return {
      value: product.name,
      label: product.name,
    }
  })

  function closeModal() {
    setProduct(null)
    toggleProductModal()
  }

  const title = product ? 'Editar item' : 'Novo item'

  return (
    <ModalContainer
      title={title}
      open={modalProductIsOpen}
      onOpenChange={closeModal}
    >
      <Form
        onSubmit={handleSubmit(
          product ? actions.handleUpdateItem : actions.handleCreateItem,
        )}
      >
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Select
              options={options}
              value={options.find((option) => option.value === value)}
              placeholder={!value && ''}
              onChange={(option) => onChange(option?.value)}
              onCreateOption={selectProduct}
            >
              <button
                onClick={() => {
                  navigate('/products')
                  closeModal()
                }}
              >
                <Eye />
              </button>
            </Select>
          )}
        />

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

        <footer>
          <span>{formatPrice(totalFormatted)}</span>

          <div>
            <Button type="submit">
              <Check /> Salvar produto
            </Button>
          </div>
        </footer>
      </Form>
    </ModalContainer>
  )
}

// currentProducts = currentProducts.reduce(
//   (accumulator: number, currentValue: IProduct) => {
//     if (currentValue.cartId === cart?.id) {
//       const totalCartPrice =
//         currentValue.quantity * currentValue.pricePerUnity + accumulator

//       return totalCartPrice
//     }

//     return 0
//   },
//   0,
// )
