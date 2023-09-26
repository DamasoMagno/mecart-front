import { useEffect, useState } from 'react'
import { CaretLeft, Check, WarningCircle } from '@phosphor-icons/react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { GroupBase, OptionsOrGroups } from 'react-select'
import Select from 'react-select/creatable'

import { ICart, IProduct, IProductName } from '../../types'
import { formatPrice } from '../../utils/format-price'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Content, Navigation, ProductNameContainer } from './styles'

const productSchemaBody = z.object({
  productName: z.string().min(1, 'Nome exigido'),
  quantity: z.number().min(1, 'Quantidade minima exigida'),
  pricePerUnity: z.number().min(0.01, 'Valor minimo de 0.01 exigido'),
})

type Product = z.infer<typeof productSchemaBody>

type ParamsProps = {
  cartId: string
}

type SelectOptionProps = {
  label: string
  value: string
}

export function Product() {
  const navigate = useNavigate()
  const { cartId } = useParams<ParamsProps>()

  const [queryParams] = useSearchParams()
  const productId = queryParams.get('productId')

  const {
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { isSubmitting },
  } = useForm<IProduct>({
    resolver: zodResolver(productSchemaBody),
    defaultValues: {
      productName: '',
      pricePerUnity: 0,
      quantity: 1,
    },
  })

  const [cart] = useState(() => {
    const carts: ICart[] = JSON.parse(localStorage.getItem('@carts') as string)
    const findCartById = carts.find((cart) => cart.id === cartId)

    if (!findCartById) {
      return null
    }

    return findCartById
  })
  const [productsName, setProductsName] = useState<IProductName[]>(() => {
    const namesOfProduct = JSON.parse(
      localStorage.getItem('@productName') as string,
    )

    return namesOfProduct || []
  })

  const checkPriceAsNotANumber = watch('pricePerUnity') * watch('quantity')
  const total = !isNaN(checkPriceAsNotANumber) ? checkPriceAsNotANumber : 0

  function selectProductName(name: string) {
    const newProduct: IProductName = {
      id: uuidv4(),
      productName: name,
    }

    setProductsName((state) => [...state, newProduct])

    const products: IProductName[] =
      JSON.parse(localStorage.getItem('@productName') as string) || []

    products.push({ id: uuidv4(), productName: name })

    localStorage.setItem('@productName', JSON.stringify(products))
  }

  const productsStoraged: IProduct[] =
    JSON.parse(localStorage.getItem('@products') as string) || []

  function registerProduct(data: Product) {
    const product: IProduct = {
      ...data,
      id: productId || uuidv4(),
      cartId: String(cartId),
    }

    const totalValueProduct = product.quantity * product.pricePerUnity

    if (totalValueProduct > Number(cart?.totalPrice)) {
      toast.error('Sacola cheia!', {
        icon: <WarningCircle />,
        className: 'alertError',
      })

      return
    }

    if (productId) {
      const findProductOnCartById = productsStoraged.findIndex(
        (product) => product.id === productId,
      )
      productsStoraged[findProductOnCartById] = product
    } else {
      productsStoraged.push(product)
    }

    localStorage.setItem('@products', JSON.stringify(productsStoraged))

    toast.success('Cadastro com sucesso', {
      icon: <Check />,
      className: 'alertSuccess',
    })

    setTimeout(() => {
      navigate(`/cart/${cartId}`)
    }, 500)
  }

  useEffect(() => {
    if (!cart) {
      return navigate('/history')
    }

    const productOnCart = productsStoraged.find(
      (product) => product.id === productId,
    )

    if (productOnCart) {
      setValue('quantity', Number(productOnCart?.quantity))
      setValue('productName', String(productOnCart?.productName))
      setValue('pricePerUnity', Number(productOnCart?.pricePerUnity))
    }
  }, [cart, navigate, productId, productsStoraged, setValue])

  const options: OptionsOrGroups<any, GroupBase<any>> | undefined =
    productsName?.map((product) => {
      const labelFormatted =
        product.productName.charAt(0).toUpperCase() +
        product.productName.slice(1)

      return {
        value: product.productName,
        label: labelFormatted,
      }
    })

  return (
    <>
      <Header>
        <Navigation to={`/cart/${cartId}`}>
          <CaretLeft />
          <strong>Carrinho</strong>
        </Navigation>
      </Header>

      <Content onSubmit={handleSubmit(registerProduct)}>
        <ProductNameContainer>
          <label htmlFor="productName">Nome do produto</label>
          <Controller
            control={control}
            name="productName"
            render={({ field: { onChange, value, ref } }) => (
              <Select
                id="productName"
                onCreateOption={selectProductName}
                options={options}
                styles={{
                  control: (base) => ({
                    ...base,
                    background: '#121214',
                    border: 'none',
                    height: '3rem',
                  }),
                }}
                value={value}
                placeholder={value ?? 'Selecione o produto'}
                onChange={({ value }: SelectOptionProps) => onChange(value)}
              />
            )}
          />
        </ProductNameContainer>

        <Controller
          control={control}
          name="quantity"
          render={({ field: { onChange, ...props } }) => (
            <Input
              id="quantity"
              label="Quantidade de produtos"
              type="number"
              onChange={(e) => onChange(Number(e.target.value))}
              {...props}
            />
          )}
        />

        <Controller
          control={control}
          name="pricePerUnity"
          render={({ field: { onChange, ...props } }) => (
            <Input
              id="price"
              label="Preço por produto, Ex: 0.01"
              type="number"
              step="0.01"
              onChange={(e) => onChange(Number(e.target.value))}
              {...props}
            />
          )}
        />

        <div className="total">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>

        <footer>
          <Button type="submit" disabled={isSubmitting}>
            <Check /> Salvar produto
          </Button>
        </footer>
      </Content>
    </>
  )
}
